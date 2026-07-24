"use client";

import React, { useState } from "react";
import { Image as ImageIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MediaPlaceholder
 *
 * A minimal outline-box stand-in for images and video. When `src` / `videoSrc`
 * is provided it becomes a true drop-in: the asset renders the moment it loads
 * (or lands in /public later), and silently falls back to the outline box on
 * error — so you never see a broken-image icon.
 *
 *   <MediaPlaceholder kind="image" src="/pros/marco-t.jpg" alt="Marco" label="Profile photo" />
 *   <MediaPlaceholder kind="video" videoSrc="/clips/braids.mp4" poster="/clips/braids.jpg" label="Service clip" />
 *
 * `tone` selects the surface palette:
 *   - "sunlit" (default): the Sunlit Neighbourhood --b-* tokens used site-wide.
 *   - "ink": the legacy dark deep-link system (neutral-800/emerald) used by
 *            lib/public-deep-link.tsx.
 */

type Tone = "sunlit" | "ink";
type Ratio = "1/1" | "4/3" | "16/9" | "9/16" | "21/9" | "none";

const RATIO_CLASS: Record<Exclude<Ratio, "none">, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
  "21/9": "aspect-[21/9]",
};

export function MediaPlaceholder({
  kind = "image",
  src,
  videoSrc,
  poster,
  alt = "",
  label,
  ratio = "none",
  tone = "sunlit",
  className,
  rounded = "rounded-2xl",
}: {
  kind?: "image" | "video";
  /** Image source path. When omitted (or fails to load) the outline box shows. */
  src?: string;
  /** Video source path. When omitted the outline box shows. */
  videoSrc?: string;
  /** Optional poster frame for a video placeholder. */
  poster?: string;
  alt?: string;
  /** Optional mono micro-label, e.g. "storefront photo". */
  label?: string;
  ratio?: Ratio;
  tone?: Tone;
  className?: string;
  rounded?: string;
}) {
  const [imgOk, setImgOk] = useState(false);
  const [vidOk, setVidOk] = useState(false);

  // If an image/video src is present and has loaded, show the real media.
  const showImage = kind === "image" && !!src && imgOk;
  const showVideo = kind === "video" && !!videoSrc && vidOk;
  const showMedia = showImage || showVideo;

  const box = toneBoxClasses(tone);
  const glyph = toneGlyphClasses(tone);

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-dashed",
        rounded,
        box,
        ratio !== "none" && RATIO_CLASS[ratio],
        className,
      )}
    >
      {/* Real media — hidden until it has loaded, so the box never flashes empty. */}
      {showImage && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {showVideo && (
        <video
          src={videoSrc}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />
      )}

      {/* Hidden loaders that flip the ok flags and never render broken UI. */}
      {kind === "image" && src && !imgOk && (
        <img
          src={src}
          alt=""
          aria-hidden
          className="hidden"
          onLoad={() => setImgOk(true)}
          onError={() => setImgOk(false)}
        />
      )}
      {kind === "video" && videoSrc && !vidOk && (
        <video
          src={videoSrc}
          className="hidden"
          onLoadedData={() => setVidOk(true)}
          onError={() => setVidOk(false)}
        />
      )}

      {/* Outline placeholder face — only when media is not (yet) showing. */}
      {!showMedia && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
          {kind === "video" ? (
            <Play className={cn("h-5 w-5", glyph)} strokeWidth={1.75} />
          ) : (
            <ImageIcon className={cn("h-5 w-5", glyph)} strokeWidth={1.75} />
          )}
          {label && (
            <span className={cn("font-price text-[10px] uppercase tracking-[0.18em]", glyph)}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/** Surface palette for the box body, per tone. */
function toneBoxClasses(tone: Tone): string {
  if (tone === "ink") {
    return "bg-black text-neutral-500 border-neutral-800";
  }
  return "bg-b-paper-raised text-b-ink-faint border-b-line";
}

/** Glyph + label palette, per tone. */
function toneGlyphClasses(tone: Tone): string {
  if (tone === "ink") return "text-neutral-600";
  return "text-b-ink-faint/70";
}
