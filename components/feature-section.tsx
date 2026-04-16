"use client";
import React from "react";
import { motion } from "framer-motion";
import { MechanicCard } from "./mechanic-card";

export interface FeatureCard {
  title: string;
  description: string;
  image?: string; // Optional image URL or placeholder data
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
  placeholderLabel: string;
  appPreview?: string | React.ReactNode;
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
  placeholderLabel,
  appPreview,
}: FeatureSectionProps) => {
  const hasPreview = Boolean(appPreview);

  return (
    <section id={id} className="py-24 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col lg:flex-row ${hasPreview ? "items-center" : "items-start"} gap-12 md:gap-20 ${
            hasPreview ? "mb-20" : "mb-12 md:mb-16"
          } ${
            align === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: align === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className={`flex-1 ${hasPreview ? "max-w-lg" : "max-w-2xl"}`}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              {label}
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              {headline}
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              {body}
            </p>

            {secondaryBody && (
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                {secondaryBody}
              </p>
            )}

            {supportingCards && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {supportingCards.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                    <div className="text-emerald-400 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">
                      {item.title}
                    </div>
                    <div className="text-neutral-300 text-sm leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bullets (Legacy) */}
            {bullets && !cards && (
              <div className="flex flex-col gap-3">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Phone preview side - render either an image or a custom mockup */}
          {appPreview && (
            <motion.div
              initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 flex justify-center"
            >
              <div
                className="bg-neutral-950 border border-neutral-800 rounded-[3rem] flex flex-col overflow-hidden relative shadow-2xl shadow-black/40"
                style={{
                  width: "min(428px, 85vw)",
                  aspectRatio: "428/930.53",
                }}
              >
                {typeof appPreview === "string" ? (
                  <img
                    src={appPreview}
                    alt={placeholderLabel}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0">{appPreview}</div>
                )}
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-28 h-1 bg-white/20 rounded-full backdrop-blur-md" />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mechanics Cards (Dedicated Horizontal Scroll Row) */}
        {cards && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex gap-5 overflow-x-auto overscroll-x-contain pb-6 pt-2 snap-x snap-mandatory">
              {cards.map((card, i) => (
                <div key={i} className="snap-start">
                  <MechanicCard card={card} index={i} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
