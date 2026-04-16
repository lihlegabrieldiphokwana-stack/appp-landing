"use client";

import React from "react";
import { motion } from "framer-motion";

const reels = [
  {
    title: "Kitchen repaint",
    subtitle: "Before + after • 48k views",
    accent: "from-fuchsia-500/70 via-pink-500/25 to-orange-500/20",
  },
  {
    title: "Hair styling",
    subtitle: "Quick tutorial • 31k views",
    accent: "from-sky-500/70 via-cyan-500/25 to-emerald-500/20",
  },
  {
    title: "Plumbing fix",
    subtitle: "Fast diagnosis • 19k views",
    accent: "from-emerald-500/70 via-emerald-500/25 to-blue-500/20",
  },
];

const signals = [
  { label: "Following", value: "12 pros", tone: "text-emerald-300" },
  { label: "Saved", value: "4 categories", tone: "text-sky-300" },
  { label: "Rebooked", value: "3 favourites", tone: "text-amber-300" },
];

export const SocialPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-neutral-500">
          <span>Social</span>
          <span>Curated feed</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
            Feed for you
          </div>
          <div className="text-xl font-semibold">See the work before you book</div>
          <div className="mt-2 text-sm text-neutral-400">
            A creator-style feed highlights skill, style, and availability.
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {signals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  {signal.label}
                </div>
                <div className={`mt-2 text-lg font-semibold ${signal.tone}`}>
                  {signal.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${reel.accent}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_36%),linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.62))]" />
              <div className="relative h-full p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-full bg-black/35 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Reel
                  </div>
                  <div className="rounded-full bg-black/35 px-2 py-1 text-[9px] font-semibold text-white/90">
                    ★ 4.9
                  </div>
                </div>

                <div>
                  <div className="mb-1 text-sm font-semibold leading-tight">
                    {reel.title}
                  </div>
                  <div className="text-[11px] text-white/70">{reel.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500">
                Activity signal
              </div>
              <div className="text-sm font-semibold text-white">What your network is doing</div>
            </div>
            <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-neutral-400">
              Live
            </div>
          </div>

          <div className="space-y-2">
            {[
              "New reel posted by your favourite barber",
              "Two saved pros are available today",
              "A trusted cleaner you follow just opened bookings",
            ].map((line, index) => (
              <div key={line} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2">
                <div className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-fuchsia-400" : index === 1 ? "bg-sky-400" : "bg-emerald-400"}`} />
                <span className="text-[11px] text-neutral-300">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
