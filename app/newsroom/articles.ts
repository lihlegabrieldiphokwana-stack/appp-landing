export interface NewsroomSection {
  heading: string;
  body: string;
}

export interface NewsroomArticle {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  summary: string;
  pullQuote: string;
  visualTitle: string;
  visualCaption: string;
  quickFacts: string[];
  sections: NewsroomSection[];
}

export const newsroomArticles: NewsroomArticle[] = [
  {
    slug: "how-bouul-works-for-customers",
    title: "How Bouul works for customers",
    tag: "Product",
    date: "April 2026",
    readTime: "6 min read",
    summary:
      "A practical guide to finding, comparing, booking, and tracking services without losing context along the way.",
    pullQuote:
      "The best service marketplace is the one that keeps the customer moving from intent to completion without losing trust.",
    visualTitle: "Customer journey",
    visualCaption:
      "Search, compare, book, track, and review from one continuous product flow.",
    quickFacts: ["Plain-language search", "Verified professionals", "Booking status in one place"],
    sections: [
      {
        heading: "Search starts with plain language",
        body:
          "Customers should not need to know category codes, service jargon, or how a vendor organises their listings. Bouul is built around plain-language search and a local feed of professionals that feels closer to asking a trusted friend than browsing a directory. The goal is to reduce the time between need and action.",
      },
      {
        heading: "Discovery becomes comparison",
        body:
          "Once a customer begins exploring, the platform surfaces nearby professionals, relevant categories, ratings, recent activity, and availability in one place. That gives the user enough context to compare options without opening six tabs or leaving the booking flow.",
      },
      {
        heading: "Booking stays in the same flow",
        body:
          "The important part is what happens after discovery. Bouul keeps chat, booking confirmation, tracking, reminders, and payment in the same experience so the customer never feels like they have to restart the process after choosing a professional.",
      },
      {
        heading: "Why this matters",
        body:
          "A marketplace is only useful if it shortens the journey from question to result. By keeping search, trust, booking, and follow-up together, Bouul reduces friction for the customer and creates a more confident decision moment.",
      },
    ],
  },
  {
    slug: "how-bouul-works-for-vendors",
    title: "How Bouul works for vendors",
    tag: "Safety",
    date: "April 2026",
    readTime: "7 min read",
    summary:
      "A vendor walkthrough covering the dashboard, requests, staff mode, subscriptions, payouts, and conversion tools.",
    pullQuote:
      "Bouul treats professionals like operators of real businesses, not just listings in a directory.",
    visualTitle: "Vendor operating view",
    visualCaption:
      "Requests, staff assignments, analytics, recurring bookings, and payout state in one dashboard.",
    quickFacts: ["Business dashboard", "Staff and assignment flows", "Conversion tools"],
    sections: [
      {
        heading: "One business, one control centre",
        body:
          "Vendors need more than a public profile. Bouul is positioned as the working surface for a service business, bringing bookings, earnings, reviews, staff assignments, and availability into one place so the business can be managed from a single dashboard.",
      },
      {
        heading: "Team and employee mode",
        body:
          "Many service businesses do not operate as a one-person company. Bouul needs to show how employee mode works, how jobs are assigned, and how teams can see what they are responsible for without breaking the flow for the customer.",
      },
      {
        heading: "Recurring work and subscriptions",
        body:
          "The platform should also explain recurring work clearly. Subscriptions make sense for services like cleaning, grooming, maintenance, tutoring, and other repeat bookings where customers want reliability rather than starting from zero each time.",
      },
      {
        heading: "Why conversion tools matter",
        body:
          "The dashboard is not just administration. It is also about conversion. Bouul can help vendors present better product photos, rewrite section titles to match user intent, and translate menu labels into native language so more visitors become bookings.",
      },
    ],
  },
  {
    slug: "how-payouts-and-invoices-work",
    title: "How payouts and invoices work",
    tag: "Vendor",
    date: "April 2026",
    readTime: "6 min read",
    summary:
      "A clear explanation of the payout portal, auto-generated invoices, business details, and how vendors keep the money flow organised.",
    pullQuote:
      "Payouts and invoices should make the business feel more organized the moment a job is completed.",
    visualTitle: "Money flow",
    visualCaption:
      "A clearer view of pending balances, settlement timing, invoice details, and business branding.",
    quickFacts: ["Payout visibility", "Branded invoices", "Editable business details"],
    sections: [
      {
        heading: "The payout portal should feel obvious",
        body:
          "A vendor should always know what is pending, what is paid, and what is still being processed. The payout portal should show current balance, recent settlements, payout timing, and any outstanding issues in a way that feels easy to scan at a glance.",
      },
      {
        heading: "Invoices can be created automatically",
        body:
          "The invoice flow should be described as automatic, but still editable. The platform can create a branded invoice from the selected industry, service details, and customer information so the vendor does not need to build each document manually.",
      },
      {
        heading: "Business details make it real",
        body:
          "To make the invoice preview credible, the vendor should be able to add a logo, email address, and physical address. That makes the generated invoice feel like a real operating document rather than a generic receipt.",
      },
      {
        heading: "Why this saves time",
        body:
          "When invoicing, branding, and payout visibility live in one system, vendors spend less time switching tools and more time completing jobs. That is especially useful for small businesses that still need a professional-looking back office.",
      },
    ],
  },
  {
    slug: "trust-and-verification-are-part-of-the-product",
    title: "Trust and verification are part of the product",
    tag: "Safety",
    date: "April 2026",
    readTime: "5 min read",
    summary:
      "Why verified identity, booking-tied reviews, and visible protection are central to the Bouul experience.",
    pullQuote:
      "Trust is not a badge at the edge of the product. It is part of how discovery, booking, and support work.",
    visualTitle: "Trust layer",
    visualCaption:
      "Verification, booking-tied reviews, protection flows, and support context shown before commitment.",
    quickFacts: ["Identity checks", "Booking-tied reviews", "Support escalation"],
    sections: [
      {
        heading: "Identity before visibility",
        body:
          "Bouul should not treat trust as a decorative badge. A professional becomes visible after identity checks and review gating so the customer sees a more reliable profile from the start.",
      },
      {
        heading: "Reviews should mean something",
        body:
          "A review only matters if it came from an actual booking. That is why the public trust story needs to explain that feedback is tied to real work rather than casual browsing or synthetic ratings.",
      },
      {
        heading: "Protection is part of the promise",
        body:
          "When something goes wrong, the user should know what happens next. A booking protection layer, payout timing, and dispute handling make the product feel safer and more operationally mature.",
      },
      {
        heading: "Trust changes conversion",
        body:
          "The simple truth is that trust improves booking conversion. When customers see a verified professional, recent work, transparent reviews, and a clear support path, they are more likely to complete the booking.",
      },
    ],
  },
  {
    slug: "magic-remover-for-product-catalogs",
    title: "Magic Remover for product catalogs",
    tag: "AI",
    date: "April 2026",
    readTime: "5 min read",
    summary:
      "How one-pass background cleanup helps businesses present better product photos without expensive shoots or repeated editing.",
    pullQuote:
      "Better product images are not cosmetic. They can change whether a visitor understands and trusts a service.",
    visualTitle: "Photo cleanup",
    visualCaption:
      "A before-and-after product flow that turns everyday service photos into cleaner catalogue assets.",
    quickFacts: ["One-pass cleanup", "Catalogue-ready images", "Lower editing overhead"],
    sections: [
      {
        heading: "Product photos are expensive to produce",
        body:
          "If a business has dozens of products or services to photograph, the cost is not just the shoot itself. It also includes the photographer, editor, retouching time, and the rounds of revisions that usually follow. For many small businesses, that adds up quickly.",
      },
      {
        heading: "Magic Remover reduces the heavy lifting",
        body:
          "The feature should be explained as a quick cleanup tool that removes distractions from a service photo in a single pass. Instead of waiting for a full editing workflow, the business can turn a usable image into a polished asset almost immediately.",
      },
      {
        heading: "Why the before and after matters",
        body:
          "A dramatic before-and-after comparison makes the value obvious. The first image shows the real-world photo with clutter or props, while the second shows the final presentation-ready version. That visual gap is what sells the feature.",
      },
      {
        heading: "It scales across a catalogue",
        body:
          "This is especially relevant when a business has 50 or more products or services to present. The pitch is not just that one image gets better. It is that the whole catalogue can be improved faster and at lower cost.",
      },
    ],
  },
  {
    slug: "social-discovery-and-resonance",
    title: "Social discovery and the Resonance engine",
    tag: "Social",
    date: "April 2026",
    readTime: "6 min read",
    summary:
      "Why Bouul feels social, how the feed works, and how Resonance helps the platform show more relevant content.",
    pullQuote:
      "The social layer exists to make real work easier to judge before a customer decides to book.",
    visualTitle: "Discovery feed",
    visualCaption:
      "Follows, videos, activity signals, and personalization make service discovery feel more alive.",
    quickFacts: ["Follow favourites", "Video-led discovery", "Resonance ranking"],
    sections: [
      {
        heading: "This is discovery with personality",
        body:
          "Bouul is not trying to become a generic social network. The social layer exists to make services easier to understand by showing real work, real style, and real activity before the booking happens.",
      },
      {
        heading: "Follow favourites and repeat what works",
        body:
          "The follow model matters because people often want the same professionals again. A customer should be able to follow the vendors they trust, see new videos, and get alerted when the right person is available.",
      },
      {
        heading: "Resonance should feel like relevance",
        body:
          "Resonance can be described as a personalization and creative-testing system. It learns which titles, visuals, and service signals are resonating with a user and then surfaces the combinations that are more likely to convert.",
      },
      {
        heading: "Why social helps the marketplace",
        body:
          "A marketplace becomes more persuasive when users can see the work before they commit. Video, follows, and activity cues help the customer build confidence sooner and make the business feel more alive.",
      },
    ],
  },
  {
    slug: "subscriptions-for-recurring-services",
    title: "Subscriptions for recurring services",
    tag: "Business",
    date: "April 2026",
    readTime: "4 min read",
    summary:
      "How recurring bookings work for cleaning, grooming, maintenance, and other repeat services.",
    pullQuote:
      "Recurring services work best when customers can set a rhythm once and vendors can plan around it.",
    visualTitle: "Recurring work",
    visualCaption:
      "Weekly, bi-weekly, and monthly service rhythms with schedule, discount, and reminder states.",
    quickFacts: ["Repeat booking rhythms", "Predictable vendor demand", "Less rebooking friction"],
    sections: [
      {
        heading: "Some services are meant to repeat",
        body:
          "Cleaning, grooming, maintenance, tutoring, and other repeat services do not need a fresh booking every single time. Subscriptions turn those patterns into something more predictable for both sides.",
      },
      {
        heading: "Predictable work helps vendors plan",
        body:
          "A vendor with recurring work has better visibility into schedule, income, and staffing. That makes subscriptions useful not just for convenience, but for business planning as well.",
      },
      {
        heading: "Customers want less friction",
        body:
          "For the customer, recurring booking should feel like a simple promise: keep the same professional, keep the same rhythm, and reduce the amount of rebooking effort required every month.",
      },
    ],
  },
  {
    slug: "localization-that-improves-conversion",
    title: "Localization that improves conversion",
    tag: "Growth",
    date: "April 2026",
    readTime: "5 min read",
    summary:
      "Why tailored section titles, translated menus, and native-language experiences can materially improve conversions.",
    pullQuote:
      "Localization works when it makes the next action feel obvious in the customer’s own context.",
    visualTitle: "Localized experience",
    visualCaption:
      "Translated menus, clearer section titles, and region-aware language help users move faster.",
    quickFacts: ["Native-language menus", "Tailored headings", "Conversion-focused copy"],
    sections: [
      {
        heading: "Words shape confidence",
        body:
          "The same interface can feel very different depending on the wording. Bouul should explain that tailored section titles help users understand what they are looking at faster, especially when the platform adjusts language to match the customer’s context.",
      },
      {
        heading: "Menus should speak the user’s language",
        body:
          "Translating menus into native language is not just a convenience layer. It reduces confusion, lowers friction, and can improve the chance that a visitor moves from browsing to booking.",
      },
      {
        heading: "Conversion is a design problem",
        body:
          "If people have to translate the interface in their head, the product loses momentum. A localized experience makes the service feel more accessible and makes the path to action easier to complete.",
      },
      {
        heading: "The point is relevance",
        body:
          "This feature story should frame localization as a conversion tool, not just a language setting. The goal is to make the experience feel native, understandable, and more trustworthy to the person using it.",
      },
    ],
  },
];

export const newsroomPressAssets = [
  {
    label: "Bouul logo",
    href: "/bouul-logo.png",
    note: "Brand mark for press mentions and app download cards.",
  },
  {
    label: "Hero banner desktop",
    href: "/optimized/hero-banner-desktop.jpg",
    note: "Desktop marketing image for feature stories or landing pages.",
  },
  {
    label: "Hero banner mobile",
    href: "/optimized/hero-banner-mobile.jpg",
    note: "Vertical mobile marketing image for social or editorial use.",
  },
  {
    label: "App preview",
    href: "/Group%201686.png",
    note: "General app screen preview for press kits and product explainers.",
  },
];

export const newsroomUpdates = [
  { title: "Launch status", detail: "Core site, vendor story, and public info pages are live." },
  { title: "App progress", detail: "Download links are being finalized for mobile stores." },
  { title: "Content coverage", detail: "New pages explain the product, the policies, and the use cases." },
];

export const getNewsroomArticle = (slug: string) =>
  newsroomArticles.find((article) => article.slug === slug);
