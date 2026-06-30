"use client";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface TrustMetric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const metrics: TrustMetric[] = [
  { value: 10, prefix: "", suffix: "K+", label: "Active Providers" },
  { value: 2, prefix: "Sub-", suffix: "s", label: "Match Latency" },
  { value: 99.9, prefix: "", suffix: "%", label: "Uptime" },
];

function Counter({ metric }: { metric: TrustMetric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const spring = useSpring(0, { stiffness: 100, damping: 30, duration: 2000 });

  React.useEffect(() => {
    if (isInView) spring.set(metric.value);
  }, [isInView, spring, metric.value]);

  const display = useTransform(spring, (v) =>
    metric.value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toString()
  );

  return (
    <span ref={ref} className="tabular-nums">
      {metric.prefix}
      <motion.span>{display}</motion.span>
      {metric.suffix}
    </span>
  );
}

export const TrustTickers = () => {
  return (
    <section className="py-16 bg-background border-y border-mode-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-mode-border">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex-1 flex flex-col items-center justify-center py-8 md:py-0 first:pt-0 last:pb-0 md:first:pr-12 md:last:pl-12 md:px-12 gap-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tighter">
                <Counter metric={metric} />
              </div>
              <p className="text-slate-400 text-sm font-medium text-center">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
