"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
  from: "user" | "zola";
  text: string;
}

const CHAT_SCRIPT: ChatMessage[] = [
  { from: "user", text: "I need a plumber in Sandton urgently — my geyser is leaking." },
  { from: "zola", text: "On it. I found 3 available plumbers within 5km of you." },
  { from: "zola", text: "Marco T. is closest — 4.9★, 127 reviews, 12 min away. Book him?" },
  { from: "user", text: "Yes, book Marco please." },
  { from: "zola", text: "Done ✓  Marco is confirmed and on his way. I'll notify you when he's 2 min out." },
];

// Timeline (ms from first trigger):
// 400 → msg 0
// 1200 → typing ON
// 2700 → typing OFF + msg 1
// 3400 → typing ON
// 4900 → typing OFF + msg 2
// 5900 → msg 3 (user, no typing before)
// 6600 → typing ON
// 8200 → typing OFF + msg 4

// ─── Typing dots ─────────────────────────────────────────────────────────────
const TypingIndicator = () => (
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

// ─── Chat bubble ─────────────────────────────────────────────────────────────
const Bubble = ({ msg }: { msg: ChatMessage }) => {
  const isZola = msg.from === "zola";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-2.5 ${isZola ? "justify-start" : "justify-end"}`}
    >
      {isZola && (
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-black text-xs font-bold">Z</span>
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isZola
            ? "bg-neutral-800 text-neutral-100 rounded-tl-sm"
            : "bg-emerald-500 text-black font-medium rounded-tr-sm"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
};

// ─── Animated chat card ───────────────────────────────────────────────────────
const ChatCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;
    setStarted(true);

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const at = (ms: number, fn: () => void) => {
      timeouts.push(setTimeout(fn, ms));
    };

    at(400,  () => setMessages([CHAT_SCRIPT[0]]));
    at(1200, () => setTyping(true));
    at(2700, () => { setTyping(false); setMessages((m) => [...m, CHAT_SCRIPT[1]]); });
    at(3400, () => setTyping(true));
    at(4900, () => { setTyping(false); setMessages((m) => [...m, CHAT_SCRIPT[2]]); });
    at(5900, () => setMessages((m) => [...m, CHAT_SCRIPT[3]]));
    at(6600, () => setTyping(true));
    at(8200, () => { setTyping(false); setMessages((m) => [...m, CHAT_SCRIPT[4]]); });

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, started]);

  return (
    <div
      ref={ref}
      className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden w-full max-w-sm"
    >
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-800 bg-neutral-900/60">
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-sm">Z</span>
        </div>
        <div>
          <div className="text-white text-sm font-semibold">Zola</div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-neutral-500 text-xs">Online · Ready to book</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-5 min-h-[360px]">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <Bubble key={i} msg={msg} />
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
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar (static) */}
      <div className="px-5 py-4 border-t border-neutral-800 flex items-center gap-3">
        <div className="flex-1 bg-neutral-800 rounded-full px-4 py-2 text-neutral-600 text-sm">
          Message Zola…
        </div>
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-black rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ─── Feature chips ────────────────────────────────────────────────────────────
const features = [
  "Natural language booking",
  "Compares vetted pros",
  "Remembers preferences",
  "Tracks live",
  "Available 24 / 7",
  "Speaks your city",
];

// ─── Main export ──────────────────────────────────────────────────────────────
export const ZolaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-lg pt-4"
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-6">
              ZOLA AI
            </div>

            {/* Acronym */}
            <div className="flex items-center gap-0 mb-3">
              {["Z","O","L","A"].map((letter, i) => (
                <motion.span
                  key={letter}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="text-7xl md:text-8xl font-semibold text-white leading-none tracking-tight"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-neutral-500 text-sm tracking-widest uppercase mb-8"
            >
              Zone · of · Local · Assistance
            </motion.p>

            <p className="text-neutral-300 text-lg leading-relaxed mb-10">
              Zola is your 24/7 AI booking assistant. Tell her what you need in plain language —
              she finds vetted professionals, compares them, books the best fit, and tracks the
              job live. All without you leaving the chat.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 text-xs"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <ChatCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
