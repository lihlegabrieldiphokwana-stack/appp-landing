"use client";
import React, { useRef, useState, useEffect } from "react";
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
  appPreview?: string;
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
  appPreview,
}: FeatureSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalCards, setTotalCards] = useState(0);

  useEffect(() => {
    if (cards) {
      setTotalCards(cards.length);
    }
  }, [cards]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 280 + 20; // card width + gap (280px + 5px gap on each side)
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 280 + 20; // card width + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

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

          {/* Phone placeholder side - only render if appPreview exists */}
          {appPreview && (
            <motion.div
              initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 flex justify-center"
            >
              <div
                className="bg-neutral-950 border border-neutral-800 rounded-[3rem] flex flex-col overflow-hidden relative"
                style={{
                  width: "min(428px, 85vw)",
                  aspectRatio: "428/930.53",
                }}
              >
                <img
                  src={appPreview}
                  alt={placeholderLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
            className="relative -left-[50vw] right-[50vw] w-screen"
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 overflow-x-auto pb-8 pt-2 px-4 md:px-[calc((100vw-1280px)/2+24px)] no-scrollbar cursor-grab active:cursor-grabbing"
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

            {/* Apple-style Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: totalCards }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-1.5 bg-emerald-500"
                      : "w-1.5 h-1.5 bg-neutral-600 hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
