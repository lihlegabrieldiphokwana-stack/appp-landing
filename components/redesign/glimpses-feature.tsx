"use client";
import React from "react";
import { Play, Hash, Image, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, Eyebrow, Reveal } from "./primitives";
import { MediaPlaceholder } from "./media-placeholder";

/* Short-form result clips — swap these paths for real Glimpses footage later. */
const glimpseTiles = [
  { src: "/glimpses/braids.mp4", poster: "/glimpses/braids.jpg", label: "Braids" },
  { src: "/glimpses/manicure.mp4", poster: "/glimpses/manicure.jpg", label: "Manicure" },
  { src: "/glimpses/cleaning.mp4", poster: "/glimpses/cleaning.jpg", label: "Deep clean" },
];

const contentHighlights = [
  {
    icon: Play,
    title: "Short videos & photos",
    body: "Scroll glimpses of real service results — braid styles fresh off the chair, detailed manicures, spotless cleaning, engine bay before-and-afters. See the work before you book it.",
  },
  {
    icon: Hash,
    title: "Trending hashtags",
    body: "Tap a hashtag to see every glimpse tagged with it. Discover popular styles, trending techniques, and local service trends in your area.",
  },
  {
    icon: Image,
    title: "Book from a glimpse",
    body: "Every glimpse is linked back to the service and vendor it's about. See something you like? One tap opens the booking page. Inspiration to action in seconds.",
  },
];

export function GlimpsesFeature() {
  return (
    <Section className="bg-b-paper-raised py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <Reveal>
            <div className="grid grid-cols-3 gap-3">
              {glimpseTiles.map((tile) => (
                <MediaPlaceholder
                  key={tile.label}
                  kind="video"
                  videoSrc={tile.src}
                  poster={tile.poster}
                  label={tile.label}
                  ratio="9/16"
                  rounded="rounded-2xl"
                />
              ))}
            </div>
          </Reveal>
          {contentHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex gap-5 rounded-3xl border border-b-line bg-b-paper p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(24,39,32,0.06)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-b-sun-soft">
                  <item.icon className="h-6 w-6 text-b-ink" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-b-ink">{item.title}</h3>
                  <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <Eyebrow>Glimpses</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
            See the work. Feel the vibe. Book in one tap.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-b-ink-soft">
            Bouul&apos;s short-content feed (Glimpses) turns service discovery
            into a visual experience. Scroll before-and-after transformations,
            watch service highlights, and go from &quot;that looks amazing&quot;
            to confirmed booking in a single tap. Vendors build visual
            portfolios. Customers get inspired.
          </p>
          <Link
            href="/download"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-b-ink px-6 py-3 text-sm font-semibold text-b-paper transition-colors hover:bg-b-forest"
          >
            Download the app to explore <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
