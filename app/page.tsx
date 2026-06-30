"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { BouulHero } from "@/components/bouul-hero";
import { TrustTickers } from "@/components/trust-tickers";
import { StickyFeatures } from "@/components/sticky-features";
import { BentoFeatures } from "@/components/bento-features";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      <Navbar />

      {/* Hero */}
      <BouulHero />

      {/* Trust Tickers — social proof */}
      <TrustTickers />

      {/* How it works — sticky scroll features */}
      <StickyFeatures />

      {/* Secondary features — Apple-style bento grid */}
      <BentoFeatures />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Download CTA */}
      <DownloadCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
