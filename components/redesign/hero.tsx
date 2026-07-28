"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Scissors,
  Wrench,
  Sparkles,
  GraduationCap,
  Car,
  Dog,
  Star,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { PriceTag } from "./primitives";
import { MediaPlaceholder } from "./media-placeholder";

/* Real entries from the Bouul service catalog — names and ZAR base prices. */
const rotation = [
  { word: "barber", price: "from R200", icon: Scissors },
  { word: "plumber", price: "from R850", icon: Wrench },
  { word: "nail tech", price: "from R350", icon: Sparkles },
  { word: "tutor", price: "from R300", icon: GraduationCap },
  { word: "mechanic", price: "from R650", icon: Car },
  { word: "cleaner", price: "from R350", icon: Dog },
];

function RotatingService() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % rotation.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  const current = rotation[index];

  return (
    <span className="inline align-baseline">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current.word}
          initial={reduce ? false : { y: "0.6em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-0.6em", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap text-b-green-deep"
        >
          {current.word}
          <span className="text-b-ink">?</span>
        </motion.span>
      </AnimatePresence>
      {/* Inline superscript price tag — occupies real space, never overlaps */}
      <span className="relative -top-5 ml-1.5 inline-block md:-top-7 md:ml-2" aria-hidden>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current.price}
            initial={reduce ? false : { scale: 0.6, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: -4 }}
            exit={reduce ? undefined : { scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="inline-block"
          >
            <PriceTag tilt={false} className="text-[10px] md:text-xs">
              {current.price}
            </PriceTag>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

function HeroCollage() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 32, rotate: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="relative mx-auto h-[540px] w-full max-w-md md:h-[620px]">
      {/* Main pro card */}
      <motion.div
        {...enter(0.25)}
        className="absolute left-0 top-6 w-64 -rotate-2 rounded-3xl border border-b-line bg-b-paper-raised p-4 shadow-[0_25px_60px_rgba(24,39,32,0.15)] md:w-72 z-10"
      >
        <MediaPlaceholder
          kind="image"
          src="/pros/leratos-hair-studio.png"
          alt="Lerato's Hair Studio storefront"
          label="Pro photo"
          className="h-64 w-full rounded-2xl md:h-72"
          imgClassName="object-cover object-top"
        />
        <div className="mt-3 flex items-start justify-between">
          <div>
            <p className="font-display text-base font-bold text-b-ink">Lerato&apos;s Hair Studio</p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-b-ink-soft leading-snug">
              <MapPin className="h-3 w-3 shrink-0 text-b-green-deep" /> Vusi Mngomezulu St, Thiteng, Tembisa
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-b-green-soft px-2 py-1 text-[10px] font-semibold text-b-green-deep shrink-0">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-b-line pt-3">
          <span className="flex items-center gap-1 text-xs font-medium text-b-ink">
            <Star className="h-3.5 w-3.5 fill-b-sun text-b-sun" /> 4.9 (127)
          </span>
          <span className="font-price text-sm font-semibold text-b-ink">R200</span>
        </div>
      </motion.div>

      {/* Second card behind */}
      <motion.div
        {...enter(0.4)}
        className="absolute right-0 top-0 w-52 rotate-3 rounded-3xl border border-b-line bg-b-paper-raised p-3 shadow-[0_20px_45px_rgba(24,39,32,0.12)] md:w-60 z-0"
      >
        <MediaPlaceholder
          kind="image"
          src="/pros/marco-plumbing.png"
          alt="Marco T. Plumbing work"
          label="Recent job"
          className="h-48 w-full rounded-2xl md:h-56"
          imgClassName="object-cover object-top"
        />
        <div className="mt-2.5 flex items-center justify-between">
          <div>
            <p className="font-display text-sm font-bold text-b-ink">Marco T. Plumbing</p>
            <p className="flex items-center gap-1 text-[11px] text-b-ink-soft">
              <Star className="h-3 w-3 fill-b-sun text-b-sun" /> 4.8 · responds in 15 min
            </p>
          </div>
        </div>
      </motion.div>

      {/* Booking confirmed toast */}
      <motion.div
        {...enter(0.6)}
        className="b-float absolute bottom-16 right-2 flex w-60 items-center gap-3 rounded-2xl border border-b-line bg-b-forest p-3.5 shadow-[0_20px_50px_rgba(13,43,31,0.35)] md:bottom-24"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-b-green">
          <ShieldCheck className="h-5 w-5 text-b-forest" />
        </span>
        <div>
          <p className="text-sm font-semibold text-b-cream">Booking confirmed</p>
          <p className="text-[11px] text-b-cream/70">
            Payment held in escrow until the job is done
          </p>
        </div>
      </motion.div>

      {/* Zola chip */}
      <motion.div
        {...enter(0.75)}
        className="absolute bottom-0 left-6 flex items-center gap-2 rounded-full border border-b-line bg-b-paper-raised py-2 pl-2 pr-4 shadow-[0_12px_30px_rgba(24,39,32,0.10)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-b-sun">
          <MessageCircle className="h-4 w-4 text-b-ink" />
        </span>
        <p className="text-xs text-b-ink-soft">
          <span className="font-semibold text-b-ink">Zola:</span> Saturday 9am works. Book it?
        </p>
      </motion.div>
    </div>
  );
}

export function RedesignHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-b-paper px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-price text-[11px] font-semibold uppercase tracking-[0.22em] text-b-green-deep"
          >
            South Africa&apos;s neighbourhood service marketplace
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-b-ink sm:text-6xl md:text-7xl"
          >
            Need a <RotatingService />
            <br />
            Someone nearby does that.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-b-ink-soft"
          >
            Bouul finds ID-verified pros around you, books them in seconds, and
            holds your money in escrow until the work is done. Over 70 services,
            priced in plain rand.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/download"
              className="rounded-full bg-b-green px-7 py-3.5 font-semibold text-b-forest shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get the app free
            </Link>
            <Link
              href="/vendors"
              className="rounded-full border border-b-ink/20 px-7 py-3.5 font-semibold text-b-ink transition-colors hover:border-b-ink/50 hover:bg-b-paper-deep"
            >
              I&apos;m a pro
            </Link>
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-b-ink-faint"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" /> Escrow-protected payments
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-b-green-deep" /> ID-verified pros
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-b-green-deep" /> Real reviews only
            </span>
          </motion.p>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}
