"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    category: "Plumbing",
    description: "Leak detection & pipe repair",
    price: 350,
    unit: "per call-out",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625v2.625m0 2.625V15" />
      </svg>
    ),
  },
  {
    category: "Hair & Beauty",
    description: "Cut, colour & treatment",
    price: 280,
    unit: "per session",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    category: "Home Cleaning",
    description: "Full house deep clean",
    price: 420,
    unit: "per visit",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    category: "Electrical",
    description: "Fault finding & repair",
    price: 490,
    unit: "per hour",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    category: "Private Tutoring",
    description: "All grades & subjects",
    price: 220,
    unit: "per hour",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    category: "Photography",
    description: "Portrait & event shoots",
    price: 1200,
    unit: "per shoot",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
];

interface PriceCardProps {
  category: string;
  description: string;
  price: number;
  unit: string;
  icon: React.ReactNode;
  delay: number;
}

const PriceCard = ({ category, description, price, unit, icon, delay }: PriceCardProps) => {
  const [display, setDisplay] = useState(0);
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      const totalDuration = 2200;
      const start = Date.now();

      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / totalDuration, 1);

        if (progress < 0.6) {
          // Scramble phase: fast random numbers across a wide range
          setDisplay(Math.floor(Math.random() * price * 2.5));
        } else if (progress < 0.85) {
          // Convergence phase: narrowing toward target with noise
          const t = (progress - 0.6) / 0.25;
          const noise = price * (1 - t) * 0.9;
          const raw = price + (Math.random() - 0.5) * noise * 2;
          setDisplay(Math.max(0, Math.floor(raw)));
        } else if (progress < 1) {
          // Final lock-in: tiny jitter then snap
          const jitter = Math.floor((Math.random() - 0.5) * price * 0.06);
          setDisplay(price + jitter);
        } else {
          setDisplay(price);
          setSettled(true);
          clearInterval(interval);
        }
      }, 45);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [isInView, price, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="relative group bg-neutral-950 border border-neutral-800 rounded-2xl p-6 overflow-hidden hover:border-neutral-700 transition-colors duration-300"
    >
      {/* Subtle emerald glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.05),transparent_60%)]" />

      {/* Icon + category */}
      <div className="flex items-center gap-2 mb-4">
        <div className="text-emerald-400">{icon}</div>
        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-neutral-500 text-sm mb-5">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-neutral-500 text-lg font-light">R</span>
        <span
          className={`text-4xl md:text-5xl font-bold tabular-nums transition-colors duration-300 ${
            settled ? "text-white" : "text-neutral-400"
          }`}
        >
          {display.toLocaleString("en-ZA")}
        </span>
      </div>
      <div className="text-neutral-600 text-xs mt-1 font-mono">{unit}</div>

      {/* Settled indicator dot */}
      <div
        className={`absolute top-5 right-5 w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
          settled ? "bg-emerald-400" : "bg-neutral-700"
        }`}
      />
    </motion.div>
  );
};

export const DynamicPricing = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            PRICING
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Transparent pricing.{" "}
            <span className="text-neutral-500">Set by the pros.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl">
            Real rates from verified professionals in your city. You see exactly what you pay before you book.
          </p>
        </motion.div>

        {/* Price cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <PriceCard
              key={service.category}
              {...service}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-neutral-700 text-sm text-center"
        >
          Prices shown are starting rates. Final quote agreed between you and the professional.
        </motion.p>
      </div>
    </section>
  );
};
