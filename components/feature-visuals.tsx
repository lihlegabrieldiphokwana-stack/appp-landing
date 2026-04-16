"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const MagicRemoverVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-emerald-500/15 bg-neutral-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="relative h-full overflow-hidden bg-neutral-900">
        <Image
          src="/optimized/magic_remover_before.jpg"
          alt="Magic remover before"
          fill
          className="object-cover scale-110 saturate-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,153,0,0.34),rgba(255,153,0,0.46))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(0,0,0,0.16),transparent_10%),radial-gradient(circle_at_75%_35%,rgba(0,0,0,0.12),transparent_12%),radial-gradient(circle_at_55%_70%,rgba(0,0,0,0.10),transparent_15%)]" />
        <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-neutral-300">
          Before
        </div>
        <div className="absolute inset-x-4 bottom-4 h-10 rounded-2xl border border-white/10 bg-black/35" />
        <div className="absolute left-5 bottom-6 h-16 w-16 rounded-full border border-white/10 bg-black/20 blur-[1px]" />
        <div className="absolute right-8 bottom-10 h-8 w-8 rounded-full border border-white/10 bg-black/20 blur-[1px]" />

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 14% 0 0)"] }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.8, ease: "easeInOut", times: [0, 0.68, 1] }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src="/optimized/magic_remover_after.jpg"
            alt="Magic remover after"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.24),transparent_18%)]" />
          <div className="absolute left-3 top-3 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-emerald-300">
            After
          </div>
          <div className="absolute inset-x-4 bottom-4 h-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/8" />
          <div className="absolute right-4 top-10 h-8 w-8 rounded-full bg-emerald-400/80 blur-sm" />
          <div className="absolute right-3 bottom-3 rounded-full border border-emerald-400/30 bg-black/45 px-2 py-1 text-[9px] text-emerald-300">
            Clean pass
          </div>
        </motion.div>

        <motion.div
          initial={{ left: "100%" }}
          whileInView={{ left: "14%" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-0.5 bg-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.75)]"
        >
          <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/35 bg-black/55 backdrop-blur-md flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border border-emerald-300/60" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const DashboardVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-blue-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_32%)]" />
      <div className="relative grid grid-cols-[1.2fr_0.8fr] gap-2 h-full">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.22em] text-blue-300 mb-2">Overview</div>
          <div className="grid grid-cols-3 gap-2">
            {["Bookings", "Earnings", "Reviews"].map((label, index) => (
              <div key={label} className="rounded-xl border border-white/10 bg-black/25 p-2">
                <div className="text-[8px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {index === 0 ? "128" : index === 1 ? "R 46k" : "4.9"}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 h-10 rounded-xl border border-white/10 bg-black/30 p-2 flex items-end gap-1">
            {[30, 55, 42, 70, 58, 84].map((h, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-500 to-cyan-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">Queue</div>
            <div className="mt-2 space-y-1.5">
              {["Urgent repair", "Office clean", "Quote sent"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-lg bg-black/25 px-2 py-1.5 text-[10px]">
                  <span className="text-neutral-300">{item}</span>
                  <span className="text-emerald-300">{index === 0 ? "Now" : index === 1 ? "Today" : "Later"}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-blue-500/10 p-3">
            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">Payout</div>
            <div className="mt-2 text-lg font-semibold text-white">R 24.1k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RewardsVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-yellow-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="relative h-full">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-yellow-300">Referral credits</div>
              <div className="mt-1 text-lg font-semibold text-white">R 420 earned</div>
            </div>
            <div className="h-12 w-12 rounded-full border border-yellow-400/30 bg-black/30 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full border-4 border-yellow-400 border-r-transparent" />
            </div>
          </div>
          <div className="mt-3 h-2 rounded-full bg-black/35 overflow-hidden">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-yellow-400 to-amber-400" />
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400">
            <span>Invite 3 friends</span>
            <span>2/3 completed</span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {["Active", "Booked", "Bonus"].map((label, index) => (
            <div key={label} className="rounded-xl border border-white/10 bg-black/25 p-2 text-center">
              <div className="text-[8px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
              <div className="mt-1 text-sm font-semibold text-white">
                {index === 0 ? "12" : index === 1 ? "8" : "3"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DisputeVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-purple-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_32%)]" />
      <div className="relative h-full grid grid-cols-[0.95fr_1.05fr] gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-purple-300">Case 2481</div>
          <div className="mt-2 space-y-2">
            {["Opened", "Reviewed", "Mediation", "Resolved"].map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${index < 3 ? "bg-emerald-400" : "bg-neutral-700"}`} />
                <span className="text-[10px] text-neutral-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">Evidence</div>
            <div className="mt-2 flex gap-2">
              {["Chat", "Photo", "Invoice"].map((label) => (
                <div key={label} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center text-[10px] text-neutral-300">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-black/25 p-3">
            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">Outcome</div>
            <div className="mt-1 text-sm font-semibold text-white">Fair split refund</div>
            <div className="mt-1 text-[10px] text-neutral-400">Resolved with both sides reviewed.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LiveChatVisual = () => {
  const bubbles = [
    { side: "right", text: "Can you arrive after 3?", tone: "bg-emerald-400 text-black" },
    { side: "left", text: "Yes, I’m nearby and can bring the right parts.", tone: "bg-black/35 text-neutral-100 border border-white/10" },
    { side: "right", text: "Perfect. I’ve shared the gate code.", tone: "bg-emerald-400 text-black" },
  ] as const;

  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-cyan-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
          <span>Live chat</span>
          <span>Typing...</span>
        </div>
        <div className="flex-1 space-y-2">
          {bubbles.map((bubble, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`flex ${bubble.side === "right" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[10px] leading-relaxed ${bubble.tone}`}>
                {bubble.text}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] text-neutral-400">
          Attach photo, share location, send reply
        </div>
      </div>
    </div>
  );
};

export const VideoFeedVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-rose-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="relative h-full grid grid-cols-3 gap-2">
        {["Hair", "Paint", "Fix"].map((label, index) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-2 flex flex-col justify-between">
            <div className="rounded-xl flex-1 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(0,0,0,0.38)),radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%)]" />
            <div className="mt-2">
              <div className="text-[9px] uppercase tracking-[0.18em] text-rose-300">Reel</div>
              <div className="text-[10px] font-semibold text-white">{label} demo</div>
              <div className="text-[9px] text-neutral-400">{index === 0 ? "31k views" : index === 1 ? "18k views" : "22k views"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const VettedProsVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-emerald-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_32%)]" />
      <div className="relative h-full flex flex-col gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-black flex items-center justify-center font-bold">
            VT
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="text-sm font-semibold text-white">Vetted Pro</div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                Verified
              </span>
            </div>
            <div className="text-[10px] text-neutral-400">ID check · Review check · Skills check</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["ID", "Reviews", "Skills"].map((label) => (
            <div key={label} className="rounded-xl border border-white/10 bg-black/25 p-2">
              <div className="text-[8px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
              <div className="mt-1 text-[10px] font-semibold text-emerald-300">Checked</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BookingVisual = () => {
  return (
    <div className="h-36 rounded-xl mb-4 overflow-hidden border border-orange-500/15 bg-neutral-950 relative p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_32%)]" />
      <div className="relative h-full flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {["Search", "Select", "Confirm"].map((step, index) => (
            <div key={step} className="rounded-xl border border-white/10 bg-black/25 p-2 text-center">
              <div className="mx-auto mb-1 h-6 w-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[9px] text-white">
                {index + 1}
              </div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-300">{step}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-orange-300">Instant confirmation</div>
            <div className="mt-1 text-sm font-semibold text-white">Booked in 28 seconds</div>
          </div>
          <div className="h-11 w-11 rounded-full border border-emerald-400/20 bg-emerald-400/10 flex items-center justify-center text-emerald-300">
            ✓
          </div>
        </div>
      </div>
    </div>
  );
};
