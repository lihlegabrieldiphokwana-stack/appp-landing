"use client";

import React from "react";

const stories = [
  { title: "Launch update", detail: "Discovery and trust surfaces are live" },
  { title: "Vendor story", detail: "Resonance testing and pricing control" },
  { title: "Media asset", detail: "Logo, hero, and app preview pack" },
];

export const NewsroomBoardPreview = () => {
  return (
    <div className="absolute inset-0 bg-b-paper-raised text-b-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-b-ink-soft">
          <span>Newsroom</span>
          <span>Stories</span>
        </div>

        <div className="rounded-[1.6rem] border border-b-ink/10 bg-b-ink/5 p-4 backdrop-blur-2xl">
          <div className="text-[10px] uppercase tracking-[0.22em] text-b-green-deep mb-1">
            Editorial board
          </div>
          <div className="text-2xl font-semibold">Stories, updates, and press-ready context</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stories.map((story, index) => (
            <div key={story.title} className="rounded-2xl border border-b-ink/10 bg-b-ink/5 p-3">
              <div className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-black/20 border border-white/5" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-b-ink-soft">
                Story {index + 1}
              </div>
              <div className="text-sm font-semibold">{story.title}</div>
              <div className="text-[11px] text-b-ink-soft mt-1">{story.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          <div className="rounded-[1.6rem] border border-b-ink/10 bg-b-ink/5 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-b-ink-soft mb-2">Updates</div>
            <div className="space-y-2">
              {["Launch note", "Press kit", "Customer story"].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-b-green" />
                  <span className="text-[11px] text-b-ink-soft">{line}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-b-ink/10 bg-b-paper/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-b-ink-soft mb-2">Assets</div>
            <div className="space-y-2">
              {["Logo", "Hero", "Preview"].map((asset) => (
                <div key={asset} className="rounded-xl border border-b-ink/10 bg-b-ink/5 px-3 py-2 text-sm text-b-ink-soft">
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
