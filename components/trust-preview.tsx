"use client";

import React from "react";
import { motion } from "framer-motion";

const trustSignals = [
  { label: "ID verified", value: "100%", tone: "text-emerald-300" },
  { label: "Booking-tied reviews", value: "12.8k", tone: "text-sky-300" },
  { label: "Payout protection", value: "Held", tone: "text-amber-300" },
];

const verificationSteps = [
  "Government ID checked",
  "Profile published",
  "Booking confirmed",
  "Review unlocked",
];

const reviewNotes = [
  { name: "Naledi C.", note: "On time, tidy, and clear on pricing.", tag: "5★" },
  { name: "Siyanda M.", note: "Photos and updates matched the job.", tag: "Verified" },
];

export const TrustPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_36%),radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-neutral-500">
          <span>Trust</span>
          <span>Live protection</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-black font-bold">
              BM
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="text-lg font-semibold leading-none">Bright Move Plumbing</div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  Verified
                </span>
              </div>
              <div className="mt-1 text-sm text-neutral-400">Sandton • 4.9 rating • 127 reviews</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-black/25 p-3"
              >
                <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  {signal.label}
                </div>
                <div className={`mt-2 text-lg font-semibold ${signal.tone}`}>
                  {signal.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-2">
              Trust timeline
            </div>
            <div className="relative pl-5">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-emerald-400/80 via-white/10 to-transparent" />
              <div className="space-y-3">
                {verificationSteps.map((step, index) => (
                  <div key={step} className="relative">
                    <div className={`absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full border ${index < 2 ? "border-emerald-400 bg-emerald-400" : "border-neutral-700 bg-black"}`} />
                    <div className="text-sm font-medium text-white">{step}</div>
                    <div className="text-[11px] text-neutral-400">
                      {index === 0
                        ? "Identity and business details are checked before publication."
                        : index === 1
                          ? "The profile becomes visible with reviews, services, and pricing."
                          : index === 2
                            ? "Booking status and chat are available once a customer confirms."
                            : "Only completed jobs can unlock the feedback loop."}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-emerald-500/18 via-black/20 to-black/35 p-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              Secure payout
            </div>
            <div className="text-sm font-semibold">Funds released after completion</div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-3">
              <div className="flex items-center justify-between text-[11px] text-neutral-300">
                <span>Job total</span>
                <span>R 1,250</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 w-[82%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className="text-neutral-400">Held securely</span>
                <span className="text-emerald-300 font-medium">Clears in 1-2 days</span>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-black/25 p-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Review unlock
              </div>
              <div className="space-y-2">
                {reviewNotes.map((review) => (
                  <div key={review.name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[11px] font-medium text-white">{review.name}</div>
                      <div className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                        {review.tag}
                      </div>
                    </div>
                    <div className="mt-1 text-[11px] text-neutral-400">{review.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
