import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";
import { CircleCheck, Clock, LifeBuoy, Mail, TriangleAlert, XCircle } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";
import { MediaPlaceholder } from "@/components/redesign/media-placeholder";
import { getInternalStatus, getPublicStatus, type InternalCheck } from "./data";

export const metadata: Metadata = {
  title: "System Status",
  description: "A public check-in on what's running across Bouul, including the Zola AI and ranking pipeline.",
};

type SystemState = "operational" | "in-progress" | "degraded" | "down";

type SystemRow = {
  name: string;
  state: SystemState;
  detail: string;
  /** 0-100. Static (unprobed) entries render as fully green — we have no real
   * uptime series for those, only an assertion that they work. */
  uptimePercent: number;
};

// Site infrastructure this page has always attested to manually. Untouched by
// the 2026-08-02 merge — the backend does not probe these.
const staticSystems: SystemRow[] = [
  {
    name: "Website",
    state: "operational",
    detail: "Landing, services, city, and learn pages are live.",
    uptimePercent: 100,
  },
  {
    name: "Marketplace pages",
    state: "operational",
    detail: "Service, category, and pro profile pages are available.",
    uptimePercent: 100,
  },
  {
    name: "Vendor storefronts",
    state: "operational",
    detail: "Public business profiles and deep links resolve normally.",
    uptimePercent: 100,
  },
  {
    name: "Newsroom",
    state: "operational",
    detail: "Press releases and article pages are online.",
    uptimePercent: 100,
  },
  {
    name: "Mobile app downloads",
    state: "in-progress",
    detail: "App store listings are being finalized. The download page has the latest.",
    uptimePercent: 100,
  },
];

const incidentPolicy = [
  "If a disruption affects bookings, this page is updated first.",
  "If one flow is down but the rest works, the affected area is named clearly.",
  "When there are no incidents, the page still gets a fresh check-in date.",
];

/* 90-day uptime strip. Deterministic — driven by a real percentage for probed
 * rows, fully green (decorative) for the static site-infra rows. */
function UptimeStrip({ uptimePercent }: { uptimePercent: number }) {
  const days = 45;
  const healthyDays = Math.round((uptimePercent / 100) * days);
  return (
    <div className="flex h-6 items-end gap-[3px]" aria-hidden>
      {Array.from({ length: days }, (_, d) => (
        <span
          key={d}
          className={
            d < healthyDays
              ? "h-4 w-1 rounded-full bg-b-green/70"
              : "h-4 w-1 rounded-full bg-b-sun"
          }
        />
      ))}
    </div>
  );
}

function StateBadge({ state }: { state: SystemState }) {
  if (state === "operational") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-b-green-soft px-3 py-1 text-xs font-semibold text-b-green-deep">
        <CircleCheck className="h-3.5 w-3.5" /> Operational
      </span>
    );
  }
  if (state === "in-progress") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-b-sun-soft px-3 py-1 text-xs font-semibold text-b-ink">
        <Clock className="h-3.5 w-3.5" /> In progress
      </span>
    );
  }
  if (state === "degraded") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-b-sun-soft px-3 py-1 text-xs font-semibold text-b-ink">
        <TriangleAlert className="h-3.5 w-3.5" /> Degraded
      </span>
    );
  }
  // "down" — the one state this page never needed before real backend probes
  // existed. No red token exists in the Sunlit Neighbourhood palette, so this
  // uses a plain Tailwind rose accent rather than inventing a brand color.
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800">
      <XCircle className="h-3.5 w-3.5" /> Down
    </span>
  );
}

function groupByComponent(checks: InternalCheck[]) {
  const map = new Map<string, InternalCheck[]>();
  for (const c of checks) {
    if (!map.has(c.component)) map.set(c.component, []);
    map.get(c.component)!.push(c);
  }
  return map;
}

const DETAIL_TEXT: Record<string, string> = {
  ok: "text-b-green-deep",
  degraded: "text-b-ink",
  down: "text-rose-700",
};

export default async function StatusPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("zola_status_session")?.value ?? null;

  const internal = sessionToken ? await getInternalStatus(sessionToken) : null;
  const isStaff = internal !== null;

  const publicRollup = await getPublicStatus();
  const probedSystems: SystemRow[] = publicRollup.map((c) => ({
    name: c.component,
    state: c.status === "ok" ? "operational" : c.status,
    detail:
      c.status === "ok"
        ? "Responding normally."
        : c.status === "degraded"
          ? "Responding, but failing its content checks."
          : "Not responding or timing out.",
    uptimePercent: c.uptime_90d,
  }));

  const systems = [...staticSystems, ...probedSystems];
  const operational = systems.filter((s) => s.state === "operational").length;
  const allGood = operational === systems.length;

  const latestChecked = publicRollup.reduce<string | null>((latest, c) => {
    return !latest || c.checked_at > latest ? c.checked_at : latest;
  }, null);
  const updatedLabel = latestChecked
    ? new Date(latestChecked).toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "24 Jul 2026";

  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />

      {/* Hero + overall banner */}
      <Section className="pb-10 pt-32 md:pt-40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">System status</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight text-b-ink md:text-6xl">
            {allGood ? "All systems go." : "Mostly sunny."}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-b-ink-soft">
            A public check-in on what&apos;s running and what&apos;s still being
            finalized before launch.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-3 rounded-3xl border border-b-green/30 bg-b-green-soft px-6 py-5 sm:flex-row">
            <p className="flex items-center gap-3 font-semibold text-b-green-deep">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-b-green opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-b-green" />
              </span>
              {operational} of {systems.length} systems operational
            </p>
            <p className="font-price text-xs uppercase tracking-[0.18em] text-b-green-deep/80">
              Updated {updatedLabel}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <MediaPlaceholder
            kind="image"
            src="/status/dashboard.jpg"
            alt="System status dashboard"
            label="Dashboard"
            ratio="16/9"
          />
        </Reveal>
      </Section>

      {/* Status board */}
      <Section className="pb-20">
        <Reveal delay={0.15}>
          <div className="mx-auto max-w-3xl divide-y divide-b-line rounded-3xl border border-b-line bg-b-paper-raised">
            {systems.map((system) => (
              <div key={system.name} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-base font-bold text-b-ink">
                      {system.name}
                    </h2>
                    <StateBadge state={system.state} />
                  </div>
                  <p className="mt-1.5 text-sm text-b-ink-soft">{system.detail}</p>
                </div>
                <div className="shrink-0">
                  <UptimeStrip uptimePercent={system.uptimePercent} />
                  <p className="mt-1 text-right font-price text-[10px] uppercase tracking-[0.15em] text-b-ink-faint">
                    Past 45 days
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Incident policy + contact */}
      <Section className="pb-24">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-b-line bg-b-paper-raised p-7">
              <Eyebrow>How incidents are handled</Eyebrow>
              <ul className="mt-5 space-y-4">
                {incidentPolicy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-b-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-b-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-b-forest-line bg-b-forest p-7">
              <Eyebrow tone="sun">Something looks off?</Eyebrow>
              <p className="mt-5 text-sm leading-relaxed text-b-cream/80">
                Tell us and we&apos;ll check it against this board straight away.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:support@bouul.com"
                  className="flex items-center gap-2.5 text-sm font-semibold text-b-cream transition-colors hover:text-b-sun"
                >
                  <Mail className="h-4 w-4" /> support@bouul.com
                </a>
                <Link
                  href="/support"
                  className="flex items-center gap-2.5 text-sm font-semibold text-b-cream transition-colors hover:text-b-sun"
                >
                  <LifeBuoy className="h-4 w-4" /> Open the support page
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Staff detail — added 2026-08-02 alongside the Zola/ranking probes */}
      <Section className="pb-28">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-b-line bg-b-paper-raised p-7">
            {isStaff ? (
              <>
                <div className="flex items-center justify-between">
                  <Eyebrow>Probe detail (staff)</Eyebrow>
                  <form action="/status/logout" method="POST">
                    <button
                      className="text-xs font-semibold text-b-ink-faint hover:text-b-ink"
                      type="submit"
                    >
                      Log out
                    </button>
                  </form>
                </div>
                <div className="mt-6 space-y-8">
                  {Array.from(groupByComponent(internal!)).map(([component, checks]) => (
                    <div key={component}>
                      <h3 className="font-display text-sm font-bold text-b-ink">{component}</h3>
                      <table className="mt-2 w-full text-left text-sm">
                        <thead className="text-b-ink-faint">
                          <tr>
                            <th className="pb-2 font-normal">Probe</th>
                            <th className="pb-2 font-normal">Status</th>
                            <th className="pb-2 font-normal">Latency</th>
                            <th className="pb-2 font-normal">Checked</th>
                          </tr>
                        </thead>
                        <tbody>
                          {checks.slice(0, 5).map((c) => (
                            <tr key={c.id} className="border-t border-b-line">
                              <td className="py-2 font-mono text-xs text-b-ink-soft">{c.probe_key}</td>
                              <td className={`py-2 font-semibold ${DETAIL_TEXT[c.status] ?? ""}`}>
                                {c.status}
                              </td>
                              <td className="py-2 text-b-ink-faint">{c.latency_ms ?? "—"}ms</td>
                              <td className="py-2 text-b-ink-faint">
                                {new Date(c.checked_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Eyebrow>Staff login</Eyebrow>
                {error === "invalid" && (
                  <p className="mt-2 text-sm text-rose-700">
                    Invalid credentials, or your session expired.
                  </p>
                )}
                <form action="/status/login" method="POST" className="mt-4 max-w-sm space-y-3">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-lg border border-b-line bg-b-paper px-3 py-2 text-sm text-b-ink placeholder:text-b-ink-faint"
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full rounded-lg border border-b-line bg-b-paper px-3 py-2 text-sm text-b-ink placeholder:text-b-ink-faint"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-b-forest px-3 py-2 text-sm font-semibold text-b-cream transition-colors hover:bg-b-forest-raised"
                  >
                    Log in
                  </button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </Section>

      <RedesignFooter />
    </main>
  );
}
