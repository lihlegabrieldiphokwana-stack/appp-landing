import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BouulConsumerJourneyStepper } from "./bouul-consumer-journey-stepper";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  Camera,
  Brain,
  Sparkles,
  MapPin,
  CalendarCheck,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Droplets,
  Wrench,
  AlertTriangle,
  FileText,
  UserCheck,
  Zap,
  HelpCircle,
  BookOpen,
  X,
  Play,
  Star,
} from "lucide-react";

// Interactive Simulator Scenarios
const PLUMBING_SCENARIOS = [
  {
    id: "geyser_leak",
    name: "Emergency Geyser Leak",
    icon: Droplets,
    badge: "High Urgency",
    image: "/scenes/plumbing.png",
    photoDescription: "Water leaking from ceiling overflow valve",
    aiDiagnosis: "Pressure Control Valve (PCV) failure or corroded geyser element seal.",
    estimatedCost: "R1,200 – R2,400",
    parts: ["PIRB Certified Geyser Element", "Vacuum Breakers", "PCV Valve 400kPa"],
    timeline: "35 - 45 Mins Arrival",
  },
  {
    id: "burst_pipe",
    name: "Under-Sink Burst Pipe",
    icon: Wrench,
    badge: "Immediate Shut-Off Needed",
    image: "/scenes/hardware.png",
    photoDescription: "High-pressure spray under kitchen sink cabinet",
    aiDiagnosis: "Fractured 15mm copper flexi connector hose under main mixer.",
    estimatedCost: "R450 – R850",
    parts: ["15mm Stainless Braided Hose", "Brass Compression Coupling"],
    timeline: "25 - 35 Mins Arrival",
  },
  {
    id: "clogged_drain",
    name: "Severe Main Drain Blockage",
    icon: Zap,
    badge: "Electric Rodding Required",
    image: "/scenes/house_cleaning.png",
    photoDescription: "Bathroom drain backing up with greywater",
    aiDiagnosis: "Tree root intrusion or heavy fat buildup in external main gulley.",
    estimatedCost: "R650 – R1,250",
    parts: ["Heavy Duty Electric Drain Snake", "High-Pressure Jetting"],
    timeline: "30 - 50 Mins Arrival",
  },
];

export function PlumbingBookingArticle({ onClose }: { onClose?: () => void }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedScenario, setSelectedScenario] = useState(PLUMBING_SCENARIOS[0]);
  const [isEscrowLocked, setIsEscrowLocked] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState(0);

  return (
    <div className="bg-b-paper text-b-ink rounded-3xl border border-b-line p-6 md:p-10 shadow-2xl max-w-5xl mx-auto space-y-12 my-8">
      {/* ── ARTICLE HEADER ── */}
      <div className="border-b border-b-line pb-8 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 rounded-full bg-b-paper-raised p-2 border border-b-line text-b-ink-faint hover:text-b-ink transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Interactive Service Article &amp; Guide</span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-b-ink leading-tight">
          How to Book a Verified PIRB Plumber on Bouul: <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            From Visual AI Diagnosis to Digital Escrow Safety
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-b-ink-soft">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              BE
            </div>
            <div>
              <p className="font-bold text-b-ink">Bouul Engineering &amp; Operations Team</p>
              <p className="text-[10px] text-b-ink-faint">Verified SA Plumbing Dispatch Guide</p>
            </div>
          </div>
          <span className="text-b-line">|</span>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="h-3.5 w-3.5 text-emerald-600" /> 5 min read
          </span>
          <span className="text-b-line">|</span>
          <span className="flex items-center gap-1 font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5" /> PIRB &amp; SABS Compliant Protocol
          </span>
        </div>
      </div>

      {/* ── ARTICLE INTRODUCTION ── */}
      <div className="space-y-4 text-base leading-relaxed text-b-ink-soft">
        <p className="font-medium text-b-ink text-lg">
          Plumbing emergencies—whether it&apos;s a 2:00 AM burst geyser or a stubborn main line blockage—are historically the single most stress-inducing home maintenance event in South Africa.
        </p>
        <p>
          Traditional plumbing booking methods rely on unverified phone directories, arbitrary call-out fee surcharges, and cash deposits paid upfront to unvetted contractors. Homeowners are often left waiting hours while plumbers make multiple trips to distant hardware stores to locate missing washers or copper fittings.
        </p>
        <p>
          Bouul completely re-engineered this experience. By integrating **Zola AI visual diagnostics**, **PIRB accreditation checks**, **live GPS arrival tracking**, and **digital escrow protection**, booking a plumber is transformed into a transparent digital workflow.
        </p>
      </div>

      {/* ── 11-STEP CONSUMER JOURNEY WALKTHROUGH ── */}
      <BouulConsumerJourneyStepper />

      {/* ── EMBEDDED UX COMPONENT 1: LIVE INTERACTIVE BOOKING SIMULATOR ── */}
      <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-b-line pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full mb-1">
              <Zap className="h-3 w-3" /> Interactive UX Component #1
            </div>
            <h3 className="font-display text-xl font-extrabold text-b-ink">
              Simulate the Bouul 4-Step Plumbing Booking Flow
            </h3>
          </div>

          {/* Stepper Tabs */}
          <div className="flex items-center gap-1 bg-b-paper p-1 rounded-full border border-b-line">
            {[1, 2, 3, 4].map((stepNum) => (
              <button
                key={stepNum}
                onClick={() => setActiveStep(stepNum)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeStep === stepNum
                    ? "bg-b-ink text-white shadow-sm"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                Step {stepNum}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-b-ink-faint block">
            Select Plumbing Incident to Simulate:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {PLUMBING_SCENARIOS.map((scen) => {
              const Icon = scen.icon;
              const isSelected = selectedScenario.id === scen.id;
              return (
                <button
                  key={scen.id}
                  onClick={() => {
                    setSelectedScenario(scen);
                    setIsEscrowLocked(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-500/10 text-b-ink font-bold shadow-sm"
                      : "border-b-line bg-b-paper text-b-ink-soft hover:border-b-ink/30"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-emerald-600 text-white" : "bg-b-paper-deep text-b-ink-faint"}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">{scen.name}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">{scen.estimatedCost}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep + selectedScenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-b-line bg-b-paper p-6 space-y-6"
          >
            {activeStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-display font-bold text-base text-b-ink">
                    <Camera className="h-5 w-5 text-emerald-600" />
                    Step 1: Visual Photo Diagnosis with Zola AI
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Instant AI Analysis
                  </span>
                </div>

                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Instead of trying to explain technical pipe sizes over the phone, you upload a quick photo or video of the leak. Zola AI inspects the fittings and pre-briefs the plumber.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-b-line bg-b-paper-raised overflow-hidden relative aspect-[16/10]">
                    <img
                      src={selectedScenario.image}
                      alt={selectedScenario.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-b-ink/80 text-white text-[10px] px-2 py-1 rounded backdrop-blur">
                      Photo Uploaded: {selectedScenario.photoDescription}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                      <Sparkles className="h-4 w-4 text-emerald-600" />
                      <span>Zola AI Diagnostic Output</span>
                    </div>
                    <div className="space-y-2 text-xs text-emerald-900">
                      <p><strong className="font-bold">Detected Issue:</strong> {selectedScenario.aiDiagnosis}</p>
                      <p><strong className="font-bold">Estimated Labor &amp; Parts:</strong> {selectedScenario.estimatedCost}</p>
                      <div>
                        <strong className="font-bold block mb-1">Pre-Packed Hardware Needed:</strong>
                        <div className="flex flex-wrap gap-1">
                          {selectedScenario.parts.map((p) => (
                            <span key={p} className="bg-white/80 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-semibold">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="rounded-full bg-b-green px-6 py-2 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 2: Plumber Matching</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-display font-bold text-base text-b-ink">
                    <UserCheck className="h-5 w-5 text-emerald-600" />
                    Step 2: PIRB &amp; SABS Licensed Plumber Match
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Active Nearby Match
                  </span>
                </div>

                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Bouul filters available plumbers strictly by PIRB licensing, background clearance, customer star rating, and real-time proximity.
                </p>

                {/* Plumber Match Card */}
                <div className="rounded-2xl border border-b-green/40 bg-gradient-to-br from-b-green/10 to-transparent p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-base text-b-ink">AquaFlow Plumbing Pros</h4>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                        </div>
                        <p className="text-xs text-b-ink-soft">PIRB Licensed #482091 • SABS Approved Equipment</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs font-bold text-b-ink">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        <span>4.99 ★</span>
                      </div>
                      <span className="text-[10px] text-b-ink-faint">480+ Repairs Done</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                      <span className="text-[10px] text-b-ink-faint block">Dispatch Time</span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {selectedScenario.timeline}
                      </span>
                    </div>
                    <div className="rounded-xl bg-b-paper p-2.5 border border-b-line">
                      <span className="text-[10px] text-b-ink-faint block">Equipment Status</span>
                      <span className="font-semibold text-b-ink">Pre-Packed for {selectedScenario.name}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="rounded-full bg-b-green px-6 py-2 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 3: Digital Escrow Lock</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-display font-bold text-base text-b-ink">
                    <Lock className="h-5 w-5 text-emerald-600" />
                    Step 3: Quote Approval &amp; Digital Escrow Lock
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Zero Upfront Cash Risk
                  </span>
                </div>

                <p className="text-xs text-b-ink-soft leading-relaxed">
                  The itemized quote is presented in the app. Your funds are secured digitally in Bouul escrow—never handed as cash deposits. The plumber is notified that funds are locked and departs immediately.
                </p>

                {/* Escrow Lock Simulation Box */}
                <div className="rounded-2xl border border-b-line bg-b-paper-raised p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-b-line pb-3">
                    <div>
                      <p className="text-xs font-bold text-b-ink">Itemized Repair Quote Summary</p>
                      <p className="text-[10px] text-b-ink-faint">{selectedScenario.name}</p>
                    </div>
                    <span className="font-display font-extrabold text-lg text-emerald-600">
                      {selectedScenario.estimatedCost}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-b-ink-soft">
                      <span>Callout &amp; Visual Diagnostic</span>
                      <span className="font-semibold text-b-ink">R150.00</span>
                    </div>
                    <div className="flex justify-between text-b-ink-soft">
                      <span>Labor &amp; PIRB Compliance Cert</span>
                      <span className="font-semibold text-b-ink">R450.00</span>
                    </div>
                    <div className="flex justify-between text-b-ink-soft">
                      <span>OEM Replacement Parts ({selectedScenario.parts[0]})</span>
                      <span className="font-semibold text-b-ink">Included</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsEscrowLocked(!isEscrowLocked)}
                      className={`w-full rounded-xl py-3 font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                        isEscrowLocked
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-b-ink text-white hover:bg-b-ink/90"
                      }`}
                    >
                      <Lock className="h-4 w-4" />
                      <span>{isEscrowLocked ? "✓ Escrow Funds Locked (Simulated)" : "Simulate 'Lock Funds in Escrow'"}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setActiveStep(4)}
                    className="rounded-full bg-b-green px-6 py-2 text-xs font-bold text-b-forest hover:bg-emerald-400 transition-all flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 4: Tracking &amp; Release</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-display font-bold text-base text-b-ink">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Step 4: Live Map Tracking &amp; &apos;Satisfied&apos; Escrow Release
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    100% Quality Guarantee
                  </span>
                </div>

                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Track the plumber&apos;s vehicle live on an interactive map. After the repair is complete and tested, you inspect the work and tap &apos;Job Satisfied&apos; to release payment from escrow.
                </p>

                {/* Live Tracking & Release Simulation */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-600 animate-bounce" />
                      <span className="text-xs font-bold text-emerald-950">Plumber Vehicle En-Route (Live GPS Map)</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-white/80 px-2 py-0.5 rounded">
                      ETA: 12 Mins
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-emerald-500/20 text-xs text-emerald-950 space-y-2">
                    <p className="font-bold flex items-center gap-1 text-emerald-800">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Post-Repair Guarantee Verified
                    </p>
                    <p className="text-[11px] text-emerald-900 leading-relaxed">
                      Plumber completes pressure test &amp; issues digital PIRB Certificate. Funds remain safely in escrow until you tap release.
                    </p>
                  </div>

                  <button
                    onClick={() => alert("Simulation Complete! Payment released from escrow to AquaFlow Plumbing Pros after client satisfaction approval.")}
                    className="w-full rounded-xl bg-emerald-600 py-3 font-extrabold text-xs text-white hover:bg-emerald-500 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Tap 'Job Satisfied' to Release Escrow</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── ARTICLE BODY CONTENT: DEEP DIVE INTO PLUMBING TRUST ── */}
      <div className="space-y-6 pt-4 border-t border-b-line">
        <h2 className="font-display text-2xl font-extrabold text-b-ink">
          The 3 Structural Pillars of Plumbing Safety on Bouul
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-b-line bg-b-paper-raised p-5 space-y-2">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-base text-b-ink">1. PIRB Licensing Verification</h3>
            <p className="text-xs text-b-ink-soft leading-relaxed">
              Every plumber on Bouul must upload active registration with the Plumbing Industry Registration Board (PIRB) and SABS component compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-b-line bg-b-paper-raised p-5 space-y-2">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-base text-b-ink">2. Digital Escrow Payment Shield</h3>
            <p className="text-xs text-b-ink-soft leading-relaxed">
              Payment is held safely in digital escrow when you approve the quote. Funds are only transferred after the leak is tested and you confirm satisfaction.
            </p>
          </div>

          <div className="rounded-2xl border border-b-line bg-b-paper-raised p-5 space-y-2">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
              <Camera className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-base text-b-ink">3. Zola AI Visual Pre-Briefing</h3>
            <p className="text-xs text-b-ink-soft leading-relaxed">
              Uploading photos of pipe labels and leak spots allows plumbers to arrive with exact OEM replacement parts, eliminating multi-hour hardware store runs.
            </p>
          </div>
        </div>
      </div>

      {/* ── ARTICLE FOOTER CTA ── */}
      <div className="rounded-3xl bg-b-forest text-b-cream p-8 text-center space-y-4">
        <h3 className="font-display text-2xl font-extrabold text-white">
          Need a verified plumber right now?
        </h3>
        <p className="text-xs text-b-cream/80 max-w-md mx-auto leading-relaxed">
          Book PIRB-certified plumbers in seconds with visual Zola AI diagnostics and 100% digital escrow safety.
        </p>
        <div className="pt-2">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-full bg-b-green px-8 py-3.5 text-xs font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-xl"
          >
            <Droplets className="h-4 w-4" />
            <span>Book Verified Plumber In App</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
