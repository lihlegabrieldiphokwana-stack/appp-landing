"use client";

import Image from "next/image";
import React, { useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  imageClassName?: string;
  compact?: boolean;
}

export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  imageClassName = "object-cover",
  compact = false,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(52);

  return (
    <div className={`relative overflow-hidden bg-neutral-950 ${className}`}>
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        className={imageClassName}
        sizes={compact ? "360px" : "(max-width: 768px) 92vw, 560px"}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className={imageClassName}
          sizes={compact ? "360px" : "(max-width: 768px) 92vw, 560px"}
        />
      </div>

      <div className="absolute left-3 top-3 rounded-full bg-black/55 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-neutral-200">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-emerald-400/90 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-black">
        After
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_24px_rgba(255,255,255,0.7)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/65 backdrop-blur-md">
          <div className="flex items-center gap-1">
            <div className="h-3 w-1 rounded-full bg-white/80" />
            <div className="h-3 w-1 rounded-full bg-white/80" />
          </div>
        </div>
      </div>

      <input
        aria-label="Compare before and after Magic Remover images"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-0 cursor-ew-resize opacity-0"
      />

      {!compact && (
        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-neutral-300">
            <span>Original photo</span>
            <span>Clean listing image</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: `${position}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
