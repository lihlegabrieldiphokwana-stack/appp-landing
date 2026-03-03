"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  bullets?: string[];
  cards?: FeatureCard[];
  align: "left" | "right";
  placeholderLabel: string;
}

export const FeatureSection = ({
  id,
  label,
  headline,
  body,
  secondaryBody,
  bullets,
  cards,
  align,
  placeholderLabel,
}: FeatureSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id={id} className="py-24 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-20 ${
            align === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: align === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-lg"
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

          {/* Phone placeholder side */}
          <motion.div
            initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 flex justify-center"
          >
            <div
              className="bg-neutral-900 border border-neutral-800 rounded-[3rem] flex flex-col overflow-hidden"
              style={{
                width: "min(390px, 85vw)",
                aspectRatio: "390/844",
              }}
            >
              {/* Fake status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-1">
                <span className="text-neutral-600 text-xs font-medium">9:41</span>
                <div className="w-4 h-2 border border-neutral-800 rounded-sm" />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="text-neutral-600 text-xs font-mono">390 × 844</div>
                <div className="text-neutral-700 text-[10px]">{placeholderLabel}</div>
              </div>
              {/* Home indicator */}
              <div className="flex justify-center pb-2">
                <div className="w-28 h-1 bg-neutral-800 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mechanics Cards (Dedicated Horizontal Scroll Row) */}
        {cards && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative w-screen left-1/2 right-1/2 -ml-[50vw] px-6 md:px-[calc((100vw-1280px)/2+24px)]"
          >
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-8 pt-2 no-scrollbar cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {cards.map((card, i) => (
                <MechanicCard key={i} card={card} index={i} />
              ))}
              {/* Spacer for scroll end padding */}
              <div className="flex-shrink-0 w-6" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
            <div
              className="bg-neutral-900 border border-neutral-800 rounded-[3rem] flex flex-col overflow-hidden"
              style={{
                width: "min(390px, 85vw)",
                aspectRatio: "390/844",
              }}
            >
              {/* Fake status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-1">
                <span className="text-neutral-600 text-xs font-medium">9:41</span>
                <div className="w-4 h-2 border border-neutral-800 rounded-sm" />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="text-neutral-600 text-xs font-mono">390 × 844</div>
                <div className="text-neutral-700 text-[10px]">{placeholderLabel}</div>
              </div>
              {/* Home indicator */}
              <div className="flex justify-center pb-2">
                <div className="w-28 h-1 bg-neutral-800 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
