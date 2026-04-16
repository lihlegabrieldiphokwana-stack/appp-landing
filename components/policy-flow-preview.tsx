"use client";

import React from "react";

const nodes = [
  { label: "Verify", tone: "bg-emerald-400" },
  { label: "Book", tone: "bg-sky-400" },
  { label: "Track", tone: "bg-amber-400" },
  { label: "Resolve", tone: "bg-fuchsia-400" },
];

export const PolicyFlowPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Policy flow</span>
          <span>Bouul rules</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Trust layer
          </div>
          <div className="text-2xl font-semibold">Rules that keep the marketplace usable</div>
        </div>

        <div className="relative flex-1 rounded-[1.6rem] border border-white/10 bg-white/5 p-4 overflow-hidden">
          <div className="absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent" />
          <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="grid grid-cols-2 gap-3 h-full">
            {nodes.map((node, index) => (
              <div key={node.label} className={`flex items-center justify-center ${index === 1 || index === 3 ? "pt-10" : "pb-10"}`}>
                <div className={`rounded-full ${node.tone} px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black shadow-lg shadow-black/30`}>
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
