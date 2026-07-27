"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Brain,
  Sparkles,
  MapPin,
  Globe,
  Sliders,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Bot,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const SAMPLE_SEARCHES = [
  {
    query: "Ngidinga umuntu wokulungisa ugesi ophuphe ebusuku",
    language: "isiZulu",
    intent: "Emergency Outage Electrician",
    parsedTokens: ["ugesi (electricity)", "ophuphe (outage)", "ebusuku (night emergency)"],
    matchedCategory: "Home & Industrial Electrical",
    resultPro: "AquaFlow & Electrical Solutions (1.2 km away • 4.9 ★)",
    dispatchETA: "20 Mins",
  },
  {
    query: "My 200L solar geyser is leaking into ceiling manhole Fourways",
    language: "English (SA)",
    intent: "Emergency Solar Geyser Repair",
    parsedTokens: ["200L solar geyser", "ceiling leak", "Fourways location"],
    matchedCategory: "Plumbing & Solar Heating",
    resultPro: "Fourways PIRB Certified Plumbers (0.8 km away • 4.95 ★)",
    dispatchETA: "15 Mins",
  },
  {
    query: "Ek het 'n gelisensieerde loodgieter nodig vir 'n nuwe badkamer",
    language: "Afrikaans",
    intent: "Licensed Bathroom Renovation Plumber",
    parsedTokens: ["gelisensieerde (PIRB licensed)", "loodgieter (plumber)", "badkamer (bathroom)"],
    matchedCategory: "Plumbing & Remodeling",
    resultPro: "Pretoria Master Plumbers (2.4 km away • 4.88 ★)",
    dispatchETA: "30 Mins",
  },
];

export function IntelligentSearchHub() {
  const [activeQuery, setActiveQuery] = useState(SAMPLE_SEARCHES[0]);
  const [customInput, setCustomInput] = useState("");
  const [searching, setSearching] = useState(false);

  const handleCustomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 400);
  };

  return (
    <div className="relative pt-24 pb-20">
      <Section id="search-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              Search & Vector Matching Intelligence
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              AI Natural Language Search. <br />
              <span className="text-b-green-deep">Understands Local SA Terms.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              No generic keyword guessing. Bouul&apos;s DeepSeek V4 search engine normalizes SA slang, parses isiZulu, Afrikaans, and Sesotho inputs, and matches you with real-time GPS dispatched pros.
            </p>
          </div>
        </Reveal>

        {/* 4 Core Search Engine Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <div className="p-6 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-b-ink">11 SA Languages</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Type naturally in Zulu, Afrikaans, Sotho, or English without translating local terminology.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center font-bold">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-b-ink">SA Slang Normalization</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Understands terms like "geyser burst", "loadshedding DB trips", "braai flue", and "bakkie transport".
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-6 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-b-ink">Live GPS Proximity</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Ranks pros based on live mobile location and real-time technician calendar availability.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-purple-500/10 text-purple-700 flex items-center justify-center font-bold">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-b-ink">Service Fixation Lock</h3>
              <p className="text-xs text-b-ink-soft leading-relaxed">
                Locks onto scope parameters across turns so you never re-explain your address or job details.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── INTERACTIVE SEARCH ENGINE SIMULATOR ── */}
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-6 sm:p-10 md:p-12 shadow-2xl mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-green-deep border border-emerald-500/20 mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Live Search Engine Demo</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-b-ink">
                Test Multi-Lingual Natural Language Parsing
              </h2>
              <p className="text-xs sm:text-sm text-b-ink-soft mt-2">
                Click any sample query to see how Zola AI extracts intent, normalizes South African trade terms, and triggers instant dispatch.
              </p>
            </div>

            {/* Query Buttons */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none snap-x touch-pan-x mb-8">
              {SAMPLE_SEARCHES.map((s) => (
                <button
                  key={s.language}
                  onClick={() => setActiveQuery(s)}
                  className={`snap-start shrink-0 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] ${
                    activeQuery.language === s.language
                      ? "bg-b-forest text-b-cream shadow-md scale-[1.02]"
                      : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  🌐 {s.language} Example
                </button>
              ))}
            </div>

            {/* Active Query Parsing Breakdown */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuery.language}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Input Query Display */}
                <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-b-green-deep block">
                    Input Query ({activeQuery.language}):
                  </span>
                  <p className="font-display font-bold text-lg text-b-ink">
                    &quot;{activeQuery.query}&quot;
                  </p>
                </div>

                {/* Tokens & Intent Extraction */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Extracted Intent:</span>
                    <p className="font-display font-bold text-sm text-emerald-950">{activeQuery.intent}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-b-paper border border-b-line space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block">Matched Catalog Category:</span>
                    <p className="font-display font-bold text-sm text-b-ink">{activeQuery.matchedCategory}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Live Proximity Dispatch:</span>
                    <p className="font-display font-bold text-sm text-amber-950">{activeQuery.dispatchETA} ETA</p>
                  </div>
                </div>

                {/* Parsed SA Terminology Tokens */}
                <div className="p-5 rounded-2xl bg-b-paper border border-b-line space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-b-ink-faint block">
                    Parsed Vector Tokens:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeQuery.parsedTokens.map((token) => (
                      <span key={token} className="px-3 py-1.5 rounded-xl bg-b-paper-deep text-b-ink text-xs font-mono font-semibold border border-b-line">
                        ✓ {token}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Matched Verified Pro Result */}
                <div className="p-6 rounded-2xl bg-b-forest text-b-cream flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-b-sun block">Matched Verified Pro</span>
                    <h4 className="font-display font-bold text-base text-white mt-0.5">{activeQuery.resultPro}</h4>
                  </div>
                  <button type="button" className="px-6 py-3 rounded-xl bg-b-green text-b-forest font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all shrink-0">
                    Book &amp; Lock Escrow →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
