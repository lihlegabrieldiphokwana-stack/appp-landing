"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProductShowcase = () => {
  const features = [
    {
      title: "Performance",
      description: "Lightning-fast processing that adapts to your workflow.",
      icon: "⚡",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Security",
      description: "Bank-level encryption keeps your data protected.",
      icon: "🔒",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Sync",
      description: "Seamlessly across all your devices, instantly.",
      icon: "🔄",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Get more done with Bouul.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 p-8 min-h-[300px] flex flex-col justify-end"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[600px] flex items-center justify-center"
        >
          {/* Placeholder for feature image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-500 text-sm mb-2">Feature Showcase Image</p>
              <p className="text-gray-600 text-xs">
                Recommended: 1400 × 800px
              </p>
            </div>
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 text-center p-8 max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Intelligence built in.
            </h3>
            <p className="text-xl text-gray-400 font-light">
              Smart features that learn how you work and adapt to your needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
