"use client";

import React from "react";

const queue = [
  { title: "Booking issue", detail: "Professional delayed 14 min", badge: "Urgent" },
  { title: "Refund request", detail: "Waiting on customer reply", badge: "Pending" },
  { title: "Vendor onboarding", detail: "Identity check complete", badge: "Ready" },
];

const channels = [
  "In-app ticketing",
  "Email escalation",
  "Trust & safety review",
];

export const SupportDashboardPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_34%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Support</span>
          <span>15 min SLA</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Routing overview
          </div>
          <div className="text-xl font-semibold">Help that matches the issue</div>
          <div className="mt-2 text-sm text-neutral-400">
            Booking, account, vendor, and safety issues are separated before they reach the queue.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["Bookings", "82%", "Fastest"],
            ["Vendors", "91%", "Self-service"],
            ["Safety", "100%", "Escalated"],
          ].map(([label, value, detail]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">{label}</div>
              <div className="mt-2 text-lg font-semibold">{value}</div>
              <div className="text-[11px] text-neutral-300">{detail}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
            Open queue
          </div>
          <div className="space-y-2">
            {queue.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-3 py-3">
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-[11px] text-neutral-400">{item.detail}</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  {item.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">
              Channels
            </div>
            <div className="space-y-2">
              {channels.map((channel, index) => (
                <div key={channel} className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-sky-400" : "bg-amber-400"}`} />
                  <span className="text-sm text-neutral-300">{channel}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">
              Status
            </div>
            <div className="space-y-3">
              {["All systems green", "Bookings within target", "Escalations under control"].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-neutral-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
