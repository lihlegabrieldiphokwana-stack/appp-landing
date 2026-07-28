"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Hash, Image, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Section, Eyebrow, Reveal } from "./primitives";

/* Short-form result clips — swap these paths for real Glimpses footage later. */
const glimpseTiles = [
  { src: "/glimpses/braids.mp4", poster: "/glimpses/braids.jpg", label: "Braids" },
  { src: "/glimpses/manicure.mp4", poster: "/glimpses/manicure.jpg", label: "Manicure" },
  { src: "/glimpses/cleaning.mp4", poster: "/glimpses/cleaning.jpg", label: "Deep clean" },
];

const contentHighlights = [
  {
    icon: Play,
    title: "Short videos & photos",
    body: "Scroll glimpses of real service results — braid styles fresh off the chair, detailed manicures, spotless cleaning, engine bay before-and-afters. See the work before you book it.",
  },
  {
    icon: Hash,
    title: "Trending hashtags",
    body: "Tap a hashtag to see every glimpse tagged with it. Discover popular styles, trending techniques, and local service trends in your area.",
  },
  {
    icon: Image,
    title: "Book from a glimpse",
    body: "Every glimpse is linked back to the service and vendor it's about. See something you like? One tap opens the booking page. Inspiration to action in seconds.",
  },
];

/* ─── Hashtag data ──────────────────────────────────────────────────────────── */
const ROW_A = [
  { tag: "braids", views: "24.1k" },
  { tag: "deepclean", views: "18.4k" },
  { tag: "manicure", views: "31.2k" },
  { tag: "paintjob", views: "9.8k" },
  { tag: "haircut", views: "41.7k" },
  { tag: "plumbing", views: "6.2k" },
  { tag: "nailart", views: "52.3k" },
  { tag: "cardetail", views: "14.9k" },
];

const ROW_B = [
  { tag: "sandtonbeauty", views: "8.3k" },
  { tag: "rosebank", views: "11.6k" },
  { tag: "weekendclean", views: "7.1k" },
  { tag: "locs", views: "28.4k" },
  { tag: "gelnails", views: "36.8k" },
  { tag: "tilegrouting", views: "3.4k" },
  { tag: "balayage", views: "19.2k" },
  { tag: "acrepairs", views: "5.6k" },
];

/* ─── Single hashtag pill ───────────────────────────────────────────────────── */
function HashPill({
  tag,
  views,
  active,
  onClick,
}: {
  tag: string;
  views: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex-shrink-0 flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold cursor-pointer select-none transition-colors duration-200 ${
        active
          ? "border-b-green bg-b-green/10 text-b-green-deep"
          : "border-b-line bg-b-paper text-b-ink-soft hover:border-b-ink/30 hover:text-b-ink"
      }`}
    >
      {/* ripple on active */}
      {active && (
        <motion.span
          className="absolute inset-0 rounded-full border border-b-green"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.55 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="text-b-green-deep opacity-70">#</span>
      <span>{tag}</span>
      {active && (
        <motion.span
          key={tag}
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="ml-1 flex items-center gap-0.5 text-[10px] font-normal text-b-green-deep/70"
        >
          <TrendingUp className="h-2.5 w-2.5" />
          {views}
        </motion.span>
      )}
    </motion.button>
  );
}

/* ─── Infinite marquee row ──────────────────────────────────────────────────── */
function MarqueeRow({
  tags,
  direction,
  activeTag,
  onTagClick,
}: {
  tags: typeof ROW_A;
  direction: "left" | "right";
  activeTag: string;
  onTagClick: (tag: string) => void;
}) {
  // Duplicate for seamless loop
  const doubled = [...tags, ...tags];
  const duration = tags.length * 4.5;

  return (
    <div className="relative overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-b-paper-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-b-paper-raised to-transparent" />

      <motion.div
        className="flex gap-2 w-max"
        animate={{ x: direction === "left" ? [0, `-50%`] : [`-50%`, 0] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <HashPill
            key={`${item.tag}-${i}`}
            tag={item.tag}
            views={item.views}
            active={activeTag === item.tag}
            onClick={() => onTagClick(item.tag)}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Hashtag strip wrapper ─────────────────────────────────────────────────── */
function HashtagStrip() {
  const allTags = [...ROW_A, ...ROW_B];
  const [activeTag, setActiveTag] = useState(ROW_A[2].tag);

  // Auto-cycle active tag every 2.8 s
  useEffect(() => {
    const ids = allTags.map((t) => t.tag);
    let i = ids.indexOf(activeTag);
    const interval = setInterval(() => {
      i = (i + 1) % ids.length;
      setActiveTag(ids[i]);
    }, 2800);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-8 space-y-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-b-ink-faint mb-3">
        Trending on Glimpses
      </p>
      <MarqueeRow
        tags={ROW_A}
        direction="left"
        activeTag={activeTag}
        onTagClick={setActiveTag}
      />
      <MarqueeRow
        tags={ROW_B}
        direction="right"
        activeTag={activeTag}
        onTagClick={setActiveTag}
      />
    </div>
  );
}

export function GlimpsesFeature() {
  return (
    <Section className="bg-b-paper-raised py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <Reveal>
            <div className="flex items-center justify-center">
              <img
                src="/iphone-air-glimpses.svg"
                alt="Glimpses short-content feed on iPhone Air"
                className="w-full max-w-[280px] object-contain drop-shadow-2xl"
              />
            </div>
          </Reveal>
          {contentHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex gap-5 rounded-3xl border border-b-line bg-b-paper p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(24,39,32,0.06)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-6 w-6 text-b-ink" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-b-ink">{item.title}</h3>
                  <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <Eyebrow>Glimpses</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            See the work. Feel the vibe. Book in one tap.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-ink-soft">
            Bouul&apos;s short-content feed (Glimpses) turns service discovery
            into a visual experience. Scroll before-and-after transformations,
            watch service highlights, and go from &quot;that looks amazing&quot;
            to confirmed booking in a single tap. Vendors build visual
            portfolios. Customers get inspired.
          </p>
          <Link
            href="/download"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-b-ink px-6 py-3 text-sm font-semibold text-b-paper transition-colors hover:bg-b-forest"
          >
            <img src="/bouul-logo-mark.svg" alt="" className="h-4 w-4 shrink-0" />
            <span>Download the app to explore</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <HashtagStrip />
        </Reveal>
      </div>
    </Section>
  );
}
