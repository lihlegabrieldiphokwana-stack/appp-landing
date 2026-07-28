"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, Wrench, Droplets, Star, Languages, Sparkles, LayoutGrid } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const QUERY = "my drain is blocked";

const results = [
  {
    icon: Droplets,
    name: "Drain & Pipe Repair",
    vendor: "Marco T. Plumbing",
    rating: "4.8",
    price: "R850",
    image: "/service-scenes/plumbing.png",
  },
  {
    icon: Wrench,
    name: "Emergency Plumbing",
    vendor: "HomeRight Solutions",
    rating: "4.7",
    price: "R950",
    image: "/service-scenes/roofing_repair.png",
  },
];

function SearchMock() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? QUERY : "");
  const done = typed.length === QUERY.length;

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setTyped(QUERY.slice(0, i));
      if (i < QUERY.length) {
        timer = setTimeout(tick, 55 + Math.random() * 60);
      } else {
        // Hold full query, then reset loop smoothly
        timer = setTimeout(() => {
          i = 0;
          setTyped("");
          timer = setTimeout(tick, 700);
        }, 4500);
      }
    };
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div className="min-h-[300px] rounded-3xl border border-b-line bg-b-paper-raised p-5 shadow-[0_24px_60px_rgba(24,39,32,0.10)]">
      {/* Search Input Bar */}
      <div className="flex items-center gap-3 rounded-full border border-b-line bg-b-paper px-4 py-3">
        <Search className="h-4 w-4 shrink-0 text-b-ink-faint" />
        <span className="font-price text-sm text-b-ink">
          {typed || "my drain is blocked"}
          {!done && <span className="animate-pulse text-b-green-deep">|</span>}
        </span>
      </div>

      {/* Results Container with Fixed Height to Prevent Bounce */}
      <div className="mt-4 space-y-3 min-h-[210px]">
        <p
          className={`flex items-center gap-1.5 px-1 font-price text-[11px] uppercase tracking-[0.18em] text-b-green-deep transition-opacity duration-300 ${
            done ? "opacity-100" : "opacity-20"
          }`}
        >
          <Sparkles className="h-3 w-3" /> Understood: blocked drain, plumbing
        </p>

        {results.map((r) => (
          <div
            key={r.name}
            className={`flex items-center gap-3 rounded-2xl border border-b-line bg-b-paper p-3 transition-all duration-300 ${
              done
                ? "opacity-100 scale-100"
                : "opacity-40 scale-[0.99]"
            }`}
          >
            <img
              src={r.image}
              alt={r.name}
              className="h-11 w-11 shrink-0 rounded-xl object-cover border border-b-line shadow-xs"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-b-ink">{r.name}</p>
              <p className="flex items-center gap-1 text-xs text-b-ink-soft">
                {r.vendor} · <Star className="h-3 w-3 fill-b-sun text-b-sun" />
                {r.rating}
              </p>
            </div>
            <span className="font-price text-sm font-semibold text-b-ink">{r.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SearchFeature() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Search that gets you</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            Describe the problem. We&apos;ll name the pro.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-ink-soft">
            You don&apos;t need to know it&apos;s called &quot;drain rodding&quot;.
            Bouul&apos;s hybrid search reads meaning, not just keywords, and pulls
            results across services, pros, reviews, and videos.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-b-green-soft">
                <Sparkles className="h-4 w-4 text-b-green-deep" />
              </span>
              <p className="b-body-sm leading-relaxed text-b-ink-soft">
                <span className="font-semibold text-b-ink">Semantic matching</span> — plain
                words, slang, or the wrong word entirely still find the right service.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-b-green-soft">
                <Languages className="h-4 w-4 text-b-green-deep" />
              </span>
              <p className="b-body-sm leading-relaxed text-b-ink-soft">
                <span className="font-semibold text-b-ink">11 languages</span> — search in
                isiZulu, Afrikaans, Sesotho, and more.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-b-green-soft">
                <LayoutGrid className="h-4 w-4 text-b-green-deep" />
              </span>
              <p className="b-body-sm leading-relaxed text-b-ink-soft">
                <span className="font-semibold text-b-ink">Seven result tabs</span> —
                services, vendors, posts, videos, reviews, and people, all in one search.
              </p>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <SearchMock />
        </Reveal>
      </div>
    </Section>
  );
}
