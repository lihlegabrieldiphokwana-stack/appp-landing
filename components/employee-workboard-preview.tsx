"use client";
import React from "react";
import { motion } from "framer-motion";

const tasks = [
  { title: "Geyser repair", customer: "Sarah M.", time: "09:00", status: "Assigned", urgent: true },
  { title: "Leak inspection", customer: "David K.", time: "11:30", status: "In progress", urgent: false },
  { title: "Pipe replacement", customer: "James R.", time: "14:00", status: "Scheduled", urgent: false },
];

const scheduleDays = ["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16"];

export function EmployeeWorkboardPreview() {
  return (
    <div className="absolute inset-0 bg-black p-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-semibold text-white">My Workboard</div>
            <div className="text-[10px] text-neutral-400">3 tasks today</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs text-neutral-300">
              MT
            </div>
          </div>
        </div>

        {/* Status overview */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Assigned", count: 1, active: true },
            { label: "In progress", count: 1, active: false },
            { label: "Done", count: 3, active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-xl border p-3 text-center ${
                item.active
                  ? "border-white/20 bg-white/10"
                  : "border-white/5 bg-white/[0.03]"
              }`}
            >
              <div className={`text-xl font-bold ${item.active ? "text-white" : "text-neutral-400"}`}>
                {item.count}
              </div>
              <div className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Task list */}
        <div className="flex-1 space-y-2 overflow-hidden">
          {tasks.map((task, i) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white">{task.title}</span>
                <span
                  className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${
                    task.urgent
                      ? "bg-white/15 text-white"
                      : "bg-white/5 text-neutral-400"
                  }`}
                >
                  {task.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-neutral-500">
                <span>{task.customer}</span>
                <span>{task.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini schedule */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="text-[9px] uppercase tracking-widest text-neutral-500 mb-2">
            This week
          </div>
          <div className="flex gap-1.5">
            {scheduleDays.map((day, i) => (
              <div
                key={day}
                className={`flex-1 rounded-lg p-1.5 text-center ${
                  i === 1
                    ? "bg-white/15 border border-white/20"
                    : "bg-white/[0.03] border border-white/5"
                }`}
              >
                <div className={`text-[8px] uppercase tracking-wider ${i === 1 ? "text-white" : "text-neutral-500"}`}>
                  {day.split(" ")[0]}
                </div>
                <div className={`text-xs font-semibold mt-0.5 ${i === 1 ? "text-white" : "text-neutral-400"}`}>
                  {day.split(" ")[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
