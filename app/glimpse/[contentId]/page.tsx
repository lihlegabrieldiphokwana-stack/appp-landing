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

type GlimpseRow = {
  id: string;
  caption: string | null;
  alt_text: string | null;
  transcript: string | null;
  media_type: string | null;
  media_url: string | null;
  media_url_webp: string | null;
  thumbnail_url: string | null;
  thumbnail_url_webp: string | null;
  view_count: number | null;
  like_count: number | null;
  comment_count: number | null;
  hashtags: string[] | null;
  category_ids: string[] | null;
  vendors: VendorPreview | null;
};

async function getGlimpse(contentId: string) {
  return fetchSupabaseRow<GlimpseRow>("content_feed", {
    select:
      "id,caption,alt_text,transcript,media_type,media_url,media_url_webp,thumbnail_url,thumbnail_url_webp,view_count,like_count,comment_count,hashtags,category_ids,vendors(business_name,handle,logo,is_verified)",
    id: `eq.${contentId}`,
    is_active: "eq.true",
  });
}

function glimpseTitle(glimpse: GlimpseRow | null) {
  const vendorName = glimpse?.vendors?.business_name;
  return cleanText(glimpse?.caption, vendorName ? `${vendorName} glimpse` : "Bouul glimpse");
}

function glimpseDescription(glimpse: GlimpseRow | null) {
  return excerpt(
    glimpse?.alt_text ?? glimpse?.transcript ?? glimpse?.caption,
    "Open this Bouul glimpse to watch the short-form update and explore the linked service.",
  );
}

function glimpseImage(glimpse: GlimpseRow | null) {
  if (!glimpse) return null;
  if (glimpse.thumbnail_url_webp) return publicImageUrl(glimpse.thumbnail_url_webp);
  if (glimpse.thumbnail_url) return publicImageUrl(glimpse.thumbnail_url);
  if (glimpse.media_type === "image" && glimpse.media_url_webp) {
    return publicImageUrl(glimpse.media_url_webp);
  }
  if (glimpse.media_type === "image" && glimpse.media_url) {
    return publicImageUrl(glimpse.media_url);
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ contentId: string }>;
}): Promise<Metadata> {
  const { contentId } = await params;
  const glimpse = await getGlimpse(contentId);
  const title = glimpseTitle(glimpse);
  const description = glimpseDescription(glimpse);
  const image = glimpseImage(glimpse);

  return {
    title,
    description,
    alternates: { canonical: `https://bouul.com/glimpse/${contentId}` },
    openGraph: {
      type: "video.other",
      url: `https://bouul.com/glimpse/${contentId}`,
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

export default async function PublicGlimpsePage({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const { contentId } = await params;
  const glimpse = await getGlimpse(contentId);
  if (!glimpse) notFound();

  const stats = [
    glimpse.view_count ? `${glimpse.view_count} views` : null,
    glimpse.like_count ? `${glimpse.like_count} likes` : null,
    glimpse.comment_count ? `${glimpse.comment_count} comments` : null,
  ].filter((item): item is string => Boolean(item));

  return (
    <PublicDeepLinkPage
      eyebrow="Bouul glimpse"
      title={glimpseTitle(glimpse)}
      description={glimpseDescription(glimpse)}
      canonicalUrl={`https://bouul.com/glimpse/${glimpse.id}`}
      appUrl={`appp://appp.com/glimpse/${glimpse.id}`}
      imageUrl={glimpseImage(glimpse)}
      vendor={glimpse.vendors}
      stats={stats}
      tags={[...(glimpse.hashtags ?? []), ...(glimpse.category_ids ?? [])]}
      primaryAction="Open glimpse"
    />
  );
}
