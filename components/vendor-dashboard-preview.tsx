"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Bookings", value: "128", delta: "+18%" },
  { label: "Conversion", value: "12.4%", delta: "+2.1" },
  { label: "Revenue", value: "R 46.2k", delta: "+8%" },
];

const queue = [
  { title: "Geyser repair", meta: "Today • Sandton", status: "Urgent" },
  { title: "Office cleaning", meta: "Tomorrow • Rosebank", status: "Booked" },
  { title: "Kitchen repaint", meta: "Fri • Randburg", status: "Quote sent" },
];

export const VendorDashboardPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-neutral-500">
          <span>Dashboard</span>
          <span>Resonance live</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-2xl">
          <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
            Vendor overview
          </div>
          <div className="text-xl font-semibold">Your services are converting well.</div>
          <p className="mt-2 text-sm text-neutral-400">
            Title testing is surfacing the strongest version of your listing.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-[1.4rem] border border-white/10 bg-white/5 p-3"
            >
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                {stat.label}
              </div>
              <div className="mt-2 text-lg font-semibold">{stat.value}</div>
              <div className="text-[11px] text-emerald-300">{stat.delta}</div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
                Booking queue
              </div>
              <div className="text-sm font-semibold">Requests waiting on reply</div>
            </div>
            <div className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] text-neutral-400">
              3 active
            </div>
          </div>

          <div className="space-y-2">
            {queue.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-3 py-3"
              >
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-[11px] text-neutral-400">{item.meta}</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              Creative testing
            </div>
            <div className="space-y-2">
              {[
                ["Default title", "18%"],
                ["Urgent plumber", "23%"],
                ["Best local plumber", "31%"],
              ].map(([label, value], index) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-300">{label}</span>
                    <span className="text-emerald-300">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/35 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                      style={{ width: `${40 + index * 18}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 via-black/20 to-black/30 p-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              Pricing control
            </div>
            <div className="text-sm font-semibold">Emergency rate</div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/35 px-3 py-3">
              <div className="flex items-center justify-between text-[11px] text-neutral-300">
                <span>After-hours</span>
                <span>R 1,250</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 w-[72%] rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-neutral-400">
              Live pricing is adjusted around demand, distance, and urgency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
