import type { Metadata } from "next";
import { getFAQMeta } from "@/lib/meta";

const meta = getFAQMeta();

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
    images: meta.ogImage ? [{ url: meta.ogImage, width: 1200, height: 630 }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  keywords: meta.keywords,
  robots: meta.robots,
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
