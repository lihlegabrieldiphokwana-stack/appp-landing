import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Bouul | iOS & Android App",
  description: "Download the Bouul app for iOS and Android. Book services, track professionals, and manage bookings on the go.",
  alternates: { canonical: "https://bouul.com/download" },
  openGraph: {
    title: "Download Bouul | iOS & Android App",
    description: "Download the Bouul app for iOS and Android.",
    url: "https://bouul.com/download",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Bouul",
    description: "Book services, track professionals, and manage bookings on the go.",
  },
  keywords: ["download", "mobile app", "iOS app", "Android app", "book services", "service marketplace"],
  robots: "index, follow",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
