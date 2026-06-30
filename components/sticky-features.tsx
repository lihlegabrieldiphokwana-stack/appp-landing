"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface StepFeature {
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  heading: string;
  body: string;
  features: StepFeature[];
  showCode?: boolean;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    heading: "Find anything. In seconds.",
    body: "Every service category. Every neighbourhood. Stop scrolling through endless lists. Bouul simplifies discovery by mapping the city's local talent to your request.",
    features: [
      { title: "Instant Search", description: "Find the right professional fast. Search updates as you type and matches your request with local expertise." },
      { title: "Location-aware", description: "Your neighbourhood's best, at your fingertips. Bouul uses precise location data to surface the most relevant professionals." },
      { title: "Broad Coverage", description: "From home repairs to creative work, explore a wide range of services organized for easy discovery." },
    ],
  },
  {
    number: "02",
    title: "Dynamic Pricing",
    heading: "Fair rates. Real-time.",
    body: "Pricing that adapts to demand, distance, and urgency. No hidden fees. Customers see the total before they book, and professionals set their own rates.",
    features: [
      { title: "Transparent Rates", description: "See the full price breakdown before you commit. No surprises, no hidden charges." },
      { title: "Market-driven", description: "Rates adjust based on demand in your area. Book during quieter times to save." },
    ],
    showCode: true,
  },
  {
    number: "03",
    title: "Secure Escrow",
    heading: "Book with total confidence.",
    body: "Every professional is reviewed, rated, and screened. Payments are held securely until the job is done, protecting both sides of every transaction.",
    features: [
      { title: "Verified Identity", description: "Professionals complete identity verification and a screening process before their profile goes live." },
      { title: "5-Star Reviews", description: "Browse reviews from completed bookings and see how others rated the work." },
      { title: "Secure Payments", description: "Modern, frictionless, and secure. Pay with a single tap, backed by industry-standard encryption." },
    ],
  },
];

export const StickyFeatures = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = -rect.top;
      const stepHeight = window.innerHeight * 0.7;
      const current = Math.min(
        Math.max(0, Math.floor(offset / stepHeight)),
        steps.length - 1
      );
      setActiveStep(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-background border-t border-mode-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column — sticky step indicators */}
          <div className="hidden md:block relative">
            <div className="sticky top-32 flex flex-col gap-12 py-32">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`transition-all duration-500 ${
                    i === activeStep ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">
                    {step.title}
                  </div>
                  <div className="text-5xl font-bold text-slate-50 tracking-tighter mb-2">
                    {step.number}
                  </div>
                  <p
                    className={`text-lg font-semibold transition-colors duration-500 ${
                      i === activeStep ? "text-slate-50" : "text-slate-600"
                    }`}
                  >
                    {step.heading}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — scrollable cards */}
          <div className="py-24 md:py-32 flex flex-col gap-[60vh]">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                {/* Mobile: show step number and title */}
                <div className="md:hidden mb-6">
                  <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
                    {step.title}
                  </div>
                  <div className="text-4xl font-bold text-slate-50 tracking-tighter mb-2">
                    {step.number}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 tracking-tight mb-4">
                  {step.heading}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {step.body}
                </p>

                {/* Code snippet terminal for Step 02 */}
                {step.showCode && (
                  <div className="rounded-3xl border border-mode-border bg-mode-surface overflow-hidden mb-8">
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-mode-border bg-mode-surface-raised">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-slate-500 text-xs ml-3 font-mono">pricing.ts</span>
                    </div>
                    <div className="p-5 font-mono text-sm leading-relaxed">
                      <div className="text-slate-500">
                        <span className="text-sky-400">const</span>{" "}
                        <span className="text-slate-300">estimate</span>{" "}
                        <span className="text-sky-400">=</span>{" "}
                        <span className="text-sky-400">await</span>{" "}
                        <span className="text-emerald-400">pricing</span>.
                        <span className="text-slate-300">calculate</span>(
                      </div>
                      <div className="pl-6 text-slate-500">
                        {"{"} service:{" "}
                        <span className="text-amber-300">&apos;plumbing&apos;</span>,
                      </div>
                      <div className="pl-6 text-slate-500">
                        location:{" "}
                        <span className="text-amber-300">&apos;Sandton&apos;</span>,
                      </div>
                      <div className="pl-6 text-slate-500">
                        urgency:{" "}
                        <span className="text-purple-400">Urgency.HIGH</span>
                      </div>
                      <div className="text-slate-500">
                        {"}"});
                      </div>
                      <div className="mt-2 text-slate-500">
                        <span className="text-sky-400">console</span>.
                        <span className="text-slate-300">log</span>(
                        <span className="text-amber-300">
                          &apos;Est. ZAR 450 - 820&apos;
                        </span>
                        );
                      </div>
                    </div>
                  </div>
                )}

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {step.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="rounded-2xl border border-mode-border bg-mode-surface p-5 motion-transition hover:border-emerald-500/40 hover:-translate-y-0.5"
                    >
                      <h4 className="text-slate-50 font-semibold text-sm mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
