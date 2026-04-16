"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PolicyFlowPreview } from "@/components/policy-flow-preview";

const policies = [
  {
    title: "Trust & safety",
    summary:
      "Every professional is identity verified, review quality is tied to real bookings, and disputes can be reviewed through the support flow.",
    bullets: [
      "ID and background screening",
      "Booking protection for customers",
      "Fair dispute handling within the app",
    ],
  },
  {
    title: "Reviews and moderation",
    summary:
      "Only completed bookings can leave a review. That keeps the review graph useful and reduces fake or abusive content.",
    bullets: [
      "Verified customer reviews only",
      "AI sentiment helps organize feedback",
      "Manual review for flagged content",
    ],
  },
  {
    title: "Payments and refunds",
    summary:
      "Payments are handled securely and the app protects users if the service does not match expectations.",
    bullets: [
      "Secure payment handling",
      "Refund or rebooking path within 24 hours",
      "No hidden pricing surprises",
    ],
  },
  {
    title: "Professional conduct",
    summary:
      "Vendor policies should support clear pricing, communication, and reliable fulfillment so the marketplace stays trustworthy.",
    bullets: [
      "Transparent pricing rules",
      "Cancellation and change-cutoff policies",
      "Category-specific service standards",
    ],
  },
];

const privacyPoints = [
  "Location data is used to improve discovery and matching.",
  "Booking data is used to run the marketplace, support disputes, and improve ranking signals.",
  "Customer and vendor information should only be shared where it is required to complete the service.",
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              POLICY HUB
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              The rules that keep Bouul usable.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              This is a public summary of how the product currently behaves.
              It is meant to be readable, not legal-heavy, and it points users
              toward the product areas that already explain the details.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/safety"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Trust & safety
              </Link>
              <Link
                href="/privacy"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Terms
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Suggested image
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[380px]">
              <PolicyFlowPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy, index) => (
            <motion.article
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                Policy area
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {policy.title}
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {policy.summary}
              </p>
              <div className="space-y-3">
                {policy.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Privacy principles
            </div>
            <div className="space-y-4">
              {privacyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Where to go next
            </div>
            <div className="space-y-3">
              <Link href="/safety" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                Trust & Safety page
              </Link>
              <Link href="/privacy" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                Privacy policy
              </Link>
              <Link href="/terms" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                Terms of service
              </Link>
              <Link href="/faq" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                FAQ and support answers
              </Link>
              <Link href="/about" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                About Bouul
              </Link>
              <Link href="/newsroom" className="block text-neutral-300 hover:text-white transition-colors text-sm">
                Newsroom
              </Link>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mt-8">
              For a live legal review, these summary pages should eventually be
              paired with formal privacy and terms documents.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
