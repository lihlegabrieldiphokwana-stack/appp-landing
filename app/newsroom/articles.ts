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
  imageNote: string;
  heroNote: string;
  sections: NewsroomSection[];
}

export const newsroomArticles: NewsroomArticle[] = [
  {
    slug: "bouul-expands-the-local-services-graph",
    title: "Bouul expands the local services graph",
    tag: "Product",
    date: "April 2026",
    readTime: "4 min read",
    summary:
      "A product story about making local discovery more intelligent, more contextual, and more useful for both customers and vendors.",
    imageNote:
      "Use a hero image showing a customer discovering local services on a phone in a real city setting.",
    heroNote:
      "Suggested hero image: a phone in hand with a local results feed visible, plus a subtle city background.",
    sections: [
      {
        heading: "Discovery that feels local",
        body:
          "Bouul was built to move beyond generic directories and chat-based referrals. The goal is to make discovery feel immediate, city-aware, and trustworthy. A customer should be able to find a matching service quickly, then move directly into booking without losing context.",
      },
      {
        heading: "Signals that improve relevance",
        body:
          "Search terms, location, reviews, and activity signals all feed the discovery engine. That lets the platform surface professionals who are actually likely to matter to the user rather than just those with the loudest profile.",
      },
      {
        heading: "Why it matters",
        body:
          "For customers, this reduces friction. For professionals, it improves the odds that the right customer sees their profile at the right time. The outcome is a stronger local marketplace instead of a static listing site.",
      },
    ],
  },
  {
    slug: "trust-and-safety-are-part-of-the-product",
    title: "Trust and safety are part of the product",
    tag: "Safety",
    date: "April 2026",
    readTime: "4 min read",
    summary:
      "An explainer about verification, booking protection, and why reviews only matter when real bookings happened.",
    imageNote:
      "Use a trust-focused visual, such as a verified badge, booking timeline, or support flow illustration.",
    heroNote:
      "Suggested hero image: a clean safety graphic with verification, payment protection, and dispute resolution cues.",
    sections: [
      {
        heading: "Verified people, verified feedback",
        body:
          "A marketplace becomes more useful when reviews are tied to real bookings and identities are checked before profiles go live. Bouul leans into that model so customers have more confidence before they commit.",
      },
      {
        heading: "Protection when plans change",
        body:
          "Bookings are not always perfect. The platform summary already includes booking protection, refund paths, and a dispute flow so customers do not have to figure out every edge case alone.",
      },
      {
        heading: "What good safety looks like",
        body:
          "Safety is not only about reacting to problems. It also includes better upfront information, clearer pricing, and better profile quality so fewer bad bookings happen in the first place.",
      },
    ],
  },
  {
    slug: "how-vendors-grow-on-bouul",
    title: "How vendors grow on Bouul",
    tag: "Vendor",
    date: "April 2026",
    readTime: "5 min read",
    summary:
      "A vendor story covering Resonance testing, analytics, pricing controls, and the dashboard tools that help a business scale.",
    imageNote:
      "Use a vendor dashboard screenshot or creator-style profile mockup with analytics visible.",
    heroNote:
      "Suggested hero image: a professional reviewing analytics on desktop while a phone preview shows the public profile.",
    sections: [
      {
        heading: "A storefront, not just a listing",
        body:
          "Vendors need more than a name, a phone number, and a category tag. Bouul pushes toward a proper storefront with reviews, verification, service detail, and a richer profile story.",
      },
      {
        heading: "Testing what converts",
        body:
          "Resonance and multi-title, multi-image testing help the platform learn which creative combinations work. That gives professionals a real way to improve conversion without guessing.",
      },
      {
        heading: "Running the business",
        body:
          "The vendor stack is about operations as much as marketing. Pricing control, analytics, payout visibility, and response tooling all help turn the platform into a practical business system.",
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
