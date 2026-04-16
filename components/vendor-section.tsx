"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp-effect";
import { VendorDashboardPreview } from "@/components/vendor-dashboard-preview";

export const VendorSection = () => {
  return (
    <section id="vendor" className="bg-black border-t border-neutral-900">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Built for professionals <br /> who want real growth.
        </motion.h1>
      </LampContainer>

      {/* Stats row */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-800 rounded-2xl overflow-hidden">
          {[
            { stat: "10x", label: "more bookings" },
            { stat: "Zero", label: "commission surprises" },
            { stat: "Full", label: "dashboard control" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-10 text-center ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-neutral-800" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {item.stat}
              </div>
              <div className="text-neutral-500 text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Resonance discovery",
              description:
                "Test multiple titles and images per service so the platform can learn what converts for each customer.",
            },
            {
              title: "Live analytics",
              description:
                "See impressions, views, intents, and bookings in one view, then adjust quickly when performance changes.",
            },
            {
              title: "Pricing control",
              description:
                "Set service rates, emergency pricing, travel fees, and availability rules without waiting on support.",
            },
            {
              title: "Professional storefront",
              description:
                "Show reviews, videos, verified identity, and category-specific services in a profile that feels complete.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
            >
              <div className="text-white font-semibold text-lg mb-2">
                {item.title}
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA to vendor page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 text-sm mb-6">
            Discover AI-powered discovery, multi-title testing, and real-time analytics.
          </p>
          <a
            href="/vendors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full text-sm border border-neutral-800 transition-colors"
          >
            Learn more about selling on Bouul
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl shadow-black/40"
            style={{
              width: "min(820px, 90vw)",
              aspectRatio: "820/1180",
            }}
          >
            <VendorDashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
