"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { BouulHero } from "@/components/bouul-hero";
import { CinematicStrip } from "@/components/cinematic-strip";
import { FeatureSection } from "@/components/feature-section";
import { ZolaSection } from "@/components/zola-section";
import { SocialMechanics } from "@/components/social-mechanics";
import { BentoFeatures } from "@/components/bento-features";
import { DynamicPricing } from "@/components/dynamic-pricing";
import { VendorSection } from "@/components/vendor-section";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <BouulHero />

      {/* "Every service. Every professional. One app." */}
      <CinematicStrip />

      {/* Core feature sections */}
      <FeatureSection
        id="features"
        label="DISCOVER"
        headline="Find anything. In seconds."
        body="Every service category. Every neighbourhood."
        bullets={["Instant search", "Location-aware", "200+ categories"]}
        align="right"
        placeholderLabel="Service Discovery"
      />
      <FeatureSection
        id="trust"
        label="TRUST"
        headline="Book with total confidence."
        body="Every professional is background-checked, rated, and reviewed."
        bullets={["Verified identity", "5-star reviews", "Secure payments"]}
        align="left"
        placeholderLabel="Booking & Trust"
      />
      <FeatureSection
        id="realtime"
        label="TRACKING"
        headline="Watch it happen. Live."
        body="Real-time GPS tracking. Live status updates."
        bullets={["Live GPS", "Push notifications", "In-app chat"]}
        align="right"
        placeholderLabel="Real-time Tracking"
      />

      {/* Zola AI — booking assistant */}
      <ZolaSection />

      {/* Social — video feed intro */}
      <FeatureSection
        id="social"
        label="SOCIAL"
        headline="A marketplace that knows you."
        body="Short-form video from professionals. Curated by what you book."
        bullets={["Video feed", "Personalised", "Follow favourites"]}
        align="left"
        placeholderLabel="Social Video Feed"
      />

      {/* Deep-dive on social mechanics */}
      <SocialMechanics />

      {/* All features grid */}
      <BentoFeatures />

      {/* Transparent pricing */}
      <DynamicPricing />

      {/* Vendor section */}
      <VendorSection />

      {/* Stats */}
      <StatsStrip />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </main>
  );
}
