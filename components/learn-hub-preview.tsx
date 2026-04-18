"use client";

import React from "react";

const pages = [
  ["About", "Story"],
  ["Use cases", "Scenarios"],
  ["Policies", "Rules"],
  ["Support", "Help"],
  ["Press", "Assets"],
  ["Cities", "Coverage"],
];

export const LearnHubPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Learn hub</span>
          <span>Public map</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Site knowledge graph
          </div>
          <div className="text-2xl font-semibold leading-tight">
            Everything public-facing, connected by intent.
          </div>
        </div>

        <div className="relative flex-1 rounded-[1.6rem] border border-white/10 bg-black/30 p-4 overflow-hidden">
          <div className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
          <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="relative grid grid-cols-2 gap-3 h-full">
            {pages.map(([title, detail], index) => (
              <div
                key={title}
                className={`rounded-2xl border border-white/10 bg-white/5 p-3 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
              >
                <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  {detail}
                </div>
                <div className="text-sm font-semibold">{title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["Product", "Trust", "Launch"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-neutral-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
