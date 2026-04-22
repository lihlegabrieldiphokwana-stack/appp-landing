import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export type VendorPreview = {
  business_name?: string | null;
  handle?: string | null;
  logo?: string | null;
  is_verified?: boolean | null;
};

type PublicDeepLinkPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  canonicalUrl: string;
  appUrl: string;
  imageUrl?: string | null;
  vendor?: VendorPreview | null;
  stats?: string[];
  tags?: string[];
  primaryAction?: string;
};

export function publicImageUrl(value: string | null | undefined) {
  if (!value) return null;
  if (value.startsWith("https://") || value.startsWith("http://")) {
    return value;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  if (!supabaseUrl) return null;

  const base = supabaseUrl.endsWith("/") ? supabaseUrl.slice(0, -1) : supabaseUrl;
  const path = value.startsWith("/") ? value.slice(1) : value;
  if (path.includes("storage/v1")) {
    return `${base}/${path}`;
  }
  return `${base}/storage/v1/object/public/images/${path}`;
}

export function cleanText(value: string | null | undefined, fallback: string) {
  const cleaned = value?.replace(/\s+/g, " ").trim();
  return cleaned && cleaned.length > 0 ? cleaned : fallback;
}

export function excerpt(value: string | null | undefined, fallback: string) {
  const text = cleanText(value, fallback);
  return text.length > 180 ? `${text.slice(0, 177).trim()}...` : text;
}

export async function fetchSupabaseRow<T>(
  table: string,
  params: Record<string, string>,
): Promise<T | null> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return null;

  const search = new URLSearchParams({
    ...params,
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?${search}`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    next: { revalidate: 120 },
  });

  if (!response.ok) return null;

  const rows = (await response.json()) as T[];
  return rows[0] ?? null;
}

export function PublicDeepLinkPage({
  eyebrow,
  title,
  description,
  canonicalUrl,
  appUrl,
  imageUrl,
  vendor,
  stats = [],
  tags = [],
  primaryAction = "Open in Bouul",
}: PublicDeepLinkPageProps) {
  const displayVendor = vendor?.business_name ?? "Bouul";
  const handle = vendor?.handle ? `$${vendor.handle}` : null;

  return (
    <main className="min-h-screen bg-black" data-canonical-url={canonicalUrl}>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        {imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/82 to-black" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              {eyebrow}
            </div>

            <h1 className="mb-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {title}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              {handle && (
                <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                  {handle}
                </span>
              )}
              {vendor?.is_verified && (
                <span className="rounded-full border border-emerald-500/30 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Verified on Bouul
                </span>
              )}
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-200"
                >
                  {stat}
                </span>
              ))}
            </div>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-300"
                  >
                    {tag.replaceAll("_", " ")}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={appUrl}
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-black transition-colors hover:bg-emerald-300"
              >
                {primaryAction}
              </a>
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
              >
                Get the app
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-emerald-400 text-2xl font-black text-black">
                {vendor?.logo ? (
                  <img
                    src={publicImageUrl(vendor.logo) ?? vendor.logo}
                    alt={displayVendor}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  displayVendor.charAt(0).toUpperCase()
                )}
              </div>
              <div>
                <div className="text-lg font-semibold text-white">
                  {displayVendor}
                </div>
                {handle && (
                  <div className="text-sm font-semibold text-emerald-300">
                    {handle}
                  </div>
                )}
              </div>
            </div>

            {imageUrl ? (
              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-black">
                <img src={imageUrl} alt={title} className="h-72 w-full object-cover" />
              </div>
            ) : (
              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Deep link ready
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  This public Bouul link can open directly in the app on
                  supported devices.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function metadataImages(imageUrl: string | null | undefined) {
  return imageUrl
    ? [{ url: imageUrl, width: 1200, height: 630 }]
    : [
        {
          url: "/optimized/hero-banner-desktop.jpg",
          width: 1200,
          height: 630,
        },
      ];
}
