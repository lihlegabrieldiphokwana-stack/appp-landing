"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  MessageCircle,
  Share2,
  ShoppingBag,
  Sparkles,
  Code2,
  Smartphone,
  CheckCircle2,
  Star,
  Zap,
  Users,
} from "lucide-react";
import { Section, Reveal } from "./primitives";

const DEMO_GLIMPSES = [
  {
    id: "glimpse-1",
    vendorName: "Fourways Plumbing Co.",
    vendorHandle: "@fourways_plumbing",
    videoPoster:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    title: "150L Geyser Pressure Relief Valve Flush & Diagnostic 🔧",
    serviceName: "Emergency Geyser Burst Hydrostatic Test",
    servicePrice: "R1,200",
    likes: "1.4k",
    comments: "84",
    shares: "320",
    hashtags: "#plumbing #geysers #emergencyrepair",
  },
  {
    id: "glimpse-2",
    vendorName: "Highveld Electrical Co.",
    vendorHandle: "@highveld_elec",
    videoPoster:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    title: "Overloaded DB Board Breaker Tripping Diagnostic ⚡",
    serviceName: "SANS 10142 Compliant DB Board Overhaul",
    servicePrice: "R1,800",
    likes: "2.8k",
    comments: "142",
    shares: "510",
    hashtags: "#electrical #safety #DBboard",
  },
  {
    id: "glimpse-3",
    vendorName: "Langa Cleaning Studio",
    vendorHandle: "@langa_clean",
    videoPoster:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    title: "Deep office carpet steam clean — before & after 🧹",
    serviceName: "Commercial Deep Steam Clean (per sqm)",
    servicePrice: "R650",
    likes: "3.1k",
    comments: "201",
    shares: "780",
    hashtags: "#cleaning #commercial #beforeafter",
  },
];

const FEATURE_BULLETS = [
  {
    icon: Play,
    title: "Short-form video discovery",
    desc: "Browse local services the same way you scroll content — swipe through real vendor Glimpses in your area.",
  },
  {
    icon: ShoppingBag,
    title: "Book directly from the feed",
    desc: "Tap the attached service card to go straight to booking. No extra steps, no switching apps.",
  },
  {
    icon: Users,
    title: "Follow your favourite vendors",
    desc: "Follow tradespeople and businesses to get notified when they post new availability or deals.",
  },
  {
    icon: Zap,
    title: "Powered by Resonance™",
    desc: "Every Glimpse you see is ranked by our AI — location, trust score, social signals, and your history.",
  },
];

export function FlutterGlimpsesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const active = DEMO_GLIMPSES[activeIdx];

  return (
    <Section className="py-20 md:py-28 bg-b-paper border-t border-b-line">
      {/* Header */}
      <Reveal>
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-green-deep border border-emerald-500/20 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Glimpses™</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
            Discover local services<br />
            <span className="text-b-green-deep">the way you already browse.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed max-w-2xl">
            Glimpses is Bouul's short-video feed for local services. Vendors post real work — before and afters, live jobs, pricing reveals — and you book directly from the video.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">

          {/* Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[612px] rounded-[3rem] border-[10px] border-neutral-900 bg-black overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-[17px] bg-neutral-900 rounded-full z-30" />

              {/* Video Background */}
              <div
                className="absolute inset-0 bg-cover bg-center cursor-pointer select-none"
                style={{ backgroundImage: `url(${active.videoPoster})` }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

                {/* Pause overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <div className="h-16 w-16 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md">
                      <Play className="h-8 w-8 translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Top Tab Bar */}
                <div className="absolute top-10 inset-x-0 flex justify-center z-20">
                  <div className="inline-flex items-center rounded-full bg-neutral-900/80 p-1 border border-white/15 backdrop-blur-md shadow-lg">
                    <button className="px-4 py-1 rounded-full text-xs font-bold bg-white text-black shadow-sm">
                      For You
                    </button>
                    <button className="px-4 py-1 rounded-full text-xs font-medium text-white/70">
                      Following
                    </button>
                  </div>
                </div>

                {/* Right Action Stack */}
                <div className="absolute right-3 bottom-28 flex flex-col items-center gap-5 z-20 text-white">
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                    className="flex flex-col items-center gap-0.5 cursor-pointer group"
                  >
                    <div className={`h-11 w-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${isLiked ? "bg-rose-500" : "bg-black/40 group-hover:bg-black/60"}`}>
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.likes}</span>
                  </button>

                  <div className="flex flex-col items-center gap-0.5">
                    <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.comments}</span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.shares}</span>
                  </div>

                  <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-16 inset-x-3 space-y-2.5 z-20 text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-xs shrink-0">
                      {active.vendorName.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-sm drop-shadow truncate">{active.vendorName}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); setIsFollowing(!isFollowing); }}
                        className={`shrink-0 px-3 py-0.5 rounded-full text-xs font-medium border transition-all ${isFollowing ? "bg-white/20 border-white/40" : "bg-white/10 border-white/30 hover:bg-white/20"}`}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium drop-shadow leading-snug">{active.title}</p>
                    <p className="text-xs font-semibold text-emerald-400 mt-0.5">{active.hashtags}</p>
                  </div>

                  {/* Service Card */}
                  <div className="p-2.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center gap-3">
                    <img src={active.videoPoster} alt="Service" className="h-10 w-10 rounded-xl object-cover shrink-0 border border-white/20" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold truncate">{active.serviceName}</p>
                      <span className="text-xs font-extrabold text-white/90">{active.servicePrice}</span>
                    </div>
                    <div className="shrink-0 px-3 py-1.5 rounded-xl bg-emerald-500 text-black text-[10px] font-extrabold">
                      Book
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-2 inset-x-3 z-30">
                  <div className="rounded-full bg-neutral-900/90 border border-white/15 px-3 py-1.5 flex items-center justify-around text-white/70 backdrop-blur-md">
                    {[
                      { icon: Sparkles, label: "Home" },
                      { icon: Code2, label: "Search" },
                      { icon: MessageCircle, label: "Chats" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-0.5">
                        <Icon className="h-4 w-4" />
                        <span className="text-[8px] font-medium">{label}</span>
                      </div>
                    ))}
                    <div className="flex flex-col items-center gap-0.5 text-emerald-400 font-bold">
                      <div className="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                        <Play className="h-3.5 w-3.5 fill-emerald-400" />
                      </div>
                      <span className="text-[8px]">Shorts</span>
                    </div>
                    {[
                      { icon: ShoppingBag, label: "Basket" },
                      { icon: Smartphone, label: "Profile" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-0.5">
                        <Icon className="h-4 w-4" />
                        <span className="text-[8px] font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glimpse Switcher Pills */}
            <div className="absolute -bottom-10 flex gap-1.5">
              {DEMO_GLIMPSES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveIdx(idx); setIsLiked(false); setIsFollowing(false); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === idx ? "w-6 bg-b-green-deep" : "w-1.5 bg-b-ink/20"}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Vendor switcher */}
            <div className="flex flex-wrap gap-2">
              {DEMO_GLIMPSES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveIdx(idx); setIsLiked(false); setIsFollowing(false); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    activeIdx === idx
                      ? "bg-b-ink text-b-paper border-b-ink"
                      : "border-b-line text-b-ink-soft hover:border-b-ink/40 hover:text-b-ink"
                  }`}
                >
                  {item.vendorName}
                </button>
              ))}
            </div>

            {/* Feature bullets */}
            <div className="space-y-5">
              {FEATURE_BULLETS.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 h-10 w-10 rounded-2xl bg-b-paper-raised border border-b-line flex items-center justify-center">
                    <f.icon className="h-4.5 w-4.5 text-b-green-deep" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-b-ink">{f.title}</p>
                    <p className="text-sm text-b-ink-soft leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social proof stat strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-b-line">
              {[
                { value: "40k+", label: "Glimpses posted" },
                { value: "4.9★", label: "Average vendor rating" },
                { value: "62%", label: "Book within the feed" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-extrabold text-2xl text-b-ink">{s.value}</p>
                  <p className="text-xs text-b-ink-soft mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
