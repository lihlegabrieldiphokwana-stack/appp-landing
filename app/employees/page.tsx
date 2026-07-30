"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import {
  Users,
  UserCheck,
  Timer,
  Layers,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  Briefcase,
  FileCheck,
  Star,
  MapPin,
  Play,
  Pause,
  RotateCcw,
  Check,
  AlertCircle,
  Coffee,
  Phone,
  Camera,
  Signature,
  DollarSign,
  TrendingUp,
  Award,
  Sparkles,
  Search,
  Bell,
  Sliders,
} from "lucide-react";

export default function EmployeesPage() {
  // Live Simulator States
  const [employeeStatus, setEmployeeStatus] = useState<"available" | "lunch" | "unavailable" | "emergency">("available");
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [timerSeconds, setTimerSeconds] = useState<number>(3742); // 1h 02m 22s
  const [activeTab, setActiveTab] = useState<"workboard" | "assignment" | "schedule" | "zolaChat">("workboard");
  const [upsellAdded, setUpsellAdded] = useState<boolean>(false);
  const [activeTaskDomain, setActiveTaskDomain] = useState<string>("Dispatch");

  // Timer Tick Simulation
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-b-paper text-b-ink selection:bg-b-green selection:text-b-forest font-sans">
      <RedesignNav />

      {/* ── 1. HERO & POSITIONING ── */}
      <section className="relative pt-32 pb-16 px-5 max-w-6xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20 shadow-sm"
        >
          <Users className="h-4 w-4 text-emerald-600 animate-pulse" />
          <span>Bouul Ground-Level Workboard • Mobile First</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-b-ink max-w-5xl mx-auto leading-[1.05]"
        >
          Built for the pro in the field, <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            not behind a desk.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-b-ink-soft max-w-3xl mx-auto leading-relaxed"
        >
          Experience Bouul&apos;s employee suite — real-time status pills, restart-proof shift timers, customer briefs, 1-tap upsell tools, and direct Zola AI support designed for fast, frictionless shift work.
        </motion.p>
      </section>

      {/* ── 2. LIVE INTERACTIVE EMPLOYEE APP SIMULATOR ── */}
      <section className="py-12 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
            Live Interactive Simulator
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-b-ink">
            Test the Employee Workboard Below
          </h2>
          <p className="text-sm text-b-ink-soft mt-2 max-w-xl mx-auto">
            Tap status pills, toggle shift timers, test 1-tap upsells, and switch app views just like an on-the-ground technician.
          </p>
        </div>

        {/* Mobile Device Mockup Frame */}
        <div className="max-w-4xl mx-auto bg-b-ink text-white rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border-4 border-b-line relative overflow-hidden">
          {/* Top Phone Status Bar */}
          <div className="flex items-center justify-between px-4 pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Bouul Workboard v4.2</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span>LTE 5G</span>
              <span>100% Battery</span>
            </div>
          </div>

          {/* App Screen Header & Status Pill Selector */}
          <div className="pt-6 pb-4 px-2 sm:px-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-emerald-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                  JM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-white">Jabu Mkhize</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Senior Electrician
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">Apex Electrical Services • Fourways Branch</p>
                </div>
              </div>

              {/* Status Selector Pills */}
              <div className="flex items-center gap-1.5 bg-neutral-900 p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
                <button
                  onClick={() => setEmployeeStatus("available")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    employeeStatus === "available"
                      ? "bg-emerald-500 text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-900" />
                  Available
                </button>
                <button
                  onClick={() => setEmployeeStatus("lunch")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    employeeStatus === "lunch"
                      ? "bg-amber-500 text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Coffee className="h-3 w-3" />
                  On Lunch
                </button>
                <button
                  onClick={() => setEmployeeStatus("unavailable")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    employeeStatus === "unavailable"
                      ? "bg-neutral-700 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Unavailable
                </button>
                <button
                  onClick={() => setEmployeeStatus("emergency")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    employeeStatus === "emergency"
                      ? "bg-rose-600 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Emergency
                </button>
              </div>
            </div>

            {/* App Nav Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-bold pt-2 overflow-x-auto">
              {[
                { id: "workboard", label: "Workboard" },
                { id: "assignment", label: "Active Job Brief" },
                { id: "schedule", label: "Weekly Rota" },
                { id: "zolaChat", label: "Ask Zola AI (15 Tools)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-b-forest shadow-md font-extrabold"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Screen Content Body */}
          <div className="p-2 sm:p-4 min-h-[420px]">
            {/* SCREEN 1: WORKBOARD */}
            {activeTab === "workboard" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Live Shift Timer Widget */}
                <div className="rounded-2xl bg-neutral-900 border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Timer className="h-5 w-5 animate-spin" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Restart-Proof Shift Timer • Order #BK-9482
                      </span>
                      <div className="font-mono text-2xl font-extrabold text-white">
                        {formatTime(timerSeconds)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
                        isTimerRunning
                          ? "bg-amber-500 text-black hover:bg-amber-400"
                          : "bg-emerald-500 text-black hover:bg-emerald-400"
                      }`}
                    >
                      {isTimerRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      <span>{isTimerRunning ? "Take Break" : "Resume Timer"}</span>
                    </button>
                    <button
                      onClick={() => setTimerSeconds(0)}
                      className="p-2 rounded-xl bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* 5-Domain Task Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-300 uppercase tracking-wider">
                      5 Task Domains
                    </span>
                    <span className="text-neutral-400">3 Pending Tasks</span>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {["Dispatch", "Content", "Disputes", "Metrics", "Operations"].map((domain) => (
                      <button
                        key={domain}
                        onClick={() => setActiveTaskDomain(domain)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          activeTaskDomain === domain
                            ? "bg-emerald-500 text-black"
                            : "bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>

                  {/* Task Card List */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-neutral-900 border border-emerald-500/30 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                            Dispatch • High Priority
                          </span>
                          <span className="text-xs text-neutral-400">Sandton, JHB</span>
                        </div>
                        <h4 className="font-bold text-sm text-white">Three-Phase DB Board & Inverter Surge Protector</h4>
                        <p className="text-xs text-neutral-400">Client: Thabo M. • SABS Compliance Check Required</p>
                      </div>
                      <button
                        onClick={() => setActiveTab("assignment")}
                        className="px-3.5 py-2 rounded-lg bg-emerald-500 text-black font-extrabold text-xs hover:bg-emerald-400 flex items-center gap-1"
                      >
                        <span>Open Brief</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-between opacity-80">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded">
                            Operations
                          </span>
                          <span className="text-xs text-neutral-400">Fourways Workshop</span>
                        </div>
                        <h4 className="font-bold text-sm text-white">Weekly Tool Calibration & Stock Log</h4>
                        <p className="text-xs text-neutral-400">Due Friday • Required by PIRB Regulations</p>
                      </div>
                      <span className="text-xs text-neutral-400 font-bold">Scheduled</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: ACTIVE ASSIGNMENT BRIEF */}
            {activeTab === "assignment" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Customer Contact Block & Address */}
                <div className="p-5 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-sm flex items-center justify-center">
                        TM
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Thabo M. (Customer)</h4>
                        <p className="text-xs text-neutral-400">14 West Road, Sandton • +27 82 491 0029</p>
                      </div>
                    </div>
                    <a
                      href="tel:+27824910029"
                      className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Stage Timeline */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Fulfillment Stage Pipeline
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
                      <div className="py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">1. Confirmed</div>
                      <div className="py-1.5 rounded-lg bg-emerald-500 text-black shadow-md">2. In Progress</div>
                      <div className="py-1.5 rounded-lg bg-neutral-800 text-neutral-400">3. Review</div>
                      <div className="py-1.5 rounded-lg bg-neutral-800 text-neutral-400">4. Verified</div>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                    <span>Customer Note: &quot;Beware of dog in back garden. Ring bell at side gate for DB board access.&quot;</span>
                  </div>

                  {/* 1-Tap Upsell Strip */}
                  <div className="p-4 rounded-xl bg-neutral-800/80 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" /> 1-Tap Customer Upsell Strip
                      </span>
                      <span className="text-[10px] text-neutral-400">Suggested Add-On</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <p className="font-bold text-xs text-white">Add Heavy-Duty Surge Protection Module</p>
                        <p className="text-[11px] text-neutral-400">+R350.00 • Protects against load shedding spikes</p>
                      </div>
                      <button
                        onClick={() => setUpsellAdded(!upsellAdded)}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                          upsellAdded
                            ? "bg-emerald-500 text-black"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        {upsellAdded ? "✓ Added to Order" : "+ Offer Upsell"}
                      </button>
                    </div>
                  </div>

                  {/* Verification & Signature */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Camera className="h-4 w-4 text-emerald-400" />
                      <span>Attach Proof Photo</span>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-extrabold text-xs hover:bg-emerald-400">
                      Complete Job &amp; Capture PIN
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 3: WEEKLY ROTA */}
            {activeTab === "schedule" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white">Weekly Availability &amp; Shift Rota</h4>
                    <span className="text-xs text-emerald-400 font-bold">40 Hours Scheduled</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {[
                      { day: "Mon", status: "08:00 - 17:00", active: true },
                      { day: "Tue", status: "08:00 - 17:00", active: true },
                      { day: "Wed", status: "08:00 - 17:00", active: true },
                      { day: "Thu", status: "08:00 - 17:00", active: true },
                      { day: "Fri", status: "08:00 - 17:00", active: true },
                      { day: "Sat", status: "OFF", active: false },
                      { day: "Sun", status: "OFF", active: false },
                    ].map((d) => (
                      <div
                        key={d.day}
                        className={`p-3 rounded-xl border ${
                          d.active
                            ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                            : "bg-neutral-800/40 border-white/5 text-neutral-500"
                        }`}
                      >
                        <span className="font-bold block text-xs">{d.day}</span>
                        <span className="text-[10px] mt-1 block">{d.status}</span>
                      </div>
                    ))}
                  </div>

                  {/* Earnings Summary */}
                  <div className="p-4 rounded-xl bg-neutral-800/50 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">This Week&apos;s Earnings</span>
                      <span className="font-mono text-xl font-extrabold text-emerald-400">R4,850.00</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Completed Jobs</span>
                      <span className="font-extrabold text-sm text-white">12 Assignments</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 4: ASK ZOLA AI */}
            {activeTab === "zolaChat" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-emerald-500 text-black font-bold text-[10px] flex items-center justify-center shrink-0">
                        ZOLA
                      </div>
                      <div className="p-3 rounded-2xl bg-neutral-800 text-neutral-200 max-w-[85%]">
                        Hello Jabu! I&apos;m your staff assistant. I can look up PIRB standards, check your schedule, or pull up customer notes. What do you need?
                      </div>
                    </div>

                    <div className="flex items-start justify-end gap-2.5">
                      <div className="p-3 rounded-2xl bg-emerald-600 text-white max-w-[85%]">
                        What is the required torque spec for the 63A main switch terminal on today&apos;s DB board job?
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-emerald-500 text-black font-bold text-[10px] flex items-center justify-center shrink-0">
                        ZOLA
                      </div>
                      <div className="p-3 rounded-2xl bg-neutral-800 text-neutral-200 max-w-[85%] space-y-1">
                        <p className="font-bold text-emerald-400">PIRB / SANS 10142 Standard:</p>
                        <p>For 63A MCB terminals, tighten to 2.5 N·m (Newton-meters). Ensure no copper strand shearing occurs during screw fixation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <input
                      type="text"
                      placeholder="Ask Zola about equipment, policies, or shifts..."
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                    />
                    <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. FEATURE HIGHLIGHT GRID ── */}
      <section className="py-20 px-5 max-w-6xl mx-auto border-t border-b-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
            Built For Ground Work
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-b-ink">
            6 Reasons Employees Love Bouul
          </h2>
          <p className="text-sm text-b-ink-soft mt-3">
            Designed to get you in, get the job done, track your hours accurately, and eliminate paperwork.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <UserCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">1-Tap Live Availability</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Set yourself as Available, On Lunch, Unavailable, or Emergency. Your manager sees real-time updates without phone calls or group chats.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Timer className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">Restart-Proof Shift Timer</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Shift timers survive app restarts, phone reboots, and network drops. Built for real shift work on the ground.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">1-Tap Customer Upsells</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Surfaces relevant unbooked services offered by your employer. Offer upgrades directly to customers in 1 tap on site.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">Staff AI Assistant</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Direct chat with Zola AI for equipment specs, policy lookups, and job briefs in a private internal staff chat channel.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
              <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">Digital PIN &amp; Signature</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Collect digital delivery signatures, PIN verification codes, and completion photos straight from your smartphone.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-b-ink">1-Minute Self-Onboarding</h3>
            <p className="text-xs leading-relaxed text-b-ink-soft">
              Open a shareable invite link from your employer, set your profile, photo, and skills, and accept your first assignment in under a minute.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. FOOTER CALL TO ACTION ── */}
      <section className="py-20 px-5 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-b-ink tracking-tight">
          Ready to simplify your shift work?
        </h2>
        <p className="mt-4 text-b-ink-soft text-base">
          Ask your manager for a Bouul invite link or download the app today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="w-full sm:w-auto rounded-full bg-b-green px-8 py-4 text-sm font-extrabold text-b-forest hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Download Bouul Employee App</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/vendors/business"
            className="w-full sm:w-auto rounded-full bg-b-paper-raised border border-b-line px-8 py-4 text-sm font-extrabold text-b-ink hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
          >
            <span>View Vendor CEO Features</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <RedesignFooter />
    </main>
  );
}
