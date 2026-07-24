"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SceneCard
 *
 * A "pros at work" photograph with a floating text overlay — the visual
 * building block for category browsing and featured scene grids. The image
 * fills the card; a bottom-up gradient scrim anchors the floating tag chip
 * and label so copy stays readable over any photo.
 *
 * Variants:
 *  - "feature"  large, with tag + label + blurb + arrow. For bento heroes.
 *  - "tile"     compact, tag + label only. For dense category grids.
 *  - "minimal"  label only, subtle scrim. For filter chips / mini thumbs.
 */
const TAG_CLASS =
  "absolute left-3 top-3 z-10 rounded-full bg-b-forest/80 px-2 py-0.5 font-price text-[9px] font-semibold uppercase tracking-[0.14em] text-b-cream backdrop-blur-sm leading-tight";

export function SceneCard({
  src,
  alt,
  tag,
  label,
  blurb,
  href,
  variant = "tile",
  fill = false,
  className,
}: {
  src: string;
  alt: string;
  tag?: string;
  label: string;
  blurb?: string;
  href?: string;
  variant?: "feature" | "tile" | "minimal";
  /** Skip the default aspect ratio and fill the parent's height (h-full). */
  fill?: boolean;
  className?: string;
}) {
  const inner = (
    <>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Floating tag chip (top-left) */}
      {tag && variant !== "minimal" && (
        <span className={TAG_CLASS}>
          {tag}
        </span>
      )}

      {/* Bottom gradient scrim + floating text */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 bg-gradient-to-t from-b-forest via-b-forest/60 to-transparent",
          variant === "feature" ? "pt-20 pb-4 px-4" : "pt-14 pb-3 px-3",
        )}
      >
        <span
          className={cn(
            "font-display font-extrabold tracking-tight text-b-cream",
            variant === "feature" ? "text-xl md:text-2xl" : "text-base",
          )}
        >
          {label}
        </span>
        {variant === "feature" && blurb && (
          <span className="text-sm leading-snug text-b-cream/80">{blurb}</span>
        )}
      </div>

      {/* Arrow affordance on feature cards */}
      {variant === "feature" && (
        <span className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-b-cream/90 text-b-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const cardClass = cn(
    "group relative overflow-hidden rounded-2xl border border-b-line bg-b-paper-deep",
    // When `fill` is set, the card stretches to its parent (h-full) and we
    // skip the aspect ratio so it fits the grid cell cleanly.
    fill
      ? "h-full"
      : variant === "feature"
        ? "min-h-[400px] md:min-h-[480px]"
        : variant === "tile"
          ? "aspect-[4/5]"
          : "aspect-square",
    className,
  );

  return href ? (
    <Link href={href} className={cardClass}>
      {inner}
    </Link>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}
