import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");
  const origin = req.nextUrl.origin;

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !email || !password) {
    return NextResponse.redirect(`${origin}/status?error=invalid`, 303);
  }

  const authRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!authRes.ok) {
    return NextResponse.redirect(`${origin}/status?error=invalid`, 303);
  }

  const session = await authRes.json();
  const res = NextResponse.redirect(`${origin}/status`, 303);
  res.cookies.set("zola_status_session", session.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    // Matches Supabase's own token lifetime rather than inventing a separate
    // one; expiry just means the next /status load falls back to public view.
    maxAge: session.expires_in ?? 3600,
    path: "/status",
  });
  return res;
}
