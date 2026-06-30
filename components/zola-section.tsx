"use client";
import React from "react";
import { motion } from "framer-motion";

const BookingFlow = () => {
  const steps = [
    {
      title: "Match found",
      detail: "Zola ranks nearby pros by fit, distance, and recent activity.",
      status: "Shortlist ready",
    },
    {
      title: "Booking confirmed",
      detail: "The customer approves the pro and the job is locked in.",
      status: "One tap to book",
    },
    {
      title: "Tracking starts",
      detail: "Arrival updates and chat stay visible until the job is complete.",
      status: "Live updates on",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: index * 0.08 }}
          className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.22em]">
              {step.status}
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-semibold">
              {index + 1}
            </div>
          </div>
          <h4 className="text-white text-sm font-semibold mb-2">{step.title}</h4>
          <p className="text-neutral-500 text-xs leading-relaxed">{step.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};

// ─── Feature chips ────────────────────────────────────────────────────────────
const features = [
  "Natural language booking",
  "Compares vetted pros",
  "Remembers preferences",
  "Tracks live",
  "Available 24 / 7",
  "Speaks your city",
];

// ─── Main export ──────────────────────────────────────────────────────────────
export const ZolaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-6">
            ZOLA AI
          </div>

          {/* Acronym */}
          <div className="flex items-center gap-0 mb-3">
            {["Z","O","L","A"].map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="text-7xl md:text-8xl font-semibold text-white leading-none tracking-tight"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-neutral-500 text-sm tracking-widest uppercase mb-8"
          >
            Zone · of · Local · Assistance
          </motion.p>

          <p className="text-neutral-300 text-lg leading-relaxed mb-10">
            Zola is your always-on AI booking assistant. Tell her what you need in plain language —
            she helps find vetted professionals, compares them, supports the booking, and tracks the
            job status in one place.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mb-16">
            {features.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 text-xs"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Booking flow */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-1">
                  Booking flow
                </div>
                <div className="text-white font-semibold text-sm">From message to confirmation</div>
              </div>
              <div className="px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-[10px] font-bold uppercase tracking-[0.22em]">
                Live
              </div>
            </div>
            <BookingFlow />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
