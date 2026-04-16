"use client";

import React from "react";

const roles = ["Product", "Engineering", "Operations", "Content"];

export const CareersBoardPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Careers</span>
          <span>Team</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Hiring view
          </div>
          <div className="text-2xl font-semibold">Help build the local services engine</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {roles.map((role, index) => (
            <div key={role} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className={`h-20 rounded-xl border border-white/5 ${index % 2 === 0 ? "bg-gradient-to-br from-emerald-400/20 to-black/20" : "bg-gradient-to-br from-sky-400/20 to-black/20"}`} />
              <div className="mt-3 text-sm font-semibold">{role}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
          {["Move fast", "Keep trust", "Make it simple"].map((value) => (
            <div key={value} className="rounded-[1.6rem] border border-white/10 bg-black/30 p-3 text-[11px] text-neutral-300">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
