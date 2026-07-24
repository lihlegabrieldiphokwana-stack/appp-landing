import React from "react";
import { CalendarCheck, MessageCircle, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";

function ChatMock() {
  return (
    <div className="rounded-3xl border border-b-forest-line bg-b-forest-raised p-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2 border-b border-b-forest-line pb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-b-sun">
          <MessageCircle className="h-4 w-4 text-b-ink" />
        </span>
        <div>
          <p className="text-sm font-semibold text-b-cream">Zola</p>
          <p className="text-[11px] text-b-cream/60">Zone of Local Assistance</p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-b-green px-4 py-2.5 text-sm text-b-forest">
          I need my flat cleaned on Saturday morning
        </div>
        <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-b-forest px-4 py-2.5 text-sm text-b-cream">
          Two cleaners near you are free Saturday. Sindi&apos;s Cleaning (4.9, R350)
          has an 8am slot — want me to hold it?
        </div>
        <div className="w-fit max-w-[85%] rounded-2xl border border-b-forest-line bg-b-forest px-4 py-3">
          <p className="flex items-center gap-1.5 font-price text-[10px] uppercase tracking-[0.18em] text-b-sun">
            <CalendarCheck className="h-3 w-3" /> Booking draft
          </p>
          <p className="mt-1.5 text-sm font-semibold text-b-cream">
            House cleaning · Sat 08:00
          </p>
          <p className="text-xs text-b-cream/60">Sindi&apos;s Cleaning · R350 · escrow protected</p>
          <span className="mt-3 inline-block rounded-full bg-b-green px-4 py-1.5 text-xs font-semibold text-b-forest">
            Confirm booking
          </span>
        </div>
      </div>
    </div>
  );
}

export function ZolaFeature() {
  return (
    <section className="bg-b-forest px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <ChatMock />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Eyebrow tone="sun">Meet Zola</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-5xl">
            An assistant who actually books the thing.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-cream/70">
            Zola is Bouul&apos;s built-in AI assistant. Tell it what you need in
            your own words — it finds the pros, checks real availability, drafts
            the booking, and hands you the confirm button.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-b-cream/70">
            <li className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Speaks all 11 official languages, understands local slang
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Checks live calendars — no back-and-forth voice notes
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-b-sun" />
              Every booking still goes through escrow and your final say
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
