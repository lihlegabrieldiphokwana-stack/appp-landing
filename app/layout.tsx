import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { ModeProvider } from "@/components/mode-provider";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-price",
});

export const metadata: Metadata = {
  title: {
    default: "Bouul — Your city's marketplace.",
    template: "%s | Bouul",
  },
  description: "Book vetted service professionals near you. Real-time tracking, live chat, and AI image tools. Download Bouul free.",
  metadataBase: new URL("https://bouul.com"),
  alternates: {
    canonical: "https://bouul.com",
  },
  keywords: ["services marketplace", "local professionals", "South Africa", "plumbers", "electricians", "cleaners", "verified professionals"],
  authors: [{ name: "Bouul", url: "https://bouul.com" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://bouul.com",
    title: "Bouul — Your city's marketplace.",
    description: "Book vetted service professionals near you. Real-time tracking, live chat, and AI image tools.",
    siteName: "Bouul",
    images: [
      {
        url: "/optimized/hero-banner-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Bouul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouul — Your city's marketplace.",
    description: "Book vetted service professionals near you.",
    images: ["/optimized/hero-banner-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${bricolage.variable} ${instrument.variable} ${plexMono.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ModeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ModeProvider>
        {/* Structured Data - LocalBusiness */}
        <Script
          id="structured-data-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bouul",
              "description": "Hyper-local services marketplace connecting you with trusted professionals in your area.",
              "url": "https://bouul.com",
              "logo": "https://bouul.com/bouul-logo.png",
              "image": "https://bouul.com/optimized/hero-banner-desktop.jpg",
              "telephone": "+27-11-123-4567",
              "email": "support@bouul.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Johannesburg",
                "addressRegion": "Gauteng",
                "addressCountry": "ZA",
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
              },
              "priceRange": "R50 - R5000",
              "areaServed": {
                "@type": "Country",
                "name": "South Africa",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
