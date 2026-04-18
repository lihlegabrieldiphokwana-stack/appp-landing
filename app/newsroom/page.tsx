"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsroomBoardPreview } from "@/components/newsroom-board-preview";
import { newsroomArticles, newsroomPressAssets, newsroomUpdates } from "./articles";

export default function NewsroomPage() {
  const [featuredArticle, ...latestArticles] = newsroomArticles;

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              NEWSROOM
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Product stories, launch updates, and press context.
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Follow Bouul as the marketplace takes shape: customer workflows,
              vendor tools, trust systems, and the product decisions behind a
              better way to discover local services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/newsroom/${featuredArticle.slug}`}
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Read latest story
              </Link>
              <Link
                href="/press"
                className="px-7 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-medium text-sm transition-colors"
              >
                Press kit
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
          >
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Editorial desk
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 min-h-[380px]">
              <NewsroomBoardPreview />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                Featured story
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-5">
                {featuredArticle.title}
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                {featuredArticle.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-neutral-500 mb-8">
                <span>{featuredArticle.tag}</span>
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <Link
                href={`/newsroom/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
              >
                Read feature
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="rounded-3xl border border-neutral-800 bg-black p-8"
            >
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-5">
                What we cover
              </div>
              <div className="space-y-4">
                {[
                  "Product explainers for customers and vendors",
                  "Trust, safety, payment, and policy updates",
                  "Growth notes on social discovery, localization, and AI tools",
                  "Press assets and company context for launch coverage",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p className="text-neutral-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((story, index) => (
              <motion.article
                key={story.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7"
              >
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                  {story.tag}
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {story.title}
                </h2>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  {story.summary}
                </p>
                <Link
                  href={`/newsroom/${story.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  Read article
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Current updates
            </div>
            <div className="space-y-5">
              {newsroomUpdates.map((item) => (
                <div key={item.title} className="border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Press kit downloads
            </div>
            <div className="space-y-4">
              {newsroomPressAssets.map((asset) => (
                <a
                  key={asset.label}
                  href={asset.href}
                  download
                  className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-4 hover:border-neutral-600 transition-colors"
                >
                  <div>
                    <div className="text-white font-semibold">{asset.label}</div>
                    <div className="text-neutral-500 text-sm">{asset.note}</div>
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">Download</div>
                </a>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/70 p-5">
              <div className="text-white font-semibold mb-2">Media contact</div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                For interview requests, company background, or additional
                launch materials, contact support@bouul.com and include
                &quot;Press&quot; in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
