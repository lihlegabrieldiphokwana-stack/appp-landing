"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";

const proData: Record<string, {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  distance: string;
  verified: boolean;
  insured: boolean;
  skillTested: boolean;
  bio: string;
  startingPrice: string;
  responseTime: string;
  completedJobs: number;
  languages: string[];
  workingHours: string;
  skills: string[];
  gallery: string[];
  recentReviews: Array<{ author: string; rating: number; date: string; text: string; sentiment: "positive" | "neutral" | "negative" }>;
}> = {
  "marco-t": {
    name: "Marco T.",
    category: "Plumber",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 km",
    verified: true,
    insured: true,
    skillTested: true,
    bio: "Master plumber with 15+ years of experience. Specializing in geyser installations, leak detection, and bathroom renovations. Available 24/7 for emergencies.",
    startingPrice: "R350",
    responseTime: "15 min",
    completedJobs: 1247,
    languages: ["English", "Afrikaans"],
    workingHours: "Mon-Sat: 7am-6pm, Sun: Emergency only",
    skills: ["Geyser Installation", "Leak Detection", "Pipe Repair", "Bathroom Renovations", "Emergency Services"],
    gallery: ["/pros/marco-1.jpg", "/pros/marco-2.jpg", "/pros/marco-3.jpg"],
    recentReviews: [
      { author: "Sarah K.", rating: 5, date: "2 days ago", text: "Marco saved the day! Arrived within 30 minutes for a burst pipe. Professional and efficient.", sentiment: "positive" },
      { author: "John D.", rating: 5, date: "1 week ago", text: "Excellent work on our geyser replacement. Clean, punctual, and fairly priced.", sentiment: "positive" },
      { author: "Michelle P.", rating: 4, date: "2 weeks ago", text: "Good service, slightly delayed but communicated well throughout.", sentiment: "positive" },
    ],
  },
};

const badges = [
  { id: "verified", label: "ID Verified", icon: "🆔" },
  { id: "insured", label: "Insured", icon: "🛡️" },
  { id: "skillTested", label: "Skill Tested", icon: "✅" },
];

export default function ProProfilePage() {
  const params = useParams();
  const username = params.username as string;
  const pro = proData[username] || proData["marco-t"];
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const availableSlots = [
    { day: "Today", times: ["3:00 PM", "4:30 PM", "6:00 PM"] },
    { day: "Tomorrow", times: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
    { day: "Wed", times: ["8:00 AM", "10:00 AM", "1:00 PM", "3:30 PM"] },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "text-b-green-deep";
      case "neutral": return "text-b-ink-soft";
      case "negative": return "text-red-400";
      default: return "text-b-ink-soft";
    }
  };

  return (
    <main className="min-h-screen bg-b-paper">
      <RedesignNav />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-b-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="font-display font-extrabold w-24 h-24 rounded-full bg-b-paper-deep flex items-center justify-center text-4xl flex-shrink-0">
                  {pro.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-display font-extrabold text-b-ink">{pro.name}</h1>
                    {pro.verified && (
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-b-green-soft rounded-full">
                        <svg className="w-4 h-4 text-b-green-deep" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-b-green-deep text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-b-ink-soft text-lg mb-4">{pro.category}</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-b-green-deep font-semibold text-lg">★ {pro.rating}</span>
                      <span className="text-b-ink-soft">({pro.reviews} reviews)</span>
                    </div>
                    <div className="text-b-ink-soft">{pro.distance} away</div>
                    <div className="text-b-ink-soft">{pro.completedJobs.toLocaleString()} jobs completed</div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map(badge => pro[badge.id as keyof typeof pro] && (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-b-green-soft border border-b-green/30"
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-b-green-deep text-sm font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-b-ink mb-4">About</h2>
                <p className="text-b-ink-soft leading-relaxed">{pro.bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-b-ink mb-4">Skills & Services</h2>
                <div className="flex flex-wrap gap-2">
                  {pro.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-b-paper-deep border border-b-line rounded-full text-b-ink-soft text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Reviews */}
              <div>
                <h2 className="text-xl font-semibold text-b-ink mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  {pro.recentReviews.map((review, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-b-paper-raised border border-b-line rounded-2xl p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-b-ink font-medium">{review.author}</div>
                          <div className="text-b-ink-faint text-sm">{review.date}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-b-green-deep font-semibold">★ {review.rating}</span>
                          <span className={`text-xs font-medium ${getSentimentColor(review.sentiment)}`}>
                            {review.sentiment === "positive" ? "😊 Positive" : review.sentiment === "neutral" ? "😐 Neutral" : "😞 Negative"}
                          </span>
                        </div>
                      </div>
                      <p className="text-b-ink-soft text-sm leading-relaxed">{review.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-b-paper-raised border border-b-line rounded-3xl p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-b-ink-soft text-sm mb-2">Starting from</div>
                  <div className="text-3xl font-display font-extrabold text-b-ink">{pro.startingPrice}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-b-green-soft flex items-center justify-center">
                      <svg className="w-4 h-4 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-b-ink-soft">Response time: {pro.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-b-green-soft flex items-center justify-center">
                      <svg className="w-4 h-4 text-b-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <span className="text-b-ink-soft">{pro.distance} away</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <div className="text-b-ink font-semibold mb-3">Available Slots</div>
                  <div className="space-y-3">
                    {availableSlots.map((slot, i) => (
                      <div key={i}>
                        <div className="text-b-ink-soft text-xs mb-2">{slot.day}</div>
                        <div className="flex flex-wrap gap-2">
                          {slot.times.map(time => (
                            <button
                              key={time}
                              onClick={() => setSelectedSlot(time)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                                selectedSlot === time
                                  ? "bg-b-green text-b-forest"
                                  : "bg-b-paper-deep text-b-ink-soft hover:bg-b-paper-deep"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-b-green hover:opacity-90 text-b-forest font-semibold rounded-full transition-colors mb-3">
                  {selectedSlot ? `Book ${selectedSlot}` : "Select a Time"}
                </button>
                <button className="w-full py-4 bg-b-paper-deep hover:bg-b-paper-deep text-b-ink font-semibold rounded-full border border-b-line transition-colors">
                  Message {pro.name.split(" ")[0]}
                </button>

                <div className="mt-6 pt-6 border-t border-b-line">
                  <div className="text-b-ink-soft text-xs text-center">
                    Booking Protection included ✓
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
