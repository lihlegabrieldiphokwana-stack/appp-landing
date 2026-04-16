"use client";

import React from "react";

const cityPins = [
  { name: "Johannesburg", x: "52%", y: "42%", tone: "bg-emerald-400" },
  { name: "Sandton", x: "62%", y: "30%", tone: "bg-cyan-400" },
  { name: "Cape Town", x: "18%", y: "74%", tone: "bg-sky-400" },
  { name: "Durban", x: "76%", y: "64%", tone: "bg-amber-400" },
  { name: "Pretoria", x: "58%", y: "18%", tone: "bg-fuchsia-400" },
];

const cityCards = [
  { city: "Johannesburg", status: "Launch center", demand: "High" },
  { city: "Sandton", status: "Premium demand", demand: "Very high" },
  { city: "Cape Town", status: "Lifestyle services", demand: "Growing" },
];

export const CityMapPreview = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="relative h-full p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          <span>Cities live</span>
          <span>South Africa</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl flex-1 min-h-0">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1">
                Coverage map
              </div>
              <div className="text-lg font-semibold">Local discovery by city</div>
            </div>
            <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] text-neutral-400">
              12 cities
            </div>
          </div>

          <div className="relative h-[320px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_45%)]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10" />

            {cityPins.map((pin) => (
              <div
                key={pin.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pin.x, top: pin.y }}
              >
                <div className={`h-3 w-3 rounded-full ${pin.tone} shadow-lg shadow-black/40`} />
                <div className="mt-2 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[9px] text-white/85 whitespace-nowrap">
                  {pin.name}
                </div>
              </div>
            ))}

            <div className="absolute left-[54%] top-[40%] h-px w-24 bg-gradient-to-r from-emerald-400/70 to-transparent" />
            <div className="absolute left-[54%] top-[40%] h-24 w-px bg-gradient-to-b from-emerald-400/70 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {cityCards.map((card) => (
            <div key={card.city} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                {card.city}
              </div>
              <div className="text-sm font-semibold">{card.status}</div>
              <div className="text-[11px] text-emerald-300 mt-1">{card.demand}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
