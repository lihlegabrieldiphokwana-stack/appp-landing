"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Get <span className="text-emerald-400">Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the future.
            Download now and start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/25"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.88-2.38 5.98.66 7.13-.53 1.43-1.27 2.86-2.71 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg leading-none">App Store</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/25"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12V18.92L21.92,12L16.81,5.08V8.88L13.88,12L16.81,15.12M20.16,12.61L21.5,12L20.16,11.39V12.61Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-lg leading-none">Google Play</div>
              </div>
            </motion.a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free to download
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              14-day free trial
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
