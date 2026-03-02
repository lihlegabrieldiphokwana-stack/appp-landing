"use client";
import React from "react";
import { motion } from "framer-motion";

export const CinematicStrip = () => {
  return (
    <section className="py-32 md:py-48 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white">
          Every service.
        </h2>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white">
          Every professional.
        </h2>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-emerald-400">
          One app.
        </h2>
      </motion.div>
    </section>
  );
};
