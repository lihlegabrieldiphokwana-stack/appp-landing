"use client";
import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-section";

interface MechanicCardProps {
  card: FeatureCard;
  index: number;
}

export const MechanicCard = ({ card, index }: MechanicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[280px] md:w-[320px] bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 group hover:border-emerald-500/30 transition-colors"
    >
      {/* Glass-morphic Image Placeholder */}
      <div className="w-full aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden relative flex items-center justify-center border border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {card.visual ? (
          card.visual
        ) : card.image ? (
          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-neutral-950 p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative h-full rounded-xl border border-white/10 bg-black/30 p-3">
              <div className="h-2 w-16 rounded-full bg-emerald-400/80" />
              <div className="mt-5 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-white/15" />
                <div className="h-3 w-1/2 rounded-full bg-white/10" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
                <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-emerald-400 transition-colors">
          {card.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};
