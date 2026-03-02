"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

const StatItem = ({ end, suffix, label }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center px-8 py-12 flex-1">
      <div className="text-5xl md:text-7xl font-bold text-white mb-3">
        {count}{suffix}
      </div>
      <div className="text-neutral-500 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

export const StatsStrip = () => {
  return (
    <section className="border-y border-neutral-800 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-800">
        <StatItem end={12} suffix="+" label="Cities" />
        <StatItem end={200} suffix="+" label="Service Categories" />
        <StatItem end={5000} suffix="+" label="Vetted Professionals" />
      </div>
    </section>
  );
};
