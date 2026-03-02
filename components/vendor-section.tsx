"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp-effect";

export const VendorSection = () => {
  return (
    <section id="vendor" className="bg-black border-t border-neutral-900">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl md:text-6xl font-semibold text-white text-center tracking-tight max-w-3xl"
        >
          Built for professionals who mean business.
        </motion.h2>
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

        {/* Tablet placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-3xl flex items-center justify-center"
            style={{
              width: "min(820px, 90vw)",
              aspectRatio: "820/1180",
            }}
          >
            <div className="text-center">
              <div className="text-neutral-600 text-xs font-mono">820 × 1180</div>
              <div className="text-neutral-700 text-[10px]">Vendor Dashboard Preview</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
