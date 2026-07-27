"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Star,
  Building2,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight,
  DollarSign,
  Users,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const STORIES = [
  {
    vendor: "Sipho Plumbing & Solar",
    handle: "@sipho_plumbing",
    location: "Fourways, Johannesburg",
    metric: "+320% Monthly Revenue",
    quote: "Escrow completely ended my non-paying client nightmare. Previously I lost R15,000 every quarter to clients ghosting after geyser installs. On Bouul, money is locked before I touch a tool.",
    tag: "Plumbing & Heating",
  },
  {
    vendor: "Highveld Electrical Co.",
    handle: "@highveld_elec",
    location: "Centurion, Pretoria",
    metric: "Saved R48,000/yr on Lead Fees",
    quote: "Other lead directories charged R180 per lead even if 5 other electricians got the same lead. Bouul gives unlimited free leads and only takes 8% when work is done.",
    tag: "Electrical & Solar CoC",
  },
  {
    vendor: "Paws & Bubbles Mobile Spa",
    handle: "@paws_bubbles",
    location: "Cape Town Northern Suburbs",
    metric: "85% Repeat Client Rate",
    quote: "Zola AI remembers pet names, gate access codes, and warm water preferences across bookings. Our mobile van stays fully booked 6 days a week.",
    tag: "Pet Care & Grooming",
  },
];

export function CaseStudiesHub() {
  const [monthlyJobs, setMonthlyJobs] = useState<number>(20);
  const [avgTicket, setAvgTicket] = useState<number>(1500);

  const monthlyGross = monthlyJobs * avgTicket;
  const bouulCost = Math.round(monthlyGross * 0.08);
  const legacyLeadCost = monthlyJobs * 180; // R180 lead fee x jobs
  const legacyCommission = Math.round(monthlyGross * 0.20); // 20% avg
  const monthlySavings = legacyLeadCost + legacyCommission - bouulCost;

  return (
    <div className="relative pt-24 pb-20">
      <Section id="case-studies-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              Merchant Stories &amp; ROI
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              Real SA Business Growth. <br />
              <span className="text-b-green-deep">Proven Merchant Stories.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              Discover how plumbers, electricians, and service pros across South Africa expand their business using Bouul&apos;s escrow security and zero lead fees.
            </p>
          </div>
        </Reveal>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {STORIES.map((s, idx) => (
            <Reveal key={s.handle} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-b-green-deep bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {s.tag}
                    </span>
                    <span className="text-xs font-bold text-b-ink-faint">{s.location}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">{s.vendor}</h3>
                  <p className="text-xs text-emerald-700 font-mono font-bold">{s.handle}</p>
                  <p className="text-xs text-b-ink-soft leading-relaxed italic">
                    &quot;{s.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-b-line/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-b-ink-faint">Result:</span>
                  <span className="font-display font-extrabold text-sm text-b-green-deep">{s.metric}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive ROI Calculator */}
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-b-green-deep uppercase tracking-widest block mb-1">
                Interactive Merchant ROI Calculator
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink">
                See How Much You Save Annually
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-b-ink uppercase tracking-wider block mb-2">
                    Monthly Jobs Completed: <span className="text-b-green-deep text-base">{monthlyJobs} Jobs</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={monthlyJobs}
                    onChange={(e) => setMonthlyJobs(Number(e.target.value))}
                    className="w-full h-2 bg-b-paper-deep rounded-lg appearance-none cursor-pointer accent-b-green-deep"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-b-ink uppercase tracking-wider block mb-2">
                    Average Ticket Value: <span className="text-b-green-deep text-base">R{avgTicket.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full h-2 bg-b-paper-deep rounded-lg appearance-none cursor-pointer accent-b-green-deep"
                  />
                </div>
              </div>

              {/* ROI Summary Box */}
              <div className="rounded-2xl bg-b-paper border border-b-line p-6 space-y-3 text-center">
                <span className="text-xs font-bold text-b-ink-faint uppercase tracking-wider block">Estimated Annual Savings</span>
                <p className="font-display text-3xl font-extrabold text-b-green-deep">
                  R{(monthlySavings * 12).toLocaleString()} / yr
                </p>
                <p className="text-xs text-b-ink-soft leading-relaxed pt-2 border-t border-b-line">
                  Based on 8% Bouul fee vs paying R180/lead + 20% cuts on traditional apps.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
