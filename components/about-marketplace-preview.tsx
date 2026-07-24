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
    <div className="absolute inset-0 bg-b-paper-raised text-b-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-b-ink-soft">
          <span>Marketplace model</span>
          <span>Bouul</span>
        </div>

        <div className="rounded-[1.6rem] border border-b-ink/10 bg-b-ink/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-b-green-deep mb-2">
            Local service layer
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
            <div className="rounded-2xl border border-b-ink/10 bg-b-paper/35 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-b-ink-soft mb-2">
                Customer
              </div>
              <div className="text-sm font-semibold">Needs help now</div>
            </div>
            <div className="h-px w-8 bg-b-green/70" />
            <div className="rounded-2xl border border-b-ink/10 bg-b-paper/35 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-b-ink-soft mb-2">
                Professional
              </div>
              <div className="text-sm font-semibold">Ready to work</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {journey.map((item, index) => (
            <div key={item.label} className="rounded-2xl border border-b-ink/10 bg-b-ink/5 p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="h-2 w-2 rounded-full bg-b-green" />
                <div className="text-[9px] uppercase tracking-[0.2em] text-b-ink-soft">
                  {index + 1}
                </div>
              </div>
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="mt-1 text-[11px] text-b-ink-soft">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          {signals.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-b-ink/10 bg-b-paper/30 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-b-ink-soft">
                {label}
              </div>
              <div className="mt-1 text-[11px] font-semibold text-b-ink-soft">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
