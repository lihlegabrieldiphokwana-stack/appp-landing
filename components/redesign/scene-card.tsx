"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    "group relative flex flex-col overflow-hidden rounded-2xl border border-b-line bg-b-paper-raised h-full",
    className,
  );

  const img = (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-b-paper-deep",
        variant === "feature"
          ? "aspect-[16/9] md:aspect-[16/10]"
          : "aspect-[4/3]",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Tag chip overlaid on image */}
      {tag && variant !== "minimal" && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-b-forest/80 px-2.5 py-1 font-price text-[10px] font-semibold uppercase tracking-[0.16em] text-b-cream backdrop-blur-sm">
          {tag}
        </span>
      )}

      {/* Arrow */}
      {variant === "feature" && (
        <span className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-b-cream/90 text-b-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );

  const text = variant === "minimal" ? null : (
    <div className="px-4 py-3">
      <p
        className={cn(
          "font-display font-bold tracking-tight text-b-ink",
          variant === "feature" ? "text-lg" : "text-sm",
        )}
      >
        {label}
      </p>
      {variant === "feature" && blurb && (
        <p className="mt-1 text-sm leading-snug text-b-ink-soft">{blurb}</p>
      )}
    </div>
  );

  const full = (
    <>
      {img}
      {text}
    </>
  );

  return href ? (
    <Link href={href} className={cardClass}>
      {full}
    </Link>
  ) : (
    <div className={cardClass}>{full}</div>
  );
}
