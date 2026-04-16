"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PolicyFlowPreview } from "@/components/policy-flow-preview";

const sections = [
  {
    title: "What we collect",
    points: [
      "Account details and contact information",
      "Location data used for discovery and matching",
      "Booking history, reviews, and support interactions",
      "Device and usage data that helps the app work properly",
    ],
  },
  {
    title: "How we use it",
    points: [
      "To help customers find the right professional faster",
      "To power bookings, tracking, reviews, and dispute resolution",
      "To improve ranking, trust signals, and marketplace quality",
      "To support safety, fraud prevention, and customer support",
    ],
  },
  {
    title: "How we share it",
    points: [
      "With professionals only as needed to complete a booking",
      "With payment and infrastructure providers that operate the app",
      "With support and trust teams when a dispute or safety issue arises",
      "Not as a public data dump or with third parties for unrelated use",
    ],
  },
];

const rights = [
  "Review and correct your account information",
  "Request access to the data tied to your account",
  "Delete your account where the product and law allow it",
  "Manage notification and location preferences inside the app",
];

export default function PrivacyPage() {
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
              PRIVACY
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Privacy built around bookings, not surveillance.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Bouul needs some data to match customers with professionals,
              support bookings, and resolve disputes. This page explains that
              use in plain language.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/policies"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Policy hub
              </Link>
              <Link
                href="/safety"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Trust & safety
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {section.title}
              </div>
              <div className="space-y-3">
                {section.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{point}</span>
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
              Your rights
            </div>
            <div className="space-y-4">
              {rights.map((right) => (
                <div key={right} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{right}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Important note
            </div>
            <p className="text-neutral-500 leading-relaxed">
              This is a product summary page, not a final legal document. Before
              launch, it should be reviewed by counsel and paired with a formal
              privacy policy that matches the actual backend, vendor, and
              analytics integrations in production.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
