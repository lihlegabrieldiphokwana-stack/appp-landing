"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Standard page-width section shell. */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 md:px-8", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Small-caps mono label that opens a section. */
export function Eyebrow({
  children,
  tone = "green",
  className,
}: {
  children: React.ReactNode;
  tone?: "green" | "sun" | "cream";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-price text-[11px] font-semibold uppercase tracking-[0.22em]",
        tone === "green" && "text-b-green-deep",
        tone === "sun" && "text-b-sun",
        tone === "cream" && "text-b-cream/70",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Scroll-reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** ZAR price sticker — mono type on amber, like a shop-window tag. */
export function PriceTag({
  children,
  className,
  tilt = true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-md bg-b-sun px-2 py-0.5 font-price text-xs font-semibold text-b-ink shadow-[0_1px_0_rgba(24,39,32,0.25)]",
        tilt && "-rotate-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
