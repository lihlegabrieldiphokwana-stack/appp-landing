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
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/20">
              <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
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
          Bouul
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

        {/* Hero Banner Image - Full Width & Height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-full"
        >
          {/* Desktop Banner - Full Viewport Width */}
          <div className="hidden md:block relative w-full" style={{ height: '70vh', minHeight: '500px' }}>
            <Image
              src="/hero-banner-desktop.png"
              alt="appp Pro Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Tablet Banner - Full Viewport Width */}
          <div className="hidden tablet:block md:hidden relative w-full" style={{ height: '60vh', minHeight: '400px' }}>
            <Image
              src="/hero-banner-tablet.jpg"
              alt="appp Pro Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Banner - Full Viewport Width */}
          <div className="md:hidden relative w-full" style={{ height: '80vh', minHeight: '600px' }}>
            <Image
              src="/hero-banner-mobile.png"
              alt="appp Pro Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
