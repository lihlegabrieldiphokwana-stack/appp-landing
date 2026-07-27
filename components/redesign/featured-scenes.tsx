"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ChevronRight, CheckCircle2 } from "lucide-react";
import { sceneForPopular } from "@/lib/scene-images";
import { Section, Reveal } from "./primitives";

const popularServices = [
  { name: "Plumbers", slug: "plumbers", tag: "Emergency & Home" },
  { name: "Electricians", slug: "electricians", tag: "24/7 Power" },
  { name: "House Cleaning", slug: "house-cleaning", tag: "Eco Clean" },
  { name: "Hairdressers", slug: "hairdressers", tag: "Beauty & Style" },
  { name: "Mechanics", slug: "mechanics", tag: "Auto Diagnostics" },
  { name: "Math Tutors", slug: "math-tutors", tag: "Grade 8-12" },
  { name: "Photographers", slug: "photographers", tag: "Events & Media" },
  { name: "Massage Therapists", slug: "massage-therapists", tag: "Recovery" },
];

export function FeaturedScenes() {
  return (
    <Section className="py-20 px-5 max-w-6xl mx-auto border-b border-b-line bg-b-paper">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Flame className="h-3.5 w-3.5 text-amber-500" />
            <span>Most Requested</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-b-ink">
            Popular Service Categories
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm text-b-ink-soft mt-2 md:mt-0 max-w-md">
            Instant dispatch &amp; verified background checks on South Africa&apos;s most booked home and lifestyle services.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {popularServices.map((service, idx) => {
          const scene = sceneForPopular(service.slug);
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                href={`/category/${service.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden hover:border-emerald-500/40 hover:shadow-xl transition-all h-full"
              >
                <div>
                  <div className="aspect-[16/10] w-full bg-b-paper-deep relative overflow-hidden">
                    <img
                      src={scene.src}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-b-ink/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {service.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-b-ink group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </h3>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 text-[11px] font-medium text-b-ink-faint flex items-center justify-between border-t border-b-line/60 pt-3">
                  <span>Verified Professionals</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Escrow Protected
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
