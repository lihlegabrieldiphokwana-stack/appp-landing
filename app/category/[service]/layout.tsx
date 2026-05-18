import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const categoryName = serviceSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${categoryName} | Book Now - Bouul`,
    description: `Book professional ${categoryName.toLowerCase()} near you. Verified experts, transparent pricing, and instant booking. Available today.`,
    alternates: { canonical: `https://bouul.com/category/${serviceSlug}` },
    openGraph: {
      title: `${categoryName} | Book Now - Bouul`,
      description: `Book professional ${categoryName.toLowerCase()} near you. Verified experts, transparent pricing.`,
      url: `https://bouul.com/category/${serviceSlug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} | Bouul`,
      description: `Book professional ${categoryName.toLowerCase()} near you.`,
    },
    keywords: [
      categoryName.toLowerCase(),
      `${categoryName.toLowerCase()} near me`,
      `hire ${categoryName.toLowerCase()}`,
      `${categoryName.toLowerCase()} services`,
      "book now",
      "verified professionals",
    ],
    robots: "index, follow",
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
