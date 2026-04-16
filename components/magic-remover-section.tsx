"use client";

import React from "react";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./before-after-slider";

export const MagicRemoverSection = () => {
  const costs = [
    { label: "Photographer + studio", value: "R 12,000" },
    { label: "Editing + retouching", value: "R 8,500" },
    { label: "Reshoots + revisions", value: "R 6,000" },
  ];

  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              MAGIC REMOVER
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              AI cleanup for product shots in seconds.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              A business with 50 products or services can burn through budget on photographers, editors, retouching, and repeat shoots. Bouul gives vendors a fast way to clean up catalog imagery without paying for a long production pipeline.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              Remove clutter, simplify backgrounds, and turn rough product photos into clean listing images without waiting on a studio slot.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-2">
                  Faster
                </div>
                <div className="text-neutral-300 text-sm leading-relaxed">
                  Cleanup happens in seconds instead of waiting for post-production.
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-2">
                  Cheaper
                </div>
                <div className="text-neutral-300 text-sm leading-relaxed">
                  One workflow replaces photography, editing, and rework on simple catalog shots.
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-2">
                  Better conversion
                </div>
                <div className="text-neutral-300 text-sm leading-relaxed">
                  Cleaner visuals make products and services easier to trust and buy.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-neutral-500">
                    Example for 50 items
                  </div>
                  <div className="text-white font-semibold text-lg">Traditional shoot stack</div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                  Bouul: seconds
                </div>
              </div>

              <div className="space-y-2">
                {costs.map((cost) => (
                  <div key={cost.label} className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-black/30 px-4 py-3">
                    <span className="text-sm text-neutral-300">{cost.label}</span>
                    <span className="text-sm font-semibold text-white">{cost.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                  <span className="text-sm text-emerald-200">Example total</span>
                  <span className="text-sm font-semibold text-emerald-300">R 26,500+</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div
              className="bg-neutral-950 border border-neutral-800 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-black/40"
              style={{
                width: "min(560px, 92vw)",
                aspectRatio: "560/760",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_32%)]" />
              <div className="relative h-full p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                  <span>Magic Remover</span>
                  <span>One pass cleanup</span>
                </div>

                <BeforeAfterSlider
                  beforeSrc="/optimized/magic_remover_before.jpg"
                  afterSrc="/optimized/magic_remover_after.jpg"
                  beforeAlt="Original product photo before Magic Remover cleanup"
                  afterAlt="Clean product photo after Magic Remover cleanup"
                  beforeLabel="Before"
                  afterLabel="After"
                  beforeCaption="Original photo"
                  afterCaption="Clean listing image"
                  className="flex-1 min-h-0 rounded-[1.7rem] border border-white/10"
                />

                <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Why it matters
                    </div>
                    <div className="text-[10px] text-emerald-300 font-medium">No studio backlog</div>
                  </div>
                  <div className="text-sm text-neutral-300 leading-relaxed">
                    Clean product photography helps small businesses publish more listings faster, without paying for every retouch or reshoot.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
