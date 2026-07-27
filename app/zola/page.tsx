"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  Camera,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  ChevronRight,
  Globe,
  SlidersHorizontal,
  Bot,
  UserCheck,
  Calendar,
  Lock,
  Search,
  Flame,
  Star,
  FileText,
  BarChart3,
  Layers,
  Cpu,
  Check,
  RefreshCw,
  Building2,
  Briefcase,
  User,
  Sliders,
  Database,
  Terminal,
} from "lucide-react";

const PERSONA_TONES = [
  { id: "friendly", label: "Friendly & Warm", subtitle: "Casual, welcoming tone" },
  { id: "professional", label: "Professional", subtitle: "Clear, direct, formal" },
  { id: "direct", label: "Direct & Fast", subtitle: "Concise, zero fluff" },
];

const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "zu", label: "isiZulu" },
  { id: "af", label: "Afrikaans" },
  { id: "st", label: "Sesotho" },
];

const CONSUMER_SUPERPOWERS = [
  {
    icon: Camera,
    title: "1. Visual Photo Diagnostics",
    badge: "Multimodal Vision",
    desc: "Snap a photo of your leaking pipe, geyser model label, or broken gate joint. Zola identifies exact valve sizes and pre-briefs your contractor so they arrive equipped on Trip #1.",
  },
  {
    icon: Brain,
    title: "2. Home Memory & Property Specs",
    badge: "Persistent Learning",
    desc: "Zola remembers your main stopcock location, geyser capacity (e.g. 200L solar hybrid), gate access codes, and pet details across bookings so you never re-explain your home.",
  },
  {
    icon: Lock,
    title: "3. Digital Escrow Payment Shield",
    badge: "100% Money-Back Safety",
    desc: "Zola locks your payment safely in digital escrow when booking. Funds are only transferred after the job is completed, pressure-tested, and approved by you.",
  },
  {
    icon: Globe,
    title: "4. SA Multi-Lingual Intelligence",
    badge: "11 SA Languages",
    desc: "Speak naturally in isiZulu, Afrikaans, Sesotho, or English. Zola understands local terminology like 'geyser', 'bakkie', 'DB board', and 'loadshedding'.",
  },
  {
    icon: Sparkles,
    title: "5. Multi-Turn Service Fixation",
    badge: "Context Retention",
    desc: "Zola remembers what service and plumber you are discussing across multiple chat turns. Ask follow-up questions about pricing or time slots without repeating yourself.",
  },
  {
    icon: Calendar,
    title: "6. Real-Time Slot & Route Sync",
    badge: "Instant Calendar Sync",
    desc: "Zola checks live GPS locations and contractor rosters in real time, surfacing an available, background-checked professional who can reach your address immediately.",
  },
];

const PIPELINE_STAGES = [
  {
    stage: 1,
    title: "1. Intent & Language Routing",
    subtitle: "Multi-Lingual Normalization",
    tech: "zola-translate / router.ts",
    desc: "Detects non-English inputs (Zulu, Afrikaans, Sesotho) and normalizes to structured intent without losing local terminology like 'geyser', 'DB board', or 'bakkie'.",
    demoInput: "Ngidinga umuntu wokulungisa ugesi ophuphe ebusuku",
    demoOutput: "Intent: Emergency Electrician • Urgency: High (Power Outage)",
  },
  {
    stage: 2,
    title: "2. Multi-Pass Retrieval & Compatibility",
    subtitle: "Compatibility Scoring & Vendor Ranking",
    tech: "retrieval.ts / compatibility.ts",
    desc: "Executes multi-pass search across services, vendors, and reviews. Applies compatibility scoring based on user preferences and distance.",
    demoInput: "Emergency Electrician Request",
    demoOutput: "Matched: AquaFlow Electric • Score: 98/100 • Distance: 1.2km",
  },
  {
    stage: 3,
    title: "3. Service Fixation & Carry-Forward Memory",
    subtitle: "Multi-Turn Context Lock",
    tech: "fixation.ts / memory.ts",
    desc: "Locks onto active service context across turns. Retains gate codes, ceiling access notes, and stopcock locations in Home Memory.",
    demoInput: "How much for same-day dispatch?",
    demoOutput: "Locked Context: Emergency Geyser Repair • Option: Emergency Callout (R1,200)",
  },
  {
    stage: 4,
    title: "4. DeepSeek V4 Orchestration & Handoff",
    subtitle: "Autonomous Handoff to Escrow Basket",
    tech: "DeepSeek V4 / booking.ts",
    desc: "Pre-fills your shopping basket with exact plumber choices (e.g. Thabo M.), selected time slots, and locks funds safely in digital escrow.",
    demoInput: "Basket handoff triggered",
    demoOutput: "Status: Booking Draft Ready • Escrow Protected • Order Created",
  },
];

const PROMPT_SANDBOX_EXAMPLES = [
  {
    label: "🚨 Emergency Geyser Burst",
    prompt: "My geyser burst at 7 AM in Fourways! Water is leaking through the ceiling manhole.",
    zolaResponse: {
      action: "Emergency Geyser Dispatch",
      pro: "Fourways Plumbing Solutions (4.9 ★)",
      eta: "30 Mins",
      price: "R1,200",
      fixation: "Service Fixation: Emergency Geyser Repair (Locked)",
      memoryTip: "Home Memory applied: Shut off main stopcock by front boundary wall.",
    },
  },
  {
    label: "🐶 Mobile Pet Grooming",
    prompt: "I need a mobile hydrobath groomer for 2 Golden Retrievers this Saturday morning.",
    zolaResponse: {
      action: "Mobile Hydrobath Dispatch",
      pro: "Paws & Bubbles Mobile (4.95 ★)",
      eta: "Saturday 09:00 AM",
      price: "R450",
      fixation: "Service Fixation: Mobile Pet Hydrobath (Locked)",
      memoryTip: "Home Memory applied: Warm water hydrobath & coat blow-dry.",
    },
  },
  {
    label: "🎥 4K CCTV Security Install",
    prompt: "Quote me for a 4-camera 4K night-vision CCTV system with smartphone live feed.",
    zolaResponse: {
      action: "Security Inspection & Quote",
      pro: "SecuTech Solutions (PSIRA Certified)",
      eta: "Tomorrow 11:00 AM",
      price: "R4,200",
      fixation: "Service Fixation: CCTV Installation (Locked)",
      memoryTip: "Home Memory applied: Includes mobile app remote access & CoC wiring.",
    },
  },
];

export default function ZolaPage() {
  const [selectedTone, setSelectedTone] = useState("friendly");
  const [selectedLang, setSelectedLang] = useState("en");
  const [activePipelineStage, setActivePipelineStage] = useState(1);
  const [selectedSandbox, setSelectedSandbox] = useState(PROMPT_SANDBOX_EXAMPLES[0]);

  return (
    <main className="min-h-screen bg-b-paper font-sans text-b-ink antialiased">
      <RedesignNav />

      {/* ── 1. HERO SECTION: DEEPSEEK V4 POWERED ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-b-forest via-b-forest-raised to-b-forest pt-32 pb-20 md:pt-40 md:pb-28 text-b-cream border-b border-b-forest-line">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-b-sun/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Hero Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-b-sun/15 border border-b-sun/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-sun shadow-sm">
                <Brain className="h-4 w-4 text-b-sun" />
                <span>Powered by DeepSeek V4 Engine • Multi-Turn Service Fixation</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Meet Zola. <br />
                <span className="bg-gradient-to-r from-b-sun via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  The AI that actually books the job.
                </span>
              </h1>

              <p className="text-b-cream/80 text-lg md:text-xl max-w-xl leading-relaxed">
                Driven by DeepSeek V4, Zola handles end-to-end service discovery, parameter parsing, visual photo diagnostics, and digital escrow locks with multi-turn context retention.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="rounded-full bg-b-green px-8 py-4 text-sm font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-xl flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat with Zola in App</span>
                </Link>
                <Link
                  href="/zola/business"
                  className="rounded-full border border-b-sun/40 bg-b-sun/10 px-7 py-4 text-sm font-bold text-b-sun hover:bg-b-sun/20 transition-all flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4 text-b-sun" />
                  <span>For Pros &amp; Businesses →</span>
                </Link>
              </div>
            </motion.div>

            {/* Hero Right: Persona & Multi-Lingual Customizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-6 shadow-[0_24px_60px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-b-forest-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-b-sun text-b-ink font-bold shadow-md">
                      <Sparkles className="h-5 w-5 text-b-ink" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">Zola Persona Customizer</h3>
                      <p className="text-[11px] text-b-cream/60">Live Preference &amp; Tone Tuning</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    DeepSeek V4 Active
                  </span>
                </div>

                {/* Tone Selectors */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-b-sun block">
                    Choose Tone Persona:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {PERSONA_TONES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTone(t.id)}
                        className={`p-2.5 rounded-xl text-xs text-center border transition-all ${
                          selectedTone === t.id
                            ? "bg-b-sun text-b-ink font-bold border-b-sun"
                            : "bg-b-forest border-b-forest-line text-b-cream/70 hover:text-white"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Selectors */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-b-sun block">
                    Language Preference:
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => setSelectedLang(l.id)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all text-center ${
                          selectedLang === l.id
                            ? "bg-emerald-500 text-white border-emerald-400"
                            : "bg-b-forest border-b-forest-line text-b-cream/70 hover:text-white"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Response Box */}
                <div className="p-4 rounded-2xl bg-b-forest border border-b-forest-line space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-b-sun font-bold">
                    <span>DeepSeek V4 Response Preview</span>
                    <span>{selectedLang.toUpperCase()} • {selectedTone}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-b-cream/90 italic">
                    {selectedLang === "zu"
                      ? "Yebo! Ngizokusiza ukuthola umuntu wokulungisa ugesi oseduze manje."
                      : selectedLang === "af"
                      ? "Ja! Ek kan jou dadelik help om 'n gelisensieerde loodgieter te vind."
                      : selectedLang === "st"
                      ? "Ea! Ke tla u thuisa ho fumana mosebetsi ea tšoanelehang hona joale."
                      : "Hello! I can match you with verified PIRB plumbers and lock your payment safely in escrow."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. CONSUMER SUPERPOWERS GRID ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Consumer Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            6 Reasons Booking With Zola is Unmatched
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Zola eliminates contractor phone tag, price guessing, and cash deposit scams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONSUMER_SUPERPOWERS.map((sp, idx) => {
            const Icon = sp.icon;
            return (
              <motion.div
                key={sp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-3xl border border-b-line bg-b-paper-raised p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {sp.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-b-ink mb-2">
                    {sp.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-b-ink-soft">
                    {sp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-b-line/60 flex items-center justify-between text-[11px] font-semibold text-emerald-600">
                  <span>Powered by DeepSeek V4</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 3. THE DEEPSEEK V4 PIPELINE ── */}
      <section id="pipeline" className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Orchestration Architecture</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Inside Zola&apos;s DeepSeek V4 Pipeline
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Zola executes a deterministic, multi-stage workflow pipeline from initial translation to instant basket checkout.
          </p>
        </div>

        {/* Pipeline Stepper Selector */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          {PIPELINE_STAGES.map((stg) => (
            <button
              key={stg.stage}
              onClick={() => setActivePipelineStage(stg.stage)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activePipelineStage === stg.stage
                  ? "border-emerald-600 bg-emerald-500/10 shadow-md scale-[1.02]"
                  : "border-b-line bg-b-paper-raised text-b-ink-soft hover:border-b-ink/30"
              }`}
            >
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Stage {stg.stage}</div>
              <div className="font-display font-bold text-base text-b-ink mt-1">{stg.title}</div>
              <div className="text-[11px] text-b-ink-faint mt-1">{stg.tech}</div>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePipelineStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-b-line bg-b-paper-raised p-8 space-y-6 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-b-line pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/20">
                  {PIPELINE_STAGES[activePipelineStage - 1].tech}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-b-ink mt-2">
                  {PIPELINE_STAGES[activePipelineStage - 1].subtitle}
                </h3>
              </div>
              <span className="text-sm font-bold text-b-ink-faint">Stage {activePipelineStage} of 4</span>
            </div>

            <p className="text-base text-b-ink-soft leading-relaxed">
              {PIPELINE_STAGES[activePipelineStage - 1].desc}
            </p>

            <div className="grid gap-4 md:grid-cols-2 pt-2">
              <div className="p-4 rounded-2xl bg-b-paper border border-b-line space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-b-ink-faint block">Stage Input:</span>
                <p className="font-mono text-xs font-semibold text-b-ink">{PIPELINE_STAGES[activePipelineStage - 1].demoInput}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Stage Execution Output:</span>
                <p className="font-mono text-xs font-bold text-emerald-950">{PIPELINE_STAGES[activePipelineStage - 1].demoOutput}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── 4. LIVE INTERACTIVE PROMPT SANDBOX ── */}
      <section className="py-24 px-5 max-w-6xl mx-auto border-b border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Bot className="h-3.5 w-3.5" />
            <span>Interactive Sandbox</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink">
            Test DeepSeek V4 Prompts Live
          </h2>
          <p className="mt-4 text-lg text-b-ink-soft">
            Click any sample incident to see Zola AI parse parameters, apply Service Fixation, check contractor rosters, and output a booking card.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Sample Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-b-ink-faint block">
              Select Sample Incident:
            </label>
            {PROMPT_SANDBOX_EXAMPLES.map((ex) => (
              <button
                key={ex.label}
                onClick={() => setSelectedSandbox(ex)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  selectedSandbox.label === ex.label
                    ? "border-emerald-600 bg-emerald-500/10 shadow-md font-bold"
                    : "border-b-line bg-b-paper-raised text-b-ink-soft hover:border-b-ink/30"
                }`}
              >
                <span className="text-sm font-bold text-b-ink">{ex.label}</span>
                <span className="text-xs text-b-ink-soft mt-1 line-clamp-1">&quot;{ex.prompt}&quot;</span>
              </button>
            ))}
          </div>

          {/* Right Column: Output Card Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-b-forest-line bg-b-forest p-6 md:p-8 text-b-cream shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-b-forest-line pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-b-sun text-b-ink font-bold">
                    <Sparkles className="h-5 w-5 text-b-ink" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">DeepSeek V4 Execution Output</h3>
                    <p className="text-[11px] text-b-cream/60">Live Pipeline Handoff</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  Escrow Lock Active
                </span>
              </div>

              {/* User Prompt Bubble */}
              <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-none bg-emerald-600 p-4 text-xs text-white shadow-sm space-y-1">
                <span className="font-bold text-[10px] opacity-80 block">User Prompt:</span>
                <p className="leading-relaxed font-medium">&quot;{selectedSandbox.prompt}&quot;</p>
              </div>

              {/* Zola Output Card */}
              <div className="rounded-2xl border border-b-forest-line bg-b-forest-raised p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-white">
                    {selectedSandbox.zolaResponse.action}
                  </span>
                  <span className="text-xs font-extrabold text-b-sun">
                    {selectedSandbox.zolaResponse.price}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-b-cream/80">
                  <p><strong className="text-white">Matched Contractor:</strong> {selectedSandbox.zolaResponse.pro}</p>
                  <p><strong className="text-white">Live Proximity Dispatch:</strong> {selectedSandbox.zolaResponse.eta}</p>
                  <p className="text-b-sun font-semibold text-[11px]">{selectedSandbox.zolaResponse.fixation}</p>
                  <p className="text-emerald-400 font-semibold pt-1">
                    ✓ {selectedSandbox.zolaResponse.memoryTip}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/download"
                    className="w-full rounded-xl bg-b-green py-3 text-center text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Confirm Booking &amp; Lock Escrow in App</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MERCHANT DIRECT BANNER: PROS CTA ── */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-t border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-b-ink font-bold shadow-lg shrink-0">
              <Briefcase className="h-7 w-7 text-b-forest" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Are you a Contractor or Service Merchant?</span>
              <h3 className="font-display text-2xl font-extrabold text-b-ink">
                Automate your business with Zola Business Pro
              </h3>
              <p className="text-xs text-b-ink-soft mt-1">
                Employee auto-dispatch, 5-minute veto marketing publishing, demand forecasting &amp; credit profile exports.
              </p>
            </div>
          </div>

          <Link
            href="/zola/business"
            className="rounded-full bg-b-ink px-8 py-4 text-xs font-extrabold text-b-paper hover:bg-b-ink/90 transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Explore Zola Business Pro</span>
            <ArrowRight className="h-4 w-4 text-emerald-400" />
          </Link>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ── */}
      <section className="py-24 bg-b-paper-deep border-t border-b-line relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Experience Autonomous AI Booking</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-b-ink tracking-tight">
              Ready to let Zola handle your next service booking?
            </h2>

            <p className="text-b-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
              Download the Bouul app today to chat with DeepSeek V4 powered Zola AI in English, Zulu, or Afrikaans, diagnose job photos, and lock payments safely in escrow.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/download"
                className="rounded-full bg-b-green px-9 py-4 text-base font-extrabold text-b-forest shadow-xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center gap-2"
              >
                <span>Download Bouul App</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
