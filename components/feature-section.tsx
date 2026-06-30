"use client";
import React from "react";
import { motion } from "framer-motion";

export interface FeatureCard {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  id: string;
  label: string;
  headline: string;
  body: string;
  secondaryBody?: string;
  supportingCards?: Array<{
    title: string;
    description: string;
  }>;
  bullets?: string[];
  cards?: FeatureCard[];
  align: "left" | "right";
}

export const FeatureSection = ({
  id,
  label,
  headline,
  body,
  secondaryBody,
  supportingCards,
  bullets,
  cards,
  align,
}: FeatureSectionProps) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-background border-t border-mode-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={`max-w-2xl ${align === "left" ? "ml-0" : ""}`}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            {label}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-50 tracking-tight mb-6">
            {headline}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            {body}
          </p>

          {secondaryBody && (
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {secondaryBody}
            </p>
          )}

          {supportingCards && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {supportingCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-mode-border bg-mode-surface p-4">
                  <div className="text-emerald-400 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">
                    {item.title}
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          )}

          {bullets && !cards && (
            <div className="flex flex-col gap-3">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Feature Cards — text-only grid */}
        {cards && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-mode-border bg-mode-surface p-6 group motion-transition hover:border-emerald-500/30"
                >
                  <h3 className="text-slate-50 font-semibold text-lg leading-tight group-hover:text-emerald-400 transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
