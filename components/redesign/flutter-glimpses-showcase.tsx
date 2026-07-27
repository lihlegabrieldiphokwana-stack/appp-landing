"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Code2,
  Smartphone,
  ChevronDown,
  Layers,
  Star,
  Plus,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const DEMO_GLIMPSES = [
  {
    id: "glimpse-1",
    vendorName: "Fourways Plumbing Co.",
    vendorHandle: "@fourways_plumbing",
    vendorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    videoPoster: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    title: "150L Geyser Pressure Relief Valve Flush & Diagnostic 🔧",
    serviceName: "Emergency Geyser Burst Hydrostatic Test",
    servicePrice: "R1,200",
    likes: "1.4k",
    comments: "84",
    shares: "320",
    rating: "4.95",
  },
  {
    id: "glimpse-2",
    vendorName: "Highveld Electrical Co.",
    vendorHandle: "@highveld_elec",
    vendorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    videoPoster: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    title: "Overloaded DB Board Breaker Tripping Diagnostic ⚡",
    serviceName: "SANS 10142 Compliant DB Board Overhaul",
    servicePrice: "R1,800",
    likes: "2.8k",
    comments: "142",
    shares: "510",
    rating: "4.98",
  },
];

export function FlutterGlimpsesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHoldingBasket, setIsHoldingBasket] = useState(false);
  const [basketProgress, setBasketProgress] = useState(0);
  const [basketAdded, setBasketAdded] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const active = DEMO_GLIMPSES[activeIdx];

  // Simulate hold-to-basket gesture
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHoldingBasket && !basketAdded) {
      interval = setInterval(() => {
        setBasketProgress((prev) => {
          if (prev >= 100) {
            setBasketAdded(true);
            setIsHoldingBasket(false);
            return 100;
          }
          return prev + 10;
        });
      }, 40);
    } else {
      setBasketProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHoldingBasket, basketAdded]);

  return (
    <Section className="py-20 md:py-28 bg-b-paper border-t border-b-line">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-b-green-deep border border-emerald-500/20 mb-3">
            <Smartphone className="h-4 w-4" />
            <span>Mobile App Component Translation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-b-ink">
            Glimpses™ Mobile Video Feed <br />
            <span className="text-b-green-deep">Translated 1:1 From Flutter Code.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-b-ink-soft leading-relaxed">
            Experience our mobile video feed components built directly from our production Flutter Dart codebase (<code className="bg-b-paper-raised px-1.5 py-0.5 rounded text-xs font-mono text-b-green-deep">lib/components/glimpses/glimpses_video_item.dart</code>).
          </p>
        </div>
      </Reveal>

      {/* Code Inspector Toggle */}
      <Reveal delay={0.1}>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-b-paper-raised border border-b-line font-mono text-xs font-bold text-b-ink hover:border-b-green-deep transition-all cursor-pointer min-h-[44px]"
          >
            <Code2 className="h-4 w-4 text-b-green-deep" />
            <span>{showCode ? "Hide Flutter Dart Code" : "Inspect Flutter Dart Code"}</span>
          </button>
        </div>
      </Reveal>

      {/* Interactive Mobile Player Showcase */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          {/* Mobile Phone Mockup Frame (Realistic 9:19.5 Modern Smartphone Aspect Ratio) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[320px] sm:w-[350px] h-[680px] sm:h-[740px] rounded-[3.2rem] border-[10px] border-neutral-900 bg-black overflow-hidden shadow-2xl ring-1 ring-white/20">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-full z-30 flex items-center justify-end px-2">
                <div className="h-2.5 w-2.5 rounded-full bg-neutral-950 border border-neutral-800" />
              </div>

              {/* Video Background Container */}
              <div
                className="absolute inset-0 bg-cover bg-center cursor-pointer select-none"
                style={{ backgroundImage: `url(${active.videoPoster})` }}
                onClick={() => setIsPlaying(!isPlaying)}
                onMouseDown={() => setIsHoldingBasket(true)}
                onMouseUp={() => setIsHoldingBasket(false)}
                onTouchStart={() => setIsHoldingBasket(true)}
                onTouchEnd={() => setIsHoldingBasket(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

                {/* Hold-to-Basket Ring Indicator */}
                <AnimatePresence>
                  {isHoldingBasket && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xs z-20"
                    >
                      <div className="relative flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center relative">
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                              cx="36"
                              cy="36"
                              r="34"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="4"
                              strokeDasharray="213"
                              strokeDashoffset={213 - (213 * basketProgress) / 100}
                              className="transition-all duration-75"
                            />
                          </svg>
                          <ShoppingBag className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-xs font-bold text-white bg-black/80 px-3 py-1 rounded-full">
                          Hold to add service to basket...
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pause Icon Overlay Indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <div className="h-16 w-16 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md">
                      <Play className="h-8 w-8 translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Top Segmented Tab Bar (Matching Flutter UI) */}
                <div className="absolute top-10 inset-x-0 flex justify-center z-20">
                  <div className="inline-flex items-center rounded-full bg-neutral-900/80 p-1 border border-white/15 backdrop-blur-md shadow-lg">
                    <button className="px-4 py-1 rounded-full text-xs font-bold bg-white text-black shadow-sm">
                      For You
                    </button>
                    <button className="px-4 py-1 rounded-full text-xs font-medium text-white/80 hover:text-white">
                      Following
                    </button>
                  </div>
                </div>

                {/* Right Action Stack (Exact CupertinoIcons matching Flutter app) */}
                <div className="absolute right-3.5 bottom-24 flex flex-col items-center gap-5 z-20 text-white">
                  {/* Like Button (CupertinoIcons.heart / heart_fill) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLiked(!isLiked);
                    }}
                    className="flex flex-col items-center gap-0.5 cursor-pointer group"
                  >
                    <div className={`h-11 w-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${isLiked ? "bg-rose-500 text-white" : "bg-black/40 text-white group-hover:bg-black/60"}`}>
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.likes}</span>
                  </button>

                  {/* Comment Button (CupertinoIcons.bubble_left_fill) */}
                  <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.comments}</span>
                  </div>

                  {/* Share Button (CupertinoIcons.arrowshape_turn_up_right_fill) */}
                  <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-bold drop-shadow">{active.shares}</span>
                  </div>

                  {/* Audio Volume Button (CupertinoIcons.speaker_2_fill) */}
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="h-11 w-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                      <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Left Content Overlay (Vendor, Caption, Hashtags, Service Card) */}
                <div className="absolute bottom-16 inset-x-3 space-y-2 z-20 text-white">
                  {/* Vendor Info Header */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-xs shrink-0 shadow-md">
                      {active.vendorName.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-display font-bold text-sm text-white drop-shadow">{active.vendorName}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFollowing(!isFollowing);
                        }}
                        className={`px-3 py-0.5 rounded-full text-xs font-medium border transition-all ${isFollowing ? "bg-white/20 border-white/40 text-white" : "bg-white/10 border-white/30 text-white hover:bg-white/20"}`}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>
                  </div>

                  {/* Timestamp & Caption */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-white/70 block">3 months ago</span>
                    <p className="text-xs text-white font-medium drop-shadow">{active.title}</p>
                    <p className="text-xs font-semibold text-emerald-400 drop-shadow">
                      #photography #camera #photoshoot #4k
                    </p>
                  </div>

                  {/* Attached Service Card Tray (Exact 1:1 Flutter UI) */}
                  <div className="p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3 shadow-xl">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={active.videoPoster} alt="Service" className="h-11 w-11 rounded-xl object-cover shrink-0 border border-white/20" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{active.serviceName}</p>
                        <span className="text-xs font-extrabold text-white/90">{active.servicePrice}</span>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-[10px] font-bold text-white block">Hold to view service</span>
                      <span className="text-[9px] text-white/60 block">Tap to view</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Navigation Bar (Matching Flutter Screenshot) */}
                <div className="absolute bottom-2 inset-x-3 z-30">
                  <div className="rounded-full bg-neutral-900/90 border border-white/15 px-3 py-1.5 flex items-center justify-around text-white/70 backdrop-blur-md shadow-2xl">
                    <div className="flex flex-col items-center gap-0.5 text-white/70">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[8px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-white/70">
                      <Code2 className="h-4 w-4" />
                      <span className="text-[8px] font-medium">Search</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-white/70">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-[8px] font-medium">Chats</span>
                    </div>
                    {/* Active Shorts Tab Badge */}
                    <div className="flex flex-col items-center gap-0.5 text-emerald-400 font-bold">
                      <div className="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                        <Play className="h-3.5 w-3.5 fill-emerald-400" />
                      </div>
                      <span className="text-[8px]">Shorts</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-white/70">
                      <ShoppingBag className="h-4 w-4" />
                      <span className="text-[8px] font-medium">Basket</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-white/70">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-[8px] font-medium">Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features Breakdown & Source Inspector */}
          <div className="lg:col-span-6 space-y-6">
            {/* Active Video Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-b-paper-raised border border-b-line">
              {DEMO_GLIMPSES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setBasketAdded(false);
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer text-center ${
                    activeIdx === idx ? "bg-b-green-deep text-white shadow-md" : "text-b-ink-soft hover:text-b-ink"
                  }`}
                >
                  {item.vendorName}
                </button>
              ))}
            </div>

            {/* Flutter Code Inspector Modal */}
            {showCode ? (
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-emerald-400 space-y-2 overflow-x-auto max-h-[480px] shadow-2xl">
                <div className="flex items-center justify-between text-neutral-400 text-xs border-b border-neutral-800 pb-2 mb-3">
                  <span>Flutter Dart: lib/components/glimpses/glimpses_video_item.dart</span>
                  <span className="text-b-sun">ConsumerStatefulWidget</span>
                </div>
                <pre>{`class GlimpsesVideoItem extends ConsumerStatefulWidget {
  final ContentFeedRecord item;
  final bool isCurrentPage;
  final String surface; // glimpses_foryou | glimpses_following

  const GlimpsesVideoItem({
    super.key,
    required this.item,
    required this.isCurrentPage,
  });

  @override
  ConsumerState<GlimpsesVideoItem> createState() => _GlimpsesVideoItemState();
}

class _GlimpsesVideoItemState extends ConsumerState<GlimpsesVideoItem> {
  // Hold-to-basket progress controller
  late AnimationController _holdToBasketController;
  
  void _onHoldToBasket() {
    ref.read(escrowBasketProvider.notifier).addItem(
      serviceId: widget.item.serviceRef.id,
      vendorHandle: widget.item.vendorHandle,
    );
  }
}`}</pre>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-b-paper-raised border border-b-line space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <h3 className="font-display font-bold text-base text-b-ink">Interactive Mobile Features</h3>
                  </div>
                  <p className="text-xs text-b-ink-soft leading-relaxed">
                    Test the gestures in the phone simulator: tap to pause video, click heart to like, or <strong>hold down on the video for 1 second</strong> to trigger the Hold-to-Basket escrow animation!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-b-green-deep">Gesture 01</span>
                    <h4 className="font-display font-bold text-xs text-b-ink">Hold-to-Basket</h4>
                    <p className="text-[11px] text-b-ink-soft">Hold 1 sec to add service to escrow without leaving feed.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-b-paper-raised border border-b-line space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-b-green-deep">Gesture 02</span>
                    <h4 className="font-display font-bold text-xs text-b-ink">Vendor Follow Badge</h4>
                    <p className="text-[11px] text-b-ink-soft">Instant 1-tap merchant follow with verified tick animation.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
