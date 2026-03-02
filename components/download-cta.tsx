"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const DownloadCTA = () => {
  return (
    <section id="download" className="relative py-32 bg-black overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Your city. Your services. Your Bouul.
          </h2>
          <p className="text-xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            Download free. Available on iOS and Android.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-neutral-100 text-black font-medium rounded-full transition-colors min-w-[200px] justify-center"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.88-2.38 5.98.66 7.13-.53 1.43-1.27 2.86-2.71 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-neutral-600">Download on the</div>
                <div className="text-lg font-semibold leading-none">App Store</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-neutral-100 text-black font-medium rounded-full transition-colors min-w-[200px] justify-center"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12V18.92L21.92,12L16.81,5.08V8.88L13.88,12L16.81,15.12M20.16,12.61L21.5,12L20.16,11.39V12.61Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-neutral-600">Get it on</div>
                <div className="text-lg font-semibold leading-none">Google Play</div>
              </div>
            </motion.a>
          </div>

          <p className="text-neutral-600 text-sm">
            Free to download • No subscription • Works in your city
          </p>
        </motion.div>
      </div>
    </section>
  );
};
