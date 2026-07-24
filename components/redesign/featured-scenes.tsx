import React from "react";
import { FEATURED_SCENES } from "@/lib/scene-images";
import { Section, Eyebrow, Reveal } from "./primitives";
import { SceneCard } from "./scene-card";

/**
 * FeaturedScenes
 *
 * An editorial bento grid of "pros at work" photographs with floating text.
 * One large hero tile anchors the layout; supporting tiles fill around it.
 * Designed to sit on the services page and (optionally) the homepage.
 */
export function FeaturedScenes() {
  const [hero, ...rest] = FEATURED_SCENES;

  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Real work, on display</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Don&apos;t imagine the result. See it first.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-b-ink-soft">
          Every service on Bouul is backed by real work. Pros post their
          results as Glimpses — scroll the work, find the hand behind it, and
          book the same person in one tap.
        </p>
      </Reveal>

      {/* Bento: hero tile + supporting scenes. On mobile single column,
          on md+ two-column layout, on lg hero spans 2 cols × 2 rows. */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="md:col-span-1 lg:col-span-2 lg:row-span-2">
          <SceneCard
            src={hero.src}
            alt={hero.label}
            tag={hero.tag}
            label={hero.label}
            blurb={hero.blurb}
            href="/glimpses"
            variant="feature"
          />
        </Reveal>

        {rest.slice(0, 4).map((scene, i) => (
          <Reveal key={scene.label} delay={0.05 * (i + 1)}>
            <SceneCard
              src={scene.src}
              alt={scene.label}
              tag={scene.tag}
              label={scene.label}
              href="/glimpses"
              variant="tile"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
