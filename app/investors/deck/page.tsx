"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Slide data ─────────────────────────────────────────────────────────────────
type Slide = {
  id: string;
  content: React.ReactNode;
};

const PASSWORD = "bouul2025";

const BULLET = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
    <span className="text-neutral-400 text-sm leading-relaxed">{children}</span>
  </div>
);

// ─── Animated Bar Chart (sqrt scale) ────────────────────────────────────────────
const AnimatedBarChart = ({
  bars,
  height = 220,
  barWidth = 80,
  className = "",
  showGrowth = false,
}: {
  bars: { label: string; value: number; display: string; color?: string }[];
  height?: number;
  barWidth?: number;
  className?: string;
  showGrowth?: boolean;
}) => {
  const maxValue = Math.max(...bars.map((b) => b.value));
  const sqrtMax = Math.sqrt(maxValue);
  const gap = 36;
  const totalBarsW = bars.length * (barWidth + gap) - gap;
  const padL = 16;
  const padR = 16;
  const padT = 48;
  const padB = 36;
  const chartW = padL + totalBarsW + padR;
  const chartH = padT + height + padB;

  const gradIds = bars.map((_, i) => `bg${i}`);

  // sqrt scale so early stage bars are visually proportional
  const barData = bars.map((bar) => {
    const barH = (Math.sqrt(bar.value) / sqrtMax) * height;
    return { ...bar, barH };
  });

  return (
    <div className="w-full" style={{ aspectRatio: `${chartW} / ${chartH}` }}>
      <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-full overflow-visible">
        <defs>
          {barData.map((bar, i) => (
            <linearGradient key={i} id={gradIds[i]} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={bar.color ?? "#34d399"} stopOpacity="1" />
              <stop offset="100%" stopColor={bar.color ?? "#34d399"} stopOpacity="0.15" />
            </linearGradient>
          ))}
        </defs>

        {/* Baseline */}
        <line
          x1={padL} y1={padT + height}
          x2={padL + totalBarsW} y2={padT + height}
          stroke="#262626" strokeWidth="1"
        />

        {/* Growth arrows between bars (fixed at top) */}
        {showGrowth &&
          barData.slice(0, -1).map((b, i) => {
            const next = barData[i + 1];
            const pct = Math.round(((next.value - b.value) / b.value) * 100);
            const cx = padL + i * (barWidth + gap) + barWidth + gap / 2;
            const x1 = padL + i * (barWidth + gap) + barWidth + 6;
            const x2 = padL + (i + 1) * (barWidth + gap) - 6;
            const arrowY = padT - 6;

            return (
              <g key={`g-${i}`}>
                <motion.line
                  x1={x1} y1={arrowY} x2={x2} y2={arrowY}
                  stroke="#525252" strokeWidth="1" strokeDasharray="3 2"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + 0.12 * i }}
                />
                <motion.polygon
                  points={`${x2},${arrowY} ${x2 - 5},${arrowY - 3} ${x2 - 5},${arrowY + 3}`}
                  fill="#525252"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + 0.12 * i }}
                />
                <motion.text
                  x={cx} y={arrowY - 8}
                  textAnchor="middle" fill="#a3a3a3" fontSize="10" fontWeight="700" fontFamily="monospace"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + 0.12 * i }}
                >
                  +{pct}%
                </motion.text>
              </g>
            );
          })}

        {/* Bars */}
        {barData.map((bar, i) => {
          const x = padL + i * (barWidth + gap);
          const y = padT + height - bar.barH;
          return (
            <g key={bar.label}>
              <motion.rect
                x={x}
                width={barWidth}
                fill={`url(#${gradIds[i]})`}
                rx={6}
                initial={{ y: padT + height, height: 0 }}
                animate={{ y, height: bar.barH }}
                transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.25, 0.1, 0.25, 1] }}
              />
              {/* Value label above bar */}
              <motion.text
                x={x + barWidth / 2}
                y={y - 14}
                textAnchor="middle"
                fill="#ededed"
                fontSize="15"
                fontWeight="800"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + 0.12 * i }}
              >
                {bar.display}
              </motion.text>
              {/* X label */}
              <text
                x={x + barWidth / 2}
                y={padT + height + 22}
                textAnchor="middle"
                fill="#737373"
                fontSize="12"
                fontWeight="500"
              >
                {bar.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ─── Animated Line Chart ────────────────────────────────────────────────────────
const AnimatedLineChart = ({
  points,
  height = 150,
  className = "",
}: {
  points: { label: string; value: number; display: string }[];
  height?: number;
  className?: string;
}) => {
  const maxVal = Math.max(...points.map((p) => p.value)) * 1.15;
  const width = 300;
  const pad = { t: 10, r: 10, b: 30, l: 30 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;

  const stepX = innerW / (points.length - 1);

  const toX = (i: number) => pad.l + i * stepX;
  const toY = (v: number) => pad.t + innerH * (1 - v / maxVal);

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(p.value)}`)
    .join(" ");

  const areaPath = `${linePath} L${toX(points.length - 1)},${pad.t + innerH} L${toX(0)},${pad.t + innerH} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={`w-full ${className}`}>
      {/* Grid */}
      {[0, 0.33, 0.67, 1].map((frac) => {
        const y = pad.t + innerH * (1 - frac);
        return (
          <g key={frac}>
            <line x1={pad.l} y1={y} x2={pad.l + innerW} y2={y} stroke="#262626" strokeWidth="1" />
            <text x={pad.l - 4} y={y + 3} textAnchor="end" fill="#525252" fontSize="8">
              {Math.round(maxVal * frac)}
            </text>
          </g>
        );
      })}

      {/* Area fill */}
      <motion.path
        d={areaPath}
        fill="url(#lineGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Line */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="#34d399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Dots */}
      {points.map((p, i) => (
        <motion.g key={p.label}>
          <motion.circle
            cx={toX(i)}
            cy={toY(p.value)}
            r="4"
            fill="#34d399"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + 0.15 * i }}
          />
          <motion.text
            x={toX(i)}
            y={toY(p.value) - 10}
            textAnchor="middle"
            fill="#ededed"
            fontSize="10"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 + 0.15 * i }}
          >
            {p.display}
          </motion.text>
          <text
            x={toX(i)}
            y={pad.t + innerH + 16}
            textAnchor="middle"
            fill="#737373"
            fontSize="9"
          >
            {p.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
};

// ─── Zola Chat Card (replicates homepage Zola component style) ─────────────────
const ZOLA_SCRIPT: string[] = [
  "Welcome, Eric. I&apos;m Zola — Bouul&apos;s AI. Think of me as your personal assistant who actually pays attention.",
  "I see you&apos;re driving an M3. Let me have one of our top detailers give it the treatment it deserves — ceramic coating, interior deep-clean, the works. On us for your first booking.",
  "And when you&apos;re ready to impress at home, I&apos;ve shortlisted Chef Iris. Her tasting menu is extraordinary — and yes, I&apos;ve noted your shellfish allergy. Nothing but the best for you, Eric.",
];

const TypingDots = () => (
  <div className="flex gap-1 items-center px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-neutral-500 inline-block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const ZolaBubble = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex gap-2.5 justify-start"
  >
    <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-black text-xs font-bold">Z</span>
    </div>
    <div
      className="max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed bg-neutral-800 text-neutral-100 rounded-tl-sm"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </motion.div>
);

const ZolaChatCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [messages, setMessages] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Timeline: reveal each message with typing indicator between
    const t: ReturnType<typeof setTimeout>[] = [];
    t.push(setTimeout(() => { setTyping(true); }, 600));
    t.push(setTimeout(() => { setTyping(false); setMessages([ZOLA_SCRIPT[0]]); }, 2000));
    t.push(setTimeout(() => { setTyping(true); }, 2800));
    t.push(setTimeout(() => { setTyping(false); setMessages((m) => [...m, ZOLA_SCRIPT[1]]); }, 4200));
    t.push(setTimeout(() => { setTyping(true); }, 5000));
    t.push(setTimeout(() => { setTyping(false); setMessages((m) => [...m, ZOLA_SCRIPT[2]]); }, 6500));

    return () => t.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden w-full text-left"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-800 bg-neutral-900/60">
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-sm">Z</span>
        </div>
        <div>
          <div className="text-white text-sm font-semibold">Zola</div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-neutral-500 text-xs">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-5 min-h-[180px]">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <ZolaBubble key={i} text={msg} />
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xs font-bold">Z</span>
              </div>
              <div className="bg-neutral-800 rounded-2xl rounded-tl-sm">
                <TypingDots />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SLIDES: Slide[] = [
  // ── 1. Title ──
  {
    id: "title",
    content: (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Confidentiality badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">
              Confidential — For Investors Only
            </span>
          </div>

          <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-8">
            <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
            Bouul
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-300 max-w-2xl mx-auto mb-2">
            Your city&apos;s marketplace.
          </p>

          {/* Zola chat card — personalized for Eric Mabuza */}
          <div className="max-w-sm mx-auto mb-8">
            <ZolaChatCard />
          </div>

          <div className="border-t border-neutral-800 pt-6 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div>
                <div className="text-white font-semibold">Lihle Diphokwana</div>
                <div className="text-neutral-500 text-xs">Founder & CEO</div>
              </div>
              <div>
                <div className="text-neutral-500 text-xs">lihle@bouul.com</div>
                <div className="text-neutral-500 text-xs">April 2026</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 2. Problem ──
  {
    id: "problem",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            The Problem
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Finding reliable services is broken
          </h2>
          <p className="text-lg text-neutral-500 mb-10 max-w-3xl">
            Every South African has felt this pain: you need a plumber, electrician, or cleaner —
            and you&apos;re stuck asking friends, scrolling classifieds, or gambling on Google.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "For Consumers",
                items: [
                  "No way to verify quality before booking — word-of-mouth or blind luck",
                  "Fragmented process: phone calls, WhatsApp quotes, cash, no tracking",
                  "No accountability if something goes wrong — disputes are on you",
                ],
              },
              {
                title: "For Professionals",
                items: [
                  "Limited to repeat customers and referrals — no way to grow systematically",
                  "No tools to manage bookings, payments, or scheduling efficiently",
                  "Wasting time on missed calls, no-shows, and chasing payments",
                ],
              },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold text-base mb-3">{col.title}</h3>
                <div className="space-y-2.5">
                  {col.items.map((item) => (
                    <BULLET key={item}>{item}</BULLET>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-neutral-600 text-sm bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3"
          >
            <span className="text-neutral-400 font-medium">Current alternatives: </span>
            WhatsApp groups, word-of-mouth, Google searches, Facebook Marketplace, Gumtree
            classifieds. All fragmented, all trust-blind.
          </motion.p>
        </motion.div>
      </div>
    ),
  },

  // ── 3. Solution ──
  {
    id: "solution",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            The Solution
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            One platform. Every service.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-3">
            Bouul is a hyper-local marketplace that connects consumers with vetted professionals.
            The magic moment? A customer describes what they need — and within seconds, they see
            a matched, available, rated professional who can help. No calls. No chasing.
          </p>
          <p className="text-sm text-neutral-600 mb-10 max-w-3xl">
            For professionals: a complete business operating system — booking management, payments,
            scheduling, advertising, and AI-powered lead generation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🔍", label: "Smart Discovery" },
              { emoji: "✅", label: "Vetted & Rated" },
              { emoji: "📍", label: "Live GPS Tracking" },
              { emoji: "💬", label: "In-App Chat" },
              { emoji: "🔒", label: "Secure Escrow Payments" },
              { emoji: "🤖", label: "Zola AI Assistant" },
              { emoji: "📹", label: "Video Portfolios" },
              { emoji: "⭐", label: "Verified Reviews" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.06 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="text-white text-xs md:text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 4. How It Works ──
  {
    id: "how-it-works",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-10">
            From search to done, in minutes
          </h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />
            <div className="space-y-8">
              {[
                { step: "01", title: "Search or Ask Zola", desc: "Type what you need or describe it in plain language to Zola, Bouul's AI booking assistant. She identifies your need, location, and urgency — then finds the best match instantly.", outcome: "No scrolling. No filtering. A match in seconds." },
                { step: "02", title: "Compare & Book", desc: "See their rating, distance, pricing, and video portfolio. Book with one tap. No phone calls, no back-and-forth WhatsApp.", outcome: "Booking completed in under 30 seconds." },
                { step: "03", title: "Track in Real-Time", desc: "Follow your professional's location on a live map from departure to arrival. Get push notifications at every milestone. Chat directly in the app.", outcome: "Zero anxiety. Total visibility." },
                { step: "04", title: "Pay & Review", desc: "Payment is held securely and released when you confirm the job is done. Leave a verified review tied to your completed booking.", outcome: "Protected transactions. Trustworthy feedback." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex items-start gap-6 relative"
                >
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 items-center justify-center shrink-0 relative z-10">
                    <span className="text-emerald-400 font-bold text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-1.5">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-1.5">{item.desc}</p>
                    <p className="text-emerald-400/70 text-xs font-medium">{item.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 5. Market Opportunity ──
  {
    id: "market",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Market Opportunity
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            A massive, underserved market
          </h2>

          {/* TAM/SAM/SOM */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { value: "R500B+", label: "TAM", desc: "Entire SA informal services market — home services, trades, beauty, events, tutoring, creative work." },
              { value: "R35B", label: "SAM", desc: "Serviceable market: metro areas with Bouul-level smartphone penetration and courier/logistics access." },
              { value: "R3B", label: "SOM (3 yr)", desc: "Realistic capture: Bouul's current cities, 2% of SAM at projected ARPU and adoption rates." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-1">{item.label}</div>
                <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-neutral-500 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Why Now */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">Why Now</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Digital Payments", desc: "Rapid adoption of digital wallets and instant EFT in SA creates the payment infrastructure we need." },
                { title: "Smartphone Growth", desc: "70%+ smartphone penetration. Affordable data plans make app-based marketplaces viable at scale." },
                { title: "Trust Deficit", desc: "Consumers are tired of unvetted, unreliable listings on classifieds and social media. They want verification." },
                { title: "No Dominant Player", desc: "SA has no clear market leader in services marketplace. International players (TaskRabbit, Urban Co.) don't operate here." },
              ].map((item, i) => (
                <div key={item.title} className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 6. Business Model ──
  {
    id: "business-model",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Business Model
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Multiple revenue streams
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Commission Fee", type: "Per-booking", desc: "Transparent % service fee on every completed booking. Paid by professionals. Comparable to Uber's take rate model.", color: "emerald" },
              { title: "Ad Platform", type: "Self-serve", desc: "Sponsored placements, featured listings, CPC bidding. Professionals pay for visibility — we serve the ads.", color: "blue" },
              { title: "Pro Subscriptions", type: "Recurring", desc: "Tiered monthly plans: analytics, priority support, boosted profiles, Magic Remover credits, ad credits.", color: "purple" },
              { title: "Promoted Listings", type: "CPC/CPM", desc: "Category and search result placements. Pay-per-click and pay-per-impression options for professionals.", color: "emerald" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Unit economics summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 grid md:grid-cols-3 gap-6"
          >
            <div>
              <div className="text-neutral-600 text-xs mb-1">Average basket size</div>
              <div className="text-white font-semibold text-lg">R350–R1,200</div>
              <div className="text-neutral-600 text-xs">Per booking across all categories</div>
            </div>
            <div>
              <div className="text-neutral-600 text-xs mb-1">Platform take rate</div>
              <div className="text-white font-semibold text-lg">10–15%</div>
              <div className="text-neutral-600 text-xs">Per completed booking</div>
            </div>
            <div>
              <div className="text-neutral-600 text-xs mb-1">Path to profitability</div>
              <div className="text-white font-semibold text-lg">Month 18–24</div>
              <div className="text-neutral-600 text-xs">At 10K+ monthly bookings per city</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 7. Traction ──
  {
    id: "traction",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Traction & Validation
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Growing city by city
          </h2>
          <p className="text-neutral-500 text-sm mb-8 max-w-2xl">
            Month-over-month growth in bookings, professional sign-ups, and active users.
            Every new city validates the model and feeds the network.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "12+", sub: "cities", label: "Live across major SA metros" },
              { value: "1,000+", sub: "pros", label: "Vetted professionals on platform" },
              { value: "50+", sub: "categories", label: "From plumbing to photography" },
              { value: "4.8★", sub: "avg rating", label: "Across all completed bookings" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-0.5">{item.value}</div>
                <div className="text-neutral-500 text-xs mb-1.5">{item.sub}</div>
                <div className="text-neutral-600 text-xs">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Growth chart + Milestones */}
          <div className="grid md:grid-cols-5 gap-4">
            {/* Animated line chart — professionals growth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-3 bg-neutral-950 border border-neutral-800 rounded-2xl p-5"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">Professionals Growth</div>
              <AnimatedLineChart
                points={[
                  { label: "Q1 '24", value: 10, display: "10" },
                  { label: "Q3 '24", value: 45, display: "45" },
                  { label: "Q1 '25", value: 120, display: "120" },
                  { label: "Q3 '25", value: 380, display: "380" },
                  { label: "Q1 '26", value: 720, display: "720" },
                  { label: "Now", value: 1000, display: "1K+" },
                ]}
              />
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2 bg-neutral-950 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-center"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">Milestones</div>
              <div className="space-y-4 text-sm">
                {[
                  { date: "2024", event: "Platform launched in Johannesburg" },
                  { date: "2025", event: "Expanded to 12 cities. Zola AI, Resonance Engine, Ad Engine live." },
                  { date: "2026", event: "1K+ pros. Social feed, Magic Remover, sentiment analysis." },
                ].map((m) => (
                  <div key={m.date} className="flex gap-3">
                    <span className="text-emerald-400 font-semibold shrink-0 w-10">{m.date}</span>
                    <span className="text-neutral-500 text-xs leading-relaxed">{m.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 8. Product Deep-Dive ──
  {
    id: "product",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Product
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Built for the full service lifecycle
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Zola AI Assistant", desc: "Natural language booking assistant. Understands intent, location, and urgency. Surfaces the best match automatically. No filtering, no scrolling." },
              { title: "Resonance Engine", desc: "Multi-layer homepage recommendation system. Tracks every user journey event (view, search, booking) and scores interest categories. 7 discovery signals feed an epsilon-greedy slot engine that plans the optimal vertical feed sequence per session." },
              { title: "Real-Time Tracking", desc: "Live GPS tracking with push notifications at every milestone — accepted, en route, arrived, in progress, complete." },
              { title: "Ad Engine", desc: "Self-serve CPC advertising. Professionals set budgets, bid for placements, and track performance — all within the app." },
              { title: "Social Feed", desc: "Short-form video portfolios. Professionals showcase their craft. Consumers discover through authentic video content." },
              { title: "Secure Payments (Escrow)", desc: "Customer pays into escrow. Funds released on job completion. Full dispute resolution system with mediation." },
              { title: "Magic Remover", desc: "AI image tool that cleans up portfolio photos — backgrounds, clutter, objects removed automatically. Higher-quality profiles = more bookings." },
              { title: "AI Sentiment & Reviews", desc: "Verified reviews tied to completed bookings. AI sentiment analysis extracts themes, detects anomalies, surfaces trends." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.07 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 9. Technology & AI Moat ──
  {
    id: "tech",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Technology & AI Moat
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Resonance Engine — not just AI, a full recommendation system
          </h2>
          <p className="text-neutral-500 text-sm mb-5 max-w-4xl">
            The Resonance Engine is a multi-layer system that plans every user&apos;s homepage in real time.
            It tracks behavior, infers intent, samples discovery strategies, and generates AI headlines —
            all to surface the right service at the right moment.
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-4">
            {[
              { title: "1. User Signal Layer", items: ["journey_events: every view, search, booking, review tracked → scored", "user_interests: categories ranked by interaction count and recency", "Zola Psychological Dimensions: maps user intent (economic_value → budget, emergency_need → available today, aesthetic_experience → topRated, convenience → popular)"] },
              { title: "2. Slot Engine (Feed Planner)", items: ["Epsilon-greedy: 80% exploit (best-CTR strategy for this user), 20% explore (random strategy from pool)", "70/20/10 Diversity Guarantee: 70% personalized, 20% trending, 10% random exploration", "Per-session deterministic seeding — stable but fresh every visit", "Dynamic rows: urgency thresholds trigger available-today and budget-cap rows"] },
              { title: "3. Discovery Signal Pool", items: ["7 sampled strategies: Rising Stars, Trending Searches, Search Affinity, Network Discovery, Customers Also Booked, Recently Completed, Social Proof", "Each maps to a dedicated RPC with live database queries", "Contact-synced discovery: services liked by phone contacts on the platform"] },
              { title: "4. AI-Generated Headlines", items: ["DeepSeek V4-Flash generates 3 variants per section: conversational (Zola-style), catchy (short promo), time-aware (time of day + user name)", "Context-aware: receives category, interest_category, and signal_source per section", "6-hour freshness threshold — regenerated on new session or stale expiry"] },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-4"
              >
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <div className="space-y-1">
                  {item.items.map((line) => (
                    <div key={line} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="text-neutral-500 text-xs leading-relaxed">{line}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-neutral-600 text-xs bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5"
          >
            <span className="text-neutral-400 font-medium">Stack: </span>
            Flutter (Dart slot engine) · Supabase (journey_events, user_interests, personalized_homepage_titles tables) ·
            DeepSeek V4-Flash (AI headline generation) · Dedicated RPCs for each discovery signal · Journey event
            triggers update interest scores. All data in Postgres — no external ML infra needed.
          </motion.p>
        </motion.div>
      </div>
    ),
  },

  // ── 10. Competitive Landscape ──
  {
    id: "competitive",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Competitive Landscape
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-3">
            First-mover advantage in SA
          </h2>
          <p className="text-neutral-500 text-sm mb-6 max-w-3xl">
            No direct competitor does what Bouul does in South Africa. The alternatives are
            fragmented, trust-blind, or not local.
          </p>

          {/* Competitive matrix */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left text-neutral-400 font-medium py-3 pr-4">Feature</th>
                  <th className="text-left text-emerald-400 font-semibold py-3 pr-4">Bouul</th>
                  <th className="text-left text-neutral-500 font-medium py-3 pr-4">WhatsApp / WOM</th>
                  <th className="text-left text-neutral-500 font-medium py-3 pr-4">Google / Classifieds</th>
                  <th className="text-left text-neutral-500 font-medium py-3">International</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Vetted professionals", true, false, false, true],
                  ["In-app booking", true, false, false, true],
                  ["Live GPS tracking", true, false, false, false],
                  ["Secure escrow payments", true, false, false, true],
                  ["AI booking assistant", true, false, false, false],
                  ["Video portfolios", true, false, false, false],
                  ["Self-serve ads for pros", true, false, true, false],
                  ["Built for SA market", true, true, true, false],
                ].map((row, i) => (
                  <motion.tr
                    key={row[0] as string}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.04 * i }}
                    className="border-b border-neutral-900"
                  >
                    <td className="text-white py-3 pr-4 font-medium text-xs">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className={`py-3 pr-4 ${j === 0 ? "text-emerald-400" : "text-neutral-600"}`}>
                        {cell === true ? <span className="text-emerald-500 font-bold">✓</span> : <span className="text-neutral-700">—</span>}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Moat summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              { title: "Network Effects", desc: "Every new pro improves matches. Every new booking trains the AI. The marketplace compounds." },
              { title: "Data Moat", desc: "Reviews, ratings, sentiment history, booking patterns, professional performance data. Years of accumulation." },
              { title: "Full Platform Lock-in", desc: "Pros onboard to Bouul's OS: bookings, payments, ads, scheduling. High switching cost to leave." },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
                <h4 className="text-white font-semibold text-xs mb-1">{item.title}</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 11. Go-to-Market Strategy ──
  {
    id: "go-to-market",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Go-to-Market Strategy
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            City-by-city density play
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* ICP */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-emerald-400 font-semibold text-sm mb-3">Target Customer Profile</h3>
              <div className="space-y-2">
                <BULLET>Urban professionals aged 22–50 in SA metros</BULLET>
                <BULLET>Need home services, beauty, events, or creative work done</BULLET>
                <BULLET>Value convenience, trust, and speed over price</BULLET>
                <BULLET>Already use apps for transport (Uber), food (Mr D), deliveries</BULLET>
              </div>
            </motion.div>

            {/* Acquisition */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-emerald-400 font-semibold text-sm mb-3">Acquisition Channels</h3>
              <div className="space-y-2">
                <BULLET>Referral programme (user + friend get credits)</BULLET>
                <BULLET>City-level social media & influencer campaigns</BULLET>
                <BULLET>Professional-driven: pros invite their existing customers</BULLET>
                <BULLET>SEO: city + service landing pages (e.g. &quot;plumber Sandton&quot;)</BULLET>
              </div>
            </motion.div>

            {/* Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-emerald-400 font-semibold text-sm mb-3">Geographic Expansion</h3>
              <div className="space-y-2">
                <BULLET>Phase 1 (done): Johannesburg, Cape Town, Durban, Pretoria</BULLET>
                <BULLET>Phase 2 (current): 8 additional SA metros + surrounding towns</BULLET>
                <BULLET>Phase 3 (next round): Namibia, Botswana, Kenya</BULLET>
                <BULLET>Model: enter city, build pro density, activate demand, repeat</BULLET>
              </div>
            </motion.div>

            {/* Sales cycle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-emerald-400 font-semibold text-sm mb-3">Sales Cycle</h3>
              <div className="space-y-2">
                <BULLET>Consumer side: self-serve, download app, book in minutes</BULLET>
                <BULLET>Professional side: self-registration with automated vetting process</BULLET>
                <BULLET>Average time from pro signup to first booking: &lt;48 hours</BULLET>
                <BULLET>Landing site (bouul.com) handles SEO, conversions, and pro sign-ups</BULLET>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    ),
  },

  // ── 12. Team ──
  {
    id: "team",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Team
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Building for the continent
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                name: "Lihle Diphokwana",
                role: "Founder & CEO",
                initials: "LD",
                desc: "Visionary behind Bouul. Deep understanding of the SA service market and the technology needed to connect it. Built the product, the team, and the strategy from the ground up.",
                strengths: ["Product vision", "Full-stack architecture", "Market strategy"],
              },
              {
                name: "Engineering Team",
                role: "Full-stack · AI · Mobile",
                initials: "E",
                desc: "Built the entire platform end-to-end: Flutter mobile app, Supabase backend, AI pipeline (Zola, Resonance Engine, hybrid search), Ad Engine, and the landing site.",
                strengths: ["Flutter & cross-platform", "AI/ML pipeline", "Supabase & edge functions"],
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <span className="text-emerald-400 font-bold text-lg">{member.initials}</span>
                </div>
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-emerald-400 text-sm mb-3">{member.role}</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{member.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {member.strengths.map((s) => (
                    <span key={s} className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hiring plan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">Hiring Plan</div>
            <div className="flex flex-wrap gap-2">
              {["Head of Growth", "Community Manager", "Operations Lead", "AI/ML Engineer", "Mobile Developer"].map((role) => (
                <span key={role} className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">{role}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 13. Financial Projections ──
  {
    id: "financials",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Financial Projections
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            3-year outlook
          </h2>

          {/* Revenue forecast — chart + cards side by side */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Animated bar chart — left, wider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Annual Revenue (ZAR)</div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400/70 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
                  <span>347% CAGR</span>
                </div>
              </div>
              <AnimatedBarChart
                bars={[
                  { label: "Year 1", value: 2, display: "R2M", color: "#6ee7b7" },
                  { label: "Year 2", value: 10, display: "R10M", color: "#34d399" },
                  { label: "Year 3", value: 40, display: "R40M+", color: "#10b981" },
                ]}
                height={220}
                barWidth={84}
                showGrowth
              />
            </motion.div>

            {/* Revenue cards — right, stacked */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { year: "Year 1", revenue: "R2M", pros: "2,000", bookings: "15K/mo" },
                { year: "Year 2", revenue: "R10M", pros: "10,000", bookings: "80K/mo" },
                { year: "Year 3", revenue: "R40M+", pros: "35,000", bookings: "300K/mo" },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">{item.year}</div>
                    <div className="text-xl font-bold text-white">{item.revenue}</div>
                  </div>
                  <div className="flex gap-5 text-sm text-neutral-500">
                    <span><span className="text-neutral-400">{item.pros}</span> professionals</span>
                    <span><span className="text-neutral-400">{item.bookings}</span> bookings/mo</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Assumptions & Burn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <h3 className="text-white font-semibold text-sm mb-2">Key Assumptions</h3>
              <div className="space-y-1.5">
                <BULLET>Average booking value: R350–R1,200 across all categories</BULLET>
                <BULLET>Platform take rate: 10–15% per booking, decreasing as volume scales</BULLET>
                <BULLET>Professional acquisition: organic + referral, low CAC due to word-of-mouth</BULLET>
                <BULLET>Consumer acquisition: referral-driven, city-level targeted campaigns</BULLET>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <h3 className="text-white font-semibold text-sm mb-2">Burn & Runway</h3>
              <div className="space-y-1.5">
                <BULLET>Current monthly burn: lean operation, primarily hosting + engineering</BULLET>
                <BULLET>Seed investment targets 18–24 months of runway</BULLET>
                <BULLET>Path to unit profitability by Year 2 at current take-rate assumptions</BULLET>
                <BULLET>Revenue primarily from commission + ads; subscriptions scaling in Year 2</BULLET>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 14. The Ask ──
  {
    id: "ask",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            The Ask
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Invest in the future of services
          </h2>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 mb-6">
            <div className="text-center mb-6">
              <div className="text-xs text-neutral-500 mb-1">Seed Round</div>
              <div className="text-5xl font-bold text-emerald-400 mb-1">Undisclosed</div>
              <div className="text-neutral-600 text-sm">Contact for details — lihle@bouul.com</div>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-white font-semibold text-sm mb-4">Use of Funds</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: "Engineering & AI", pct: "35%", desc: "Zola improvements, platform scaling, AI pipeline" },
                  { label: "City Growth & Ops", pct: "30%", desc: "New cities, community managers, pro onboarding" },
                  { label: "Marketing & GTM", pct: "25%", desc: "Referral programme, campaigns, SEO, partnerships" },
                  { label: "G&A", pct: "10%", desc: "Legal, compliance, admin, tools" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{item.pct}</div>
                    <div className="text-emerald-400 text-xs font-semibold mb-0.5">{item.label}</div>
                    <div className="text-neutral-600 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones this round achieves */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 mb-2"
          >
            <h3 className="text-white font-semibold text-sm mb-2">Milestones This Round Achieves</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {["10,000 pros on platform", "50 SA cities live", "Revenue breakeven", "Namibia / Botswana expansion"].map((m) => (
                <div key={m} className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xs">✦</span>
                  <span className="text-neutral-400 text-xs">{m}</span>
                </div>
              ))}
            </div>
            <p className="text-neutral-600 text-xs mt-3 border-t border-neutral-800 pt-3">
              Target runway: 18–24 months. Paced for efficient growth with clear unit economics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    ),
  },

  // ── 16. Resonance Engine Architecture (appendix) ──
  // Inserted before Vision/Closing at index 15
  {
    id: "resonance-arch",
    content: (
      <div className="flex flex-col justify-center min-h-screen px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Appendix
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Resonance Engine Architecture
          </h2>

          <svg viewBox="0 0 900 580" className="w-full max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <rect x="0" y="0" width="900" height="580" rx="16" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />

            {/* ── Layer 1: Input Signals ── */}
            <text x="30" y="28" fill="#34d399" fontSize="10" fontWeight="600" letterSpacing="2">INPUT SIGNALS</text>

            {/* journey_events */}
            <rect x="30" y="40" width="200" height="60" rx="8" fill="#171717" stroke="#262626" strokeWidth="1" />
            <text x="50" y="60" fill="#ededed" fontSize="12" fontWeight="600">journey_events</text>
            <text x="50" y="76" fill="#a3a3a3" fontSize="9">view · search · booking · review</text>
            <text x="50" y="90" fill="#737373" fontSize="9">like · share — all tracked per user</text>

            {/* user_interests */}
            <rect x="260" y="40" width="180" height="60" rx="8" fill="#171717" stroke="#262626" strokeWidth="1" />
            <text x="280" y="60" fill="#ededed" fontSize="12" fontWeight="600">user_interests</text>
            <text x="280" y="76" fill="#a3a3a3" fontSize="9">Categories scored by</text>
            <text x="280" y="90" fill="#737373" fontSize="9">interaction count + recency</text>

            {/* Zola Dimensions */}
            <rect x="470" y="40" width="210" height="60" rx="8" fill="#171717" stroke="#262626" strokeWidth="1" />
            <text x="490" y="60" fill="#ededed" fontSize="12" fontWeight="600">Zola Psychology Dimensions</text>
            <text x="490" y="76" fill="#a3a3a3" fontSize="9">economic_value → budget ordering</text>
            <text x="490" y="90" fill="#737373" fontSize="9">emergency_need → available today</text>

            {/* Behavioral Insights */}
            <rect x="710" y="40" width="165" height="60" rx="8" fill="#171717" stroke="#262626" strokeWidth="1" />
            <text x="730" y="60" fill="#ededed" fontSize="12" fontWeight="600">Behavioral Insights</text>
            <text x="730" y="76" fill="#a3a3a3" fontSize="9">booking:prefers_last_minute</text>
            <text x="730" y="90" fill="#737373" fontSize="9">vendor affinities, budget cap</text>

            {/* Arrow from layer 1 to 2 */}
            <line x1="450" y1="100" x2="450" y2="130" stroke="#34d399" strokeWidth="1.5" />
            <polygon points="450,134 446,126 454,126" fill="#34d399" />

            {/* ── Layer 2: Slot Engine ── */}
            <text x="30" y="148" fill="#34d399" fontSize="10" fontWeight="600" letterSpacing="2">SLOT ENGINE (Dart - HomepageSlotEngine)</text>

            <rect x="30" y="158" width="840" height="90" rx="10" fill="#171717" stroke="#34d399" strokeWidth="1" strokeOpacity="0.4" />

            {/* Epsilon-greedy */}
            <rect x="50" y="172" width="180" height="60" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="70" y="192" fill="#ededed" fontSize="11" fontWeight="600">Epsilon-Greedy Sampling</text>
            <text x="70" y="210" fill="#a3a3a3" fontSize="9">80% exploit (highest-CTR strategy)</text>
            <text x="70" y="224" fill="#737373" fontSize="9">20% explore (random from pool)</text>

            {/* 70/20/10 */}
            <rect x="260" y="172" width="170" height="60" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="280" y="192" fill="#ededed" fontSize="11" fontWeight="600">70/20/10 Diversity</text>
            <text x="280" y="210" fill="#a3a3a3" fontSize="9">70% personalized rows</text>
            <text x="280" y="224" fill="#737373" fontSize="9">20% trending · 10% exploration</text>

            {/* Seeding */}
            <rect x="460" y="172" width="180" height="60" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="480" y="192" fill="#ededed" fontSize="11" fontWeight="600">Deterministic Seeding</text>
            <text x="480" y="210" fill="#a3a3a3" fontSize="9">Per-session FNV-1a hash from</text>
            <text x="480" y="224" fill="#737373" fontSize="9">user_id + namespace + count</text>

            {/* Urgency */}
            <rect x="670" y="172" width="180" height="60" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="690" y="192" fill="#ededed" fontSize="11" fontWeight="600">Dynamic Rows</text>
            <text x="690" y="210" fill="#a3a3a3" fontSize="9">urgency &gt; 0.6 → available today</text>
            <text x="690" y="224" fill="#737373" fontSize="9">budget cap → "Under R[X]" row</text>

            {/* Arrow from layer 2 to 3 */}
            <line x1="450" y1="250" x2="450" y2="280" stroke="#34d399" strokeWidth="1.5" />
            <polygon points="450,284 446,276 454,276" fill="#34d399" />

            {/* ── Layer 3: Discovery Signals ── */}
            <text x="30" y="298" fill="#34d399" fontSize="10" fontWeight="600" letterSpacing="2">DISCOVERY SIGNAL POOL (7 RPC-backed strategies)</text>

            <rect x="30" y="308" width="840" height="95" rx="10" fill="#171717" stroke="#262626" strokeWidth="1" />

            {[["rising_stars", "rpc_rising_star_services", "New services with early traction"],
              ["trending", "rpc_trending_search_services", "Matches platform-wide searches"],
              ["affinity", "rpc_search_affinity_services", "Matches user's own search history"],
              ["network", "rpc_network_discovery_services", "Vendors similar to your affinity"],
              ["cross", "rpc_customers_also_booked", "Collaborative filtering from bookings"],
              ["recent", "rpc_recently_completed_services", "Just finished nearby"],
              ["proof", "rpc_social_proof_services", "High rating + high bookings"],
            ].map(([id, rpc, desc], i) => (
              <g key={id as string}>
                <rect x={40 + i * 118} y={320} width={110} height="70" rx="5" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
                <text x={55 + i * 118} y={340} fill="#34d399" fontSize="9" fontWeight="600">{id as string}</text>
                <text x={48 + i * 118} y={356} fill="#737373" fontSize="7">{rpc as string}</text>
                <text x={48 + i * 118} y={372} fill="#525252" fontSize="7">{desc as string}</text>
              </g>
            ))}

            {/* Arrow from layer 3 to 4 */}
            <line x1="450" y1="405" x2="450" y2="435" stroke="#34d399" strokeWidth="1.5" />
            <polygon points="450,439 446,431 454,431" fill="#34d399" />

            {/* ── Layer 4: Headlines + Virtual Sections ── */}
            <text x="30" y="453" fill="#34d399" fontSize="10" fontWeight="600" letterSpacing="2">AI HEADLINES + VIRTUAL SECTION FACTORY</text>

            <rect x="30" y="463" width="840" height="55" rx="10" fill="#171717" stroke="#262626" strokeWidth="1" />

            {/* DeepSeek */}
            <rect x="50" y="475" width="380" height="32" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="68" y="488" fill="#ededed" fontSize="10" fontWeight="600">DeepSeek V4-Flash</text>
            <text x="68" y="500" fill="#a3a3a3" fontSize="8">3 title variants per section (conversational, catchy, time-aware) — 6h freshness</text>

            {/* Virtual Sections */}
            <rect x="460" y="475" width="390" height="32" rx="6" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
            <text x="478" y="488" fill="#ededed" fontSize="10" fontWeight="600">Virtual Section Factory</text>
            <text x="478" y="500" fill="#a3a3a3" fontSize="8">Generates sections on-the-fly when DB has no match — guarantees zero empty slots</text>

            {/* Arrow from layer 4 to output */}
            <line x1="450" y1="520" x2="450" y2="540" stroke="#34d399" strokeWidth="1.5" />
            <polygon points="450,544 446,536 454,536" fill="#34d399" />

            {/* ── Output ── */}
            <text x="30" y="558" fill="#34d399" fontSize="10" fontWeight="600" letterSpacing="2">OUTPUT: PERSONALIZED HOMEPAGE</text>
          </svg>
        </motion.div>
      </div>
    ),
  },

  // ── 15. Vision / Closing ──
  {
    id: "vision",
    content: (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Join Us
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Africa&apos;s operating system for services
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
            In 10 years, Bouul will be the default way Africans find, book, and pay for services —
            the same way Uber moved transportation, Bouul moves service professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 text-left">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                <span className="text-emerald-400 text-sm font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1 text-center">Why Now</h4>
              <p className="text-neutral-500 text-xs text-center">SA is ready for a trusted marketplace. Smartphones, digital payments, and a massive trust deficit create the perfect timing.</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                <span className="text-emerald-400 text-sm font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1 text-center">Why Us</h4>
              <p className="text-neutral-500 text-xs text-center">Deep tech moat, AI-first product, full marketplace infrastructure built from scratch for the SA market.</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 mx-auto">
                <span className="text-emerald-400 text-sm font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1 text-center">Why Big</h4>
              <p className="text-neutral-500 text-xs text-center">R500B+ informal market, &lt;5% online, network effects that compound. First mover in $1T+ continental opportunity.</p>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 max-w-md mx-auto mb-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-3">
              <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
            </div>
            <p className="text-white font-semibold mb-1">Let&apos;s build this together.</p>
            <p className="text-neutral-500 text-xs mb-3">Lihle Diphokwana — Founder & CEO</p>
            <a
              href="mailto:lihle@bouul.com"
              className="inline-block px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-sm transition-colors"
            >
              lihle@bouul.com
            </a>
          </div>

          <p className="text-neutral-700 text-xs">
            Confidential — For Investors Only · April 2026
          </p>
        </motion.div>
      </div>
    ),
  },
];

// ─── Slide counter ──────────────────────────────────────────────────────────────
const SlideCounter = ({ current, total }: { current: number; total: number }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i === current ? "w-6 bg-emerald-400" : i < current ? "w-1 bg-neutral-600" : "w-1 bg-neutral-800"
          }`}
        />
      ))}
    </div>
    <span className="text-neutral-600 text-xs ml-2">
      {current + 1} / {total}
    </span>
  </div>
);

// ─── Password gate ──────────────────────────────────────────────────────────────
const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full"
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-6">
          <img src="/bouul-logo.png" alt="Bouul" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Pitch Deck</h1>
        <p className="text-neutral-500 text-sm text-center mb-6">
          Enter the password to view this deck.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className={`w-full bg-neutral-950 border ${
              error ? "border-red-500" : "border-neutral-800"
            } rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors`}
          />
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl text-sm transition-colors"
          >
            View Deck
          </button>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-xs text-center"
            >
              Incorrect password
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────────
export default function PitchDeckPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const goNext = useCallback(() => {
    setSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [unlocked, goNext, goPrev]);

  // Touch/swipe support
  const touchStartX = React.useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 60) {
      diff > 0 ? goPrev() : goNext();
    }
  };

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <main
      className="min-h-screen bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide area */}
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {SLIDES[slideIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between pointer-events-none px-4">
        <button
          onClick={goPrev}
          disabled={slideIndex === 0}
          className={`pointer-events-auto w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center transition-all ${
            slideIndex === 0 ? "opacity-0" : "opacity-60 hover:opacity-100"
          }`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          disabled={slideIndex === SLIDES.length - 1}
          className={`pointer-events-auto w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center transition-all ${
            slideIndex === SLIDES.length - 1 ? "opacity-0" : "opacity-60 hover:opacity-100"
          }`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots & progress */}
      <SlideCounter current={slideIndex} total={SLIDES.length} />

      {/* Hint */}
      {slideIndex === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 text-neutral-700 text-xs"
        >
          Use arrow keys or swipe to navigate
        </motion.div>
      )}
    </main>
  );
}
