import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Directory | Find Local Professionals - Bouul",
  description: "Browse 71+ service categories across South Africa. Find plumbers, electricians, cleaners, beauty professionals, tutors, and more. All verified and bookable.",
  alternates: { canonical: "https://bouul.com/services" },
  openGraph: {
    title: "Services Directory | Find Local Professionals - Bouul",
    description: "Browse 71+ service categories across South Africa. All verified and bookable.",
    url: "https://bouul.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services Directory | Find Local Professionals - Bouul",
    description: "Browse 71+ service categories across South Africa. All verified and bookable.",
  },
  keywords: ["services directory", "local professionals", "book services", "plumbers", "electricians", "cleaners", "South Africa"],
  robots: "index, follow",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
