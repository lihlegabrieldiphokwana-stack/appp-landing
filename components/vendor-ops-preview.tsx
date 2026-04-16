"use client";

import React from "react";
import { motion } from "framer-motion";

const vendors = [
  { name: "Bright Move Plumbing", kind: "Home services", score: "4.9", status: "Best match" },
  { name: "Studio Nova Hair", kind: "Beauty", score: "4.8", status: "Trending" },
  { name: "Kinetic Cleaners", kind: "Recurring", score: "4.7", status: "Subscribed" },
];

const team = [
  { name: "Lebo", role: "Lead", state: "Assigned" },
  { name: "Mia", role: "Support", state: "Available" },
  { name: "Tebogo", role: "Field", state: "On task" },
];

const payouts = [
  { label: "Pending", value: "R 8,400", tone: "text-amber-300" },
  { label: "Today", value: "R 2,250", tone: "text-emerald-300" },
  { label: "This week", value: "R 24,100", tone: "text-sky-300" },
];

export const VendorOpsPreview = () => {
  return (
    <div className="relative w-full rounded-[2rem] border border-white/10 bg-neutral-950 text-white shadow-2xl shadow-black/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]" />
      <div className="relative p-4 md:p-5">
        <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-neutral-500 mb-4">
          <span>Vendor operations</span>
          <span>Bookings • Staff • Payouts</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
                  Pick a vendor
                </div>
                <div className="text-lg font-semibold">Match the right business to the job</div>
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-neutral-400">
                3 live
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {vendors.map((vendor, index) => (
                <motion.div
                  key={vendor.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`rounded-2xl border px-3 py-3 flex items-center justify-between gap-3 ${
                    index === 0 ? "border-emerald-400/30 bg-emerald-400/10" : "border-white/10 bg-black/25"
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{vendor.name}</div>
                    <div className="text-[11px] text-neutral-400">{vendor.kind}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-white">{vendor.score}★</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                      {vendor.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
                  Subscription
                </div>
                <div className="text-sm font-semibold">Recurring cleaning</div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Weekly</span>
                  <span>Auto-renew</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
                  Microtasks
                </div>
                <div className="text-sm font-semibold">Quick quote tasks</div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>2 min review</span>
                  <span>Assigned now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-emerald-500/18 via-black/20 to-black/35 p-4 md:p-5">
              <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
                Payout portal
              </div>
              <div className="text-lg font-semibold">Money moving into the bank</div>
              <div className="mt-3 space-y-2">
                {payouts.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.tone}`}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <div className="flex items-center justify-between text-[11px] text-neutral-300">
                  <span>Processing</span>
                  <span>1-2 business days</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-4 md:p-5">
              <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
                Team mode
              </div>
              <div className="space-y-2">
                {team.map((member, index) => (
                  <div key={member.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-3 py-3">
                    <div>
                      <div className="text-sm font-medium text-white">{member.name}</div>
                      <div className="text-[11px] text-neutral-400">{member.role}</div>
                    </div>
                    <div className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                      index === 0 ? "bg-emerald-400/15 text-emerald-300" : index === 1 ? "bg-sky-400/15 text-sky-300" : "bg-amber-400/15 text-amber-300"
                    }`}>
                      {member.state}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[11px] text-neutral-400">
                Staff, slots, and responsibilities stay visible while the job runs.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span>Invoice auto-generated from industry, logo, address, and email</span>
            <span className="text-emerald-300 font-medium">Temporary preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};
