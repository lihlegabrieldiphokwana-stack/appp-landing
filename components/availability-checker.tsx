"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  displayTime?: string;
  available: boolean;
  price?: number;
}

interface DaySlots {
  day: string;
  date: string;
  slots: TimeSlot[];
}

interface AvailabilityCheckerProps {
  proName?: string;
  serviceType?: string;
  compact?: boolean;
}

const generateAvailability = (): DaySlots[] => {
  const days: DaySlots[] = [];
  const today = new Date();
  
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const daySlots: DaySlots = {
      day: i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      slots: [],
    };

    // Generate slots based on day (fewer slots on weekends)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const startHour = isWeekend ? 9 : 8;
    const endHour = isWeekend ? 15 : 18;

    for (let hour = startHour; hour < endHour; hour++) {
      const time = `${hour}:00`;
      const displayTime = `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`;
      // Randomly make some slots unavailable
      const available = Math.random() > 0.3;
      daySlots.slots.push({
        time,
        displayTime,
        available,
        price: available ? Math.floor(Math.random() * 200) + 350 : undefined,
      });
    }

    days.push(daySlots);
  }

  return days;
};

export const AvailabilityChecker: React.FC<AvailabilityCheckerProps> = ({
  proName = "Marco T.",
  serviceType = "Plumbing",
  compact = false,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);
  const [availability] = useState<DaySlots[]>(generateAvailability());

  const nextAvailable = availability.find(day => 
    day.slots.some(slot => slot.available)
  );

  const formatNextAvailable = () => {
    if (!nextAvailable) return null;
    const firstSlot = nextAvailable.slots.find(s => s.available);
    return `${nextAvailable.day} at ${firstSlot?.displayTime}`;
  };

  if (compact) {
    return (
      <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">
            Next available: {formatNextAvailable()}
          </span>
        </div>
        <div className="space-y-2">
          {availability.slice(0, 2).map((day, dayIndex) => (
            <div key={day.day}>
              <div className="text-neutral-500 text-xs mb-2">{day.day}, {day.date}</div>
              <div className="flex gap-2">
                {day.slots.slice(0, 4).map((slot, slotIndex) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot({ day: day.day, time: slot.time })}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                      !slot.available
                        ? "bg-neutral-900 text-neutral-600 cursor-not-allowed"
                        : selectedSlot?.time === slot.time
                        ? "bg-emerald-500 text-black"
                        : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
                    )}
                  >
                    {slot.displayTime?.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">
            Real-time availability
          </span>
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2">
          Book {proName}
        </h2>
        <p className="text-neutral-500 text-lg">
          Select a time for your {serviceType} service
        </p>
      </div>

      <div className="space-y-6">
        {availability.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: dayIndex * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="text-white font-semibold">{day.day}</div>
              <div className="text-neutral-500 text-sm">{day.date}</div>
              <div className="flex-1 h-px bg-neutral-800" />
              <div className="text-neutral-600 text-xs">
                {day.slots.filter(s => s.available).length} slots available
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {day.slots.map((slot) => (
                <button
                  key={slot.time}
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot({ day: day.day, time: slot.time })}
                  className={cn(
                    "relative p-3 rounded-xl border transition-all text-center",
                    !slot.available
                      ? "bg-neutral-900 border-neutral-800 cursor-not-allowed"
                      : selectedSlot?.time === slot.time
                      ? "bg-emerald-500 border-emerald-500 text-black"
                      : "bg-neutral-900 border-neutral-800 hover:border-emerald-500/50 text-white"
                  )}
                >
                  <div className="text-sm font-medium">
                    {slot.displayTime?.split(" ")[0]}
                  </div>
                  <div className={cn(
                    "text-xs",
                    selectedSlot?.time === slot.time
                      ? "text-black/70"
                      : slot.available
                      ? "text-neutral-500"
                      : "text-neutral-700"
                  )}>
                    {slot.displayTime?.split(" ")[1]}
                  </div>
                  {slot.available && slot.price && (
                    <div className={cn(
                      "text-xs mt-1",
                      selectedSlot?.time === slot.time
                        ? "text-black/70"
                        : "text-emerald-400"
                    )}>
                      R{slot.price}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSlot && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 pt-8 border-t border-neutral-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-white font-semibold">
                {selectedSlot.day} at{" "}
                {availability
                  .find(d => d.day === selectedSlot.day)
                  ?.slots.find(s => s.time === selectedSlot.time)?.displayTime}
              </div>
              <div className="text-neutral-500 text-sm">
                {serviceType} with {proName}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-400">
                R{availability
                  .find(d => d.day === selectedSlot.day)
                  ?.slots.find(s => s.time === selectedSlot.time)?.price || 450}
              </div>
              <div className="text-neutral-500 text-xs">Estimated</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors">
              Confirm Booking
            </button>
            <button className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full border border-neutral-800 transition-colors">
              Request Custom Time
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
