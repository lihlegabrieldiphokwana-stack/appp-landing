"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, Play, Smartphone } from "lucide-react";

export function DownloadCta() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-28 md:py-40 text-center border-none">
      {/* Full-width Parallax GIF Background (High Opacity for maximum image visibility) */}
      <div
        className="absolute inset-0 z-0 opacity-90 bg-cover bg-center bg-no-repeat sm:bg-fixed scale-105"
        style={{ backgroundImage: "url('/neighbourhood-hiring-parallax.gif')" }}
      />

      {/* Graceful Top Backdrop Blur & Gradient Fade Overlay */}
      <div className="absolute top-0 inset-x-0 h-44 z-[1] pointer-events-none bg-gradient-to-b from-b-paper via-b-paper/60 to-transparent backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />

      {/* Ambient Sun Arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-[50%] bg-b-sun opacity-20 blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        {/* Eyebrow Pill */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-price text-xs font-semibold uppercase tracking-[0.25em] text-b-sun drop-shadow-md"
        >
          Free on iOS and Android
        </motion.p>

        {/* Main Heading Vertical Blur-to-Crisp Entrance */}
        <motion.h2
          initial={{ opacity: 0, y: 65, filter: "blur(18px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-white md:text-7xl leading-[1.05] drop-shadow-lg"
        >
          Your neighbourhood is hiring itself out.
        </motion.h2>

        {/* Subtitle Vertical Blur Entrance */}
        <motion.p
          initial={{ opacity: 0, y: 50, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-b-cream/80 leading-relaxed font-medium drop-shadow-md"
        >
          Download Bouul and book your first verified pro today — or put your
          own name on the map.
        </motion.p>

        {/* CTA Buttons Vertical Blur Entrance with Official Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap"
        >
          {/* Official Apple App Store Badge */}
          <Link
            href="/download"
            className="flex items-center gap-3 rounded-2xl bg-black border border-white/20 px-6 py-3 transition-all hover:scale-[1.04] hover:border-white/50 hover:bg-neutral-900 shadow-2xl min-h-[52px]"
          >
            <svg className="h-7 w-7 text-white fill-current shrink-0" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-92.1zM262.3 84.1c25.4-30.7 22.3-67.6 21-76.1-24.1 1.4-53.7 16.4-70.1 35.6-18 20.8-24.7 50.8-22.1 76.1 27 2 54.1-13.8 71.2-35.6z"/>
            </svg>
            <div className="text-left">
              <span className="text-[9px] uppercase font-bold text-neutral-400 block tracking-wider leading-none mb-0.5">Download on the</span>
              <span className="text-sm font-extrabold text-white tracking-tight leading-none font-display">App Store</span>
            </div>
          </Link>

          {/* Official Google Play Store Badge */}
          <Link
            href="/download"
            className="flex items-center gap-3 rounded-2xl bg-black border border-white/20 px-6 py-3 transition-all hover:scale-[1.04] hover:border-white/50 hover:bg-neutral-900 shadow-2xl min-h-[52px]"
          >
            <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 0 1-.61-1.637V3.451c0-.623.224-1.206.609-1.637z" />
              <path fill="#EA4335" d="M17.156 8.636L13.792 12l3.364 3.364 3.93-2.27c1.37-.79 1.37-2.078 0-2.868l-3.93-2.27z" />
              <path fill="#FBBC04" d="M3.61 1.814l10.182 10.186 3.364-3.364-10.74-6.2c-.85-.49-1.956-.375-2.806.378z" />
              <path fill="#34A853" d="M3.61 22.186l10.182-10.186 3.364 3.364-10.74 6.2c-.85.49-1.956.375-2.806-.378z" />
            </svg>
            <div className="text-left">
              <span className="text-[9px] uppercase font-bold text-neutral-400 block tracking-wider leading-none mb-0.5">GET IT ON</span>
              <span className="text-sm font-extrabold text-white tracking-tight leading-none font-display">Google Play</span>
            </div>
          </Link>

          {/* Join as a Pro Badge */}
          <Link
            href="/vendors"
            className="flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/70 min-h-[52px]"
          >
            <Smartphone className="h-5 w-5 text-b-sun" /> Join as a Pro
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
