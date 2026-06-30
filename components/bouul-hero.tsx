"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";

export const BouulHero = () => {
  return (
    <section
      id="overview"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-16"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 right-0 md:right-20"
        fill="#10b981"
      />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Bouul v1.0 is live
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-slate-50 tracking-tighter mb-6 leading-[1.05]"
        >
          The Peer-to-Peer Engine.<br />
          Engineered for Scale.
        </motion.h1>

        {/* Subhead with FlipWords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          <FlipWords words={["Seamless discovery", "Secure connections", "Instant booking"]} />
          {" "}built for your city.
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="/download"
            className="px-8 py-3.5 bg-slate-50 hover:bg-slate-200 text-slate-900 font-medium rounded-full transition-all duration-300 text-sm"
          >
            Explore Services
          </a>
          <a
            href="#how-it-works"
            className="group px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-full transition-all duration-300 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            How it Works
          </a>
        </motion.div>

        {/* Below fold: abstract data visualization placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="rounded-3xl border border-mode-border bg-mode-surface p-1">
            <div className="rounded-2xl bg-mode-surface-raised p-6 md:p-10">
              {/* Data viz placeholder — 8x4 grid for geographic map feel */}
              <div className="grid grid-cols-8 gap-2 mb-6">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{
                      backgroundColor:
                        Math.random() > 0.6
                          ? `rgba(16, 185, 129, ${Math.random() * 0.4 + 0.1})`
                          : `rgba(148, 163, 184, ${Math.random() * 0.2 + 0.05})`,
                    }}
                  />
                ))}
              </div>
              {/* Pricing bars */}
              <div className="flex items-end gap-3 h-24">
                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.3, 0.95, 0.55, 0.75, 0.45, 0.65].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      className="w-full rounded-t-sm bg-emerald-500/30"
                      style={{ height: `${h * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4 text-center">
                Live market activity &bull; Johannesburg
              </p>
            </div>
          </div>
          {/* Subtle glow behind the card */}
          <div className="absolute inset-0 rounded-3xl bg-emerald-500/5 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
