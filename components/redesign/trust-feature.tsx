"use client";

import React, { useState } from "react";
import { ShieldCheck, BadgeCheck, MessagesSquare, MapPinned, Navigation, CheckCircle2, Lock, Clock, Sparkles } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Money held in escrow",
    body: "Your payment sits safely with Bouul while the work happens. It only reaches the pro when you say the job is done.",
  },
  {
    icon: BadgeCheck,
    title: "Every pro is verified",
    body: "ID checks and FICA compliance before anyone can take a booking. Certifications shown right on the profile.",
  },
  {
    icon: MessagesSquare,
    title: "Reviews from real jobs",
    body: "Only customers who actually booked can review — no bought stars, no anonymous spam.",
  },
  {
    icon: MapPinned,
    title: "Live tracking radar",
    body: "Watch your pro on the way with live distance calculation, get updates at every step, and keep the whole conversation in one chat.",
  },
];

export function TrustFeature() {
  const [activeStage, setActiveStage] = useState<number>(2);
  const [released, setReleased] = useState<boolean>(false);

  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal>
            <Eyebrow tone="green">Built on trust</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
              Strangers do your best work, safely.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-b-ink-soft max-w-lg">
              A marketplace only works if both sides can relax. Bouul is engineered
              so the money, the identity, and the reputation are all guaranteed.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="flex flex-col gap-3 rounded-2xl border border-b-line bg-b-paper-raised p-5 h-full hover:shadow-md transition-all">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-b-ink">{pillar.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-b-ink-soft">{pillar.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Live Order Tracking Radar Interactive Component */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8 shadow-2xl space-y-6">
              {/* Radar Top Badge */}
              <div className="flex items-center justify-between border-b border-b-line pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    LiveOrder™ GPS Tracking
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                  ETA: 8 mins (2.4 km)
                </span>
              </div>

              {/* Provider Profile Summary */}
              <div className="rounded-2xl border border-b-line bg-b-paper p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white font-bold font-mono text-sm flex items-center justify-center shrink-0">
                    TM
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-b-ink">Thabo M. (Lead Plumber)</h4>
                    <p className="text-xs text-b-ink-muted">Fourways Plumbing • Order #BK-9482</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-b-ink-faint uppercase block">Vault Escrow</span>
                  <span className="font-price font-extrabold text-emerald-700 text-sm">R850.00</span>
                </div>
              </div>

              {/* 5-Stage Live Milestone Radar Tracker */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-b-ink flex items-center gap-1.5">
                    <Navigation className="h-4 w-4 text-emerald-600 animate-spin" />
                    <span>Real-Time Milestone Radar</span>
                  </span>
                  <span className="text-xs text-b-ink-muted font-medium">Stage {activeStage + 1} of 5</span>
                </div>

                <div className="space-y-2">
                  {[
                    { title: "Order Accepted & Assigned", time: "10:01 AM", desc: "Thabo assigned & dispatched" },
                    { title: "Equipment Diagnostics", time: "10:05 AM", desc: "Parts verified in service vehicle" },
                    { title: "En-Route (Live GPS Radar)", time: "10:12 AM (Active)", desc: "2.4 km away on William Nicol Dr" },
                    { title: "On-Site Repair Execution", time: "Pending Arrival", desc: "Geyser element replacement" },
                    { title: "Photo Inspection & Sign-Off", time: "Final Stage", desc: "Releases R850 escrow to pro" },
                  ].map((s, idx) => {
                    const isDone = idx < activeStage || released;
                    const isActive = idx === activeStage && !released;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveStage(idx)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                          isDone
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950"
                            : isActive
                            ? "bg-b-paper border-emerald-500 shadow-sm ring-1 ring-emerald-500/30"
                            : "bg-b-paper border-b-line text-b-ink-faint"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                              isDone
                                ? "bg-emerald-600 text-white"
                                : isActive
                                ? "bg-emerald-500 text-b-forest animate-pulse"
                                : "bg-b-paper-deep text-b-ink-faint border border-b-line"
                            }`}
                          >
                            {isDone ? "✓" : idx + 1}
                          </div>
                          <div>
                            <span className="font-bold block text-b-ink">{s.title}</span>
                            <span className="text-[11px] text-b-ink-muted">{s.desc}</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-b-ink-muted">{s.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Escrow Action Simulation Button */}
              <div className="pt-2">
                {released ? (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-800 text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Job Complete • R850 Escrow Released to Thabo M.</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setActiveStage(4);
                      setReleased(true);
                    }}
                    className="w-full py-3.5 rounded-xl bg-b-forest text-b-cream text-xs font-bold hover:bg-b-forest-raised transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Simulate Complete & Release Escrow</span>
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

