"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface UrgencySignalProps {
  type?: "slots" | "viewers" | "demand" | "price";
  compact?: boolean;
  className?: string;
}

export const UrgencySignal: React.FC<UrgencySignalProps> = ({
  type = "slots",
  compact = false,
  className,
}) => {
  const signals = {
    slots: {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Only 3 slots left today",
      color: "red",
      pulse: true,
    },
    viewers: {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      text: "12 people viewing this pro",
      color: "yellow",
      pulse: false,
    },
    demand: {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      text: "High demand in your area",
      color: "orange",
      pulse: false,
    },
    price: {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Book now - prices increase in 2hrs",
      color: "emerald",
      pulse: true,
    },
  };

  const signal = signals[type];

  if (compact) {
    return (
      <div className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        signal.color === "red" && "bg-red-500/10 text-red-400",
        signal.color === "yellow" && "bg-yellow-500/10 text-yellow-400",
        signal.color === "orange" && "bg-orange-500/10 text-orange-400",
        signal.color === "emerald" && "bg-emerald-500/10 text-emerald-400",
        className
      )}>
        {signal.pulse && (
          <span className="relative flex h-2 w-2">
            <span className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              signal.color === "red" && "bg-red-400",
              signal.color === "yellow" && "bg-yellow-400",
              signal.color === "orange" && "bg-orange-400",
              signal.color === "emerald" && "bg-emerald-400"
            )} />
            <span className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              signal.color === "red" && "bg-red-500",
              signal.color === "yellow" && "bg-yellow-500",
              signal.color === "orange" && "bg-orange-500",
              signal.color === "emerald" && "bg-emerald-500"
            )} />
          </span>
        )}
        {signal.icon}
        <span>{signal.text}</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-3 p-4 rounded-xl border",
        signal.color === "red" && "bg-red-500/5 border-red-500/20",
        signal.color === "yellow" && "bg-yellow-500/5 border-yellow-500/20",
        signal.color === "orange" && "bg-orange-500/5 border-orange-500/20",
        signal.color === "emerald" && "bg-emerald-500/5 border-emerald-500/20",
        className
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
        signal.color === "red" && "bg-red-500/10 text-red-400",
        signal.color === "yellow" && "bg-yellow-500/10 text-yellow-400",
        signal.color === "orange" && "bg-orange-500/10 text-orange-400",
        signal.color === "emerald" && "bg-emerald-500/10 text-emerald-400"
      )}>
        {signal.icon}
      </div>
      <div className="flex-1">
        <div className={cn(
          "font-medium",
          signal.color === "red" && "text-red-400",
          signal.color === "yellow" && "text-yellow-400",
          signal.color === "orange" && "text-orange-400",
          signal.color === "emerald" && "text-emerald-400"
        )}>
          {signal.text}
        </div>
        <div className="text-neutral-500 text-xs mt-0.5">
          {type === "slots" && "Book now to secure your spot"}
          {type === "viewers" && "Don't miss out on this professional"}
          {type === "demand" && "Consider booking soon for best availability"}
          {type === "price" && "Lock in current pricing before it changes"}
        </div>
      </div>
      {signal.pulse && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            "w-2 h-2 rounded-full",
            signal.color === "red" && "bg-red-500",
            signal.color === "yellow" && "bg-yellow-500",
            signal.color === "orange" && "bg-orange-500",
            signal.color === "emerald" && "bg-emerald-500"
          )}
        />
      )}
    </motion.div>
  );
};

// Live Ticker Component - shows recent bookings/reviews
export const LiveTicker: React.FC = () => {
  const [events, setEvents] = useState<Array<{
    id: number;
    type: "booking" | "review";
    service: string;
    pro: string;
    location: string;
    time: string;
  }>>([]);

  const sampleEvents: Array<{ type: "booking" | "review"; service: string; pro: string; location: string }> = [
    { type: "booking", service: "Plumber", pro: "Marco T.", location: "Sandton" },
    { type: "review", service: "Electrician", pro: "Sarah M.", location: "Midrand" },
    { type: "booking", service: "Cleaner", pro: "Lisa P.", location: "Fourways" },
    { type: "booking", service: "Builder", pro: "David K.", location: "Centurion" },
    { type: "review", service: "Beauty", pro: "Emily W.", location: "Rosebank" },
    { type: "booking", service: "Tutor", pro: "James R.", location: "Braamfontein" },
  ];

  React.useEffect(() => {
    // Add initial events
    setEvents(sampleEvents.slice(0, 3).map((e, i) => ({
      ...e,
      id: i,
      time: `${Math.floor(Math.random() * 59) + 1}m ago`,
    })));

    // Add new events periodically
    const interval = setInterval(() => {
      const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      const newEvent = {
        ...randomEvent,
        id: Date.now(),
        time: "Just now",
      };

      setEvents(prev => [newEvent, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-neutral-400 text-xs font-medium">Live Activity</span>
      </div>
      <div className="divide-y divide-neutral-800">
        <AnimatePresence>
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                event.type === "booking"
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-blue-500/10 text-blue-400"
              )}>
                {event.type === "booking" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm truncate">
                  {event.type === "booking" ? "Booked" : "Reviewed"}{" "}
                  <span className="font-medium">{event.pro}</span>
                </div>
                <div className="text-neutral-600 text-xs">
                  {event.service} • {event.location}
                </div>
              </div>
              <div className="text-neutral-600 text-xs">{event.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
