"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SceneCard
 *
 * A "pros at work" photograph with a floating text overlay — the visual
 * building block for category browsing and featured scene grids.
 *
 * Variants:
 *  - "feature"  large, with tag + label + blurb + arrow. For bento heroes.
 *  - "tile"     compact, tag + label only. For dense category grids.
 *  - "minimal"  label only, subtle scrim. For filter chips / mini thumbs.
 */
export function SceneCard({
  src,
  alt,
  tag,
  label,
  blurb,
  href,
  variant = "tile",
  className,
}: {
  src: string;
  alt: string;
  tag?: string;
  label: string;
  blurb?: string;
  href?: string;
  variant?: "feature" | "tile" | "minimal";
  className?: string;
}) {
  const cardClass = cn(
    "group relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-deep",
    variant === "feature"
      ? "min-h-[340px] md:min-h-[400px]"
      : "min-h-[280px]",
    className,
  );

  const inner = (
    <>
      {/* Image fills the card via object-cover */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Tag chip */}
      {tag && variant !== "minimal" && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-b-forest/80 px-2.5 py-1 font-price text-[10px] font-semibold uppercase tracking-[0.16em] text-b-cream backdrop-blur-sm">
          {tag}
        </span>
      )}

      {/* Arrow affordance on feature cards */}
      {variant === "feature" && (
        <span className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-b-cream/90 text-b-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}

      {/* Bottom scrim + label */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-b-forest via-b-forest/60 to-transparent",
          variant === "feature" ? "pt-24 pb-5 px-5" : "pt-16 pb-4 px-4",
        )}
      >
        <span
          className={cn(
            "font-display font-extrabold tracking-tight text-b-cream block",
            variant === "feature" ? "text-xl md:text-2xl" : "text-base",
          )}
        >
          {label}
        </span>
        {variant === "feature" && blurb && (
          <span className="mt-1 block text-sm leading-snug text-b-cream/80">{blurb}</span>
        )}
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={cardClass}>
      {inner}
    </Link>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}
