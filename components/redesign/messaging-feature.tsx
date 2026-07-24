"use client";
import React from "react";
import { MessageCircle, Megaphone, Bell, Bot, Sparkles } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const chatPillars = [
  {
    icon: MessageCircle,
    title: "Chat per booking",
    body: "Every booking creates its own conversation thread with the vendor. Ask questions, share reference photos, confirm details — all tied to that specific job.",
  },
  {
    icon: Bot,
    title: "Zola jumps in",
    body: "Need to reschedule or ask about pricing mid-chat? Tag Zola and she joins the thread — answering questions, suggesting alternatives, handling changes without leaving the conversation.",
  },
  {
    icon: Megaphone,
    title: "Channels & broadcasts",
    body: "Follow a vendor and you opt in to their channel. New services, specials, availability — it lands in a dedicated inbox section, separate from your booking chats. You control what you hear.",
  },
];

export function MessagingFeature() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Messaging</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            Conversations with context.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-ink-soft">
            Every message knows which booking it belongs to. No more &quot;which
            chat was that in?&quot; — your inbox organises conversations by job,
            with Zola available to help whenever you need her.
          </p>
          <ul className="mt-8 space-y-3">
            <li className="flex items-start gap-3 text-sm text-b-ink-soft">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
              Booking context pinned at the top of every chat
            </li>
            <li className="flex items-start gap-3 text-sm text-b-ink-soft">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
              Share photos of what you want done — no explaining, just show
            </li>
            <li className="flex items-start gap-3 text-sm text-b-ink-soft">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-green-deep" />
              Promotions in a separate section — personal chats never get buried
            </li>
          </ul>
        </Reveal>
        <div className="space-y-5">
          {chatPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="flex gap-5 rounded-3xl border border-b-line bg-b-paper-raised p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(24,39,32,0.06)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-b-green-soft">
                  <pillar.icon className="h-6 w-6 text-b-green-deep" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-b-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-b-ink-soft">{pillar.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
