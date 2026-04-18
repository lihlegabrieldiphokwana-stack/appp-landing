"use client";

import React from "react";

const categories = ["Home", "Beauty", "Repairs", "Creative"];

export const InstantSearchVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full border border-emerald-300" />
            <div className="h-3 flex-1 rounded-full bg-white/15" />
          </div>
          <div className="mt-3 text-[11px] text-neutral-400">plumber near me</div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {[
            ["Verified plumber", "Available now"],
            ["Geyser repair", "2.1 km"],
            ["Emergency callout", "Fast reply"],
          ].map(([title, meta], index) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-[10px] text-neutral-500">{meta}</div>
                </div>
                <div className={`h-7 w-7 rounded-full ${index === 0 ? "bg-emerald-400" : "bg-white/10"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LocationAwareVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.16),transparent_28%)]" />
      <div className="relative h-full rounded-xl border border-white/10 bg-black/25 p-3">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          <span>Nearby</span>
          <span>2.4 km</span>
        </div>
        <div className="relative mt-4 h-24 overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
          <div className="absolute left-5 right-5 top-1/2 h-px bg-emerald-400/50" />
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-emerald-400/50" />
          {[
            "left-6 top-5",
            "right-8 top-8",
            "left-1/2 bottom-5",
          ].map((position, index) => (
            <div key={position} className={`absolute ${position} h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.7)]`}>
              {index === 0 && <div className="absolute inset-[-8px] rounded-full border border-emerald-400/25" />}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-sm font-semibold">Sandton professionals</div>
          <div className="mt-1 text-[11px] text-neutral-400">Ranked by distance, trust, and availability</div>
        </div>
      </div>
    </div>
  );
};

export const LiveGpsVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_75%_65%,rgba(16,185,129,0.2),transparent_30%)]" />
      <div className="relative h-full rounded-xl border border-white/10 bg-black/30 p-3">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          <span>Live GPS</span>
          <span>8 min</span>
        </div>
        <div className="relative mt-4 h-28 overflow-hidden rounded-xl border border-white/10 bg-[#101815]">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-4 right-4 top-5 h-px rotate-[-8deg] bg-white/12" />
            <div className="absolute left-[-10px] right-[-10px] top-14 h-px rotate-[12deg] bg-white/12" />
            <div className="absolute left-6 right-2 bottom-5 h-px rotate-[-6deg] bg-white/12" />
            <div className="absolute left-10 top-[-8px] bottom-[-8px] w-px rotate-[10deg] bg-white/10" />
            <div className="absolute right-12 top-[-8px] bottom-[-8px] w-px rotate-[-12deg] bg-white/10" />
          </div>

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 220 112"
            aria-hidden="true"
          >
            <path
              d="M42 78 C72 54, 96 62, 119 42 S159 28, 181 24"
              fill="none"
              stroke="rgba(52,211,153,0.25)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M42 78 C72 54, 96 62, 119 42 S159 28, 181 24"
              fill="none"
              stroke="#34d399"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />
          </svg>

          <div className="absolute left-[34px] top-[68px]">
            <div className="h-5 w-5 rounded-full border-2 border-white bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
            <div className="mx-auto mt-1 h-2 w-0.5 bg-sky-400" />
          </div>
          <div className="absolute right-[28px] top-[14px]">
            <div className="h-6 w-6 rounded-full border-2 border-white bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.9)]" />
            <div className="mx-auto mt-1 h-2 w-0.5 bg-emerald-400" />
          </div>

          <div className="absolute left-5 bottom-4 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[9px] text-neutral-200">
            Start
          </div>
          <div className="absolute right-4 top-12 rounded-full border border-emerald-400/20 bg-emerald-400/15 px-2 py-1 text-[9px] text-emerald-200">
            Destination
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3">
          <div className="text-sm font-semibold text-emerald-200">Marco is on the way</div>
          <div className="mt-1 text-[11px] text-neutral-400">Arrival window updates live</div>
        </div>
      </div>
    </div>
  );
};

export const VerifiedIdentityVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="relative h-full rounded-xl border border-white/10 bg-black/30 p-4">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          <span>Identity</span>
          <span>Verified</span>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-2xl border border-white/10 bg-white/10">
            <div className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-neutral-300" />
            <div className="absolute bottom-3 left-3 right-3 h-6 rounded-t-2xl bg-neutral-300" />
            <div className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-950 bg-emerald-400 text-sm font-black text-black">
              ✓
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Thabo M.</div>
            <div className="mt-1 text-[11px] text-neutral-400">ID and business details checked</div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          {["Identity match", "Phone confirmed", "Profile approved"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-[11px] text-neutral-300">{item}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FiveStarReviewsVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Reviews</div>
          <div className="mt-2 flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-lg leading-none">★</span>
            ))}
          </div>
          <div className="mt-1 text-sm font-semibold">4.9 from completed bookings</div>
        </div>
        <div className="flex-1 rounded-2xl border border-white/10 bg-black/30 p-3">
          <div className="text-[11px] leading-relaxed text-neutral-300">
            “Arrived on time, explained the issue, and finished cleanly.”
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-400/80" />
            <div>
              <div className="text-xs font-semibold">Verified customer</div>
              <div className="text-[10px] text-neutral-500">Geyser repair booking</div>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[92%] rounded-full bg-amber-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecurePaymentsVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="relative h-full rounded-xl border border-white/10 bg-black/30 p-4">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          <span>Payment</span>
          <span>Protected</span>
        </div>
        <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Escrow</div>
              <div className="mt-1 text-2xl font-semibold">R 850</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-black/35">
              <div className="h-5 w-7 rounded-md border-2 border-emerald-300">
                <div className="mx-auto mt-[-8px] h-3 w-3 rounded-t-full border-2 border-b-0 border-emerald-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {[
            ["Card authorised", "Done"],
            ["Funds held", "Active"],
            ["Release after completion", "Next"],
          ].map(([label, state]) => (
            <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-[11px] text-neutral-300">{label}</span>
              <span className="text-[10px] text-emerald-300">{state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InAppChatVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Chat</div>
          <div className="mt-1 text-sm font-semibold">Booking details stay attached</div>
        </div>
        <div className="flex-1 rounded-2xl border border-white/10 bg-black/30 p-3 space-y-3">
          <div className="mr-10 rounded-2xl rounded-tl-md bg-white/10 p-3 text-[11px] text-neutral-200">
            Can you check the gate motor too?
          </div>
          <div className="ml-8 rounded-2xl rounded-tr-md bg-emerald-400 p-3 text-[11px] font-medium text-black">
            Yes. Add a photo and I will bring the right tools.
          </div>
          <div className="mr-14 rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="h-8 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BroadCoverageVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-emerald-300">Coverage</div>
          <div className="mt-1 text-lg font-semibold">Everyday services</div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {categories.map((category, index) => (
            <div key={category} className="rounded-xl border border-white/10 bg-black/30 p-3">
              <div className={`h-2 w-8 rounded-full ${index % 2 === 0 ? "bg-emerald-400" : "bg-sky-400"}`} />
              <div className="mt-6 text-sm font-semibold">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FollowFavouritesVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-emerald-300">Following</div>
          <div className="mt-1 text-sm font-semibold">Your trusted pros</div>
        </div>
        {[
          ["Thabo", "Electrician", "New slot"],
          ["Nandi", "Nails", "Posted reel"],
          ["Marco", "Plumber", "Available"],
        ].map(([name, role, status], index) => (
          <div key={name} className="rounded-xl border border-white/10 bg-black/35 p-3">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full ${index === 0 ? "bg-emerald-400" : "bg-white/10"}`} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-[10px] text-neutral-500">{role}</div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-neutral-300">
                {status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const VideoFeedVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_30%)]" />
      <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/35">
        <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-neutral-800 to-black" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <div className="rounded-full bg-black/50 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-neutral-300">
            Reel
          </div>
          <div className="h-8 w-8 rounded-full border border-white/15 bg-white/10" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
          <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-sm font-semibold">Watch the work before booking</div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-2/3 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PersonalisedFeedVisual = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_30%)]" />
      <div className="relative h-full flex flex-col gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-[9px] uppercase tracking-[0.2em] text-emerald-300">For you</div>
          <div className="mt-1 text-sm font-semibold">Feed adapts to intent</div>
        </div>
        {[
          ["Home repairs", "92% match", "w-[92%]"],
          ["Beauty", "74% match", "w-[74%]"],
          ["Tutoring", "58% match", "w-[58%]"],
        ].map(([label, match, width]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-black/35 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold">{label}</span>
              <span className="text-neutral-400">{match}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className={`h-full rounded-full bg-emerald-400 ${width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
