import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { MediaPlaceholder } from "@/components/redesign/media-placeholder";

type Vendor = {
  id: string;
  business_name: string;
  handle: string;
  description: string | null;
  logo: string | null;
  cover_image: string | null;
  is_verified: boolean | null;
  avg_rating: number | null;
  review_count: number | null;
  categories: string[] | null;
};

const handlePattern = /^\$[a-z][a-z0-9_]{2,29}$/i;

function normalizeHandle(raw: string) {
  const decoded = decodeURIComponent(raw);
  if (!handlePattern.test(decoded)) return null;
  return decoded.slice(1).toLowerCase();
}

async function getVendorByHandle(handle: string): Promise<Vendor | null> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const search = new URLSearchParams({
    select:
      "id,business_name,handle,description,logo,cover_image,is_verified,avg_rating,review_count,categories",
    handle: `eq.${handle}`,
    publish_status: "eq.published",
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/vendors?${search}`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    next: { revalidate: 120 },
  });

  if (!response.ok) return null;

  const rows = (await response.json()) as Vendor[];
  return rows[0] ?? null;
}

function publicImageUrl(value: string | null | undefined) {
  if (!value) return null;
  return value.startsWith("https://") || value.startsWith("http://")
    ? value
    : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vendorHandle: string }>;
}): Promise<Metadata> {
  const { vendorHandle } = await params;
  const handle = normalizeHandle(vendorHandle);
  if (!handle) {
    return {
      title: "Business not found",
      robots: { index: false, follow: false },
    };
  }

  const vendor = await getVendorByHandle(handle);
  const title = vendor
    ? `${vendor.business_name} ($${vendor.handle})`
    : `$${handle}`;
  const description =
    vendor?.description ??
    "Open this Bouul business profile to view services, reviews, and booking options.";
  const image = publicImageUrl(vendor?.cover_image) ?? publicImageUrl(vendor?.logo);

  return {
    title,
    description,
    alternates: {
      canonical: `https://bouul.com/$${handle}`,
    },
    openGraph: {
      type: "profile",
      url: `https://bouul.com/$${handle}`,
      title,
      description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : [{ url: "/optimized/hero-banner-desktop.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["/optimized/hero-banner-desktop.jpg"],
    },
  };
}

export default async function VendorHandlePage({
  params,
}: {
  params: Promise<{ vendorHandle: string }>;
}) {
  const { vendorHandle } = await params;
  const handle = normalizeHandle(vendorHandle);
  if (!handle) notFound();

  const vendor = await getVendorByHandle(handle);
  const displayHandle = `$${handle}`;
  const appUrl = `appp://appp.com/$${handle}`;
  const categories = vendor?.categories?.filter(Boolean).slice(0, 4) ?? [];
  const coverImage = publicImageUrl(vendor?.cover_image);
  const logo = publicImageUrl(vendor?.logo);

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        {coverImage && (
          <div
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-b-green/30 bg-b-green-soft px-4 py-2 text-xs font-semibold uppercase tracking-widest text-b-green-deep">
              Bouul business profile
            </div>

            <h1 className="mb-4 text-5xl font-display font-extrabold tracking-tight text-b-ink md:text-7xl">
              {vendor?.business_name ?? "Business profile"}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-b-ink px-4 py-2 text-sm font-bold text-b-paper">
                {displayHandle}
              </span>
              {vendor?.is_verified && (
                <span className="rounded-full border border-b-green/30 px-4 py-2 text-sm font-semibold text-b-green-deep">
                  Verified on Bouul
                </span>
              )}
              {vendor?.avg_rating ? (
                <span className="rounded-full border border-b-ink/20 px-4 py-2 text-sm font-semibold text-b-ink-soft">
                  {vendor.avg_rating.toFixed(1)} rating
                  {vendor.review_count ? ` · ${vendor.review_count} reviews` : ""}
                </span>
              ) : null}
            </div>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-b-ink-soft md:text-xl">
              {vendor?.description ??
                "Open this Bouul business profile in the app to view services, reviews, availability, and booking options."}
            </p>

            {categories.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-b-line bg-b-paper-raised px-3 py-1.5 text-xs font-medium text-b-ink-soft"
                  >
                    {category.replaceAll("_", " ")}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appUrl}
                className="inline-flex items-center justify-center rounded-full bg-b-green px-7 py-3.5 text-sm font-bold text-b-forest transition-colors hover:opacity-90"
              >
                Open in Bouul
              </a>
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full border border-b-ink/20 px-7 py-3.5 text-sm font-semibold text-b-ink-soft transition-colors hover:border-b-ink/50 hover:text-b-ink"
              >
                Get the app
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-b-line bg-b-paper-raised/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-b-green text-2xl font-black text-b-forest">
                {logo ? (
                  <img
                    src={logo}
                    alt={vendor?.business_name ?? displayHandle}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  (vendor?.business_name ?? handle).charAt(0).toUpperCase()
                )}
              </div>
              <div>
                <div className="text-lg font-semibold text-b-ink">
                  {vendor?.business_name ?? displayHandle}
                </div>
                <div className="text-sm font-semibold text-b-green-deep">
                  {displayHandle}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-b-line bg-b-paper p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-b-ink-soft">
                Deep link ready
              </div>
              <p className="text-sm leading-relaxed text-b-ink-soft">
                This public handle is connected to Bouul. If the app is
                installed, supported devices can open this profile directly.
              </p>
            </div>
            <MediaPlaceholder
              kind="image"
              src={coverImage ?? logo ?? undefined}
              alt={vendor?.business_name ?? displayHandle}
              label="Cover photo"
              ratio="16/9"
              className="mt-4"
            />
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
