import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bouul | Local Services Marketplace - Bouul",
  description: "Bouul is a peer-to-peer services marketplace connecting customers with trusted local professionals. Built around trust, discovery, and city-by-city density.",
  alternates: { canonical: "https://bouul.com/about" },
  openGraph: {
    title: "About Bouul | Local Services Marketplace",
    description: "A peer-to-peer services marketplace connecting customers with trusted local professionals.",
    url: "https://bouul.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bouul",
    description: "A peer-to-peer services marketplace connecting customers with trusted local professionals.",
  },
  keywords: ["about bouul", "services marketplace", "local professionals", "peer-to-peer services", "South Africa"],
  robots: "index, follow",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
