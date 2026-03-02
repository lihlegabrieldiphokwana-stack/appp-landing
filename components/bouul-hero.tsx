"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";

export const BouulHero = () => {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-16"
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
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20">
            <img
              src="/bouul-logo.png"
              alt="Bouul"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tight mb-4"
        >
          Bouul.
        </motion.h1>

        {/* Flip words subhead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-neutral-300 font-light mb-3 flex items-center justify-center flex-wrap gap-x-2"
        >
          <span>The marketplace for</span>
          <FlipWords words={["services", "professionals", "experiences"]} />
        </motion.div>

        {/* Secondary line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-neutral-500 text-lg md:text-xl mb-12"
        >
          Hyper-local. Instantly bookable. Yours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#download"
            className="px-8 py-3.5 bg-white hover:bg-neutral-100 text-black font-medium rounded-full transition-colors text-sm"
          >
            Download free
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors text-sm"
          >
            Learn more →
          </a>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center items-end relative"
        >
          {/* Emerald glow beneath phone */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-emerald-500/30 blur-3xl rounded-full" />

          <div
            className="relative bg-neutral-900 border border-neutral-800 rounded-[3rem] flex flex-col overflow-hidden"
            style={{
              width: "min(390px, 85vw)",
              aspectRatio: "390/844",
            }}
          >
            {/* Fake status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1">
              <span className="text-white text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-neutral-500 rounded-sm relative">
                  <div className="absolute inset-0.5 right-1 bg-neutral-400 rounded-sm" />
                  <div className="absolute -right-0.5 top-0.5 w-0.5 h-1 bg-neutral-500 rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <div className="text-neutral-600 text-xs font-mono">390 × 844</div>
              <div className="text-neutral-700 text-[10px]">Bouul App Preview</div>
            </div>

            {/* Fake home indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-28 h-1 bg-neutral-600 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
