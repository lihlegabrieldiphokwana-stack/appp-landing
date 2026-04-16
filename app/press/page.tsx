"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PressKitPreview } from "@/components/press-kit-preview";

const assets = [
  { label: "Bouul logo", href: "/bouul-logo.png" },
  { label: "Desktop hero", href: "/hero-banner-desktop.png" },
  { label: "Mobile hero", href: "/hero-banner-mobile.png" },
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
              PRESS
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Press-ready assets and product context.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Use these assets and product facts when writing about Bouul. They
              summarize the product without forcing you to dig through the site.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/newsroom"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Newsroom
              </Link>
              <a
                href="mailto:support@bouul.com"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Press contact
              </a>
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
              <PressKitPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
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
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 hover:border-neutral-600 transition-colors"
            >
              <div className="text-white font-semibold text-xl mb-2">
                {asset.label}
              </div>
              <div className="text-neutral-500 text-sm">
                Download asset for media use
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Product facts
            </div>
            <div className="space-y-4">
              {facts.map((fact) => (
                <div key={fact} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Press note
            </div>
            <p className="text-neutral-500 leading-relaxed">
              If you want, this page can later become a fuller press kit with
              logos, executive bios, and downloadable image packs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
