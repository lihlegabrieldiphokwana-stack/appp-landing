"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { BouulHero } from "@/components/bouul-hero";
import { CinematicStrip } from "@/components/cinematic-strip";
import { FeatureSection } from "@/components/feature-section";
import { DiscoveryPreview } from "@/components/discovery-preview";
import { TrustPreview } from "@/components/trust-preview";
import { TrackingPreview } from "@/components/tracking-preview";
import { SocialPreview } from "@/components/social-preview";
import { ZolaSection } from "@/components/zola-section";
import { ResonanceEngine } from "@/components/resonance-engine";
import { PlatformStory } from "@/components/platform-story";
import { MagicRemoverSection } from "@/components/magic-remover-section";
import { SocialMechanics } from "@/components/social-mechanics";
import { BentoFeatures } from "@/components/bento-features";
import { DynamicPricing } from "@/components/dynamic-pricing";
import { SubscriptionSection } from "@/components/subscription-section";
import { VendorSection } from "@/components/vendor-section";
import { StatsStrip } from "@/components/stats-strip";
import { SentimentReviews } from "@/components/sentiment-reviews";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
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
        secondaryBody="Stop scrolling through endless lists. Bouul simplifies discovery by mapping the city's local talent to your request, helping the right help surface faster."
        appPreview={<DiscoveryPreview />}
        cards={[
          {
            title: "Instant Search",
            description: "Find the right professional fast. Search updates as you type and matches your request with local expertise.",
            image: "/Group%201686.png"
          },
          {
            title: "Location-aware",
            description: "Your neighborhood's best, at your fingertips. Bouul uses precise location data to surface the most relevant professionals operating right where you are."
          },
          {
            title: "Broad Coverage",
            description: "From home repairs to creative work, explore a wide range of services organized for easy discovery."
          }
        ]}
        align="right"
        placeholderLabel="Service Discovery"
      />
      <FeatureSection
        id="trust"
        label="TRUST"
        headline="Book with total confidence."
        body="Every professional is reviewed, rated, and screened."
        secondaryBody="Trust is built through transparency. We verify key details on the platform so you can focus on getting the job done with more confidence."
        supportingCards={[
          {
            title: "Verified people",
            description: "Identity checks and screening happen before a profile goes live.",
          },
          {
            title: "Real reviews",
            description: "Feedback stays tied to completed bookings, so it reflects real work.",
          },
          {
            title: "Protected money",
            description: "Secure payments and payout timing make the flow feel safer for both sides.",
          },
        ]}
        appPreview={<TrustPreview />}
        cards={[
          {
            title: "Verified Identity",
            description: "Book with more confidence. Professionals complete identity verification and a screening process before their profile goes live.",
            image: "/verified_identity.jpg"
          },
          {
            title: "5-Star Reviews",
            description: "Browse reviews from completed bookings and see how others rated the work.",
            image: "/follow_favourites.jpg"
          },
          {
            title: "Secure Payments",
            description: "Modern, frictionless, and secure. Pay for any service with a single tap, backed by industry-standard encryption that keeps your financial data protected.",
            image: "/hero-banner-desktop.png"
          }
        ]}
        align="left"
        placeholderLabel="Booking & Trust"
      />
      <FeatureSection
        id="realtime"
        label="TRACKING"
        headline="Watch it happen. Live."
        body="Real-time GPS tracking. Live status updates."
        secondaryBody="No more 'where is my pro?' anxiety. Bouul gives you clearer visibility into booking progress from start to finish."
        appPreview={<TrackingPreview />}
        cards={[
          {
            title: "Live GPS",
            description: "Follow progress on a live map from departure through arrival.",
            image: "/hero-banner-mobile.png"
          },
          {
            title: "Push Notifications",
            description: "Stay informed without checking the app. Get timely updates on status, arrival times, and completion milestones.",
            image: "/real_time_notifications.jpg"
          },
          {
            title: "In-App Chat",
            description: "Message your professional directly in the app to share details, photos, or instructions.",
            image: "/real_time_notifications.jpg"
          }
        ]}
        align="right"
        placeholderLabel="Real-time Tracking"
      />

      {/* Zola AI — booking assistant */}
      <ZolaSection />

      {/* Resonance Discovery Engine */}
      <ResonanceEngine />

      {/* Platform story / operating system */}
      <PlatformStory />

      {/* Magic Remover */}
      <MagicRemoverSection />

      {/* Social — video feed intro */}
      <FeatureSection
        id="social"
        label="SOCIAL"
        headline="A marketplace that knows you."
        body="Short-form video from professionals. Curated by what you book."
        secondaryBody="Experience the craft before you commit. The social feed brings more context to discovery so skill and personality show up earlier."
        appPreview={<SocialPreview />}
        cards={[
          {
            title: "Video Feed",
            description: "See the craft in motion. Short-form video helps you understand the work before you book."
          },
          {
            title: "Personalised",
            description: "The feed adapts to your activity so the services and styles you care about show up earlier."
          },
          {
            title: "Follow Favourites",
            description: "Build your professional dream team. Follow the experts whose work inspires you and get notified first when they have new availability or reels.",
            image: "/follow_favourites.jpg"
          }
        ]}
        align="left"
        placeholderLabel="Social Video Feed"
      />

      {/* Deep-dive on social mechanics */}
      <SocialMechanics />

      {/* All features grid */}
      <BentoFeatures />

      {/* Transparent pricing */}
      <DynamicPricing />

      {/* Subscriptions */}
      <SubscriptionSection />

      {/* Vendor section — with link to dedicated vendor page */}
      <VendorSection />

      {/* Stats */}
      <StatsStrip />

      {/* AI sentiment analysis of reviews */}
      <SentimentReviews />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </main>
  );
}
