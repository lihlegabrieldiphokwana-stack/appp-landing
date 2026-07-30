"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Store,
  Users,
  Clock,
  CheckCircle2,
  Kanban,
  MessageSquare,
  Calendar,
  Search,
  Sparkles,
  ShieldCheck,
  DollarSign,
  Flame,
  BookOpen,
  ChevronRight,
  ChevronDown,
  FileText,
  Video,
  AlertTriangle,
  Layers,
  Tag,
  Filter,
  ArrowUpRight,
  HelpCircle,
  Lightbulb,
  X,
  CreditCard,
  Gavel,
  SlidersHorizontal,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";
import { MediaPlaceholder } from "./media-placeholder";

export interface TutorialItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  stepCount: number;
  filepath: string;
  mediaPlaceholderAlt: string;
  keySteps: string[];
  whatBouulWatches: string;
  nextSteps: { title: string; slug: string }[];
}

export interface TutorialCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  items: TutorialItem[];
}

export const TUTORIAL_CATEGORIES: TutorialCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Build your digital storefront, list services, add your team, and establish availability.",
    icon: Rocket,
    color: "text-emerald-600",
    badgeBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    items: [
      {
        id: "create-your-storefront",
        slug: "getting-started/create-your-storefront.md",
        title: "Create your storefront",
        summary: "Set up your business profile, upload logo and cover photo, and write a high-converting business description.",
        readTime: "3 min read",
        stepCount: 7,
        filepath: "docs/tutorials/getting-started/create-your-storefront.md",
        mediaPlaceholderAlt: "Storefront editor with logo, cover image, description, and completeness score indicator",
        keySteps: [
          "Sign up as a vendor on Bouul",
          "Choose your unique business handle",
          "Upload high-resolution logo and cover image",
          "Set primary service categories and location",
        ],
        whatBouulWatches: "Bouul automatically scores your storefront out of 10. Missing branding or descriptions trigger a completeness fix task.",
        nextSteps: [
          { title: "List your first service", slug: "getting-started/list-your-first-service.md" },
          { title: "Add your team", slug: "getting-started/add-your-team.md" },
        ],
      },
      {
        id: "list-your-first-service",
        slug: "getting-started/list-your-first-service.md",
        title: "List your first service",
        summary: "Add your offerings with transparent ZAR pricing, durations, add-on variants, and photo galleries.",
        readTime: "4 min read",
        stepCount: 6,
        filepath: "docs/tutorials/getting-started/list-your-first-service.md",
        mediaPlaceholderAlt: "Add service form with title, duration picker, pricing tiers, and photo upload dropzone",
        keySteps: [
          "Open Service Catalog and tap Add Service",
          "Define title, duration, and transparent ZAR price",
          "Upload high-quality gallery photos",
          "Add search tags and equipment requirements",
        ],
        whatBouulWatches: "Listings without photos or keywords pass database creation but fail customer search indexing.",
        nextSteps: [
          { title: "Set working hours", slug: "getting-started/set-working-hours.md" },
          { title: "Complete your profile", slug: "getting-started/complete-your-profile.md" },
        ],
      },
      {
        id: "add-your-team",
        slug: "getting-started/add-your-team.md",
        title: "Add your team",
        summary: "Invite employees, assign roles, configure permissions, and grant capability packs for dispatch.",
        readTime: "3 min read",
        stepCount: 5,
        filepath: "docs/tutorials/getting-started/add-your-team.md",
        mediaPlaceholderAlt: "Invite employee modal with email input, role dropdown, and capability pack selector",
        keySteps: [
          "Go to Team Management in Vendor Dashboard",
          "Tap Invite Employee and enter email/phone",
          "Select assigned role and capability pack",
          "Send invite and monitor acceptance status",
        ],
        whatBouulWatches: "Bouul tracks employee invite acceptance and flags unassigned orders when team capacity is maxed.",
        nextSteps: [
          { title: "Assign employees to bookings", slug: "vendor-operations/assign-employees.md" },
          { title: "Set working hours", slug: "getting-started/set-working-hours.md" },
        ],
      },
      {
        id: "set-working-hours",
        slug: "getting-started/set-working-hours.md",
        title: "Set your working hours & availability",
        summary: "Configure weekly operational schedules, buffer times between jobs, and custom holiday overrides.",
        readTime: "3 min read",
        stepCount: 5,
        filepath: "docs/tutorials/getting-started/set-working-hours.md",
        mediaPlaceholderAlt: "Weekly operating hours grid showing per-day open/close toggles, breaks, and buffer blocks",
        keySteps: [
          "Open Working Hours grid in Settings",
          "Set open/closed status for each day of the week",
          "Add daily break blocks and travel buffer windows",
          "Save custom date overrides for public holidays",
        ],
        whatBouulWatches: "Bookings attempted outside working hours are blocked; schedule conflicts trigger dispatch warnings.",
        nextSteps: [
          { title: "Manage incoming orders", slug: "vendor-operations/manage-incoming-orders.md" },
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
        ],
      },
      {
        id: "complete-your-profile",
        slug: "getting-started/complete-your-profile.md",
        title: "Complete your profile for discoverability",
        summary: "Reach a 10/10 completeness score to boost search placement and earn the Verified Vendor badge.",
        readTime: "4 min read",
        stepCount: 6,
        filepath: "docs/tutorials/getting-started/complete-your-profile.md",
        mediaPlaceholderAlt: "Profile completeness dashboard with 10/10 gauge, missing field list, and verification status",
        keySteps: [
          "Review Profile Health bar on Vendor Dashboard",
          "Fill all missing fields: tax ID, address, phone",
          "Verify identity documents and qualifications",
          "Publish at least 3 active service listings",
        ],
        whatBouulWatches: "Bouul runs automated background checks on profile health; incomplete profiles suffer search penalty.",
        nextSteps: [
          { title: "Use the discovery feed", slug: "consumer/use-discovery-feed.md" },
          { title: "Run an ad campaign", slug: "advanced/run-ad-campaign.md" },
        ],
      },
    ],
  },
  {
    id: "vendor-operations",
    title: "Vendor Operations",
    description: "Manage incoming orders, dispatch staff, track stock, and configure dynamic catalog menus.",
    icon: Kanban,
    color: "text-blue-600",
    badgeBg: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    items: [
      {
        id: "manage-incoming-orders",
        slug: "vendor-operations/manage-incoming-orders.md",
        title: "Manage incoming orders",
        summary: "Filter, accept, assign, and track real-time fulfillment across Open, Active, and Completed queues.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/vendor-operations/manage-incoming-orders.md",
        mediaPlaceholderAlt: "Orders page with Open, Active, and Completed tab bars and real-time order action cards",
        keySteps: [
          "Open Orders view on Vendor Dashboard",
          "Review incoming order details, notes, and photo diagnostics",
          "Tap Accept to confirm booking or Assign to dispatch team",
          "Track live status updates until completion",
        ],
        whatBouulWatches: "Unaccepted orders past SLA threshold fire critical dispatch alerts and auto-reassign via Zola.",
        nextSteps: [
          { title: "Assign employees to bookings", slug: "vendor-operations/assign-employees.md" },
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
        ],
      },
      {
        id: "assign-employees",
        slug: "vendor-operations/assign-employees.md",
        title: "Assign employees to bookings",
        summary: "Dispatch team members based on capability, live location, and current daily workload.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/vendor-operations/assign-employees.md",
        mediaPlaceholderAlt: "Employee assignment selector with staff workload indicators, distance, and Assign button",
        keySteps: [
          "Open unassigned order card",
          "Tap Assign Employee to view team roster",
          "Check real-time staff workload and location",
          "Confirm assignment to send instant mobile push",
        ],
        whatBouulWatches: "Monitors employee acceptance window and warns if staff member has overlapping appointments.",
        nextSteps: [
          { title: "Accept assignment (Employee guide)", slug: "employee/accept-assignment.md" },
          { title: "Handle a dispatch alert", slug: "detection/handle-dispatch-alert.md" },
        ],
      },
      {
        id: "create-bundles",
        slug: "vendor-operations/create-bundles.md",
        title: "Create service bundles & packages",
        summary: "Group complementary services together with discounted package pricing to boost average order value.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/vendor-operations/create-bundles.md",
        mediaPlaceholderAlt: "Bundle builder screen showing selected services, individual prices, and package discount preview",
        keySteps: [
          "Navigate to Catalog > Bundles & Packages",
          "Select 2 or more complementary services",
          "Set promotional bundle price with crossed-out savings tag",
          "Publish bundle to storefront and discovery feed",
        ],
        whatBouulWatches: "Track bundle conversion rates and automatic stock/availability reservation across bundled items.",
        nextSteps: [
          { title: "Manage your service menu", slug: "vendor-operations/manage-service-menu.md" },
          { title: "Set pricing & surge rates", slug: "payments/set-pricing.md" },
        ],
      },
      {
        id: "track-inventory",
        slug: "vendor-operations/track-inventory.md",
        title: "Track your inventory",
        summary: "Manage physical supplies, set low-stock thresholds, and receive automatic reorder alerts.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/vendor-operations/track-inventory.md",
        mediaPlaceholderAlt: "Inventory management list showing stock quantities, item names, and low-stock warning badges",
        keySteps: [
          "Open Inventory tab under Operations",
          "Add consumables and equipment stock items",
          "Set minimum threshold count per item",
          "Link inventory items to specific service recipes",
        ],
        whatBouulWatches: "Automatically deducts inventory upon service completion; fires low-stock alert on Ops Board.",
        nextSteps: [
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
          { title: "Complete daily checklists", slug: "detection/complete-daily-checklists.md" },
        ],
      },
      {
        id: "set-up-subscriptions",
        slug: "vendor-operations/set-up-subscriptions.md",
        title: "Set up recurring subscriptions",
        summary: "Create recurring weekly, bi-weekly, or monthly service plans for recurring customer revenue.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/vendor-operations/set-up-subscriptions.md",
        mediaPlaceholderAlt: "Subscription editor with frequency picker (weekly/bi-weekly/monthly) and discount schedule",
        keySteps: [
          "Select eligible service in catalog",
          "Enable Subscription Plan toggle",
          "Configure billing cycles and subscriber discount %",
          "Set automated recurring dispatch rules",
        ],
        whatBouulWatches: "Automates recurring escrow holds and alerts vendors 48h prior to recurring service dispatch.",
        nextSteps: [
          { title: "Understand escrow protection", slug: "payments/understand-escrow.md" },
          { title: "Withdraw your payouts", slug: "payments/withdraw-payouts.md" },
        ],
      },
      {
        id: "use-the-ops-board",
        slug: "vendor-operations/use-the-ops-board.md",
        title: "Use the ops board",
        summary: "Master the central command view that organizes Needs Attention, At Risk, and Due Now tasks.",
        readTime: "5 min read",
        stepCount: 6,
        filepath: "docs/tutorials/vendor-operations/use-the-ops-board.md",
        mediaPlaceholderAlt: "Ops board interface with Needs Attention, At Risk, Due Now columns and signal task cards",
        keySteps: [
          "Access Ops Board from main menu",
          "Review top priority tasks in Needs Attention column",
          "Tap any task card to expand details and action buttons",
          "Resolve tasks to clear active detection signals",
        ],
        whatBouulWatches: "Ops Board dynamically updates every 30 seconds based on live system signals and order state changes.",
        nextSteps: [
          { title: "What Bouul detects automatically", slug: "detection/what-gets-detected.md" },
          { title: "Handle a dispatch alert", slug: "detection/handle-dispatch-alert.md" },
        ],
      },
      {
        id: "respond-to-reviews",
        slug: "vendor-operations/respond-to-reviews.md",
        title: "Respond to customer reviews",
        summary: "Engage with customer feedback, address concerns professionally, and boost storefront rating.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/vendor-operations/respond-to-reviews.md",
        mediaPlaceholderAlt: "Customer reviews inbox showing star ratings, review text, and vendor reply textfield",
        keySteps: [
          "Open Customer Reviews in dashboard",
          "Filter unreplied 4-star and 5-star reviews",
          "Type personalized reply thanking customer",
          "Use dispute workflow if review violates guidelines",
        ],
        whatBouulWatches: "Response rate and speed factor into overall storefront reputation score and search algorithm.",
        nextSteps: [
          { title: "Maintain your reputation score", slug: "disputes/maintain-reputation.md" },
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
        ],
      },
      {
        id: "manage-service-menu",
        slug: "vendor-operations/manage-service-menu.md",
        title: "Manage your service menu",
        summary: "Organize catalog listings into logical categories, reorder items, and manage active visibility.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/vendor-operations/manage-service-menu.md",
        mediaPlaceholderAlt: "Catalog manager with section drag handles, category headers, and item toggle switches",
        keySteps: [
          "Go to Catalog Management",
          "Create menu categories (e.g. Residential, Express, Premium)",
          "Drag and drop services into category order",
          "Toggle active/inactive status for seasonal items",
        ],
        whatBouulWatches: "Empty menu sections generate a completeness warning on the Ops Board.",
        nextSteps: [
          { title: "Create dynamic menu sections", slug: "vendor-operations/create-dynamic-menus.md" },
          { title: "List your first service", slug: "getting-started/list-your-first-service.md" },
        ],
      },
      {
        id: "create-dynamic-menus",
        slug: "vendor-operations/create-dynamic-menus.md",
        title: "Create dynamic menu sections",
        summary: "Configure time-based or location-based menu sections that display automatically during peak windows.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/vendor-operations/create-dynamic-menus.md",
        mediaPlaceholderAlt: "Dynamic menu rules editor showing schedule time triggers, day pickers, and active service tags",
        keySteps: [
          "Tap Create Dynamic Section in catalog menu",
          "Set visibility rules (e.g. Weekend Specials, Night Service)",
          "Choose start time, end time, and active days",
          "Assign specific services to the dynamic section",
        ],
        whatBouulWatches: "Automatically switches storefront section visibility based on real-time clock and location.",
        nextSteps: [
          { title: "Use dynamic pricing tools", slug: "advanced/use-dynamic-pricing.md" },
          { title: "Set cancellation & no-show policies", slug: "vendor-operations/set-policies.md" },
        ],
      },
      {
        id: "set-policies",
        slug: "vendor-operations/set-policies.md",
        title: "Set cancellation & no-show policies",
        summary: "Establish clear cancellation windows, fee structures, and deposit refund terms to protect revenue.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/vendor-operations/set-policies.md",
        mediaPlaceholderAlt: "Policy configuration page showing cancellation notice sliders, penalty fee %, and dispute rules",
        keySteps: [
          "Navigate to Settings > Business Policies",
          "Select cancellation notice period (e.g. 24 hours)",
          "Set late cancellation fee percentage",
          "Publish policy disclaimer to booking checkout screen",
        ],
        whatBouulWatches: "Escrow system automatically applies cancellation fees based on confirmed timestamped cancellation.",
        nextSteps: [
          { title: "Understand escrow protection", slug: "payments/understand-escrow.md" },
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
        ],
      },
    ],
  },
  {
    id: "employee",
    title: "Employee Guides",
    description: "Accept assignments, update live travel status, navigate the inbox, and complete service workflows.",
    icon: Users,
    color: "text-amber-600",
    badgeBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    items: [
      {
        id: "accept-assignment",
        slug: "employee/accept-assignment.md",
        title: "Accept your first assignment",
        summary: "View assigned bookings, inspect customer notes and photo diagnostics, and confirm job acceptance.",
        readTime: "2 min read",
        stepCount: 5,
        filepath: "docs/tutorials/employee/accept-assignment.md",
        mediaPlaceholderAlt: "Assignment detail view showing customer address map, service notes, photo diagnostics, and Accept button",
        keySteps: [
          "Open Employee App Inbox",
          "Tap new assignment notification card",
          "Review customer location, notes, and attached photos",
          "Tap Accept to confirm job schedule",
        ],
        whatBouulWatches: "Unaccepted assignments trigger SLA countdown alerts to vendor management.",
        nextSteps: [
          { title: "Update your live status during a job", slug: "employee/update-live-status.md" },
          { title: "Navigate the employee inbox", slug: "employee/navigate-inbox.md" },
        ],
      },
      {
        id: "update-live-status",
        slug: "employee/update-live-status.md",
        title: "Update your live status during a job",
        summary: "Step through En Route, Arrived, In Progress, and Completed states to provide live tracking.",
        readTime: "3 min read",
        stepCount: 5,
        filepath: "docs/tutorials/employee/update-live-status.md",
        mediaPlaceholderAlt: "Live status action sheet with En Route, Arrived, In Progress, and Complete job buttons",
        keySteps: [
          "Tap active assignment in inbox",
          "Tap 'En Route' when departing for location",
          "Tap 'Arrived' upon reaching customer address",
          "Tap 'In Progress' when starting work, and 'Completed' when done",
        ],
        whatBouulWatches: "Live status updates feed customer tracking screen and trigger escrow payment release upon completion.",
        nextSteps: [
          { title: "Complete service workflow steps", slug: "employee/complete-workflow-steps.md" },
          { title: "Report a delay or issue", slug: "employee/report-delay.md" },
        ],
      },
      {
        id: "navigate-inbox",
        slug: "employee/navigate-inbox.md",
        title: "Navigate the employee inbox",
        summary: "Filter assignments by Needs Attention, Due Now, and Coming Up to manage daily workflow.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/employee/navigate-inbox.md",
        mediaPlaceholderAlt: "Employee inbox tab view displaying Needs Attention, Due Now, and Coming Up assignment cards",
        keySteps: [
          "Open Inbox tab",
          "Switch between Needs Attention, Due Now, and Coming Up tabs",
          "Use search filter to locate specific customer or order ID",
          "Tap card for full job details and navigation link",
        ],
        whatBouulWatches: "Overdue items in inbox automatically move to Needs Attention priority.",
        nextSteps: [
          { title: "Accept your first assignment", slug: "employee/accept-assignment.md" },
          { title: "View your schedule", slug: "employee/view-schedule.md" },
        ],
      },
      {
        id: "report-delay",
        slug: "employee/report-delay.md",
        title: "Report a delay or issue",
        summary: "Notify vendor management and customer immediately if traffic, stock, or job issues arise.",
        readTime: "2 min read",
        stepCount: 4,
        filepath: "docs/tutorials/employee/report-delay.md",
        mediaPlaceholderAlt: "Report delay modal with reason options (traffic/parts/extended work) and minute delay slider",
        keySteps: [
          "Open active assignment",
          "Tap 'Report Issue / Delay' button",
          "Select delay category and estimated additional minutes",
          "Add brief explanation note and submit",
        ],
        whatBouulWatches: "Automated alert updates customer ETA and prevents dispatch SLA penalty breach.",
        nextSteps: [
          { title: "Update your live status during a job", slug: "employee/update-live-status.md" },
          { title: "Request a schedule change", slug: "employee/request-schedule-change.md" },
        ],
      },
      {
        id: "view-schedule",
        slug: "employee/view-schedule.md",
        title: "View your schedule",
        summary: "Check upcoming shifts, assigned bookings, break slots, and total weekly hours.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/employee/view-schedule.md",
        mediaPlaceholderAlt: "Weekly calendar schedule view showing shift blocks, assigned jobs, and break windows",
        keySteps: [
          "Tap Schedule tab in bottom navigation",
          "Toggle between Day, Week, and Month view",
          "Tap any calendar slot to inspect job info",
          "Check total scheduled hours for current week",
        ],
        whatBouulWatches: "Highlights schedule overlaps or unassigned break blocks automatically.",
        nextSteps: [
          { title: "Request a schedule change", slug: "employee/request-schedule-change.md" },
          { title: "Navigate the employee inbox", slug: "employee/navigate-inbox.md" },
        ],
      },
      {
        id: "request-schedule-change",
        slug: "employee/request-schedule-change.md",
        title: "Request a schedule change",
        summary: "Submit shift swap requests or time-off applications to vendor management.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/employee/request-schedule-change.md",
        mediaPlaceholderAlt: "Schedule change form showing shift swap picker, date selector, and reason text field",
        keySteps: [
          "Open Schedule tab and tap Request Change",
          "Select request type: Time Off or Shift Swap",
          "Choose date range and select replacement coworker",
          "Submit request for manager approval",
        ],
        whatBouulWatches: "Approved swaps automatically update dispatch availability and order assignment rosters.",
        nextSteps: [
          { title: "View your schedule", slug: "employee/view-schedule.md" },
          { title: "Accept your first assignment", slug: "employee/accept-assignment.md" },
        ],
      },
      {
        id: "complete-workflow-steps",
        slug: "employee/complete-workflow-steps.md",
        title: "Complete service workflow steps",
        summary: "Follow step-by-step checklist protocols, capture mandatory proof-of-work photos, and get customer sign-off.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/employee/complete-workflow-steps.md",
        mediaPlaceholderAlt: "Service workflow checklist with step checkboxes, camera photo capture icon, and sign-off pad",
        keySteps: [
          "Open Active Job workflow panel",
          "Check off mandatory safety and quality steps in order",
          "Capture required before/after proof photos",
          "Obtain digital customer signature on screen",
        ],
        whatBouulWatches: "Incomplete workflow steps block job completion and delay escrow payout release.",
        nextSteps: [
          { title: "Update your live status during a job", slug: "employee/update-live-status.md" },
          { title: "Understand escrow protection", slug: "payments/understand-escrow.md" },
        ],
      },
    ],
  },
  {
    id: "consumer",
    title: "Consumer Guides",
    description: "Discover services near you, book appointments, consult Zola AI, write reviews, and follow top pros.",
    icon: Search,
    color: "text-purple-600",
    badgeBg: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    items: [
      {
        id: "find-a-service",
        slug: "consumer/find-a-service.md",
        title: "Find a service near you",
        summary: "Search 80+ service categories, filter by distance and rating, and view verified vendor profiles.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/find-a-service.md",
        mediaPlaceholderAlt: "Search results page with 7 category tabs, location filter, and vendor result cards",
        keySteps: [
          "Open Bouul Consumer App",
          "Type service keyword or tap category icon",
          "Filter by location, distance radius, and star rating",
          "Tap vendor card to view storefront and prices",
        ],
        whatBouulWatches: "Shows real-time availability and verified vendor completeness score on search cards.",
        nextSteps: [
          { title: "Book a service", slug: "consumer/book-a-service.md" },
          { title: "Chat with Zola AI", slug: "consumer/chat-with-zola.md" },
        ],
      },
      {
        id: "book-a-service",
        slug: "consumer/book-a-service.md",
        title: "Book a service",
        summary: "Select date & time slots, add custom job notes, attach photo diagnostics, and confirm with escrow.",
        readTime: "4 min read",
        stepCount: 6,
        filepath: "docs/tutorials/consumer/book-a-service.md",
        mediaPlaceholderAlt: "Booking checkout screen showing date picker, time slot grid, photo diagnostics attach, and ZAR total",
        keySteps: [
          "Select service listing on vendor storefront",
          "Choose date and available time slot",
          "Add service variants or extra add-on options",
          "Attach photo diagnostics and location instructions",
          "Review total ZAR price and confirm escrow payment",
        ],
        whatBouulWatches: "Escrow holds funds securely until you confirm satisfactory service completion.",
        nextSteps: [
          { title: "Manage your bookings", slug: "consumer/manage-bookings.md" },
          { title: "Understand escrow protection", slug: "payments/understand-escrow.md" },
        ],
      },
      {
        id: "chat-with-zola",
        slug: "consumer/chat-with-zola.md",
        title: "Chat with Zola AI",
        summary: "Get instant AI recommendations, diagnose home/auto issues, and generate automated booking quotes.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/chat-with-zola.md",
        mediaPlaceholderAlt: "Zola AI chat interface recommending top local pros with instant book buttons",
        keySteps: [
          "Tap Zola AI icon in bottom navigation",
          "Describe your issue in plain language or attach photo",
          "Review Zola's service diagnosis and price estimate",
          "Tap recommended pro card to book immediately",
        ],
        whatBouulWatches: "Zola matches requirements against vendor capability packs and real-time live availability.",
        nextSteps: [
          { title: "Book a service", slug: "consumer/book-a-service.md" },
          { title: "Use the search tabs", slug: "consumer/use-search-tabs.md" },
        ],
      },
      {
        id: "use-search-tabs",
        slug: "consumer/use-search-tabs.md",
        title: "Use the search tabs",
        summary: "Navigate All, Services, Vendors, Glimpses, Posts, and Deals tabs to find exactly what you need.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/use-search-tabs.md",
        mediaPlaceholderAlt: "Search results tab bar showing All, Services, Vendors, Posts, and Deals view toggles",
        keySteps: [
          "Enter search query in top bar",
          "Tap 'Services' for instant booking listings",
          "Tap 'Vendors' to inspect business storefronts",
          "Tap 'Deals' for promotional bundles",
        ],
        whatBouulWatches: "Search tab rankings prioritize verified pros with high response rates and completeness scores.",
        nextSteps: [
          { title: "Find a service near you", slug: "consumer/find-a-service.md" },
          { title: "Use the discovery feed", slug: "consumer/use-discovery-feed.md" },
        ],
      },
      {
        id: "write-a-review",
        slug: "consumer/write-a-review.md",
        title: "Write a review after service",
        summary: "Rate completed jobs, upload photos of finished work, and help maintain community quality.",
        readTime: "2 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/write-a-review.md",
        mediaPlaceholderAlt: "Review creation screen with 5-star rating control, review textfield, and photo upload gallery",
        keySteps: [
          "Open completed booking from Bookings tab",
          "Tap 'Write Review'",
          "Select 1-to-5 star rating for quality and timeliness",
          "Add written feedback and attach photos of completed job",
        ],
        whatBouulWatches: "Reviews update vendor rating and contribute to community reputation score.",
        nextSteps: [
          { title: "Manage your bookings", slug: "consumer/manage-bookings.md" },
          { title: "Follow vendors & people", slug: "consumer/follow-vendors.md" },
        ],
      },
      {
        id: "manage-bookings",
        slug: "consumer/manage-bookings.md",
        title: "Manage your bookings",
        summary: "Track live status, communicate with assigned pros, reschedule appointments, or initiate support.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/manage-bookings.md",
        mediaPlaceholderAlt: "Consumer bookings dashboard displaying Upcoming, Active, and Past service tabs",
        keySteps: [
          "Tap Bookings tab in main bar",
          "View active job map tracking pro's live status",
          "Tap Chat button to message assigned pro",
          "Tap Reschedule or Cancel if needed before notice window",
        ],
        whatBouulWatches: "Displays live status updates from assigned pro in real time.",
        nextSteps: [
          { title: "Book a service", slug: "consumer/book-a-service.md" },
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
        ],
      },
      {
        id: "use-discovery-feed",
        slug: "consumer/use-discovery-feed.md",
        title: "Use the discovery feed",
        summary: "Explore Glimpse videos, text posts, vendor updates, and trending local service stories.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/consumer/use-discovery-feed.md",
        mediaPlaceholderAlt: "Discovery home feed showcasing Glimpse video player, vendor post cards, and service price tags",
        keySteps: [
          "Open Home Feed tab",
          "Scroll through visual Glimpses and business posts",
          "Tap hashtag chips to view related local content",
          "Tap book button directly on post cards",
        ],
        whatBouulWatches: "Discovery feed algorithm surface content from high-reputation local vendors.",
        nextSteps: [
          { title: "Follow vendors & people", slug: "consumer/follow-vendors.md" },
          { title: "Upload a short video/glimpse", slug: "content/upload-glimpse.md" },
        ],
      },
      {
        id: "follow-vendors",
        slug: "consumer/follow-vendors.md",
        title: "Follow vendors & people",
        summary: "Follow your favorite local service providers to receive special deal alerts and feed updates.",
        readTime: "2 min read",
        stepCount: 3,
        filepath: "docs/tutorials/consumer/follow-vendors.md",
        mediaPlaceholderAlt: "Vendor storefront header showing Follow/Following toggle button and follower count",
        keySteps: [
          "Visit vendor storefront profile",
          "Tap 'Follow' button in header",
          "Access your Followed feed from Home tab",
        ],
        whatBouulWatches: "Followed vendors appear first in search results and receive priority booking status.",
        nextSteps: [
          { title: "Use the discovery feed", slug: "consumer/use-discovery-feed.md" },
          { title: "Find a service near you", slug: "consumer/find-a-service.md" },
        ],
      },
    ],
  },
  {
    id: "content",
    title: "Content & Discovery",
    description: "Publish posts, upload Glimpse video clips, use hashtags, and keep service listings fresh.",
    icon: Video,
    color: "text-rose-600",
    badgeBg: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    items: [
      {
        id: "publish-text-post",
        slug: "content/publish-text-post.md",
        title: "Publish a text post",
        summary: "Share announcements, expert tips, customer stories, and promotions to engage your followers.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/content/publish-text-post.md",
        mediaPlaceholderAlt: "Post editor with text input, image attachment picker, hashtag input, and Publish button",
        keySteps: [
          "Tap + Create Post in Vendor Dashboard",
          "Write informative post text (tips/updates)",
          "Attach high-res photo or graphic",
          "Add relevant hashtags and tap Publish",
        ],
        whatBouulWatches: "Posts with media get 4x higher feed distribution than text-only posts.",
        nextSteps: [
          { title: "Upload a short video/glimpse", slug: "content/upload-glimpse.md" },
          { title: "Use hashtags effectively", slug: "content/use-hashtags.md" },
        ],
      },
      {
        id: "upload-glimpse",
        slug: "content/upload-glimpse.md",
        title: "Upload a short video/glimpse",
        summary: "Record and share 15-60 second vertical video clips showing before-and-after transformations.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/content/upload-glimpse.md",
        mediaPlaceholderAlt: "Glimpse video editor with vertical video preview, service tag selector, and caption input",
        keySteps: [
          "Select Glimpse Video from Create menu",
          "Record or upload vertical 9:16 video clip",
          "Tag linked catalog service listing",
          "Add engaging caption and publish",
        ],
        whatBouulWatches: "Glimpses with linked services drive direct bookings straight from the video player.",
        nextSteps: [
          { title: "Publish a text post", slug: "content/publish-text-post.md" },
          { title: "Respond to post comments", slug: "content/respond-to-comments.md" },
        ],
      },
      {
        id: "use-hashtags",
        slug: "content/use-hashtags.md",
        title: "Use hashtags effectively",
        summary: "Tag your posts with location and industry hashtags to maximize local search reach.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/content/use-hashtags.md",
        mediaPlaceholderAlt: "Hashtag manager modal displaying recommended local trade tags and search volume indicators",
        keySteps: [
          "Research popular local trade hashtags (e.g. #JoburgPlumbing)",
          "Include 3-5 specific tags per post",
          "Combine location tags with service keywords",
          "Track tag reach in content analytics",
        ],
        whatBouulWatches: "Hashtags index your content in location search tabs automatically.",
        nextSteps: [
          { title: "Publish a text post", slug: "content/publish-text-post.md" },
          { title: "Keep your listings fresh", slug: "content/keep-listings-fresh.md" },
        ],
      },
      {
        id: "respond-to-comments",
        slug: "content/respond-to-comments.md",
        title: "Respond to post comments",
        summary: "Convert post questions into confirmed bookings by replying promptly to client comments.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/content/respond-to-comments.md",
        mediaPlaceholderAlt: "Post comments thread with quick-reply buttons and Direct Booking invite link button",
        keySteps: [
          "Open Content Inbox in dashboard",
          "Review incoming comments and inquiries",
          "Reply directly or send direct booking quote link",
        ],
        whatBouulWatches: "Fast comment response times improve content algorithm ranking.",
        nextSteps: [
          { title: "Publish a text post", slug: "content/publish-text-post.md" },
          { title: "Respond to customer reviews", slug: "vendor-operations/respond-to-reviews.md" },
        ],
      },
      {
        id: "keep-listings-fresh",
        slug: "content/keep-listings-fresh.md",
        title: "Keep your listings fresh",
        summary: "Update photos, refresh pricing, and audit service descriptions monthly to maintain top ranking.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/content/keep-listings-fresh.md",
        mediaPlaceholderAlt: "Service listing editor showing last-updated timestamp and Freshness Health badge",
        keySteps: [
          "Review Service Catalog freshness badges",
          "Update gallery photos every 30 days",
          "Audit descriptions and active pricing",
          "Save changes to refresh search index timestamp",
        ],
        whatBouulWatches: "Listings un-updated for over 90 days lose search placement priority.",
        nextSteps: [
          { title: "Manage your service menu", slug: "vendor-operations/manage-service-menu.md" },
          { title: "Complete your profile", slug: "getting-started/complete-your-profile.md" },
        ],
      },
    ],
  },
  {
    id: "detection",
    title: "Detection & Ops Board",
    description: "Understand automated background system checks, storefront signals, and dispatch alerts.",
    icon: Flame,
    color: "text-amber-700",
    badgeBg: "bg-amber-600/10 text-amber-800 border-amber-600/20",
    items: [
      {
        id: "what-gets-detected",
        slug: "detection/what-gets-detected.md",
        title: "What Bouul detects automatically",
        summary: "Comprehensive guide to automated background monitoring across storefronts, dispatch, disputes, and metrics.",
        readTime: "5 min read",
        stepCount: 6,
        filepath: "docs/tutorials/detection/what-gets-detected.md",
        mediaPlaceholderAlt: "System detection engine dashboard displaying active signal counters across 6 monitoring areas",
        keySteps: [
          "Understand continuous background engine checks",
          "Review 6 core detection areas",
          "Learn how signals automatically generate Ops Board tasks",
          "Take action to clear active signal badges",
        ],
        whatBouulWatches: "Monitors storefront completeness, unaccepted orders, unassigned bookings, dispute deadlines, and exception rates 24/7.",
        nextSteps: [
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
          { title: "Respond to a storefront completeness signal", slug: "detection/respond-storefront-signal.md" },
        ],
      },
      {
        id: "respond-storefront-signal",
        slug: "detection/respond-storefront-signal.md",
        title: "Respond to a storefront completeness signal",
        summary: "Fix missing branding, descriptions, or listing photos identified by automated health checks.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/detection/respond-storefront-signal.md",
        mediaPlaceholderAlt: "Storefront signal task card with missing field breakdown and 1-tap Fix Now button",
        keySteps: [
          "Tap Storefront Signal card on Ops Board",
          "Review identified missing items (logo/photos/text)",
          "Tap 'Fix Now' to open editor pre-focused on missing item",
          "Save changes to clear signal and boost health score",
        ],
        whatBouulWatches: "Score updates automatically upon file upload or text saving.",
        nextSteps: [
          { title: "Create your storefront", slug: "getting-started/create-your-storefront.md" },
          { title: "Complete your profile", slug: "getting-started/complete-your-profile.md" },
        ],
      },
      {
        id: "handle-dispatch-alert",
        slug: "detection/handle-dispatch-alert.md",
        title: "Handle a dispatch alert",
        summary: "Resolve unaccepted order assignments and SLA breaches before customer cancellation occurs.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/detection/handle-dispatch-alert.md",
        mediaPlaceholderAlt: "Critical dispatch alert banner with employee SLA timer and 1-tap Reassign options",
        keySteps: [
          "Tap Dispatch Alert on Ops Board",
          "Check time elapsed since order assignment",
          "Contact assigned staff member or tap Reassign",
          "Confirm new staff assignment to reset SLA timer",
        ],
        whatBouulWatches: "Critical dispatch signals auto-reassign order if unacted upon within SLA threshold window.",
        nextSteps: [
          { title: "Assign employees to bookings", slug: "vendor-operations/assign-employees.md" },
          { title: "Accept your first assignment", slug: "employee/accept-assignment.md" },
        ],
      },
      {
        id: "resolve-dispute-signal",
        slug: "detection/resolve-dispute-signal.md",
        title: "Resolve a dispute signal",
        summary: "Address customer dispute notifications within the mandatory 48-hour response countdown window.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/detection/resolve-dispute-signal.md",
        mediaPlaceholderAlt: "Dispute signal task card showing response countdown clock and dispute case summary",
        keySteps: [
          "Open Dispute Signal from Needs Attention column",
          "Read customer claim summary and requested resolution",
          "Gather job photos and workflow logs",
          "Submit vendor response before countdown expires",
        ],
        whatBouulWatches: "Failure to respond within 48 hours results in default decision for customer.",
        nextSteps: [
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
          { title: "Submit evidence for a dispute case", slug: "disputes/submit-evidence.md" },
        ],
      },
      {
        id: "review-metric-alerts",
        slug: "detection/review-metric-alerts.md",
        title: "Review performance metric alerts",
        summary: "Analyze exception rate spikes, cancellation surges, or rating drops to fix operational bottlenecks.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/detection/review-metric-alerts.md",
        mediaPlaceholderAlt: "Metric alert detail card displaying exception trend chart and root-cause analysis links",
        keySteps: [
          "Open Metric Alert card from Ops Board",
          "Examine metric anomaly graph (e.g. late arrivals > 10%)",
          "Drill down into specific affected orders and staff members",
          "Implement corrective action and dismiss alert",
        ],
        whatBouulWatches: "Tracks rolling 30-day operational metrics against platform quality thresholds.",
        nextSteps: [
          { title: "Set up employee performance tracking", slug: "advanced/employee-performance-tracking.md" },
          { title: "Maintain your reputation score", slug: "disputes/maintain-reputation.md" },
        ],
      },
      {
        id: "complete-daily-checklists",
        slug: "detection/complete-daily-checklists.md",
        title: "Complete daily checklists",
        summary: "Perform opening and closing operational checklists to ensure workplace and team readiness.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/detection/complete-daily-checklists.md",
        mediaPlaceholderAlt: "Daily opening checklist interface showing item checkboxes, completion status, and sign-off button",
        keySteps: [
          "Open Daily Checklist task on Ops Board",
          "Verify inventory, equipment readiness, and staff check-ins",
          "Tick off each required checklist item",
          "Submit completed checklist to open for business",
        ],
        whatBouulWatches: "Uncompleted daily checklists trigger opening delay warnings on vendor dashboard.",
        nextSteps: [
          { title: "Track your inventory", slug: "vendor-operations/track-inventory.md" },
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
        ],
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Payouts",
    description: "Understand earnings, escrow protection, dynamic surge pricing, and bank payouts.",
    icon: DollarSign,
    color: "text-emerald-600",
    badgeBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    items: [
      {
        id: "earnings-dashboard",
        slug: "payments/earnings-dashboard.md",
        title: "Understand your earnings dashboard",
        summary: "Track total revenue, withdrawable balance, pending escrow, and weekly earnings analytics.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/payments/earnings-dashboard.md",
        mediaPlaceholderAlt: "Earnings dashboard showing Net Revenue, Withdrawable Funds, Pending Escrow, and ZAR trend chart",
        keySteps: [
          "Navigate to Earnings in Vendor Dashboard",
          "View Withdrawable Balance vs Pending Escrow breakdown",
          "Analyze weekly and monthly revenue charts",
          "Filter earnings by service category or staff member",
        ],
        whatBouulWatches: "Updates balance real-time as jobs pass escrow completion milestones.",
        nextSteps: [
          { title: "Withdraw your payouts", slug: "payments/withdraw-payouts.md" },
          { title: "Understand escrow protection", slug: "payments/understand-escrow.md" },
        ],
      },
      {
        id: "withdraw-payouts",
        slug: "payments/withdraw-payouts.md",
        title: "Withdraw your payouts",
        summary: "Transfer available funds directly to your verified South African bank account.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/payments/withdraw-payouts.md",
        mediaPlaceholderAlt: "Payout withdrawal screen with ZAR amount input, bank selector, and Transfer button",
        keySteps: [
          "Tap Withdraw Funds on Earnings screen",
          "Enter desired withdrawal amount in ZAR",
          "Select verified bank account",
          "Confirm transfer (processed via EFT within 24 hours)",
        ],
        whatBouulWatches: "Ensures withdrawable amount excludes active escrow holds and pending dispute reserves.",
        nextSteps: [
          { title: "View your transaction history", slug: "payments/view-transactions.md" },
          { title: "Integrate your payment processor", slug: "advanced/integrate-payment-processor.md" },
        ],
      },
      {
        id: "understand-escrow",
        slug: "payments/understand-escrow.md",
        title: "Understand escrow protection",
        summary: "Learn how Bouul holds customer payments safely until service delivery is verified.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/payments/understand-escrow.md",
        mediaPlaceholderAlt: "Escrow status timeline displaying Payment Hold, Service Execution, Verification, and Release triggers",
        keySteps: [
          "Customer payment held upon booking confirmation",
          "Funds locked in secure escrow wallet during job",
          "Employee marks service complete with proof photos",
          "Escrow releases funds to withdrawable balance instantly",
        ],
        whatBouulWatches: "Protects vendors against non-payment and clients against incomplete service.",
        nextSteps: [
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
          { title: "Earnings dashboard", slug: "payments/earnings-dashboard.md" },
        ],
      },
      {
        id: "set-pricing",
        slug: "payments/set-pricing.md",
        title: "Set your pricing & surge rates",
        summary: "Configure base prices, weekend multipliers, peak hour surge rates, and off-peak discounts.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/payments/set-pricing.md",
        mediaPlaceholderAlt: "Pricing controls with base price ZAR input, surge multiplier slider, and off-peak discount toggle",
        keySteps: [
          "Open Pricing Settings in Catalog",
          "Set standard base price per service",
          "Enable peak surge multiplier (e.g. 1.25x for after-hours)",
          "Configure off-peak discounts to boost slow windows",
        ],
        whatBouulWatches: "Surge caps enforce fair pricing rules and display clear pricing breakdowns to clients.",
        nextSteps: [
          { title: "Use dynamic pricing tools", slug: "advanced/use-dynamic-pricing.md" },
          { title: "Create service bundles & packages", slug: "vendor-operations/create-bundles.md" },
        ],
      },
      {
        id: "view-transactions",
        slug: "payments/view-transactions.md",
        title: "View your transaction history",
        summary: "Filter, search, and export detailed transaction statements for accounting and tax reporting.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/payments/view-transactions.md",
        mediaPlaceholderAlt: "Transaction history ledger with date filters, status tags (Released/Escrow/Fee), and CSV Export",
        keySteps: [
          "Open Transaction History in Earnings menu",
          "Filter by date range, transaction type, or order ID",
          "Tap transaction item to view detailed fee breakdown",
          "Export CSV/PDF statement for tax compliance",
        ],
        whatBouulWatches: "Maintains immutable audit trail for all platform fees, payouts, and escrow releases.",
        nextSteps: [
          { title: "Earnings dashboard", slug: "payments/earnings-dashboard.md" },
          { title: "Withdraw your payouts", slug: "payments/withdraw-payouts.md" },
        ],
      },
    ],
  },
  {
    id: "disputes",
    title: "Disputes & Trust",
    description: "Manage customer claims, submit evidence galleries, participate in community jury, and maintain rating.",
    icon: ShieldCheck,
    color: "text-blue-700",
    badgeBg: "bg-blue-600/10 text-blue-800 border-blue-600/20",
    items: [
      {
        id: "respond-to-dispute",
        slug: "disputes/respond-to-dispute.md",
        title: "Respond to a customer dispute",
        summary: "Step-by-step guide to reviewing customer claims, choosing resolution options, or contesting claims.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/disputes/respond-to-dispute.md",
        mediaPlaceholderAlt: "Dispute response portal showing customer claim statement, photo evidence, and vendor options",
        keySteps: [
          "Open active dispute card from Ops Board",
          "Review customer claim details and requested refund amount",
          "Choose response: Refund, Partial Settlement, or Contest",
          "Provide detailed vendor statement and submit",
        ],
        whatBouulWatches: "Monitors 48-hour response SLA deadline closely to ensure prompt resolution.",
        nextSteps: [
          { title: "Submit evidence for a dispute case", slug: "disputes/submit-evidence.md" },
          { title: "Understand the jury process", slug: "disputes/understand-jury-process.md" },
        ],
      },
      {
        id: "submit-evidence",
        slug: "disputes/submit-evidence.md",
        title: "Submit evidence for a dispute case",
        summary: "Upload before/after photos, GPS logs, chat records, and workflow checklists to substantiate your position.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/disputes/submit-evidence.md",
        mediaPlaceholderAlt: "Evidence submission gallery showing uploaded job photos, GPS timestamps, and Chat transcript links",
        keySteps: [
          "Tap Attach Evidence on dispute file",
          "Select job photos with verified EXIF timestamps",
          "Attach completed workflow step logs and chat history",
          "Submit evidence package for jury review",
        ],
        whatBouulWatches: "Timestamped photo proof captured inside employee workflow carries highest evidentiary weight.",
        nextSteps: [
          { title: "Understand the jury process", slug: "disputes/understand-jury-process.md" },
          { title: "Maintain your reputation score", slug: "disputes/maintain-reputation.md" },
        ],
      },
      {
        id: "understand-jury-process",
        slug: "disputes/understand-jury-process.md",
        title: "Understand the jury process",
        summary: "Learn how impartial peer vendors review evidence and vote on disputed escrow funds.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/disputes/understand-jury-process.md",
        mediaPlaceholderAlt: "Jury deliberation progress screen showing anonymous case summary, evidence tabs, and vote status",
        keySteps: [
          "Dispute moves to Jury when vendor and client disagree",
          "5 peer vendors review anonymized evidence package",
          "Jurors cast independent votes within 24-hour window",
          "Majority vote triggers automatic escrow release or refund",
        ],
        whatBouulWatches: "Jury decisions are binding and automatically execute escrow distribution.",
        nextSteps: [
          { title: "Maintain your reputation score", slug: "disputes/maintain-reputation.md" },
          { title: "Respond to a customer dispute", slug: "disputes/respond-to-dispute.md" },
        ],
      },
      {
        id: "maintain-reputation",
        slug: "disputes/maintain-reputation.md",
        title: "Maintain your reputation score",
        summary: "Keep your dispute rate low, star ratings high, and response times fast to earn top tier benefits.",
        readTime: "3 min read",
        stepCount: 4,
        filepath: "docs/tutorials/disputes/maintain-reputation.md",
        mediaPlaceholderAlt: "Reputation score card showing average rating, dispute rate %, response speed, and Tier status",
        keySteps: [
          "Monitor Reputation Gauge on main dashboard",
          "Keep dispute rate below 1.5% of total orders",
          "Maintain 4.5+ star average customer rating",
          "Respond to all customer messages within 15 minutes",
        ],
        whatBouulWatches: "High reputation score unlocks lower platform fee rates and featured search placement.",
        nextSteps: [
          { title: "Respond to customer reviews", slug: "vendor-operations/respond-to-reviews.md" },
          { title: "Complete your profile", slug: "getting-started/complete-your-profile.md" },
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Features",
    description: "Run targeted ad campaigns, deploy dynamic pricing algorithms, track employee performance, and leverage Zola Business.",
    icon: Sparkles,
    color: "text-emerald-700",
    badgeBg: "bg-emerald-600/10 text-emerald-800 border-emerald-600/20",
    items: [
      {
        id: "run-ad-campaign",
        slug: "advanced/run-ad-campaign.md",
        title: "Run a Bouul ad campaign",
        summary: "Promote your services with sponsored search placements, category banners, and targeted feed ads.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/advanced/run-ad-campaign.md",
        mediaPlaceholderAlt: "Ad campaign wizard with target category picker, daily budget slider, and ad preview card",
        keySteps: [
          "Navigate to Marketing > Ad Campaigns",
          "Select target service category and geographic radius",
          "Set daily ZAR ad budget and campaign duration",
          "Select featured service listing and launch campaign",
        ],
        whatBouulWatches: "Tracks impression counts, click-through rates, and direct booking ROI in real-time.",
        nextSteps: [
          { title: "Use dynamic pricing tools", slug: "advanced/use-dynamic-pricing.md" },
          { title: "Use Zola AI for your business", slug: "advanced/use-zola-business-mode.md" },
        ],
      },
      {
        id: "use-dynamic-pricing",
        slug: "advanced/use-dynamic-pricing.md",
        title: "Use dynamic pricing tools",
        summary: "Automate demand-based pricing adjustments based on real-time search volume and unbooked capacity.",
        readTime: "5 min read",
        stepCount: 5,
        filepath: "docs/tutorials/advanced/use-dynamic-pricing.md",
        mediaPlaceholderAlt: "Dynamic pricing strategy board showing automated price curve graphs and surge parameters",
        keySteps: [
          "Open Dynamic Pricing under Advanced Settings",
          "Set minimum and maximum price guardrails",
          "Enable high-demand automatic surge rule",
          "Enable last-minute capacity discount rule",
        ],
        whatBouulWatches: "Adjusts catalog prices dynamically without exceeding predefined safety caps.",
        nextSteps: [
          { title: "Set your pricing & surge rates", slug: "payments/set-pricing.md" },
          { title: "Run a Bouul ad campaign", slug: "advanced/run-ad-campaign.md" },
        ],
      },
      {
        id: "employee-performance-tracking",
        slug: "advanced/employee-performance-tracking.md",
        title: "Set up employee performance tracking",
        summary: "Track individual staff completion rates, customer ratings, SLA compliance, and revenue generation.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/advanced/employee-performance-tracking.md",
        mediaPlaceholderAlt: "Employee performance analytics grid displaying staff member scorecards, job counts, and ratings",
        keySteps: [
          "Navigate to Team > Analytics & Performance",
          "Review individual staff scorecards",
          "Compare completion speed and customer ratings",
          "Set monthly performance bonus thresholds",
        ],
        whatBouulWatches: "Identifies top performers and flags staff members needing additional workflow training.",
        nextSteps: [
          { title: "Add your team", slug: "getting-started/add-your-team.md" },
          { title: "Assign employees to bookings", slug: "vendor-operations/assign-employees.md" },
        ],
      },
      {
        id: "integrate-payment-processor",
        slug: "advanced/integrate-payment-processor.md",
        title: "Integrate your payment processor",
        summary: "Connect bank accounts, configure instant payout options, and manage merchant accounting settings.",
        readTime: "4 min read",
        stepCount: 4,
        filepath: "docs/tutorials/advanced/integrate-payment-processor.md",
        mediaPlaceholderAlt: "Payment processor setup form with bank details input, verification status, and payout schedule",
        keySteps: [
          "Go to Settings > Payout Accounts",
          "Enter bank account details and branch code",
          "Upload verification bank statement",
          "Select payout frequency (Daily / Weekly)",
        ],
        whatBouulWatches: "Runs automated bank account verification to prevent payout misrouting.",
        nextSteps: [
          { title: "Withdraw your payouts", slug: "payments/withdraw-payouts.md" },
          { title: "View your transaction history", slug: "payments/view-transactions.md" },
        ],
      },
      {
        id: "use-zola-business-mode",
        slug: "advanced/use-zola-business-mode.md",
        title: "Use Zola AI for your business",
        summary: "Leverage Zola Business Mode to query revenue stats, draft customer replies, and auto-dispatch orders.",
        readTime: "4 min read",
        stepCount: 5,
        filepath: "docs/tutorials/advanced/use-zola-business-mode.md",
        mediaPlaceholderAlt: "Zola AI in Business Mode displaying daily revenue summary, staffing advice, and quick actions",
        keySteps: [
          "Open Zola AI and switch to Business Mode",
          "Ask natural language queries (e.g. 'What was my top service this week?')",
          "Use Zola to draft review responses and promotional posts",
          "Enable Zola Auto-Dispatch for emergency orders",
        ],
        whatBouulWatches: "Zola analyzes live store telemetry to provide actionable revenue recommendations.",
        nextSteps: [
          { title: "Chat with Zola AI", slug: "consumer/chat-with-zola.md" },
          { title: "Use the ops board", slug: "vendor-operations/use-the-ops-board.md" },
        ],
      },
    ],
  },
];

export function TutorialsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>("getting-started");
  const [activeModalGuide, setActiveModalGuide] = useState<{
    guide: TutorialItem;
    categoryTitle: string;
  } | null>(null);

  // Filter tutorials based on category and search query
  const filteredCategories = useMemo(() => {
    return TUTORIAL_CATEGORIES.map((cat) => {
      const matchesCategory = selectedCategoryId === "all" || cat.id === selectedCategoryId;
      if (!matchesCategory) {
        return { ...cat, items: [] };
      }

      if (!searchQuery.trim()) {
        return cat;
      }

      const q = searchQuery.toLowerCase();
      const filteredItems = cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.keySteps.some((step) => step.toLowerCase().includes(q))
      );

      return { ...cat, items: filteredItems };
    }).filter((cat) => cat.items.length > 0);
  }, [searchQuery, selectedCategoryId]);

  const totalGuideCount = useMemo(() => {
    return TUTORIAL_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean>>({});
  const [completedGuides, setCompletedGuides] = useState<Set<string>>(new Set());
  const [showToastMessage, setShowToastMessage] = useState<string | null>(null);

  // Load completed guides from localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("bouul_read_guides");
      if (saved) {
        setCompletedGuides(new Set(JSON.parse(saved)));
      }
    } catch (e) {
      // Ignore fallback
    }
  }, []);

  // Track completed guide when opened
  const handleOpenGuide = (tutorial: TutorialItem, categoryTitle: string) => {
    setActiveModalGuide({ guide: tutorial, categoryTitle });
    setCompletedGuides((prev) => {
      const next = new Set(prev);
      next.add(tutorial.id);
      try {
        localStorage.setItem("bouul_read_guides", JSON.stringify(Array.from(next)));
      } catch (e) {}
      return next;
    });
  };

  // Surprise Me 🎲 Random Guide Picker
  const handleSurpriseMe = () => {
    const allGuides = TUTORIAL_CATEGORIES.flatMap((c) =>
      c.items.map((item) => ({ guide: item, categoryTitle: c.title }))
    );
    if (allGuides.length > 0) {
      const random = allGuides[Math.floor(Math.random() * allGuides.length)];
      handleOpenGuide(random.guide, random.categoryTitle);
      triggerToast(`🎲 Picked: "${random.guide.title}"`);
    }
  };

  const triggerToast = (msg: string) => {
    setShowToastMessage(msg);
    setTimeout(() => setShowToastMessage(null), 3000);
  };

  // Keyboard shortcut listener: '/' to focus search, 'Esc' to close modal
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape" && activeModalGuide) {
        setActiveModalGuide(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalGuide]);

  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}/tutorials#${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    triggerToast("✨ Direct guide link copied to clipboard!");
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="relative pt-20 sm:pt-24 pb-[max(5rem,env(safe-area-inset-bottom))]">
      {/* Floating Delight Toast */}
      <AnimatePresence>
        {showToastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-b-ink text-b-paper px-4 py-2 text-xs font-semibold shadow-xl border border-b-paper/20 flex items-center gap-2 pointer-events-none"
          >
            <Sparkles className="h-4 w-4 text-b-sun" />
            <span>{showToastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Section id="tutorials-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            {/* Top Eyebrow */}
            <Eyebrow tone="green" className="mb-2 sm:mb-3">
              Comprehensive Knowledge Base
            </Eyebrow>

            {/* Display Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-b-ink mb-3 sm:mb-4">
              Master Bouul in Minutes<span className="text-b-green">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-b-ink-soft leading-relaxed max-w-2xl mx-auto px-2">
              Step-by-step guides for vendors, employees, and customers. Learn how to launch your storefront,
              automate dispatch, protect earnings with escrow, and scale your service business.
            </p>

            {/* Stats & Progress Bar with Completed Count */}
            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-2.5 font-price text-xs text-b-ink-soft">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-b-paper-raised px-3 py-1 border border-b-line">
                  <BookOpen className="h-3.5 w-3.5 text-b-green-deep" />
                  <strong>55</strong> Step-by-Step Guides
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-b-paper-raised px-3 py-1 border border-b-line">
                  <Layers className="h-3.5 w-3.5 text-b-green-deep" />
                  <strong>9</strong> Specialized Categories
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-b-paper-raised px-3 py-1 border border-b-line">
                  <Clock className="h-3.5 w-3.5 text-b-green-deep" />
                  ~3.5 Hours Total Knowledge
                </span>
              </div>

              {/* Learning Progress Bar */}
              <div className="w-full max-w-md bg-b-paper-raised border border-b-line rounded-2xl p-3 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5 px-1">
                  <span className="text-b-ink flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-b-sun" />
                    Knowledge Mastered
                  </span>
                  <span className="font-price text-b-green-deep">
                    {completedGuides.size} of 55 ({Math.round((completedGuides.size / 55) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-b-paper-deep overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(completedGuides.size / 55) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-b-green-deep via-emerald-500 to-teal-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Search Bar with Keyboard Kbd Affordance & Surprise Me 🎲 Delight Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-b-ink-faint pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 55 guides or press '/' to search..."
                  aria-label="Search tutorial documentation"
                  className="w-full rounded-2xl border border-b-line bg-b-paper-raised pl-11 pr-12 py-3.5 text-sm text-b-ink placeholder:text-b-ink-faint focus:border-b-green-deep focus:outline-none focus:ring-2 focus:ring-b-green-deep/20 transition-all duration-200 min-h-[44px]"
                />
                {!searchQuery && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
                    <kbd className="rounded bg-b-paper-deep border border-b-line px-2 py-0.5 font-price text-[10px] font-bold text-b-ink-faint shadow-2xs">
                      /
                    </kbd>
                  </div>
                )}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search query"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-b-ink-faint hover:text-b-ink transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <button
                onClick={handleSurpriseMe}
                title="Open a random guide to explore"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3.5 text-xs font-semibold text-b-ink hover:bg-b-ink hover:text-b-paper transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                <Sparkles className="h-4 w-4 text-b-sun" />
                <span>Surprise Me 🎲</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-5 sm:mt-6 flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 -mx-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none snap-x touch-pan-x">
              <button
                onClick={() => setSelectedCategoryId("all")}
                className={`snap-start shrink-0 rounded-full px-4 py-2.5 sm:py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] sm:min-h-[36px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-b-green-deep/30 ${
                  selectedCategoryId === "all"
                    ? "bg-b-ink text-b-paper shadow-sm"
                    : "bg-b-paper-raised text-b-ink-soft hover:bg-b-paper-deep hover:text-b-ink border border-b-line"
                }`}
              >
                All Guides ({totalGuideCount})
              </button>
              {TUTORIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`snap-start shrink-0 rounded-full px-4 py-2.5 sm:py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] sm:min-h-[36px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-b-green-deep/30 ${
                    selectedCategoryId === cat.id
                      ? "bg-b-ink text-b-paper shadow-sm"
                      : "bg-b-paper-raised text-b-ink-soft hover:bg-b-paper-deep hover:text-b-ink border border-b-line"
                  }`}
                >
                  {cat.title} ({cat.items.length})
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tutorial Accordion & Grid View */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 sm:py-16 rounded-3xl border border-dashed border-b-line bg-b-paper-raised p-6 sm:p-8">
              <HelpCircle className="h-10 w-10 sm:h-12 sm:w-12 text-b-ink-faint mx-auto mb-3" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-b-ink mb-1">No guides found</h3>
              <p className="text-xs sm:text-sm text-b-ink-soft mb-4">
                No tutorial matches "{searchQuery}". Try searching for terms like "storefront", "escrow", "dispatch", or "Zola".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategoryId("all");
                }}
                className="rounded-full bg-b-ink px-5 py-2.5 text-xs font-semibold text-b-paper hover:bg-b-forest transition-colors duration-200 cursor-pointer min-h-[44px] inline-flex items-center justify-center"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategoryId === category.id || searchQuery.trim() !== "";

              return (
                <Reveal key={category.id}>
                  <div className="rounded-2xl sm:rounded-3xl border border-b-line bg-b-paper-raised overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Category Header Bar */}
                    <button
                      onClick={() =>
                        setExpandedCategoryId(isExpanded ? null : category.id)
                      }
                      aria-expanded={isExpanded}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-b-paper-deep/50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-b-green-deep/20 min-h-[56px]"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${category.badgeBg} border shrink-0`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-display text-lg sm:text-xl font-bold text-b-ink">
                              {category.title}
                            </h2>
                            <span className="rounded-full bg-b-paper-deep px-2.5 py-0.5 font-price text-[10px] sm:text-[11px] font-semibold text-b-ink-soft border border-b-line">
                              {category.items.length} guides
                            </span>
                          </div>
                          <p className="text-xs text-b-ink-soft mt-1 line-clamp-1 sm:line-clamp-none">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-1 sm:p-2 text-b-ink-faint shrink-0">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Content Grid */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-6 pt-2 border-t border-b-line/60 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {category.items.map((tutorial) => {
                              const isCompleted = completedGuides.has(tutorial.id);
                              return (
                                <div
                                  key={tutorial.id}
                                  className={`group relative rounded-xl sm:rounded-2xl border p-4 sm:p-5 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                                    isCompleted
                                      ? "bg-b-paper border-b-green-deep/30"
                                      : "bg-b-paper border-b-line hover:border-b-green-deep"
                                  }`}
                                >
                                  <div>
                                    {/* Top Bar: Badges */}
                                    <div className="flex items-center justify-between gap-2 mb-2.5">
                                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold font-price text-b-green-deep">
                                        <Clock className="h-3.5 w-3.5" />
                                        {tutorial.readTime}
                                      </span>
                                      {isCompleted ? (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold font-price text-b-green-deep bg-b-green-deep/10 px-2 py-0.5 rounded-full border border-b-green-deep/20">
                                          <CheckCircle2 className="h-3 w-3" /> Completed
                                        </span>
                                      ) : (
                                        <span className="text-[11px] font-semibold font-price text-b-ink-faint">
                                          {tutorial.stepCount} steps
                                        </span>
                                      )}
                                    </div>

                                    {/* Title & Summary */}
                                    <h3 className="font-display text-base font-bold text-b-ink group-hover:text-b-green-deep transition-colors duration-200 mb-1.5">
                                      {tutorial.title}
                                    </h3>
                                    <p className="text-xs text-b-ink-soft leading-relaxed mb-3.5">
                                      {tutorial.summary}
                                    </p>

                                    {/* Rich Interactive UX Preview Component */}
                                    <div className="mb-3.5 rounded-xl border border-b-line bg-b-paper-raised p-3.5 space-y-2.5 shadow-xs">
                                      <div className="flex items-center justify-between border-b border-b-line/60 pb-2 text-[11px]">
                                        <span className="font-bold text-b-ink flex items-center gap-1.5">
                                          <Sparkles className="h-3.5 w-3.5 text-b-sun" />
                                          <span>Interactive SOP Preview</span>
                                        </span>
                                        <span className="font-mono text-emerald-700 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                          {tutorial.stepCount} Actions
                                        </span>
                                      </div>

                                      <div className="space-y-1.5 text-xs">
                                        {tutorial.keySteps.slice(0, 2).map((step, sIdx) => (
                                          <div key={sIdx} className="flex items-center gap-2 text-b-ink-soft">
                                            <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                                              {sIdx + 1}
                                            </div>
                                            <span className="truncate">{step}</span>
                                          </div>
                                        ))}
                                      </div>

                                      {tutorial.whatBouulWatches && (
                                        <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2 text-[11px] text-amber-900 flex items-start gap-2">
                                          <Flame className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                                          <span className="line-clamp-1 font-medium">{tutorial.whatBouulWatches}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center gap-2">
                                    <a
                                      href={`/tutorials/${tutorial.slug.replace(/\.md$/, '')}`}
                                      className="flex-1 flex items-center justify-between rounded-xl bg-b-paper-raised border border-b-line px-4 py-2.5 text-xs font-semibold text-b-ink group-hover:bg-b-ink group-hover:text-b-paper group-hover:border-b-ink transition-all duration-200 cursor-pointer min-h-[44px]"
                                    >
                                      <span>{isCompleted ? "Review Full Guide" : "Read Full Guide"}</span>
                                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                    <button
                                      onClick={() => handleCopyLink(tutorial.id)}
                                      title="Copy guide link"
                                      aria-label="Copy direct guide link"
                                      className="p-2.5 rounded-xl border border-b-line bg-b-paper-raised text-b-ink-soft hover:text-b-ink hover:bg-b-paper-deep transition-colors duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                                    >
                                      {copiedSlug === tutorial.id ? (
                                        <CheckCircle2 className="h-4 w-4 text-b-green-deep" />
                                      ) : (
                                        <Tag className="h-4 w-4" />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })
          )}
        </div>
      </Section>

      {/* Guide Detail Modal — Adaptive Bottom Sheet on Mobile (<640px) */}
      <AnimatePresence>
        {activeModalGuide && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalGuide(null)}
              className="fixed inset-0 bg-b-ink/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal / Bottom Sheet Box */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border-t sm:border border-b-line bg-b-paper p-5 sm:p-8 shadow-2xl z-10 text-b-ink pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            >
              {/* Mobile Drag Handle */}
              <div className="w-12 h-1.5 rounded-full bg-b-line mx-auto mb-4 sm:hidden" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalGuide(null)}
                aria-label="Close guide viewer modal"
                className="absolute right-4 top-4 sm:right-5 sm:top-5 p-2 rounded-full text-b-ink-faint hover:text-b-ink hover:bg-b-paper-raised transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Category Header */}
              <div className="flex items-center justify-between gap-2 mb-2 pr-10 sm:pr-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="rounded-full bg-b-green-deep/10 px-3 py-1 font-price text-[11px] font-semibold text-b-green-deep">
                    {activeModalGuide.categoryTitle}
                  </span>
                  <span className="font-price text-xs text-b-ink-faint">
                    • {activeModalGuide.guide.readTime}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyLink(activeModalGuide.guide.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold font-price text-b-ink-soft hover:text-b-ink transition-colors cursor-pointer min-h-[36px]"
                >
                  {copiedSlug === activeModalGuide.guide.id ? (
                    <span className="text-b-green-deep flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Copied link!
                    </span>
                  ) : (
                    <span>Copy Link</span>
                  )}
                </button>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-b-ink mb-2.5">
                {activeModalGuide.guide.title}
              </h2>
              <p className="text-xs sm:text-sm text-b-ink-soft leading-relaxed mb-5">
                {activeModalGuide.guide.summary}
              </p>

              {/* Media Placeholder in Modal */}
              <div className="mb-5">
                <MediaPlaceholder
                  kind="image"
                  label="App Interface Screenshot Placeholder"
                  alt={activeModalGuide.guide.mediaPlaceholderAlt}
                  ratio="16/9"
                  rounded="rounded-xl sm:rounded-2xl"
                />
                <div className="mt-2 rounded-xl bg-b-paper-raised border border-b-line p-3 text-xs text-b-ink-soft italic">
                  🖼️ <strong>Placeholder:</strong> {activeModalGuide.guide.mediaPlaceholderAlt}
                </div>
              </div>

              {/* Key Steps List */}
              <div className="mb-5">
                <h3 className="font-display text-sm sm:text-base font-bold text-b-ink mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-b-green-deep" />
                  Key Action Steps ({activeModalGuide.guide.keySteps.length} Steps)
                </h3>
                <ol className="space-y-2.5">
                  {activeModalGuide.guide.keySteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-b-ink-soft">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-b-paper-raised font-price text-[11px] font-bold text-b-ink border border-b-line">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* What Bouul Watches Section */}
              <div className="mb-5 rounded-2xl bg-b-sun-soft/30 border border-b-sun/40 p-3.5 sm:p-4">
                <h4 className="font-display text-xs font-bold text-b-ink uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-b-sun" />
                  What Bouul Watches Automatically
                </h4>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  {activeModalGuide.guide.whatBouulWatches}
                </p>
              </div>

              {/* Interactive Feedback Rating with Celebratory Burst */}
              <div className="mb-5 rounded-2xl bg-b-paper-raised border border-b-line p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-medium text-b-ink-soft">
                  Was this guide helpful?
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setHelpfulFeedback((prev) => ({
                        ...prev,
                        [activeModalGuide.guide.id]: true,
                      }));
                      triggerToast("🎉 Awesome! Thank you for your feedback.");
                    }}
                    className={`flex-1 sm:flex-initial rounded-full px-4 py-2 sm:py-1 text-xs font-semibold transition-colors duration-200 cursor-pointer min-h-[44px] sm:min-h-[32px] flex items-center justify-center ${
                      helpfulFeedback[activeModalGuide.guide.id] === true
                        ? "bg-b-green-deep text-b-paper"
                        : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
                    }`}
                  >
                    {helpfulFeedback[activeModalGuide.guide.id] === true ? "✓ Yes, helpful" : "Yes"}
                  </button>
                  <button
                    onClick={() => {
                      setHelpfulFeedback((prev) => ({
                        ...prev,
                        [activeModalGuide.guide.id]: false,
                      }));
                      triggerToast("Feedback received. We'll refine this guide!");
                    }}
                    className={`flex-1 sm:flex-initial rounded-full px-4 py-2 sm:py-1 text-xs font-semibold transition-colors duration-200 cursor-pointer min-h-[44px] sm:min-h-[32px] flex items-center justify-center ${
                      helpfulFeedback[activeModalGuide.guide.id] === false
                        ? "bg-b-ink text-b-paper"
                        : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink"
                    }`}
                  >
                    {helpfulFeedback[activeModalGuide.guide.id] === false ? "Feedback sent" : "No"}
                  </button>
                </div>
              </div>

              {/* Open Full Page CTA */}
              <div className="mb-5">
                <a
                  href={`/tutorials/${activeModalGuide.guide.slug.replace(/\.md$/, "")}`}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-b-ink text-b-paper px-5 py-3 text-xs font-bold hover:bg-b-forest transition-colors shadow-sm"
                >
                  <span>Open Full Editorial Page with Sidebar Navigation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Next Steps */}
              <div className="pt-4 border-t border-b-line">
                <h4 className="font-price text-[11px] font-semibold uppercase tracking-wider text-b-ink-faint mb-2">
                  Next Steps & Related Guides
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalGuide.guide.nextSteps.map((ns, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const match = TUTORIAL_CATEGORIES.flatMap((c) => c.items).find(
                          (item) => item.slug === ns.slug
                        );
                        if (match) {
                          const cat = TUTORIAL_CATEGORIES.find((c) =>
                            c.items.some((i) => i.id === match.id)
                          );
                          handleOpenGuide(match, cat ? cat.title : "Guide");
                        }
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-b-paper-raised px-3.5 py-2 sm:py-1.5 text-xs font-medium text-b-ink hover:bg-b-ink hover:text-b-paper transition-all duration-200 border border-b-line cursor-pointer min-h-[44px] sm:min-h-[32px]"
                    >
                      <span>{ns.title}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
