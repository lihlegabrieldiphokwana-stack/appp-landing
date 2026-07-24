"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { PressKitPreview } from "@/components/press-kit-preview";

const assets = [
  { label: "Bouul logo", href: "/bouul-logo.png" },
  { label: "Desktop hero", href: "/optimized/hero-banner-desktop.jpg" },
  { label: "Mobile hero", href: "/optimized/hero-banner-mobile.jpg" },
  { label: "App preview", href: "/Group%201686.png" },
];

const facts = [
  "Peer-to-peer services discovery engine",
  "Trust layer with verified bookings and safety flows",
  "Vendor tooling with analytics and creative testing",
  "Public launch pages for users, vendors, and media",
];

export default function PressPage() {
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
              PRESS
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
              Press-ready assets and product context.
            </h1>
            <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl">
              Use these assets and product facts when writing about Bouul. They
              summarize the product without forcing you to dig through the site.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/newsroom"
                className="px-7 py-3.5 rounded-full bg-b-ink text-b-paper font-semibold text-sm hover:bg-b-forest transition-colors"
              >
                Newsroom
              </Link>
              <a
                href="mailto:support@bouul.com"
                className="px-7 py-3.5 rounded-full border border-b-ink/20 text-b-ink-soft hover:text-b-ink hover:border-b-ink/50 font-medium text-sm transition-colors"
              >
                Press contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-b-line bg-b-paper-raised p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Press kit preview
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised min-h-[380px]">
              <PressKitPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {assets.map((asset, index) => (
            <motion.a
              key={asset.label}
              href={asset.href}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-3xl border border-b-line bg-b-paper-raised p-8 hover:border-b-ink/40 transition-colors"
            >
              <div className="text-b-ink font-semibold text-xl mb-2">
                {asset.label}
              </div>
              <div className="text-b-ink-soft text-sm">
                Download asset for media use
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-b-line">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8">
            <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
              Product facts
            </div>
            <div className="space-y-4">
              {facts.map((fact) => (
                <div key={fact} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-b-green flex-shrink-0" />
                  <span className="text-b-ink-soft text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-b-line bg-b-paper p-8">
            <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
              Media enquiries
            </div>
            <p className="text-b-ink-soft leading-relaxed">
              For interviews, company background, or additional launch images,
              contact support@bouul.com with &quot;Press&quot; in the subject line.
              Include the outlet, deadline, and the assets you need.
            </p>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
