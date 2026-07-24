import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { MediaPlaceholder } from "@/components/redesign/media-placeholder";
import { getNewsroomArticle, newsroomArticles, type NewsroomArticle } from "../articles";

const ArticleVisual = ({ article }: { article: NewsroomArticle }) => {
  const visualSteps = article.quickFacts.map((fact, index) => ({
    label: `Signal ${index + 1}`,
    fact,
  }));

  return (
    <div className="absolute inset-0 bg-b-paper-raised text-b-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_30%)]" />
      <div className="relative h-full p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-b-ink-soft">
          <span>{article.tag}</span>
          <span>{article.readTime}</span>
        </div>

        <div className="rounded-[1.6rem] border border-b-ink/10 bg-b-ink/5 p-5 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-b-green-deep mb-2">
            {article.visualTitle}
          </div>
          <div className="text-2xl font-semibold leading-tight">
            {article.visualCaption}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {visualSteps.map((step) => (
            <div key={step.fact} className="rounded-2xl border border-b-ink/10 bg-b-paper/35 p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-b-ink-soft mb-2">
                {step.label}
              </div>
              <div className="text-sm font-semibold text-neutral-100">{step.fact}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-[1.6rem] border border-emerald-400/20 bg-b-green-soft p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-b-green-deep mb-2">
            Bouul newsroom
          </div>
          <div className="text-sm text-b-ink-soft">
            Product context for customers, professionals, and launch coverage.
          </div>
        </div>
      </div>
    </div>
  );
};

export function generateStaticParams() {
  return newsroomArticles.map((article) => ({ slug: article.slug }));
}

type NewsroomArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: NewsroomArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsroomArticle(slug);

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

export default async function NewsroomArticlePage({ params }: NewsroomArticleRouteProps) {
  const { slug } = await params;
  const article = getNewsroomArticle(slug);

  if (!article) {
    notFound();
  }

  const takeaways = article.sections.slice(0, 3);

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <Link href="/newsroom" className="text-b-ink-soft text-sm hover:text-b-ink transition-colors">
              &lt;- Back to newsroom
            </Link>
            <div className="mt-6">
              <div className="text-xs font-semibold tracking-widest text-b-green-deep uppercase mb-4">
                {article.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-b-ink tracking-tight mb-6">
                {article.title}
              </h1>
              <p className="text-b-ink-soft text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                {article.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-b-ink-soft">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
                <span>Product story</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {takeaways.map((section) => (
                <div key={section.heading} className="rounded-2xl border border-b-line bg-b-paper-raised p-5">
                  <div className="text-b-green-deep text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">
                    Takeaway
                  </div>
                  <div className="text-b-ink font-medium text-sm leading-relaxed">
                    {section.heading}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <MediaPlaceholder
              kind="image"
              src={`/newsroom/${article.slug}-hero.jpg`}
              alt={article.title}
              label="Story hero"
              ratio="16/9"
              rounded="rounded-3xl"
            />
            <div className="rounded-3xl border border-b-line bg-b-paper-raised p-8">
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
                Story visual
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-b-line bg-b-paper min-h-[380px]">
                <ArticleVisual article={article} />
              </div>
            </div>

            <div className="rounded-3xl border border-b-line bg-b-paper p-8">
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
                Pull quote
              </div>
              <blockquote className="text-b-ink text-xl md:text-2xl leading-relaxed">
                &ldquo;{article.pullQuote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-b-line">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {article.sections.map((section, index) => (
            <article key={section.heading} className="border-b border-b-line pb-10 last:border-0 last:pb-0">
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-3">
                {article.tag} / {index + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink mb-4">
                {section.heading}
              </h2>
              <p className="text-b-ink-soft leading-relaxed text-lg">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-b-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-b-line bg-b-paper p-8 md:p-10 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8">
            <div>
              <div className="text-xs font-semibold tracking-widest text-b-ink-soft uppercase mb-4">
                Quick facts
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-b-ink">
                What to remember
              </h2>
            </div>
            <div className="space-y-4">
              {article.quickFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-b-green" />
                  <p className="text-b-ink-soft text-sm leading-relaxed">{fact}</p>
                </div>
              ))}
              <Link
                href="/press"
                className="inline-flex items-center gap-2 pt-3 text-sm font-medium text-b-ink hover:text-b-green-deep transition-colors"
              >
                Open press kit
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
