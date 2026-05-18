import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Safety | Verified Professionals - Bouul",
  description: "Your safety is our priority. Every professional is ID verified and screened. Book with confidence.",
  alternates: { canonical: "https://bouul.com/safety" },
  openGraph: {
    title: "Trust & Safety | Verified Professionals - Bouul",
    description: "Your safety is our priority. Every professional is ID verified and screened.",
    url: "https://bouul.com/safety",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Safety | Bouul",
    description: "Every professional is ID verified and screened. Book with confidence.",
  },
  keywords: ["trust and safety", "verified professionals", "booking protection", "safe booking", "South Africa"],
  robots: "index, follow",
};

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
