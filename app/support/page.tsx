"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const topics = [
  {
    title: "Booking issues",
    description:
      "Help with cancellations, refunds, timing problems, or a professional not arriving.",
  },
  {
    title: "Account help",
    description:
      "Problems signing in, updating details, managing notifications, or changing your city.",
  },
  {
    title: "Vendor help",
    description:
      "Questions about onboarding, dashboard features, pricing, payouts, or discovery ranking.",
  },
  {
    title: "Trust and safety",
    description:
      "Report abuse, fraud, or disputes related to a booking or review.",
  },
];

const supportSteps = [
  "Check the FAQ and the policy pages first for a fast answer.",
  "Use the app if you are already booked and need booking-specific support.",
  "Email support@bouul.com if the issue needs human follow-up.",
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              SUPPORT
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 max-w-4xl">
              Help that matches the issue.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Support should be easy to route: bookings, accounts, vendors, and
              safety issues all belong in slightly different flows.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/faq"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              Read FAQ
            </Link>
            <a
              href="mailto:support@bouul.com"
              className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
            >
              Email support
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                Support topic
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {topic.title}
              </h2>
              <p className="text-neutral-500 leading-relaxed">{topic.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Suggested workflow
            </div>
            <div className="space-y-4">
              {supportSteps.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Suggested image
            </div>
            <p className="text-neutral-500 leading-relaxed">
              A support inbox, ticket queue, or help-desk illustration would fit
              this page well.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
