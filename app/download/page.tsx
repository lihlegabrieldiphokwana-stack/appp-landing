"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";

const platforms = [
  {
    id: "ios",
    name: "iOS",
    status: "App Store listing in progress",
    description:
      "The iPhone build is being finalized while we finish distribution setup and launch checks.",
    bullets: [
      "Faster rebook flow",
      "Live tracking and chat",
      "Zola booking assistant",
    ],
  },
  {
    id: "android",
    name: "Android",
    status: "Google Play submission queued",
    description:
      "Android support is part of the launch plan. The release path is being prepared now.",
    bullets: [
      "Service discovery feed",
      "Vendor following and alerts",
      "Booking confirmations",
    ],
  },
];

const shortcuts = [
  { href: "/services", label: "Browse services" },
  { href: "/vendors", label: "For professionals" },
  { href: "/faq", label: "Read FAQ" },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-b-green/30 bg-b-green-soft text-b-green-deep text-xs font-semibold tracking-widest uppercase mb-6">
              Launch status
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              The app download is almost ready.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Bouul is already built around discovery, trust, and live booking
              workflows. The iOS and Android store links are being finalized,
              so this page tracks the current launch status while the last
              pieces are wrapped up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {shortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <motion.article
              key={platform.id}
              id={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8 scroll-mt-28"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-2">
                    {platform.name}
                  </div>
                  <h2 className="text-3xl font-display font-extrabold text-b-ink">
                    {platform.status}
                  </h2>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-b-line text-b-ink-soft text-xs uppercase tracking-widest">
                  Store review
                </div>
              </div>

              <p className="text-b-ink-soft leading-relaxed mb-6">
                {platform.description}
              </p>

              <div className="space-y-3">
                {platform.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                    <span className="text-b-ink-soft text-sm">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-6 rounded-3xl border border-b-line bg-b-paper px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-3">
                What is ready now
              </div>
              <p className="text-b-ink-soft text-base leading-relaxed max-w-3xl">
                The marketplace, vendor pages, trust pages, category pages, and
                city pages are live. You can already explore the product,
                understand the feature set, and follow the launch story while
                mobile distribution is completed.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/vendors"
                className="inline-flex justify-center px-5 py-3 rounded-full bg-b-green hover:opacity-90 text-b-forest font-semibold text-sm transition-colors"
              >
                Explore vendor tools
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center px-5 py-3 rounded-full border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium text-sm transition-colors"
              >
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
