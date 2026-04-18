"use client";

import React from "react";

const assets = [
  { label: "Logo", shape: "mark" },
  { label: "Desktop hero", shape: "wide" },
  { label: "Mobile hero", shape: "phone" },
  { label: "App preview", shape: "screens" },
];

export const PressKitPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Press kit</span>
          <span>Bouul</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
                Media ready
              </div>
              <div className="text-2xl font-semibold leading-tight">
                Brand assets and product context.
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-right">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Launch</div>
              <div className="text-sm font-semibold text-emerald-300">Ready</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {assets.map((asset, index) => (
            <div key={asset.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="h-24 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-black/20 p-2">
                {asset.shape === "mark" && (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-black">
                      B
                    </div>
                  </div>
                )}
                {asset.shape === "wide" && (
                  <div className="h-full rounded-lg bg-black/35 p-2">
                    <div className="h-3 w-20 rounded-full bg-emerald-400/80" />
                    <div className="mt-5 h-3 w-28 rounded-full bg-white/20" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
                  </div>
                )}
                {asset.shape === "phone" && (
                  <div className="mx-auto h-full w-12 rounded-xl border border-white/15 bg-black/45 p-1.5">
                    <div className="h-3 w-5 rounded-full bg-white/15 mx-auto mb-2" />
                    <div className="h-12 rounded-lg bg-emerald-400/20" />
                  </div>
                )}
                {asset.shape === "screens" && (
                  <div className="relative h-full">
                    <div className="absolute left-4 top-3 h-14 w-16 rounded-lg border border-white/15 bg-black/45" />
                    <div className="absolute right-4 bottom-2 h-16 w-10 rounded-xl border border-white/15 bg-emerald-400/15" />
                  </div>
                )}
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                Asset {index + 1}
              </div>
              <div className="text-sm font-semibold">{asset.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["Product", "Marketplace"],
            ["Trust", "Verification"],
            ["Growth", "Vendor tools"],
          ].map(([label, detail]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">{label}</div>
              <div className="mt-1 text-[11px] text-neutral-300">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
