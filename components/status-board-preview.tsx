"use client";

import React from "react";

const statuses = [
  { name: "Website", state: "Operational", tone: "bg-emerald-400" },
  { name: "Marketplace", state: "Operational", tone: "bg-emerald-400" },
  { name: "Newsroom", state: "Operational", tone: "bg-emerald-400" },
  { name: "Mobile downloads", state: "In progress", tone: "bg-amber-400" },
];

export const StatusBoardPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Status</span>
          <span>Public health</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Launch monitor
          </div>
          <div className="text-2xl font-semibold">Service health and launch status</div>
          <div className="mt-2 text-sm text-neutral-400">
            Public page with live operational checks and a clear launch signal.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {statuses.map((item) => (
            <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                <div className="text-sm font-semibold">{item.name}</div>
              </div>
              <div className="mt-2 text-[11px] text-neutral-300">{item.state}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">
              Incident policy
            </div>
            <div className="space-y-2">
              {["Update the page first", "Call out affected areas", "Keep it current"].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-neutral-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">
              Signals
            </div>
            <div className="space-y-3">
              {[78, 64, 88].map((value, index) => (
                <div key={value} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-300">{["Traffic", "Bookings", "Support"][index]}</span>
                    <span className="text-emerald-300">{value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
