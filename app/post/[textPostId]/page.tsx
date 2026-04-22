import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  cleanText,
  excerpt,
  fetchSupabaseRow,
  metadataImages,
  PublicDeepLinkPage,
  publicImageUrl,
  type VendorPreview,
} from "@/lib/public-deep-link";

type TextPostRow = {
  id: string;
  title: string | null;
  text_content: string | null;
  summary: string | null;
  images: string[] | null;
  thumb_jpg: string | null;
  like_count: number | null;
  comment_count: number | null;
  category_ids: string[] | null;
  vendors: VendorPreview | null;
};

async function getTextPost(textPostId: string) {
  return fetchSupabaseRow<TextPostRow>("text_posts", {
    select:
      "id,title,text_content,summary,images,thumb_jpg,like_count,comment_count,category_ids,vendors(business_name,handle,logo,is_verified)",
    id: `eq.${textPostId}`,
    is_published: "eq.true",
  });
}

function postTitle(post: TextPostRow | null) {
  return cleanText(post?.title, "Bouul text post");
}

function postDescription(post: TextPostRow | null) {
  return excerpt(
    post?.summary ?? post?.text_content,
    "Open this Bouul text post to read the full update and join the conversation.",
  );
}

function postImage(post: TextPostRow | null) {
  if (!post) return null;
  if (post.thumb_jpg) return publicImageUrl(post.thumb_jpg);
  return publicImageUrl(post.images?.[0]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ textPostId: string }>;
}): Promise<Metadata> {
  const { textPostId } = await params;
  const post = await getTextPost(textPostId);
  const title = postTitle(post);
  const description = postDescription(post);
  const image = postImage(post);

  return {
    title,
    description,
    alternates: { canonical: `https://bouul.com/post/${textPostId}` },
    openGraph: {
      type: "article",
      url: `https://bouul.com/post/${textPostId}`,
      title,
      description,
      images: metadataImages(image),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["/optimized/hero-banner-desktop.jpg"],
    },
  };
}

export default async function PublicTextPostPage({
  params,
}: {
  params: Promise<{ textPostId: string }>;
}) {
  const { textPostId } = await params;
  const post = await getTextPost(textPostId);
  if (!post) notFound();

  const stats = [
    post.like_count ? `${post.like_count} likes` : null,
    post.comment_count ? `${post.comment_count} comments` : null,
  ].filter((item): item is string => Boolean(item));

  return (
    <PublicDeepLinkPage
      eyebrow="Bouul text post"
      title={postTitle(post)}
      description={postDescription(post)}
      canonicalUrl={`https://bouul.com/post/${post.id}`}
      appUrl={`appp://appp.com/post/${post.id}`}
      imageUrl={postImage(post)}
      vendor={post.vendors}
      stats={stats}
      tags={post.category_ids ?? []}
      primaryAction="Open post"
    />
  );
}
