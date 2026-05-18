import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cities | Find Services Near You - Bouul",
  description: "Explore Bouul city by city. Find trusted professionals in Johannesburg, Cape Town, Durban, Pretoria, and more. Local services at your fingertips.",
  alternates: { canonical: "https://bouul.com/cities" },
  openGraph: {
    title: "Cities | Find Services Near You - Bouul",
    description: "Explore Bouul city by city. Find trusted professionals across South Africa.",
    url: "https://bouul.com/cities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cities | Bouul",
    description: "Explore Bouul city by city. Find trusted professionals across South Africa.",
  },
  keywords: ["cities", "local services", "Johannesburg", "Cape Town", "Durban", "Pretoria", "South Africa"],
  robots: "index, follow",
};

export default function CitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
