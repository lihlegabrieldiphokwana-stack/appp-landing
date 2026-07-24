# Bouul — Feature Content Brief

> Customer-facing descriptions of every live Bouul system. Use this as your copy reference when building website pages (about, features, trust/safety, how-it-works, press).

---

## Zola AI Assistant

**One-liner:** *Your personal booking assistant that handles everything from discovery to check-out.*

**Short:** Zola is Bouul's AI assistant. It helps you find the right service, answers questions about vendors and pricing, schedules appointments, and handles booking — all in a single conversation. No forms, no back-and-forth calls.

**Medium:** Tell Zola what you need — "I want a haircut on Saturday, somewhere in Sandton" — and it searches available vendors, checks real-time availability, answers follow-up questions, and books the appointment. Zola handles scheduling changes, suggests alternatives when your preferred time isn't available, and remembers your preferences across sessions. It's like having a concierge who knows every service in your area.

**Long:** Zola is a conversational AI that runs the entire service journey. It starts with discovery — ask for a service, and Zola searches Bouul's catalogue of 49+ service categories using hybrid search (semantic understanding + keyword matching + location proximity). It can compare vendors, explain what's included in a service package, check real-time pricing (adjusted for market conditions via the dynamic pricing engine), and present side-by-side comparisons. Once you've chosen, Zola handles scheduling by checking the vendor's real availability, sending proposals for your approval, and confirming the booking. After service, Zola can follow up for reviews, handle rescheduling or cancellations, and even manage disputes if something goes wrong. For vendors, Zola also handles business mode — performance scorecards, staffing suggestions, and automated shift rostering.

**Trust signals:** Zola explains its reasoning, sources its claims from real vendor data, and only acts when you approve. It never books without confirmation.

---

## Trust & KYC Pipeline

**One-liner:** *Every vendor is verified so you book with confidence.*

**Short:** Every professional on Bouul goes through identity verification before they can accept bookings. We verify their ID, business registration where applicable, and contact details. What you see is who you're getting.

**Medium:** Before a vendor can list services on Bouul, they complete a verification process. This includes identity document verification, business registration checks (for registered entities), and contact validation. Each vendor profile displays its verification status — you can see at a glance whether a professional is ID-verified, business-verified, or both. This isn't a one-time check; verification is monitored and can be re-triggered if profile details change significantly.

**Long (How it works):**
1. Vendor signs up and provides identity documentation
2. Our verification pipeline checks documents for authenticity
3. Business registration is cross-referenced where applicable
4. Contact details (phone, email) are validated
5. Profile displays a verification badge with the level achieved
6. Ongoing monitoring flags unusual changes for re-verification

**Trust signals:** Verified badge on profiles, clear verification levels, ID-verified and business-verified distinctions shown.

---

## Service Discovery & Search

**One-liner:** *Find any service, anywhere, instantly.*

**Short:** Bouul's search engine understands what you mean, not just what you type. Search "hair" and you'll find haircuts, braiding, colouring, and styling — plus vendors near you that offer them. Seven result tabs help you browse services, vendors, reviews, and more.

**Medium:** Bouul uses hybrid search — combining semantic understanding (it knows "nails" should find "manicure" and "gel art") with keyword matching and location proximity. Results are sorted by relevance, rating, distance, or price. Seven dedicated result tabs (All, Services, Vendors, Posts, Glimpses, Reviews, Users) let you narrow your search. Advanced cascading filters drill down by category, price range, rating, distance, and verified-only. Search suggestions and "Did you mean?" corrections handle typos and misspellings.

**Features:**
- Hybrid semantic + keyword + location search
- 7 result tabs for targeted browsing
- Cascading filters (category → subcategory → price → rating → distance)
- Trending hashtags
- Spell correction & suggestions

---

## Smart Homepage & Discovery Rows

**One-liner:** *Your feed, built around you.*

**Short:** Your Bouul homepage is personalised. It shows services and vendors we think you'll love based on what you've searched for, booked, and shown interest in — not just a generic list.

**Medium:** The homepage is composed of smart rows — each one a different way to discover. There are rows for services near you, popular bundles, trending content posts, social recommendations, and semantically similar services (e.g. "If you liked Root Touch Up, you might like Full Highlights"). A hybrid ranking engine scores every candidate using hundreds of signals and selects the best ones for you. When you're new, the system uses location and popular trends as a cold-start prior until it learns your preferences.

**Row types on your homepage:**
- Services near you
- Popular bundles & packages
- Trending posts & glimpses
- Social recommendations
- Semantically similar services
- Sponsored / promoted services

---

## Booking & Scheduling

**One-liner:** *Book in seconds, change with ease.*

**Short:** Book any service directly through Bouul — pick a time, confirm, done. Need to change? Reschedule or cancel from your bookings page. No phone calls, no waiting.

**Medium:** Bouul handles the full booking lifecycle. You browse a vendor's services and real-time availability, select your preferred time, and confirm — the booking is created instantly. Bundle bookings let you schedule multiple services together, each at its own time. The scheduling engine handles conflict detection, suggests alternatives when slots are taken, and supports recurring appointments. After booking, you can reschedule, cancel, or message the vendor through the in-app chat. Payments are captured at booking (pipeline in progress for full payment processor integration including Stripe and PayFast).

**What you can do:**
- Browse real-time availability per vendor
- Book single services or multi-service bundles
- Each bundle item can have its own scheduled time
- Reschedule or cancel from your profile
- Chat with the vendor about your booking
- Automated booking reminders

---

## Reputation & Reviews

**One-liner:** *See exactly what you're getting into.*

**Short:** Real reviews from real customers, with verified booking badges so you know the feedback is genuine. Rate vendors and be rated as a customer — trust is a two-way street.

**Medium:** Every review on Bouul is tied to a completed booking, which means it's genuine — no fake reviews. The reputation system tracks both sides: vendors get rated on quality, punctuality, and professionalism; customers build reliability ratings that help vendors know who they're working with. A unified trust standing consolidates rating history, booking completion rate, dispute history, and verification status into a single score. Low-rated or high-dispute profiles are flagged to protect both sides. Disputes go through a structured resolution pipeline with evidence submission and moderated outcomes.

**Review highlights:**
- Verified booking badges on every review
- Two-way ratings (vendors & customers)
- Unified trust score visible on profiles
- Structured dispute resolution
- Recovery paths for improving a poor rating

---

## Dynamic Pricing

**One-liner:** *Fair prices that reflect reality.*

**Short:** Service prices on Bouul are regularly adjusted to reflect real market conditions — inflation, demand, and local economics — so vendors are fairly compensated and you get realistic pricing.

**Medium:** Bouul's pricing engine updates service prices using a blend of CPI (consumer price index) and PPI (producer price index) data, weighted 70/30 with a 2021 baseline. Prices adjust automatically as economic conditions change, keeping vendor margins healthy without arbitrary fluctuations. A demand model (37 features, Poisson regression, R² 0.66) helps predict optimal price points based on historical booking patterns, seasonality, and local market dynamics.

---

## Ad Engine (Sponsored Listings)

**One-liner:** *Promoted services that still fit your feed.*

**Short:** Vendors can promote their services to appear in relevant search results and homepage rows. These are clearly marked as sponsored, and they're matched to your interests — not random ads.

**Medium:** Bouul's advertising platform lets vendors create and manage campaigns with specific budgets, target audiences, and creative assets. Ads appear as sponsored slots in search results and homepage discovery rows, always labelled clearly. Delivery uses Thompson sampling for optimal placement, and performance scoring helps vendors understand what works. Attribution tracking connects ad views to bookings so vendors know their return on spend.

---

## Vendor Dashboard

**One-liner:** *Everything you need to run your service business.*

**Short:** The vendor dashboard gives you a command centre for your Bouul store — manage services, view bookings, track earnings, respond to reviews, and run ads.

**Medium:** The dashboard is the vendor's home on Bouul. It shows an earnings overview, upcoming and past bookings, service listings management (edit pricing, descriptions, images), review responses, and advertising campaign controls. Employee management tools let you add staff, set their availability, and assign them to bookings. The dashboard works on mobile and desktop.

---

## Employee Management & Rostering

**One-liner:** *Run a team, not just a shop.*

**Short:** If you employ staff, Bouul helps you manage them — set schedules, track performance, and handle shift changes without spreadsheets.

**Medium:** Vendors with employees can manage their team entirely through Bouul. Set weekly availability templates, view staff schedules, assign employees to specific bookings, and handle shift swaps or time-off requests. An employee performance scorecard tracks key metrics — bookings completed, punctuality, customer ratings, revenue generated — viewable both by the vendor and the employee. Automated scheduling tools suggest optimal shift allocations based on booking demand and employee availability. Fatigue detection alerts vendors if an employee is over-scheduled.

---

## Notifications & Alerts

**One-liner:** *Never miss a booking, message, or update.*

**Short:** Bouul notifies you about what matters — booking confirmations, messages, schedule changes, and promotions — through in-app notifications and push alerts.

**Medium:** Notifications are categorised and actionable. Booking notifications let you confirm, reschedule, or cancel from the notification itself. Message notifications surface recent chat previews. Vendor promotions appear when relevant. A notification centre keeps your history, and you can set preferences for what you receive and how.

---

## WhatsApp Integration

**One-liner:** *Use Bouul without the app.*

**Short:** Book services, chat with vendors, and get updates — all through WhatsApp. No app download needed for basic interactions.

**Medium:** Bouul's WhatsApp channel lets customers search for vendors, receive quotes, make bookings, and get updates through WhatsApp. This is especially important in South Africa where WhatsApp is the dominant messaging platform. The integration bridges Bouul's booking engine with WhatsApp's messaging infrastructure, so customers can interact the way they're most comfortable.

---

## Content & Community

**One-liner:** *See services in action before you book.*

**Short:** Browse posts, glimpses, and reviews from real people using services on Bouul. See the work, read the experience, then book with confidence.

**Medium:** Bouul has a social layer — text posts, photo/video glimpses, and hashtags let customers share their service experiences and vendors showcase their work. Content appears on vendor profiles, in search results, and in dedicated feeds. Trending hashtags help you discover popular services and local trends. Each content item is linked back to the service and vendor it's about, so you can go from "that looks great" to booking it in one tap.

---

## Equipment & Visual Asset Library

**One-liner:** *See the tools behind the trade.*

**Short:** Browse service icons, equipment icons, and scene photography that brings Bouul's service catalogue to life.

**Medium:** Bouul has generated a comprehensive visual library — 533 equipment icons across service categories (salon, automotive, medical, pet care, home services, etc.) and photorealistic service scene images for all 49 service categories. These assets power the search interfaces, vendor profiles, and service cards, making it easy to identify services and their associated tools at a glance.

---

## Accessibility & Localisation

**One-liner:** *Bouul in your language, built for everyone.*

**Short:** Bouul is available in 10 South African languages with high-contrast and reduced-motion options. Every part of the app is designed to be usable by everyone.

**Medium:** The full consumer app is localised into English, Afrikaans, isiZulu, isiXhosa, Sesotho, Setswana, Sepedi, Xitsonga, siSwati, and Tshivenda. Accessibility options include reduced motion and high contrast modes that are persisted per user. The interface follows Material Design accessibility guidelines with proper contrast ratios, touch targets, and screen reader support.

---

## AI-Generated Scene Images

**One-liner:** *Every service has a picture worth a thousand words.*

**Short:** Every service category on Bouul has a high-quality, AI-generated scene image that shows the service in action — so you always know what you're looking at.

**Medium:** All 49 service categories have been outfitted with photorealistic scene images generated via FLUX.2 Klein on a dedicated RTX 5090 ComfyUI pipeline. These images show each service in a realistic South African context — salon interiors, home cleaning scenes, automotive workshops, medical rooms — helping customers immediately recognise the service type as they browse.

---

## Payment Processing *(Coming Soon)*

**One-liner:** *Pay in-app, get receipts, earn credit.*

**Short:** In-app payment processing is in development with Stripe, PayFast, and Yoco integration. Pay for services directly through Bouul with automatic receipts and wallet credit for future bookings.

**Planned:** Full payment capture at booking, automatic refunds for cancellations, wallet credit system, and a unified transaction history across all your bookings.

---

## Data Privacy & Security

**One-liner:** *Your data stays yours.*

**Short:** Bouul encrypts your data in transit and at rest. We use Supabase's enterprise-grade infrastructure with row-level security — you can only see what you're supposed to see.

**Medium:** All data is encrypted in transit (TLS) and at rest. Database access is governed by Supabase Row-Level Security — every query is filtered to what the authenticated user is allowed to see. Edge functions run in isolated Deno runtimes with service-role access only for backend operations. Vendor phone numbers and addresses are never exposed to customers until a booking is confirmed. The KYC pipeline ensures vendor identities are verified, and personal data handling follows South Africa's POPIA framework.
