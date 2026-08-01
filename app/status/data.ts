export type PublicComponentStatus = {
  component: string;
  status: "ok" | "degraded" | "down";
  checked_at: string;
  uptime_90d: number;
};

export type InternalCheck = {
  id: number;
  probe_key: string;
  component: string;
  status: "ok" | "degraded" | "down";
  latency_ms: number | null;
  detail: Record<string, unknown>;
  checked_at: string;
};

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export async function getPublicStatus(): Promise<PublicComponentStatus[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  const search = new URLSearchParams({
    select: "component,status,checked_at,uptime_90d",
    order: "component.asc",
  });
  const res = await fetch(`${SUPABASE_URL}/rest/v1/service_health_public?${search}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return (await res.json()) as PublicComponentStatus[];
}

/** null when the session cookie is missing, expired, or the caller isn't in staff_members (RLS denies, PostgREST returns empty, not an error). */
export async function getInternalStatus(accessToken: string): Promise<InternalCheck[] | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  const search = new URLSearchParams({
    select: "id,probe_key,component,status,latency_ms,detail,checked_at",
    order: "checked_at.desc",
    limit: "200",
  });
  const res = await fetch(`${SUPABASE_URL}/rest/v1/service_health_internal?${search}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json()) as InternalCheck[];
}
