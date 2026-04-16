import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsroomBoardPreview } from "@/components/newsroom-board-preview";
import { getNewsroomArticle, newsroomArticles } from "../articles";

export function generateStaticParams() {
  return newsroomArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsroomArticle(params.slug);

  if (!article) {
    return {
      title: "Newsroom",
      description: "News, product updates, and platform stories from Bouul.",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://bouul.com/newsroom/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `https://bouul.com/newsroom/${article.slug}`,
      images: [
        {
          url: "/optimized/hero-banner-desktop.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: ["/optimized/hero-banner-desktop.jpg"],
    },
  };
}

export default function NewsroomArticlePage({ params }: { params: { slug: string } }) {
  const article = getNewsroomArticle(params.slug);

  if (!article) {
    notFound();
  }

  const takeaways = article.sections.slice(0, 3);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <Link href="/newsroom" className="text-neutral-500 text-sm hover:text-white transition-colors">
              ← Back to newsroom
            </Link>
            <div className="mt-6">
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                {article.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                {article.title}
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                {article.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-neutral-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
                <span>Product story</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {takeaways.map((section) => (
                <div key={section.heading} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="text-emerald-400 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">
                    Takeaway
                  </div>
                  <div className="text-white font-medium text-sm leading-relaxed">
                    {section.heading}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Featured image slot
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black min-h-[380px]">
                <NewsroomBoardPreview />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5">
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {article.heroNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-black p-8">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
                Pull quote
              </div>
              <blockquote className="text-white text-xl md:text-2xl leading-relaxed">
                “{article.summary}”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {article.sections.map((section, index) => (
            <article key={section.heading} className="border-b border-neutral-800 pb-10 last:border-0 last:pb-0">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">
                Section {index + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-500 leading-relaxed text-lg">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-neutral-800 bg-black p-8 md:p-10">
            <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Editorial note
            </div>
            <p className="text-neutral-500 leading-relaxed max-w-3xl">
              {article.imageNote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
