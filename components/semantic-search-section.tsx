"use client";

import React from "react";
import { motion } from "framer-motion";

const hashtags = [
  "#emergency-plumber",
  "#same-day-cleaning",
  "#bridal-makeup",
  "#maths-tutor",
  "#mobile-mechanic",
  "#pet-grooming",
];

const matches = [
  { query: "geyser leaking tonight", intent: "Urgent plumbing", score: "96%" },
  { query: "weekly office clean", intent: "Recurring cleaning", score: "91%" },
  { query: "soft glam near Sandton", intent: "Beauty booking", score: "88%" },
];

const signals = [
  "Understands service intent, not only exact words",
  "Connects hashtags, categories, location, and booking history",
  "Helps vendors show up for the language customers actually use",
];

const SemanticSearchVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Semantic search</span>
          <span>Intent graph</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-2">
            Customer language
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full border border-emerald-300" />
              <div className="text-sm font-semibold">Need someone to fix a burst pipe now</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {hashtags.map((tag, index) => (
            <div
              key={tag}
              className={`rounded-full border px-3 py-2 text-[11px] font-medium ${
                index % 3 === 0
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                  : "border-white/10 bg-white/5 text-neutral-300"
              }`}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          {matches.map((match) => (
            <div key={match.query} className="rounded-2xl border border-white/10 bg-black/30 p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold">{match.intent}</div>
                  <div className="mt-1 truncate text-[10px] text-neutral-500">{match.query}</div>
                </div>
                <div className="rounded-full bg-emerald-400 px-2 py-1 text-[10px] font-semibold text-black">
                  {match.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SemanticSearchSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              INTELLIGENT DISCOVERY
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Keywords, hashtags, and semantic search that understand intent.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Customers do not always search with the exact service name a vendor
              uses. Bouul connects plain-language requests, smart hashtags,
              category signals, and location context so the right professional
              can surface faster.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              A request like &quot;burst pipe tonight&quot; can still map to emergency
              plumbing, after-hours availability, nearby coverage, and trusted
              professionals with the right booking history.
            </p>

            <div className="space-y-4">
              {signals.map((signal) => (
                <div key={signal} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm leading-relaxed">{signal}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div
              className="bg-neutral-950 border border-neutral-800 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-black/40"
              style={{
                width: "min(560px, 92vw)",
                aspectRatio: "560/700",
              }}
            >
              <SemanticSearchVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
