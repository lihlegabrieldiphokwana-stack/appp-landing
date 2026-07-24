"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { PolicyFlowPreview } from "@/components/policy-flow-preview";

const guidelines = [
  {
    title: "Be accurate",
    description:
      "Profiles, service descriptions, pricing, and reviews should reflect what actually happens in the marketplace.",
  },
  {
    title: "Be respectful",
    description:
      "No harassment, threats, hateful content, or abuse toward customers, professionals, or support teams.",
  },
  {
    title: "Be honest",
    description:
      "Do not fake bookings, reviews, screenshots, credentials, or follower counts.",
  },
  {
    title: "Be safe",
    description:
      "Do not misrepresent dangerous work, ignore safety requirements, or encourage unlawful behavior.",
  },
];

const moderation = [
  "Content can be removed if it is abusive, misleading, illegal, or harmful.",
  "Repeated policy violations can limit visibility or result in account suspension.",
  "Support and trust teams can review disputes and flagged content manually.",
];

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              COMMUNITY GUIDELINES
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Keep the marketplace useful, fair, and human.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              Bouul works best when people treat the platform like a real-world
              service network. These guidelines explain the behavior expected
              from customers, professionals, and commenters.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/policies"
                className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
              >
                Policy hub
              </Link>
              <Link
                href="/safety"
                className="px-7 py-3.5 rounded-full border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium text-sm transition-colors"
              >
                Trust & safety
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Community flow
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[380px]">
              <PolicyFlowPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                Guideline
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink mb-4">
                {item.title}
              </h2>
              <p className="text-b-ink-soft leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              Moderation rules
            </div>
            <div className="space-y-4">
              {moderation.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                  <span className="text-b-ink-soft text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-b-line bg-b-paper p-8">
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Related pages
            </div>
            <div className="space-y-3">
              <Link href="/policies" className="block text-b-ink-soft hover:text-b-ink transition-colors text-sm">
                Policy hub
              </Link>
              <Link href="/privacy" className="block text-b-ink-soft hover:text-b-ink transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="block text-b-ink-soft hover:text-b-ink transition-colors text-sm">
                Terms
              </Link>
              <Link href="/faq" className="block text-b-ink-soft hover:text-b-ink transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
