"use client";

import React from "react";

const stories = [
  { title: "Launch update", detail: "Discovery and trust surfaces are live" },
  { title: "Vendor story", detail: "Resonance testing and pricing control" },
  { title: "Media asset", detail: "Logo, hero, and app preview pack" },
];

export const NewsroomBoardPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Newsroom</span>
          <span>Stories</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
            Editorial board
          </div>
          <div className="text-2xl font-semibold">Stories, updates, and press-ready context</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stories.map((story, index) => (
            <div key={story.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-black/20 border border-white/5" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                Story {index + 1}
              </div>
              <div className="text-sm font-semibold">{story.title}</div>
              <div className="text-[11px] text-neutral-400 mt-1">{story.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">Updates</div>
            <div className="space-y-2">
              {["Launch note", "Press kit", "Customer story"].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-neutral-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-2">Assets</div>
            <div className="space-y-2">
              {["Logo", "Hero", "Preview"].map((asset) => (
                <div key={asset} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">
                  {asset}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
