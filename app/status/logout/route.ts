import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(`${req.nextUrl.origin}/status`, 303);
  // path must match the login route's cookies.set() path exactly, or the
  // browser treats this as a different cookie and never clears the real one.
  res.cookies.set("zola_status_session", "", { path: "/status", maxAge: 0 });
  return res;
}
