"use client";

import React from "react";

const journey = [
  { label: "Search", detail: "Plain-language intent" },
  { label: "Trust", detail: "Verified service signals" },
  { label: "Book", detail: "Status and payment flow" },
  { label: "Grow", detail: "Vendor tools and repeats" },
];

const signals = [
  ["City", "Johannesburg"],
  ["Match", "Local pro"],
  ["Review", "Booking-tied"],
];

export const AboutMarketplacePreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Marketplace model</span>
          <span>Bouul</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-2">
            Local service layer
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Customer
              </div>
              <div className="text-sm font-semibold">Needs help now</div>
            </div>
            <div className="h-px w-8 bg-emerald-400/70" />
            <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Professional
              </div>
              <div className="text-sm font-semibold">Ready to work</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {journey.map((item, index) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  {index + 1}
                </div>
              </div>
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="mt-1 text-[11px] text-neutral-400">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          {signals.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                {label}
              </div>
              <div className="mt-1 text-[11px] font-semibold text-neutral-200">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
