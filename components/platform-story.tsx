"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Discovery",
    eyebrow: "Find the right match",
    description:
      "Zola, Resonance, and location signals help surface the professionals most likely to matter for each customer.",
    points: [
      "Natural-language search",
      "Multi-signal ranking",
      "City-aware results",
    ],
  },
  {
    title: "Trust",
    eyebrow: "Book with confidence",
    description:
      "Verified profiles, booking-tied reviews, secure payments, and status updates reduce uncertainty in every booking.",
    points: [
      "Verified professionals",
      "Booking-only reviews",
      "Secure payments",
    ],
  },
  {
    title: "Growth",
    eyebrow: "Scale the business",
    description:
      "Professionals get analytics, payout visibility, pricing control, and creative testing that improves conversion over time.",
    points: [
      "Title and image testing",
      "Real-time analytics",
      "Flexible pricing tools",
    ],
  },
];

const stats = [
  { value: "Broad", label: "service coverage" },
  { value: "12+", label: "cities live" },
  { value: "5,000+", label: "vetted professionals" },
  { value: "Always-on", label: "booking assistance" },
];

export const PlatformStory = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            PLATFORM STORY
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-5">
            Built to connect discovery, trust, and operations.
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Bouul is not just a booking surface. It is a peer-to-peer services
            discovery engine with a customer marketplace on one side and an
            operating system for professionals on the other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7 flex flex-col"
            >
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                {pillar.eyebrow}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                {pillar.description}
              </p>
              <div className="space-y-3 border-t border-neutral-800 pt-5">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-800 bg-black px-5 py-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
