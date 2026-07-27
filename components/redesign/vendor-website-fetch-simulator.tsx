"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  Store,
  Tag,
  Sliders,
  Bot,
  RefreshCw,
  Layers,
  Check,
  Building2,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const DEMO_SITES = [
  {
    url: "https://fourwaysplumbing.co.za",
    label: "Fourways Plumbing Co.",
    extractedCategory: "Plumbing & Heating",
    extractedHandle: "@fourways_plumbing",
    itemsExtracted: 8,
    timeSaved: "5.5 Hours Saved",
    services: [
      { name: "Emergency Geyser Burst Repair", price: "R1,200", tag: "Emergency", aiTitle: "150L/200L Hydrostatic Pressure Test & Replacement" },
      { name: "CCTV Drain Camera Inspection", price: "R950", tag: "Diagnostic", aiTitle: "HD Fiber Optic Pipeline Diagnostic & Unblock" },
      { name: "Solar Geyser Hybrid Upgrade", price: "R4,500", tag: "High Margin Bundle", aiTitle: "Solar Hybrid System Conversion + CoC Certificate" },
    ],
  },
  {
    url: "https://highveldelectrical.co.za",
    label: "Highveld Electrical Contractors",
    extractedCategory: "Electrical & Solar",
    extractedHandle: "@highveld_elec",
    itemsExtracted: 12,
    timeSaved: "6.0 Hours Saved",
    services: [
      { name: "DB Board Breaker Upgrade", price: "R1,800", tag: "Maintenance", aiTitle: "SANS 10142 Compliant 63A DB Board Overhaul" },
      { name: "Electrical Certificate of Compliance (CoC)", price: "R1,500", tag: "Inspection", aiTitle: "Official SA Department of Labour CoC Inspection" },
      { name: "Backup Inverter & Battery Wiring", price: "R3,200", tag: "Loadshedding", aiTitle: "Pure Sine Wave Inverter Transfer Switch Installation" },
    ],
  },
  {
    url: "https://pawsandbubbles.co.za",
    label: "Paws & Bubbles Mobile Pet Spa",
    extractedCategory: "Pet Grooming",
    extractedHandle: "@paws_bubbles",
    itemsExtracted: 6,
    timeSaved: "4.0 Hours Saved",
    services: [
      { name: "Full Mobile Hydrobath & Coat Blowout", price: "R350", tag: "Popular", aiTitle: "Warm Water Hydrobath, Flea Dip & Nail Trim" },
      { name: "De-Shedding & Breed Styling", price: "R480", tag: "Styling", aiTitle: "Full Coat De-Shedding & Hygienic Trim" },
    ],
  },
];

export function VendorWebsiteFetchSimulator() {
  const [urlInput, setUrlInput] = useState("");
  const [selectedDemo, setSelectedDemo] = useState(DEMO_SITES[0]);
  const [isFetching, setIsFetching] = useState(false);
  const [step, setStep] = useState<"idle" | "scraping" | "optimizing" | "done">("done");

  const handleFetch = (demo = selectedDemo) => {
    setSelectedDemo(demo);
    setIsFetching(true);
    setStep("scraping");

    setTimeout(() => {
      setStep("optimizing");
      setTimeout(() => {
        setStep("done");
        setIsFetching(false);
      }, 700);
    }, 600);
  };

  return (
    <Section className="py-20 md:py-28 bg-b-paper border-t border-b-line">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-green-deep border border-emerald-500/20 mb-3">
            <Zap className="h-4 w-4" />
            <span>60-Second Instant AI Storefront Setup</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
            Import Your Website in 60 Seconds. <br />
            <span className="text-b-green-deep">Zero Manual Typing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
            Paste your existing website URL or social page. Zola AI automatically fetches your services, prices, and photos, optimizes titles for search, and builds your storefront in under 1 minute.
          </p>
        </div>
      </Reveal>

      {/* Comparison Callout Pill */}
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-rose-700 block">Legacy Platforms & Directories</span>
              <p className="text-xs font-bold text-b-ink mt-0.5">6+ Hours spent manually typing items & uploading photos</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-b-green-deep flex items-center justify-center font-bold shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-b-green-deep block">Bouul AI Website Fetch</span>
              <p className="text-xs font-extrabold text-b-ink mt-0.5">60 Seconds automated extraction & AI title optimization</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Interactive Fetch Input Sandbox */}
      <Reveal delay={0.2}>
        <div className="max-w-5xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-6 sm:p-10 md:p-12 shadow-2xl">
          {/* Input Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <label className="text-xs font-bold text-b-ink uppercase tracking-wider block mb-2 text-center">
              Paste Website URL or Select Sample Merchant Site:
            </label>

            <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl border-2 border-b-line bg-b-paper shadow-md transition-colors focus-within:border-b-green-deep">
              <div className="flex items-center gap-2.5 pl-3 w-full">
                <Globe className="h-5 w-5 text-b-ink-faint shrink-0" />
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder={selectedDemo.url}
                  className="w-full bg-transparent py-2.5 text-xs font-semibold text-b-ink placeholder:text-b-ink-faint focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => handleFetch()}
                disabled={isFetching}
                className="w-full sm:w-auto shrink-0 rounded-xl bg-b-green-deep px-6 py-3 text-xs font-extrabold text-b-cream hover:bg-b-forest transition-all cursor-pointer disabled:opacity-50 min-h-[44px]"
              >
                {isFetching ? "Fetching..." : "Fetch & Generate Storefront 🚀"}
              </button>
            </div>

            {/* Quick Demo Selectors */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <span className="text-[11px] font-bold text-b-ink-faint">Try Sample Sites:</span>
              {DEMO_SITES.map((demo) => (
                <button
                  key={demo.label}
                  type="button"
                  onClick={() => handleFetch(demo)}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    selectedDemo.label === demo.label
                      ? "bg-b-green-deep text-b-cream border-b-green-deep"
                      : "bg-b-paper border-b-line text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fetching Animation / Result Preview */}
          <AnimatePresence mode="wait">
            {step === "scraping" && (
              <motion.div
                key="step-scraping"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-8 rounded-2xl bg-b-paper border border-b-line text-center space-y-3"
              >
                <RefreshCw className="h-8 w-8 text-b-green-deep animate-spin mx-auto" />
                <h4 className="font-display font-bold text-base text-b-ink">Scraping Website &amp; Extracting Menu Items...</h4>
                <p className="text-xs text-b-ink-soft">Parsing headers, service lists, prices, and operating hours from {selectedDemo.url}</p>
              </motion.div>
            )}

            {step === "optimizing" && (
              <motion.div
                key="step-optimizing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-8 rounded-2xl bg-b-paper border border-b-line text-center space-y-3"
              >
                <Sparkles className="h-8 w-8 text-amber-500 animate-pulse mx-auto" />
                <h4 className="font-display font-bold text-base text-b-ink">Zola AI Optimizing Titles &amp; SEO Categories...</h4>
                <p className="text-xs text-b-ink-soft">Rewriting titles for higher search conversions and setting up package bundles.</p>
              </motion.div>
            )}

            {step === "done" && (
              <motion.div
                key="step-done"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-b-forest text-b-cream shadow-xl">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-b-sun tracking-widest block">
                      ✓ Instant Storefront Generated in 58 Seconds
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-white mt-0.5">
                      {selectedDemo.label}
                    </h3>
                    <p className="text-xs text-b-cream/70 mt-0.5">
                      Category: {selectedDemo.extractedCategory} • Handle: <span className="text-b-sun font-mono">{selectedDemo.extractedHandle}</span>
                    </p>
                  </div>
                  <div className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs text-center">
                    🎉 {selectedDemo.itemsExtracted} Services Auto-Optimized <br />
                    <span className="text-[11px] font-normal text-b-cream/80">{selectedDemo.timeSaved}</span>
                  </div>
                </div>

                {/* Parsed & AI Optimized Services List */}
                <div className="space-y-3">
                  <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-b-ink flex items-center gap-2">
                    <Store className="h-4 w-4 text-b-green-deep" />
                    <span>Auto-Generated Service Matrix ({selectedDemo.services.length} Displayed)</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {selectedDemo.services.map((srv) => (
                      <div key={srv.name} className="p-4 rounded-2xl bg-b-paper border border-b-line space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-b-green-deep border border-emerald-500/20">
                              {srv.tag}
                            </span>
                            <span className="font-display font-bold text-sm text-b-ink">{srv.name}</span>
                          </div>
                          <span className="font-display font-extrabold text-sm text-b-green-deep">{srv.price}</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-b-paper-raised border border-b-line/60 flex items-center gap-2 text-xs">
                          <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                          <span className="text-b-ink-faint font-medium">Zola AI Optimized Title:</span>
                          <span className="font-bold text-b-ink">{srv.aiTitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}
