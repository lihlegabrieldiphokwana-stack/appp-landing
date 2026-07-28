"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Share2, Check, ExternalLink } from "lucide-react";

/* ─── Custom Social SVG Icons ────────────────────────────────────────────── */

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TiktokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.12V9.4a6.27 6.27 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V9.28a8.16 8.16 0 0 0 4.94 1.64V7.46a4.85 4.85 0 0 1-1-.77z" />
    </svg>
  );
}

const columns: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: "Product",
    links: [
      { href: "/services", label: "Find services" },
      { href: "/resonance", label: "Resonance AI Engine" },
      { href: "/intelligent-search", label: "Intelligent AI Search" },
      { href: "/payments", label: "Escrow & Payouts" },
      { href: "/ai-safety", label: "AI Safety & Veto" },
      { href: "/case-studies", label: "Merchant Stories & ROI" },
      { href: "/trophies", label: "Trophy system" },
      { href: "/vendors", label: "For professionals" },
      { href: "/employees", label: "For teams" },
      { href: "/download", label: "Download the app" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/newsroom", label: "Newsroom" },
      { href: "/investors", label: "Investors" },
    ],
  },
  {
    title: "Trust & Safety",
    links: [
      { href: "/verification", label: "Pro Verification Center" },
      { href: "/disputes", label: "Dispute Resolution" },
      { href: "/tutorials", label: "Tutorials & Guides" },
      { href: "/faq", label: "Help centre" },
      { href: "/contact", label: "Contact us" },
      { href: "/safety", label: "Safety" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of service" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/policies", label: "Policies" },
      { href: "/community-guidelines", label: "Community guidelines" },
    ],
  },
];

const SOCIAL_MEDIA = [
  { name: "Instagram", Icon: InstagramIcon, href: "#", handle: "@bouul_app" },
  { name: "X (Twitter)", Icon: TwitterIcon, href: "#", handle: "@bouul_app" },
  { name: "LinkedIn", Icon: LinkedinIcon, href: "#", handle: "Bouul South Africa" },
  { name: "YouTube", Icon: YoutubeIcon, href: "#", handle: "@bouul_official" },
  { name: "Facebook", Icon: FacebookIcon, href: "#", handle: "@bouul.za" },
  { name: "TikTok", Icon: TiktokIcon, href: "#", handle: "@bouul_app" },
];

export function RedesignFooter() {
  const [copied, setCopied] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const handleSocialClick = (name: string, handle: string) => {
    setActiveToast(`${name} (${handle}) link placeholder`);
    setTimeout(() => setActiveToast(null), 3000);
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bouul — Verified Local Services & Escrow Payments",
          text: "Book verified local professionals in South Africa with 100% escrow protection.",
          url: window.location.origin,
        });
        return;
      } catch (err) {
        // Fallback to copy link
      }
    }
    await navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="border-t border-b-line bg-b-paper-deep px-5 pb-10 pt-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/bouul-logo.png"
                  alt="Bouul Logo Mark"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <p className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
                bouul<span className="text-b-green">.</span>
              </p>
            </Link>
            <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">
              Every pro in your neighbourhood, one app. Verified professionals,
              escrow-protected payments, made in South Africa.
            </p>

            {/* Social Media Icons & Share Button Bar */}
            <div className="mt-6 space-y-3">
              <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint">
                Connect with us
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_MEDIA.map((social) => (
                  <button
                    key={social.name}
                    type="button"
                    onClick={() => handleSocialClick(social.name, social.handle)}
                    title={`${social.name}: ${social.handle}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-b-line bg-b-paper text-b-ink-soft transition-all hover:border-b-green-deep hover:bg-b-sun-soft hover:text-b-ink active:scale-95"
                  >
                    <social.Icon className="h-4 w-4" />
                  </button>
                ))}

                {/* Share Page Button */}
                <button
                  type="button"
                  onClick={handleShareClick}
                  className="flex h-9 items-center gap-1.5 rounded-xl border border-b-line bg-b-paper px-3 text-xs font-semibold text-b-ink transition-all hover:border-b-green-deep hover:bg-b-sun-soft active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-b-green-deep" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

              {/* Toast Feedback for Social Links */}
              {activeToast && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-b-green-deep/20 bg-b-green-deep/10 px-3 py-1.5 text-[11px] font-semibold text-b-green-deep animate-in fade-in slide-in-from-bottom-1">
                  <ExternalLink className="h-3 w-3" />
                  <span>{activeToast}</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-b-ink-soft transition-colors hover:text-b-green-deep"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-b-line pt-6 text-xs text-b-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Bouul (Pty) Ltd. All rights reserved.</p>
          <p className="font-price">Johannesburg, South Africa</p>
        </div>
      </div>
    </footer>
  );
}

