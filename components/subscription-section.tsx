"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const SUBSCRIPTION_PLANS = [
  {
    title: "Weekly Ritual",
    frequency: "Every week",
    discount: "25% OFF",
    description: "For the essentials you can't live without. Perfect for grooming, cleaning, or weekly coaching.",
    icon: "📅",
  },
  {
    title: "Bi-Weekly Pulse",
    frequency: "Every 2 weeks",
    discount: "15% OFF",
    description: "Stay consistent with less commitment. Ideal for garden maintenance or specialized therapy.",
    icon: "🔄",
  },
  {
    title: "Monthly Standard",
    frequency: "Every month",
    discount: "10% OFF",
    description: "The set-and-forget solution for monthly check-ins and recurring home maintenance.",
    icon: "✨",
  },
];

export const SubscriptionSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            SUBSCRIPTIONS
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl">
            You know what you want.<br />
            <span className="text-neutral-500">You know where and when.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Subscribe to your favorite professionals and automate your routine. 
            Receive consistent, high-quality service at a heavy discount—just for being a regular.
          </p>
        </motion.div>

        {/* Subscription Cards Row */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] px-6 md:px-[calc((100vw-1280px)/2+24px)]">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 no-scrollbar cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {SUBSCRIPTION_PLANS.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[380px] bg-neutral-950 border border-neutral-800 rounded-[2rem] p-8 flex flex-col gap-6 group hover:border-emerald-500/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {plan.icon}
                </div>
                
                <div>
                  <div className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-1">
                    {plan.discount}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-neutral-500 text-sm font-medium">
                    {plan.frequency}
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                  {plan.description}
                </p>

                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-white font-medium text-sm">Automated billing</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Spacer for scroll end padding */}
            <div className="flex-shrink-0 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
