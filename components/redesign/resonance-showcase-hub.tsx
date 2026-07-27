"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Sparkles,
  Zap,
  TrendingUp,
  Brain,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
  BarChart3,
  Sliders,
  ShieldCheck,
  Target,
  Eye,
  ShoppingBag,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const PERSONA_SIMULATIONS = [
  {
    id: "emergency-sandton",
    name: "Sandton Homeowner (Emergency Outage)",
    context: "11:00 PM • Rainstorm • Loadshedding DB Breaker Tripped",
    algorithmState: "Exploit 80% (High Urgency) / Explore 20% (Nearby Electricians)",
    topRecommendations: [
      { name: "Highveld Electrical 24/7 Dispatch", score: "99.4% Match", signal: "Proximity + 24/7 Outage Tag", badge: "Instant Escrow" },
      { name: "Sandton Master Wireman CoC", score: "96.1% Match", signal: "Fastest 15-Min Response", badge: "PIRB / Wireman Certified" },
      { name: "Emergency Solar Transfer Switch", score: "91.8% Match", signal: "Trending Emergency Package", badge: "8% Fee Only" },
    ],
  },
  {
    id: "beauty-capetown",
    name: "Cape Town Beauty Enthusiast",
    context: "Friday 2:00 PM • Weekend Event • Hydrobath & Hair Styling",
    algorithmState: "Exploit 80% (Repeat Merchant Affinity) / Explore 20% (Rising Star Stylist)",
    topRecommendations: [
      { name: "@glam_hair_studio Silk Press & Trim", score: "98.7% Match", signal: "High Social Proof (4.95 ★)", badge: "Verified Storefront" },
      { name: "Paws & Bubbles Mobile Dog Hydrobath", score: "94.2% Match", signal: "Search Affinity (Recent Pet Query)", badge: "Mobile Van" },
      { name: "Knotless Braids Weekend Package", score: "90.5% Match", signal: "Rising Star (≤14 Days Listed)", badge: "AOV Bundle" },
    ],
  },
  {
    id: "commercial-pretoria",
    name: "Pretoria Property Developer",
    context: "Monday 8:00 AM • Multi-Property Plumbing Inspection",
    algorithmState: "Exploit 80% (Enterprise Capacity) / Explore 20% (New PIRB Contractors)",
    topRecommendations: [
      { name: "Sipho Plumbing & Solar Commercial CoC", score: "99.1% Match", signal: "Enterprise Team Roster Sheet", badge: "Milestone Escrow" },
      { name: "Pretoria Bulk Water Metering", score: "95.6% Match", signal: "High Repeat Order Rate", badge: "CIPC Verified" },
      { name: "Multi-Unit Roof Waterproofing Bundle", score: "92.3% Match", signal: "High Margin Package", badge: "Dispute Protected" },
    ],
  },
];

const REVOLUTIONARY_PILLARS = [
  {
    title: "1. 7 Multi-Signal Vector Discovery",
    desc: "While legacy directories use static paid ad slots, Resonance fuses 7 live signals: Rising Stars, Trending Searches, Search Affinity, Network Graph, Collaborative Filtering, Live Completions, and Verified Social Proof.",
    icon: Layers,
    stat: "7 Signals",
    statLabel: "Real-Time Parallel Fusion",
  },
  {
    title: "2. Epsilon-Greedy Bandit (80/20 Rule)",
    desc: "80% of recommendations exploit proven high-converting listings. 20% continuously explores new local vendors, guaranteeing cold-start impressions for newly listed small businesses.",
    icon: RefreshCw,
    stat: "80/20",
    statLabel: "Exploit vs. Explore Ratio",
  },
  {
    title: "3. Keystone Discovery™ Parallel Testing",
    desc: "Vendors upload 3 titles × 4 images = 12 parallel variants per service. Resonance automatically tests which wording and photo pair converts each individual user persona without vendor effort.",
    icon: Sliders,
    stat: "12+ Variants",
    statLabel: "Automated Combination Matrix",
  },
  {
    title: "4. Multi-Stage Escrow Conversion Funnel",
    desc: "Tracks the full journey: Impression → View → Intent (Chat/Quote) → Escrow Purchase. Algorithms reward real completed escrow bookings, completely eliminating clickbait or fake review inflation.",
    icon: BarChart3,
    stat: "4-Stage",
    statLabel: "Escrow Conversion Attribution",
  },
];

export function ResonanceShowcaseHub() {
  const [activePersona, setActivePersona] = useState(PERSONA_SIMULATIONS[0]);

  return (
    <div className="relative pt-24 pb-20 text-white">
      {/* ── HERO SECTION ── */}
      <Section id="resonance-hero">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 shadow-lg">
              <Cpu className="h-4 w-4 text-emerald-400" />
              <span>Resonance™ Proprietary AI Engine</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              The First AI Marketplace That <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-b-sun bg-clip-text text-transparent">
                Learns What You Like.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              No two Bouul homepages are identical. Powered by multi-armed bandit sampling and 7 real-time discovery signals, Resonance dynamically matches customers with verified pros while guaranteeing cold-start impressions for new local businesses.
            </p>
          </div>
        </Reveal>

        {/* ── 4 REVOLUTIONARY PILLARS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {REVOLUTIONARY_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4 flex flex-col justify-between h-full hover:border-emerald-500/40 transition-all">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-neutral-900">
                    <span className="font-display font-extrabold text-2xl text-emerald-400 block">{p.stat}</span>
                    <span className="text-[11px] font-semibold text-neutral-500">{p.statLabel}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── INTERACTIVE LIVE PERSONA FEED RE-RANKING SIMULATOR ── */}
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 md:p-12 shadow-2xl mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20 mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Live Feed Personalization Demo</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                Watch Resonance Re-Rank Homepages Live
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Select a user persona below to watch how the 7-signal algorithm adapts feed rankings, weights urgency vs repeat affinity, and surfaces verified trade matches.
              </p>
            </div>

            {/* Persona Switcher Tabs */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none snap-x touch-pan-x mb-8">
              {PERSONA_SIMULATIONS.map((sim) => (
                <button
                  key={sim.id}
                  onClick={() => setActivePersona(sim)}
                  className={`snap-start shrink-0 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] ${
                    activePersona.id === sim.id
                      ? "bg-emerald-500 text-neutral-950 shadow-lg scale-[1.02]"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  👤 {sim.name}
                </button>
              ))}
            </div>

            {/* Active Persona Feed Board */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Context Header */}
                <div className="p-5 rounded-2xl bg-black border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-widest block">
                      Active User Context:
                    </span>
                    <h3 className="font-display text-base font-bold text-white mt-0.5">
                      {activePersona.context}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-400 text-center">
                    {activePersona.algorithmState}
                  </div>
                </div>

                {/* Top Recommended Feed Listings */}
                <div className="space-y-3">
                  <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                    <Target className="h-4 w-4 text-emerald-400" />
                    <span>Resonance™ Dynamic Feed Output ({activePersona.topRecommendations.length} Top Ranked Cards)</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {activePersona.topRecommendations.map((rec, i) => (
                      <div key={rec.name} className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold text-neutral-950 bg-emerald-400 px-2 py-0.5 rounded-full">
                              Rank #{i + 1}
                            </span>
                            <span className="font-display font-bold text-sm text-white">{rec.name}</span>
                          </div>
                          <p className="text-xs text-neutral-400 flex items-center gap-2">
                            <span>Signal Weight: <strong className="text-neutral-300">{rec.signal}</strong></span>
                          </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="px-3 py-1 rounded-xl bg-black border border-neutral-800 text-xs font-mono font-bold text-emerald-400">
                            {rec.score}
                          </span>
                          <span className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                            {rec.badge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* ── KEYSTONE DISCOVERY & ANTI-MONOPOLY GUARANTEE ── */}
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-12 shadow-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="h-4 w-4" />
              <span>Anti-Monopoly Cold-Start Guarantee</span>
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white">
              No Paid Ad Placement. Pure Performance Meritocracy.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              On traditional directories, massive legacy companies buy out the top 5 positions forever. Resonance&apos;s 20% Exploration Allocation guarantees that high-quality new local merchants get guaranteed homepage impressions and fair client exposure.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
