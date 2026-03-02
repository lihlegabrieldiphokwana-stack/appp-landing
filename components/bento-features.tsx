"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";

const MagicRemoverIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  </svg>
);

const VendorIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const RewardsIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const DisputeIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.286 12.79c.2 1.04-.55 2.04-1.6 2.175A48.348 48.348 0 0112 21c-2.305 0-4.585-.175-6.857-.517C4.05 20.325 3.3 19.325 3.5 18.285L5.785 5.47M18.75 4.97L5.25 4.97" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.875v1.5m1.5-3.75C19.496 5.004 19 5.004 18 5.625m1.5 3.75v-1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-15 0h1.5m13.5 0h-1.5" />
  </svg>
);

const VettedIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const BookingIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

const bentoItems = [
  {
    title: "AI that sees what you need.",
    description: "Magic Remover uses computer vision to intelligently identify and remove unwanted elements from your service photos — instantly.",
    icon: <MagicRemoverIcon />,
    className: "md:col-span-2",
    header: (
      <div className="h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-emerald-400/30 text-xs font-mono">AI MAGIC REMOVER</div>
      </div>
    ),
  },
  {
    title: "Your business. At a glance.",
    description: "The vendor dashboard gives you real-time bookings, earnings, reviews, and analytics in one clean interface.",
    icon: <VendorIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-blue-400/30 text-xs font-mono">DASHBOARD</div>
      </div>
    ),
  },
  {
    title: "Earn while you book.",
    description: "Refer friends and earn credits on every booking they make. The more you share, the more you save.",
    icon: <RewardsIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-yellow-500/10 to-amber-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-yellow-400/30 text-xs font-mono">REWARDS</div>
      </div>
    ),
  },
  {
    title: "Fair. Always.",
    description: "Community-powered dispute resolution with transparent mediation. Every case handled with integrity and speed.",
    icon: <DisputeIcon />,
    className: "md:col-span-2",
    header: (
      <div className="h-24 bg-gradient-to-br from-purple-500/10 to-violet-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-purple-400/30 text-xs font-mono">DISPUTE RESOLUTION</div>
      </div>
    ),
  },
  {
    title: "Talk to your professional.",
    description: "In-app live chat so you can coordinate directly with your service provider. No phone calls needed.",
    icon: <ChatIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-cyan-400/30 text-xs font-mono">LIVE CHAT</div>
      </div>
    ),
  },
  {
    title: "See the work before you book.",
    description: "Short-form video from real professionals. Watch their craft, their style, their results — before you commit.",
    icon: <VideoIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-rose-500/10 to-pink-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-rose-400/30 text-xs font-mono">VIDEO FEED</div>
      </div>
    ),
  },
  {
    title: "Trusted by design.",
    description: "Every professional is identity-verified, background-checked, and reviewed by real customers before they appear on Bouul.",
    icon: <VettedIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-emerald-400/30 text-xs font-mono">VETTED PROS</div>
      </div>
    ),
  },
  {
    title: "Zero waiting. Zero guessing.",
    description: "Book a service in under 30 seconds. Instant confirmation, real-time tracking, and automatic reminders.",
    icon: <BookingIcon />,
    className: "",
    header: (
      <div className="h-24 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-orange-400/30 text-xs font-mono">INSTANT BOOKING</div>
      </div>
    ),
  },
];

export const BentoFeatures = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Every tool. One platform.
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Bouul isn&apos;t just a booking app. It&apos;s a complete ecosystem for services and professionals.
          </p>
        </motion.div>

        <BentoGrid>
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={item.className}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
