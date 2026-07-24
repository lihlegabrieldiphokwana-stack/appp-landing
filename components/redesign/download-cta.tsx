import React from "react";
import Link from "next/link";
import { Apple, Play, Smartphone } from "lucide-react";
import { Section, Reveal } from "./primitives";

export function DownloadCta() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-b-forest px-6 py-16 text-center md:px-14 md:py-20">
          {/* Rising-sun arc */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-[50%] bg-b-sun opacity-20 blur-3xl"
          />
          <p className="font-price text-[11px] font-semibold uppercase tracking-[0.22em] text-b-sun">
            Free on iOS and Android
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-b-cream md:text-6xl">
            Your neighbourhood is hiring itself out.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-b-cream/70">
            Download Bouul and book your first verified pro today — or put your
            own name on the map.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-b-cream px-8 py-4 font-semibold text-b-forest transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Apple className="h-5 w-5" /> App Store
            </Link>
            <Link
              href="/download"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-b-cream px-8 py-4 font-semibold text-b-forest transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Play className="h-5 w-5" /> Google Play
            </Link>
            <Link
              href="/vendors"
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-b-cream/30 px-8 py-4 font-semibold text-b-cream transition-colors hover:border-b-cream/60 sm:w-auto"
            >
              <Smartphone className="h-5 w-5" /> Join as a pro
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
