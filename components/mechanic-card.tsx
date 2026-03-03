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
        <div className="text-neutral-700 font-mono text-[10px] uppercase tracking-widest">
          {card.image ? (
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
          ) : (
            "Visual Mechanic"
          )}
        </div>
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
