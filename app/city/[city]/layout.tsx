import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityName = citySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${cityName} Services | Book Local Professionals - Bouul`,
    description: `Find trusted professionals in ${cityName}. Book plumbers, electricians, cleaners, and more. Verified, rated, and ready to help. Available 24/7.`,
    alternates: { canonical: `https://bouul.com/city/${citySlug}` },
    openGraph: {
      title: `${cityName} Services | Book Local Professionals - Bouul`,
      description: `Find trusted professionals in ${cityName}. Verified, rated, and ready to help.`,
      url: `https://bouul.com/city/${citySlug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityName} Services | Bouul`,
      description: `Find trusted professionals in ${cityName}.`,
    },
    keywords: [
      `${cityName} services`,
      `${cityName} professionals`,
      `services in ${cityName}`,
      "local professionals",
      "book services",
    ],
    robots: "index, follow",
  };
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
