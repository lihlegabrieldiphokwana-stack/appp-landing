"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Professional {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  distance: string;
  startingPrice: number;
  responseTime: string;
  completedJobs: number;
  verified: boolean;
  insured: boolean;
  skillTested: boolean;
  availability: string;
  skills: string[];
}

interface ComparisonToolProps {
  professionals?: Professional[];
  category?: string;
}

const defaultPros: Professional[] = [
  {
    id: "1",
    name: "Marco T.",
    category: "Plumber",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 km",
    startingPrice: 350,
    responseTime: "15 min",
    completedJobs: 1247,
    verified: true,
    insured: true,
    skillTested: true,
    availability: "Today",
    skills: ["Geyser Installation", "Leak Detection", "Pipe Repair"],
  },
  {
    id: "2",
    name: "Sarah M.",
    category: "Plumber",
    rating: 5.0,
    reviews: 94,
    distance: "1.8 km",
    startingPrice: 400,
    responseTime: "10 min",
    completedJobs: 892,
    verified: true,
    insured: true,
    skillTested: true,
    availability: "Today",
    skills: ["Emergency Repairs", "Bathroom Reno", "Drain Cleaning"],
  },
  {
    id: "3",
    name: "David K.",
    category: "Plumber",
    rating: 4.8,
    reviews: 203,
    distance: "3.5 km",
    startingPrice: 300,
    responseTime: "30 min",
    completedJobs: 1567,
    verified: true,
    insured: true,
    skillTested: false,
    availability: "Tomorrow",
    skills: ["Pipe Repair", "Water Heaters", "General Plumbing"],
  },
  {
    id: "4",
    name: "Lisa P.",
    category: "Plumber",
    rating: 4.9,
    reviews: 156,
    distance: "0.9 km",
    startingPrice: 380,
    responseTime: "20 min",
    completedJobs: 1034,
    verified: true,
    insured: false,
    skillTested: true,
    availability: "Today",
    skills: ["Leak Detection", "Tap Installation", "Unblocking"],
  },
];

export const ComparisonTool: React.FC<ComparisonToolProps> = ({
  professionals = defaultPros,
  category = "Plumbers",
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(pid => pid !== id);
      }
      if (prev.length >= 3) {
        return prev; // Max 3 professionals
      }
      return [...prev, id];
    });
  };

  const selectedPros = professionals.filter(p => selectedIds.includes(p.id));

  const comparisonMetrics = [
    { key: "rating", label: "Rating", format: (p: Professional) => `★ ${p.rating}` },
    { key: "reviews", label: "Reviews", format: (p: Professional) => p.reviews.toString() },
    { key: "distance", label: "Distance", format: (p: Professional) => p.distance },
    { key: "startingPrice", label: "Starting Price", format: (p: Professional) => `R${p.startingPrice}` },
    { key: "responseTime", label: "Response Time", format: (p: Professional) => p.responseTime },
    { key: "completedJobs", label: "Jobs Completed", format: (p: Professional) => p.completedJobs.toLocaleString() },
    { key: "verified", label: "ID Verified", format: (p: Professional) => p.verified ? "✓" : "✗" },
    { key: "insured", label: "Insured", format: (p: Professional) => p.insured ? "✓" : "✗" },
    { key: "skillTested", label: "Skill Tested", format: (p: Professional) => p.skillTested ? "✓" : "✗" },
    { key: "availability", label: "Next Available", format: (p: Professional) => p.availability },
  ];

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
          COMPARE
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2">
          Compare {category}
        </h2>
        <p className="text-neutral-500 text-lg">
          Select up to 3 professionals to compare side-by-side
        </p>
      </div>

      {/* Professional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {professionals.map((pro) => (
          <motion.div
            key={pro.id}
            whileHover={{ scale: 1.02 }}
            className={cn(
              "bg-neutral-900 border rounded-2xl p-5 cursor-pointer transition-all",
              selectedIds.includes(pro.id)
                ? "border-emerald-500 bg-emerald-500/5"
                : "border-neutral-800 hover:border-neutral-700"
            )}
            onClick={() => toggleSelection(pro.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lg">
                {pro.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                selectedIds.includes(pro.id)
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-neutral-600"
              )}>
                {selectedIds.includes(pro.id) && (
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <div className="text-white font-semibold mb-1">{pro.name}</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400 font-semibold text-sm">★ {pro.rating}</span>
              <span className="text-neutral-600 text-xs">({pro.reviews})</span>
            </div>
            <div className="text-neutral-500 text-sm mb-3">{pro.distance} away</div>
            <div className="text-white font-semibold">R{pro.startingPrice}</div>
          </motion.div>
        ))}
      </div>

      {/* Selection Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-neutral-400 text-sm">
          {selectedIds.length} of 3 selected
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedIds([])}
            className="text-neutral-500 hover:text-white text-sm transition-colors"
          >
            Clear all
          </button>
          <button
            onClick={() => setIsComparing(true)}
            disabled={selectedIds.length < 2}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-colors",
              selectedIds.length >= 2
                ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                : "bg-neutral-800 text-neutral-600 cursor-not-allowed"
            )}
          >
            Compare Now
          </button>
        </div>
      </div>

      {/* Comparison Table Modal */}
      <AnimatePresence>
        {isComparing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsComparing(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-5xl w-full max-h-[80vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <h3 className="text-xl font-semibold text-white">Comparison</h3>
                <button
                  onClick={() => setIsComparing(false)}
                  className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left p-4 text-neutral-400 font-medium text-sm sticky left-0 bg-neutral-950">
                        Metric
                      </th>
                      {selectedPros.map(pro => (
                        <th key={pro.id} className="p-4 text-center min-w-[180px]">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lg">
                              {pro.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="text-white font-semibold">{pro.name}</div>
                            <a
                              href={`/pro/${pro.name.toLowerCase().replace(" ", "-")}`}
                              className="text-emerald-400 text-sm hover:underline"
                              onClick={e => e.stopPropagation()}
                            >
                              View Profile →
                            </a>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonMetrics.map((metric, index) => (
                      <tr
                        key={metric.key}
                        className={cn(
                          "border-b border-neutral-800",
                          index % 2 === 0 && "bg-neutral-900/30"
                        )}
                      >
                        <td className="p-4 text-neutral-400 text-sm sticky left-0 bg-neutral-950">
                          {metric.label}
                        </td>
                        {selectedPros.map(pro => {
                          const value = metric.format(pro);
                          const isBest = metric.key === "rating"
                            ? pro.rating === Math.max(...selectedPros.map(p => p.rating))
                            : metric.key === "startingPrice"
                            ? pro.startingPrice === Math.min(...selectedPros.map(p => p.startingPrice))
                            : false;

                          return (
                            <td key={pro.id} className="p-4 text-center">
                              <span className={cn(
                                "font-medium",
                                isBest ? "text-emerald-400" : "text-white"
                              )}>
                                {value}
                              </span>
                              {isBest && (
                                <span className="ml-2 text-xs text-emerald-400">✓</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    <tr className="border-b border-neutral-800">
                      <td className="p-4 text-neutral-400 text-sm sticky left-0 bg-neutral-950">
                        Skills
                      </td>
                      {selectedPros.map(pro => (
                        <td key={pro.id} className="p-4">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {pro.skills.slice(0, 3).map(skill => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-neutral-900 rounded text-xs text-neutral-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-neutral-800 flex justify-center gap-4">
                {selectedPros.map(pro => (
                  <a
                    key={pro.id}
                    href={`/pro/${pro.name.toLowerCase().replace(" ", "-")}`}
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    Book {pro.name.split(" ")[0]}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
