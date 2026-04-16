"use client";

import React from "react";
import { motion } from "framer-motion";

const trendingTags = [
  "#plumbing",
  "#cleaning",
  "#tutoring",
  "#haircare",
  "#photography",
];

const cards = [
  {
    title: "Plumber near me",
    subtitle: "Sandton • 2.1 km away",
    rating: "4.9",
    price: "R 850",
    tone: "from-emerald-500/80 via-emerald-500/30 to-cyan-500/30",
  },
  {
    title: "Maths tutor",
    subtitle: "Fourways • Tonight",
    rating: "4.8",
    price: "R 300",
    tone: "from-sky-500/80 via-sky-500/30 to-indigo-500/30",
  },
  {
    title: "Deep cleaning",
    subtitle: "Randburg • Tomorrow",
    rating: "4.9",
    price: "R 650",
    tone: "from-amber-500/80 via-amber-500/30 to-orange-500/30",
  },
  {
    title: "Mobile barber",
    subtitle: "Rosebank • 35 min",
    rating: "5.0",
    price: "R 220",
    tone: "from-fuchsia-500/80 via-fuchsia-500/30 to-pink-500/30",
  },
];

export const DiscoveryPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.20),transparent_38%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative h-full px-4 pt-4 pb-5 flex flex-col">
        <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-neutral-500 mb-3">
          <span>9:41</span>
          <span>Bouul</span>
          <span>5G</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
              Explore
            </div>
            <div className="text-sm font-semibold">Johannesburg, Gauteng</div>
          </div>
          <div className="rounded-full border border-neutral-800 bg-black/60 px-3 py-1 text-[10px] text-neutral-400">
            Live now
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 rounded-[1.4rem] border border-white/10 bg-white/10 backdrop-blur-2xl px-4 py-3 shadow-lg shadow-black/30">
            <div className="flex items-center gap-2 text-neutral-300">
              <svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
              <span className="text-[13px] text-neutral-400">Search for any service...</span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl">
            <svg className="h-4 w-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M7 12h10M10 18h4" />
            </svg>
          </div>
        </div>

        <div className="flex gap-2 overflow-hidden mb-3">
          {trendingTags.map((tag) => (
            <div
              key={tag}
              className="whitespace-nowrap rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-300"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${card.tone} ${index === 0 ? "row-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.55))]" />
              <div className="relative h-full p-3 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div className="rounded-full bg-black/35 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    {index === 0 ? "Top match" : "Nearby"}
                  </div>
                  <div className="rounded-full bg-black/35 px-2 py-1 text-[9px] font-semibold text-white/90">
                    ★ {card.rating}
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-sm font-semibold leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[11px] text-white/70">{card.subtitle}</div>
                  <div className="mt-3 inline-flex rounded-full bg-black/35 px-2 py-1 text-[10px] font-semibold text-white">
                    {card.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Why this?
            </div>
            <div className="text-[11px] text-neutral-300">Nearby and highly rated.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Tracking
            </div>
            <div className="text-[11px] text-neutral-300">Live ETA updates.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
              Trust
            </div>
            <div className="text-[11px] text-neutral-300">Verified bookings.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
