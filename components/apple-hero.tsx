"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AppleHero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation spacer */}
      <div className="h-16" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-black font-bold text-2xl">A</span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white text-center tracking-tight mb-6"
        >
          appp Pro
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl text-gray-400 text-center font-light max-w-3xl mx-auto mb-4"
        >
          Power. Redefined.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-500 text-center max-w-2xl mx-auto mb-10"
        >
          The most advanced mobile experience ever created.
        </motion.p>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-6 mb-16"
        >
          <a
            href="#"
            className="text-emerald-400 hover:text-emerald-300 text-lg font-medium flex items-center gap-2 group"
          >
            Learn more
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-emerald-400 hover:text-emerald-300 text-lg font-medium flex items-center gap-2 group"
          >
            Buy
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* Desktop Banner */}
          <div className="hidden md:block relative aspect-[16/9] w-full">
            <Image
              src="/hero-banner-desktop.jpg"
              alt="appp Pro Banner"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tablet Banner */}
          <div className="hidden tablet:block md:hidden relative aspect-[16/9] w-full">
            <Image
              src="/hero-banner-tablet.jpg"
              alt="appp Pro Banner"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Mobile Banner */}
          <div className="md:hidden relative aspect-[3/4] w-full">
            <Image
              src="/hero-banner-mobile.jpg"
              alt="appp Pro Banner"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Placeholder until you add images */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800">
            <div className="text-center p-8">
              <p className="text-gray-500 text-sm mb-2">Banner Placeholder</p>
              <p className="text-gray-600 text-xs">
                Desktop: 2560 × 1400px<br />
                Tablet: 2048 × 1120px<br />
                Mobile: 1200 × 1600px
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
