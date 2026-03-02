"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const OVERALL_SCORE = 4.8;
const TOTAL_REVIEWS = 12847;

const SENTIMENT_BARS = [
  { label: "Positive", pct: 94, color: "bg-emerald-500", textColor: "text-emerald-400" },
  { label: "Neutral",  pct:  4, color: "bg-yellow-500",  textColor: "text-yellow-400" },
  { label: "Negative", pct:  2, color: "bg-red-500",     textColor: "text-red-400" },
];

const THEMES = [
  { tag: "punctual",      count: 2847, sentiment: "pos" },
  { tag: "professional",  count: 2134, sentiment: "pos" },
  { tag: "great value",   count: 1892, sentiment: "pos" },
  { tag: "reliable",      count: 1654, sentiment: "pos" },
  { tag: "clean work",    count: 1423, sentiment: "pos" },
  { tag: "friendly",      count: 1287, sentiment: "pos" },
  { tag: "on time",       count: 1156, sentiment: "pos" },
  { tag: "would rebook",  count:  934, sentiment: "pos" },
  { tag: "price unclear", count:  198, sentiment: "neu" },
  { tag: "slow response", count:  287, sentiment: "neg" },
];

const REVIEWS = [
  {
    name: "Naledi C.",
    location: "Sandton",
    rating: 5,
    text: "Marco arrived early, diagnosed the geyser in minutes, and had it fixed before lunch. This is what professional service looks like.",
    sentiment: "Positive",
    score: 96,
    tags: ["punctual", "professional", "reliable"],
  },
  {
    name: "Kagiso T.",
    location: "Rosebank",
    rating: 5,
    text: "Booked a cleaner through Zola in literally 30 seconds. She arrived on time and did an incredible job. I haven't hired a cleaner any other way since.",
    sentiment: "Positive",
    score: 94,
    tags: ["great value", "friendly", "would rebook"],
  },
  {
    name: "Siyanda M.",
    location: "Durban North",
    rating: 4,
    text: "Great service overall. The electrician was knowledgeable and professional. Response time could be a little faster but the work quality was excellent.",
    sentiment: "Neutral",
    score: 72,
    tags: ["professional", "clean work"],
  },
  {
    name: "Dineo P.",
    location: "Cape Town",
    rating: 5,
    text: "The video feed let me see Thabo's work before booking. He was exactly as advertised — detail-oriented and fast. Bouul's vetting actually works.",
    sentiment: "Positive",
    score: 98,
    tags: ["professional", "reliable", "would rebook"],
  },
];

// ─── Star rating ──────────────────────────────────────────────────────────────
const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? "text-emerald-400" : "text-neutral-700"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─── Animated sentiment bar row ───────────────────────────────────────────────
const SentimentBar = ({
  label, pct, color, textColor, delay,
}: { label: string; pct: number; color: string; textColor: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className={`text-xs font-medium w-16 flex-shrink-0 ${textColor}`}>{label}</span>
      <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
      <span className="text-neutral-500 text-xs w-8 text-right flex-shrink-0">{pct}%</span>
    </div>
  );
};

// ─── Review card ──────────────────────────────────────────────────────────────
const ReviewCard = ({
  review, index,
}: { review: typeof REVIEWS[number]; index: number }) => {
  const sentimentMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    Positive: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
    Neutral:  { bg: "bg-yellow-500/10",  border: "border-yellow-500/20",  text: "text-yellow-400",  dot: "bg-yellow-400" },
    Negative: { bg: "bg-red-500/10",     border: "border-red-500/20",     text: "text-red-400",     dot: "bg-red-400" },
  };
  const sentimentConfig = sentimentMap[review.sentiment] ?? sentimentMap["Positive"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-white font-medium text-sm">{review.name}</div>
          <div className="text-neutral-600 text-xs">{review.location}</div>
        </div>
        <Stars rating={review.rating} />
      </div>

      {/* Quote */}
      <p className="text-neutral-400 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* AI sentiment badge */}
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${sentimentConfig.bg} ${sentimentConfig.border} w-fit`}>
        <div className={`w-1.5 h-1.5 rounded-full ${sentimentConfig.dot}`} />
        <span className={`text-xs font-medium ${sentimentConfig.text}`}>
          {review.sentiment} · {review.score}%
        </span>
        <span className="text-neutral-600 text-xs">AI confidence</span>
      </div>

      {/* Extracted tags */}
      <div className="flex flex-wrap gap-1.5">
        {review.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-500 text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const SentimentReviews = () => {
  const scoreRef = useRef<HTMLDivElement>(null);
  const scoreInView = useInView(scoreRef, { once: true, amount: 0.5 });
  const [scoreDisplay, setScoreDisplay] = useState(0);

  useEffect(() => {
    if (!scoreInView) return;
    const duration = 1200;
    const steps = 40;
    const target = OVERALL_SCORE;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setScoreDisplay(parseFloat((target * (step / steps)).toFixed(1)));
      if (step >= steps) { setScoreDisplay(target); clearInterval(interval); }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [scoreInView]);

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
            REVIEWS · AI SENTIMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            94% of customers leave positive.
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl">
            Every review is verified by a completed booking and analysed for sentiment, themes, and authenticity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* Left col — score + bars + themes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Overall score */}
            <div ref={scoreRef} className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <div className="text-7xl font-bold text-white tabular-nums leading-none mb-1">
                {scoreDisplay.toFixed(1)}
              </div>
              <Stars rating={5} />
              <div className="text-neutral-600 text-xs mt-2">
                {TOTAL_REVIEWS.toLocaleString()} verified reviews
              </div>
            </div>

            {/* Sentiment bars */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-1">
                Sentiment breakdown
              </div>
              {SENTIMENT_BARS.map((bar, i) => (
                <SentimentBar key={bar.label} {...bar} delay={i * 0.15} />
              ))}
            </div>

            {/* Key themes */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Top themes · AI extracted
              </div>
              <div className="flex flex-wrap gap-2">
                {THEMES.map((theme, i) => {
                  const color =
                    theme.sentiment === "pos" ? "border-emerald-800 text-emerald-400 bg-emerald-500/5"
                    : theme.sentiment === "neg" ? "border-red-800 text-red-400 bg-red-500/5"
                    : "border-yellow-800 text-yellow-400 bg-yellow-500/5";
                  return (
                    <motion.span
                      key={theme.tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`px-2.5 py-1 rounded-full border text-xs font-medium ${color}`}
                    >
                      {theme.tag}
                      <span className="ml-1.5 text-neutral-600 font-normal">
                        {theme.count >= 1000
                          ? `${(theme.count / 1000).toFixed(1)}k`
                          : theme.count}
                      </span>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right cols — review cards (2-col grid) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            {REVIEWS.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 text-neutral-700 text-sm"
        >
          <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sentiment scores are generated by Bouul&apos;s AI review engine. Only reviews from verified bookings are analysed.
        </motion.div>
      </div>
    </section>
  );
};
