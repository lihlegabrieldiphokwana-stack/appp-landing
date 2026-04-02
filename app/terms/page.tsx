"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const terms = [
  {
    title: "Using Bouul",
    points: [
      "You agree to provide accurate account and booking information.",
      "You are responsible for how you use the service and for respecting other users.",
      "You may not abuse the app, the marketplace, or the trust systems.",
    ],
  },
  {
    title: "Professional obligations",
    points: [
      "Professionals should keep pricing, availability, and service details current.",
      "Bookings should be fulfilled in line with the agreed scope and policies.",
      "Repeated misconduct, fake listings, or misleading claims can lead to suspension.",
    ],
  },
  {
    title: "Payments and disputes",
    points: [
      "Prices shown in the app are the basis for booking and payment.",
      "Disputes should be raised through the support flow as soon as possible.",
      "Booking protection, refund, and rebooking behavior should follow the safety policy.",
    ],
  },
];

const prohibited = [
  "Fraud or impersonation",
  "False reviews or review manipulation",
  "Harassment, abuse, or threatening behavior",
  "Misleading service descriptions or unsafe work",
  "Unlawful use of other people's data or media",
];

export default function TermsPage() {
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
              TERMS
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Terms that keep the marketplace fair.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              These terms summarize how customers and professionals should use
              Bouul. They are designed to match the app&apos;s booking,
              verification, and dispute workflows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/policies"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Policy hub
              </Link>
              <Link
                href="/faq"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                FAQ
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
            <div className="rounded-2xl border border-dashed border-neutral-700 bg-black/60 p-8 min-h-[320px] flex items-center justify-center text-center">
              <div>
                <div className="text-white font-semibold text-xl mb-2">
                  Terms and marketplace flow graphic
                </div>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                  A contract-style visual or a booking confirmation timeline
                  would fit here nicely.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {terms.map((term, index) => (
            <motion.article
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                Term area
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {term.title}
              </h2>
              <div className="space-y-3">
                {term.points.map((point) => (
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
              Prohibited behavior
            </div>
            <div className="space-y-4">
              {prohibited.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Final note
            </div>
            <p className="text-neutral-500 leading-relaxed">
              These terms should also be reviewed by counsel and translated into
              the final in-app and web legal pages before launch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
