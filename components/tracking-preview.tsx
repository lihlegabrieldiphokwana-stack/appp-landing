"use client";

import React from "react";
import { motion } from "framer-motion";

const updates = [
  { label: "Booked", detail: "Marco confirmed the job", tone: "text-emerald-300" },
  { label: "En route", detail: "12 min away from Sandton", tone: "text-sky-300" },
  { label: "Arrival", detail: "Live ETA keeps updating", tone: "text-amber-300" },
];

const messages = [
  { from: "You", text: "Can you bring a replacement valve?" },
  { from: "Marco", text: "Already loaded. I’m 12 min out." },
  { from: "Bouul", text: "Tracking active. You’ll get a ping when he arrives." },
];

export const TrackingPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-neutral-500">
          <span>Tracking</span>
          <span>Live ETA</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-emerald-400 mb-1">
                Arrival status
              </div>
              <div className="text-xl font-semibold">Marco T. is on the way</div>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
              12 min
            </div>
          </div>

          <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-black/30 p-3">
            <div className="relative h-44 overflow-hidden rounded-[1.1rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_40%),linear-gradient(180deg,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40" />
              <div className="absolute left-5 top-6 h-16 w-16 rounded-full border border-sky-400/20 bg-sky-400/10" />
              <div className="absolute left-24 top-18 h-28 w-28 rounded-full border border-emerald-400/20 bg-emerald-400/10" />
              <div className="absolute right-8 top-10 h-8 w-8 rounded-full bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.75)]" />
              <div className="absolute right-12 top-14 h-10 w-10 rounded-full border border-emerald-300/40" />
              <div className="absolute left-10 bottom-5 text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Route active
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">
                <div className="text-neutral-500">Distance</div>
                <div className="mt-1 font-semibold text-white">2.8 km</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">
                <div className="text-neutral-500">Status</div>
                <div className="mt-1 font-semibold text-sky-300">En route</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">
                <div className="text-neutral-500">Safety</div>
                <div className="mt-1 font-semibold text-emerald-300">Tracked</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              Timeline
            </div>
            <div className="space-y-3">
              {updates.map((update, index) => (
                <motion.div
                  key={update.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className={`text-[10px] uppercase tracking-[0.2em] ${update.tone}`}>
                      {update.label}
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-1 text-[11px] text-neutral-400">{update.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-sky-500/18 via-black/20 to-black/35 p-4 flex flex-col">
            <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              In-app chat
            </div>
            <div className="flex-1 space-y-2">
              {messages.map((message, index) => {
                const isUser = index === 0;
                return (
                  <div
                    key={message.from + message.text}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                        isUser
                          ? "bg-emerald-400 text-black rounded-tr-sm"
                          : "bg-black/35 text-neutral-200 rounded-tl-sm border border-white/10"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-[11px] text-neutral-400">
              Photo, location, and job details stay in one thread.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
