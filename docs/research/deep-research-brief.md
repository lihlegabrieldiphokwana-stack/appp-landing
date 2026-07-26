# Bouul — Service Category Consumer Psychology Research Brief

## Mission

Deep-research every service category on Bouul and return a psychographic + behavioural profile for the South African consumer who needs that service. The end goal is marketing copy that resonates at the moment of need — when someone realises they have a problem and reaches for their phone.

**Output target:** A worker LLM will use these profiles to write use-case landing pages (like the plumbers/electricians template at `components/redesign/service-use-case.tsx`). Every section of that template is driven by this research.

---

## What to deliver per category

Return a structured JSON object per category. Each field feeds a specific section of the marketing page.

### Category list (16 total)

1. `homeServices` — (plumbing, electrical, carpentry, painting, roofing, locksmith, pest control, HVAC, garage door, tiling, waterproofing, tree felling, landscaping, lawn mowing, house cleaning, security systems)
2. `personalCare` — (hair styling, barbering, nails, eyelash extensions, makeup, skincare/facials, threading, waxing)
3. `automotive` — (general auto repair, mobile mechanic, battery replacement, tyre service, panel beating, car wash/detailing, towing, roadside assistance)
4. `healthcare` — (physiotherapy, chiropractic, dental check-up, eye exam, mental health counselling, speech therapy, home nursing, telemedicine)
5. `education` — (academic tutoring)
6. `fitnessWellness` — (personal training, yoga, pilates, massage therapy, nutrition consultation, life coaching, meditation/breathwork)
7. `creative` — (photography, videography, graphic design, web development, content writing, social media management, voiceover, interior design consultation)
8. `petServices` — (dog walking, doggy daycare, pet grooming, veterinary home consult)
9. `childcare` — (childcare services, nanny/au pair)
10. `seniorCare` — (senior care services)
11. `hospitality` — (event venue rental, bartending, wait staff, short-term accommodation)
12. `retail` — (mystery shopping, personal shopper, product demonstration, gift wrapping)
13. `homeServices` sub-pages: **plumbers**, **electricians**, **painters**, **cleaners**, **carpenters**, **gardeners**, **pest control**, **locksmiths**, **roofers**, **tilers**, **tree fellers**, **waterproofers**, **HVAC techs**, **garage door techs**, **landscapers**, **lawn mowers**, **security installers**

### Per-category fields

```typescript
{
  /* ── Identity & hook ── */

  /** The single emotional headline. What's the feeling? 
      e.g. "A burst pipe doesn't wait for Monday." */
  hookHeadline: string;

  /** The one-sentence hook that re-frames the problem through Bouul's lens.
      e.g. "Leaks, blockages, installations — fixed by verified pros, booked in seconds." */
  tagline: string;

  /** 60-100 word narrative that drops the reader into the moment of need.
      Describe the scene, the anxiety, the friction — then pivot to the relief.
      Sets up why the old way sucks and why Bouul is different. */
  sceneBody: string;


  /* ── Pain points (The old way) ── */

  /** Exactly 3 pain-point/solution pairs. Each is a relatable "before Bouul" 
      frustration that the reader immediately recognises.
      
      Guidelines:
      - Make the pain visceral, not abstract ("You Google plumbers and get a list
        of strangers" not "It's hard to find plumbers")
      - The solution should feel like a relief, not a feature list
      - Root each pain in a real behaviour (phoning around, waiting, guessing prices)
  */
  pains: Array<{
    pain: string;     // 10-20 words, the frustration
    solution: string; // 15-30 words, how Bouul fixes it
  }>;


  /* ── Emotional drivers ── */

  /** What emotional state is the customer in when they search for this service?
      e.g. urgent/anxious (plumbing), aspirational (beauty), conscientious (elderly care),
      frustrated (auto repair), overwhelmed (cleaning). 
      Pick the primary emotion. */
  primaryEmotion: string;

  /** Deeper psychological need underneath the surface request.
      e.g. "I need a plumber" → "I need my home to feel safe again"
           "I need a haircut" → "I need to feel put-together and confident"
           "I need a tutor" → "I need my child to succeed and I'm worried I'm failing them" */
  deepNeed: string;

  /** What the customer is optimising for when choosing a pro in this category.
      Rank 1-3: price, speed, quality, trust, convenience, expertise, personality. */
  decisionPriorities: string[];


  /* ── The Bouul advantage (Why Bouul) ── */

  /** Exactly 3 value propositions tailored to this category. Each is a reason 
      Bouul beats Google/WhatsApp/word-of-mouth for this specific service.
      
      Structure each as { icon, title, body } where:
      - title is a benefit, not a feature ("Available when things break" not "24/7 booking")
      - body is 15-25 words of concrete proof
  */
  whyBouul: Array<{
    title: string;
    body: string;
  }>;


  /* ── Scope & audience ── */

  /** 8-12 typical jobs/services people search for in this category.
      These become the "What's covered" grid.
      Use real search terms, not industry jargon.
      e.g. "Drain blocked" not "Hydro-jetting service" */
  typicalJobs: string[];

  /** 4-6 audience segments who need this service.
      e.g. "Homeowners with emergency leaks", "Renters needing a quick fix before deposit inspection" */
  goodFor: string[];

  /** 4 trust points specific to this category. What does a sceptical customer 
      need to hear to feel safe booking?
      e.g. "ID-verified plumbers with completed job history" */
  trustPoints: string[];


  /* ── Objections & FAQ ── */

  /** 3-4 real objections a customer has before booking this type of service on an app.
      Each gets a reassuring answer. These become the FAQ section.
      
      Common objection patterns per category:
      - Quality: "Will they do a good job?"
      - Safety: "Is it safe letting a stranger into my home?"
      - Price: "Will I be overcharged?"
      - Reliability: "Will they show up?"
      - Expertise: "Are they actually qualified?" */
  faqs: Array<{
    q: string;
    a: string;
  }>;


  /* ── Funnel language ── */

  /** 5-7 high-intent search queries people type when they need this service.
      These inform SEO, PPC, and the hero section copy.
      e.g. "plumber near me", "emergency plumber Johannesburg", "burst pipe repair cost" */
  searchQueries: string[];

  /** The single CTA that converts best for this category. Action-oriented, 
      urgent where appropriate, benefit-focused.
      e.g. "Find a plumber near you", "Book a verified electrician", "Get a quote" */
  cta: string;

  /** One short sentence that overcomes the "I'll just ask my neighbour" default.
      e.g. "Your neighbour's plumber might be great — or they might not show up. 
      Bouul shows you who's available, rated, and verified right now." */
  alternativeKiller: string;
}
```

---

## Important context

### South African reality

Every profile must account for these South African-specific factors:

- **Load shedding** — affects every category. Plumbers/electricians need backup power. Beauty/hair salons lose lighting. Food services lose refrigeration. Use this as a trust signal: Bouul pros are prepared for loadshedding.
- **WhatsApp is king** — most service discovery starts in WhatsApp groups (neighbourhood, family, school). The "ask in the group chat" habit is the #1 competitor. Bouul needs to be faster and more reliable than a WhatsApp broadcast.
- **Cash economy** — many smaller service providers operate cash-only, informal. Bouul's escrow and digital payments are a trust-building feature but also a barrier for some vendors. Frame digital payment as protection, not friction.
- **Geography & safety** — letting a stranger into your home in SA has higher anxiety than in many markets. Verification, escrow, and live tracking aren't nice-to-haves — they're the core value prop.
- **Informal sector** — many skilled tradespeople (plumbers, mechanics, cleaners) operate informally without a website or Google Business profile. Bouul gives them a professional storefront. This is a differentiator for both customers (who find them) and vendors (who get discovered).
- **Language** — South Africans code-switch. Search behaviour mixes English, Afrikaans, isiZulu, Sesotho. Customers might search in English but feel safer booking with someone who speaks their home language.

### The competitive landscape

Bouul competes against these default behaviours (not other apps):

1. **"Let me ask in the neighbourhood WhatsApp group"** — the #1 habit. Slow, unreliable, no accountability.
2. **"I know a guy"** — word of mouth, tribal knowledge. Hard to verify, limited options.
3. **"Let me Google it"** — overwhelming, no trust signals, leads to phone tag.
4. **"There's an ad on Facebook"** — zero verification, no booking flow, high scam risk.
5. **"I'll just do it myself"** — YouTube DIY. Common in plumbing, electrical, auto repair. Often ends badly.

For each category, the research should identify which default behaviour dominates and how Bouul beats it.

### The Bouul differentiators (apply per category)

Not every differentiator matters equally for every category. Research should identify which 2-3 resonate most:

- **Escrow payments** — most important for high-value jobs (plumbing, electrical, roofing, auto repair)
- **ID verification** — most important for in-home services (cleaning, elderly care, childcare, locksmiths)
- **Real reviews from real bookings** — most important for personal services (hair, beauty, massage, fitness)
- **Live tracking** — most important for emergency services (plumbing, locksmith, roadside assistance)
- **Upfront pricing** — most important for services where price anxiety is high (auto repair, plumbing, electrical)
- **Zola AI assistant** — most important for first-time users, complex bookings, bundle bookings
- **Social following** — most important for recurring services (hair, beauty, fitness, pet grooming)
- **Messaging with photo sharing** — most important for visual services (plumbing, auto repair, beauty)

---

## Output format

Return one JSON block per category. Name the file `research/<category-slug>.json`.

Example for plumbers:

```json
{
  "slug": "plumbers",
  "category": "homeServices",
  "hookHeadline": "A burst pipe doesn't wait for Monday.",
  "tagline": "Leaks, blockages, installations — fixed by verified pros, booked in seconds.",
  "sceneBody": "It's 9pm on a Sunday and water is pooling under the sink. You need someone now — not a phone tag marathon, not a quote that evaporates. Bouul shows you plumbers near you who are available, rated by real customers, and verified. Book in two taps, pay when the leak is gone.",
  "pains": [
    {
      "pain": "You Google plumbers and get a list of strangers with no way to tell who's legit.",
      "solution": "Bouul shows you only verified, ID-checked plumbers near you, with real reviews from completed jobs. You see who's available right now."
    },
    {
      "pain": "Every plumber gives a different quote over the phone without seeing the problem.",
      "solution": "Prices are listed upfront — per job, per visit. No guessing, no 'surprise' fees. What you see is what you pay."
    },
    {
      "pain": "You book someone and they don't show up, or you're left waiting for hours.",
      "solution": "Booking is instant through the app, with reminders, live tracking, and chat. Your payment sits in escrow until the job is done right."
    }
  ],
  "primaryEmotion": "Urgent anxiety",
  "deepNeed": "I need my home to feel safe and under control again",
  "decisionPriorities": ["Speed", "Trust", "Price certainty"],
  "whyBouul": [
    {
      "title": "Available when things break",
      "body": "Plumbing emergencies don't keep office hours. Bouul shows you who's available now, not who will call you back tomorrow."
    },
    {
      "title": "Upfront pricing, no surprises",
      "body": "See the cost before you book. Payment goes into escrow and releases only when the job is complete and you're satisfied."
    },
    {
      "title": "Chat with photos",
      "body": "Snap a photo of the problem and send it in the chat. Your plumber arrives knowing exactly what to bring — fewer trips, faster fixes."
    }
  ],
  "typicalJobs": [
    "Burst pipe repair",
    "Blocked drain clearing",
    "Geyser installation & repair",
    "Leaking tap repair",
    "Toilet installation & repair",
    "Water pressure issues",
    "Pipe re-routing",
    "Leak detection"
  ],
  "goodFor": [
    "Homeowners with emergency leaks",
    "Renters needing quick fixes",
    "Property managers maintaining units",
    "Offices with plumbing issues",
    "New home installations"
  ],
  "trustPoints": [
    "ID-verified plumbers with completed job history",
    "Real reviews from real bookings — no fake feedback",
    "Escrow-protected payments: pay only when it's fixed",
    "Live tracking so you know when they'll arrive"
  ],
  "faqs": [
    {
      "q": "How fast can I get a plumber?",
      "a": "Bouul shows you available plumbers near you in real time. Many can be booked within the hour, depending on your location and the time of day."
    },
    {
      "q": "What if the plumber can't fix the problem?",
      "a": "Your payment is held in escrow until you confirm the job is done. If it's not resolved, don't release the funds — and our support team steps in to mediate."
    },
    {
      "q": "Are the plumbers qualified?",
      "a": "Every plumber on Bouul is ID-verified. Many carry trade certifications, and their profile shows completed job history and customer ratings."
    },
    {
      "q": "What if the job costs more than quoted?",
      "a": "The price you see is the price you pay for the quoted work. If the scope changes, your plumber will discuss it through the chat before any additional charges."
    }
  ],
  "searchQueries": [
    "plumber near me",
    "emergency plumber Johannesburg",
    "burst pipe repair cost",
    "local plumber",
    "best plumber in my area",
    "plumber Sunday",
    "blocked drain plumber"
  ],
  "cta": "Find a plumber near you",
  "alternativeKiller": "Your neighbour's plumber might be great — or they might not show up. Bouul shows you who's available, rated, and verified right now, with no phone tag."
}
```

---

## Research depth guide

Not all categories need the same depth. Prioritise by:

### Tier 1 — highest traffic, biggest trust barrier (research in full)
- homeServices (each sub-service: plumbers, electricians, painters, cleaners, carpenters, roofers, locksmiths, pest control, HVAC, landscapers, garage door, security, tiling, waterproofing, tree felling)
- automotive (especially auto repair, mobile mechanic, towing)
- personalCare (hair, nails, barbering, makeup)

### Tier 2 — moderate traffic, standard trust needs
- healthcare
- education
- fitnessWellness
- petServices
- childcare
- seniorCare

### Tier 3 — niche, lower volume but high value
- creative
- hospitality
- retail

For Tier 1 categories, provide the full JSON with category-specific psychological insight for every field. For Tier 2 and 3, a condensed version with the essential fields (hookHeadline, tagline, pains, whyBouul, typicalJobs, goodFor, faqs, cta) is sufficient.

---

## Sources to synthesise

Draw from these types of sources (don't fabricate — synthesise from real research):

1. **Google Trends SA** — search volume patterns, related queries, timing (spikes during rainy season for plumbers, December for beauty, January for tutors, etc.)
2. **Reddit SA** (r/southafrica, r/johannesburg, r/capetown, r/askSouthAfrica) — real conversations about service frustrations
3. **HelloPeter** — complaints about service booking, what goes wrong
4. **WhatsApp group dynamics** — how SA neighbourhood groups handle service recommendations
5. **Statista / McKinsey SA consumer reports** — spending patterns, trust in digital platforms
6. **Competitor review sites** — what users complain about on other platforms (SweepSouth, Mr D, Uber)
7. **SA news** — loadshedding impact, service industry trends, gig economy in SA

**Do not guess.** If you cannot find a reliable source for a specific insight, flag it as `"research_gap": true` in that field so we can fill it manually later.
