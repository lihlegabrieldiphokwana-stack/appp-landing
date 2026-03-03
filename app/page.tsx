"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { BouulHero } from "@/components/bouul-hero";
import { CinematicStrip } from "@/components/cinematic-strip";
import { FeatureSection } from "@/components/feature-section";
import { ZolaSection } from "@/components/zola-section";
import { SocialMechanics } from "@/components/social-mechanics";
import { BentoFeatures } from "@/components/bento-features";
import { DynamicPricing } from "@/components/dynamic-pricing";
import { SubscriptionSection } from "@/components/subscription-section";
import { LampContainer } from "@/components/ui/lamp-effect";
import { VendorSection } from "@/components/vendor-section";
import { StatsStrip } from "@/components/stats-strip";
import { SentimentReviews } from "@/components/sentiment-reviews";
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
        secondaryBody="Stop scrolling through endless lists. Bouul simplifies discovery by mapping the city's top talent to your exact coordinates, ensuring the best help is always within reach."
        appPreview={undefined}
        cards={[
          {
            title: "Instant Search",
            description: "Find the perfect professional in seconds. Our high-performance search engine delivers instant results as you type, matching your exact needs with local expertise."
          },
          {
            title: "Location-aware",
            description: "Your neighborhood’s best, at your fingertips. Bouul uses precise location data to surface the most relevant professionals operating right where you are."
          },
          {
            title: "200+ Categories",
            description: "From master barbers to expert tutors, explore a vast ecosystem of professional craft. Every service you could ever need, organized for effortless discovery."
          }
        ]}
        align="right"
        placeholderLabel="Service Discovery"
      />
      <FeatureSection
        id="trust"
        label="TRUST"
        headline="Book with total confidence."
        body="Every professional is background-checked, rated, and reviewed."
        secondaryBody="Trust is built through transparency. We verify every professional on our platform so you can focus on getting the job done, knowing you're in safe hands."
        cards={[
          {
            title: "Verified Identity",
            description: "Book with peace of mind. Every professional on Bouul undergoes a rigorous identity verification and background check, ensuring a safe and reliable experience.",
            image: "/verified_identity.jpg"
          },
          {
            title: "5-Star Reviews",
            description: "Authenticity you can count on. Browse thousands of community-vetted reviews, left only by real customers after a verified service completion."
          },
          {
            title: "Secure Payments",
            description: "Modern, frictionless, and secure. Pay for any service with a single tap, backed by industry-standard encryption that keeps your financial data protected.",
            image: "/secure_payments.jpg"
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
        secondaryBody="No more 'where is my pro?' anxiety. With Bouul, you have full visibility into your service status from start to finish, with precision tracking that keeps you in the loop."
        cards={[
          {
            title: "Live GPS",
            description: "Never wonder where your pro is. Watch their progress in real-time on a live map, from the moment they start their journey until they arrive at your door."
          },
          {
            title: "Push Notifications",
            description: "Stay informed without checking the app. Get instant, smart updates on your booking status, arrival times, and completion milestones."
          },
          {
            title: "In-App Chat",
            description: "Seamless communication at every step. Message your professional directly within the app to share details, photos, or instructions in a secure environment."
          }
        ]}
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
        secondaryBody="Experience the craft before you commit. Our social feed transforms the marketplace into an immersive discovery journey where skill and personality take center stage."
        cards={[
          {
            title: "Video Feed",
            description: "See the craft in motion. Experience professional services through a high-definition video feed that brings their skills and personality to life before you book."
          },
          {
            title: "Personalised",
            description: "A marketplace that evolves with you. Our discovery engine learns your preferences, tailoring your feed to showcase the services and styles you love most."
          },
          {
            title: "Follow Favourites",
            description: "Build your professional dream team. Follow the experts whose work inspires you and get notified first when they have new availability or reels."
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

      {/* Vendor section */}
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
