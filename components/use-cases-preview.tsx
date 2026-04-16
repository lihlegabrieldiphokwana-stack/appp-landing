"use client";

import React from "react";

const scenarios = [
  { title: "Urgent home repairs", tone: "from-emerald-500/20 to-black/20" },
  { title: "Recurring services", tone: "from-sky-500/20 to-black/20" },
  { title: "Business needs", tone: "from-amber-500/20 to-black/20" },
  { title: "Vendor growth", tone: "from-fuchsia-500/20 to-black/20" },
];

export const UseCasesPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Use cases</span>
          <span>Market fit</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Scenario board
          </div>
          <div className="text-2xl font-semibold">Built for the moments when local help matters most</div>
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          {scenarios.map((scenario, index) => (
            <div key={scenario.title} className={`rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${scenario.tone} p-3`}>
              <div className="flex items-start justify-between gap-2">
                <div className="rounded-full bg-black/35 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/90">
                  {index + 1}
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-4 text-sm font-semibold leading-tight">{scenario.title}</div>
              <div className="mt-3 h-16 rounded-xl border border-white/10 bg-black/25" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["Discovery", "Tracking", "Growth"].map((label) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300">
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
