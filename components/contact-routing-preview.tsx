"use client";

import React from "react";

const routes = [
  { title: "Support", detail: "Bookings, accounts, and app help", tone: "bg-emerald-400" },
  { title: "Press", detail: "Media requests and product facts", tone: "bg-sky-400" },
  { title: "Careers", detail: "Hiring and team opportunities", tone: "bg-amber-400" },
];

export const ContactRoutingPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Contact</span>
          <span>Routing</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Direct lines
          </div>
          <div className="text-2xl font-semibold">Reach the right team quickly</div>
        </div>

        <div className="space-y-2">
          {routes.map((route) => (
            <div key={route.title} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{route.title}</div>
                <div className="text-[11px] text-neutral-400">{route.detail}</div>
              </div>
              <div className={`h-2.5 w-2.5 rounded-full ${route.tone}`} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-3">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Inbox</div>
            <div className="text-sm font-semibold">0 waiting</div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-3">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Live chat</div>
            <div className="text-sm font-semibold">Open</div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-3">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Email</div>
            <div className="text-sm font-semibold">support@bouul.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
