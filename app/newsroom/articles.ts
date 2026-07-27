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
    "slug": "how-bouul-works-for-customers",
    "title": "Burst Pipe Emergency Repair",
    "tag": "Emergency Plumbing",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "How to shut off your water, book a certified plumber in minutes, and get your home back to dry with Zola AI damage assessment.",
    "pullQuote": "\"A pipe bursts in the middle of the night — water is spreading fast, and you can't find the main valve.\"",
    "visualTitle": "Burst Pipe Emergency Repair Protocol",
    "visualCaption": "Comprehensive guide for booking Emergency Plumbing services on Bouul.",
    "quickFacts": [
      "Pricing: R850 – R2,500",
      "Timeline: Duration: 1 – 3 Hours",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "What a Burst Pipe Emergency Looks Like",
        "body": "A burst pipe can happen for several reasons: a frozen copper line that splits during a cold snap, a corroded steel joint that finally gives way, or a flexi-hose on your geyser that blows under pressure. South African homes with uninsulated roof spaces are especially vulnerable during winter cold fronts. The water can travel along ceiling boards, down walls, and into electrical fittings before you even locate the source."
      },
      {
        "heading": "How Bouul Gets a Plumber to You Fast",
        "body": "Open Bouul and tap the 'Emergency Plumbing' quick-action card. No forms, no call centre — just your location and a short description of the emergency. Bouul's network shows you available PIRB-registered plumbers in your area, ranked by their verified emergency response time. Each plumber's profile displays their PIRB registration number, insurance details, and real customer ratings for emergency callouts."
      },
      {
        "heading": "Zola AI Visual Damage Assessment",
        "body": "Once your booking is accepted, Zola AI activates. Take a photo of the burst area, the water meter, and any pooling water. Zola's computer vision identifies the pipe material, rupture type, and estimates the water damage classification. It generates a scope of work and a fixed-price quote that's held in digital escrow — no surprise charges if additional drywall removal or dehumidification is needed."
      },
      {
        "heading": "South African Compliance & Standards",
        "body": "All Bouul plumbers are PIRB-registered (Plumbing Industry Registration Board) and work to SANS 10252-1 standards for water supply and drainage. Geyser-related work follows SANS 10254. Every repair comes with a PIRB-compliant certificate of workmanship. Bouul verifies these credentials before any plumber is activated on the platform."
      },
      {
        "heading": "Digital Escrow: Your Money Is Safe",
        "body": "Your payment is held in digital escrow from the moment you book. The funds are only released to the plumber after you confirm the repair is complete, holds pressure, and the area is drying as expected. If the plumber doesn't arrive within the confirmed ETA window, the full amount is automatically refunded. No chasing, no disputes — just protection."
      },
      {
        "heading": "How to Prepare While You Wait",
        "body": "If you can safely reach it, turn off your main water supply valve (usually outside the house or under the kitchen sink). Switch off the geyser breaker at your DB board. Take photos of the damage for insurance purposes. Clear the area around the burst so the plumber has immediate access. Bouul's app shows you the plumber's real-time ETA after booking."
      }
    ]
  },
  {
    "slug": "how-bouul-works-for-vendors",
    "title": "DB Board Upgrade & Rewiring",
    "tag": "Electrical Distribution",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "How to book a certified electrician on Bouul for your distribution board upgrade, with Zola AI load assessment and SANS 10142 compliance.",
    "pullQuote": "\"Your DB board trips constantly — the old wire fuses can't handle modern appliances and the house feels electrically unsafe.\"",
    "visualTitle": "DB Board Upgrade & Rewiring Protocol",
    "visualCaption": "Comprehensive guide for booking Electrical Distribution services on Bouul.",
    "quickFacts": [
      "Pricing: R3,500 – R8,500",
      "Timeline: Duration: 4 – 8 Hours",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "Why Upgrade Your DB Board?",
        "body": "Old rewireable fuse boards are a fire risk. They lack earth leakage protection — meaning a live-to-earth fault won't trip the circuit, and you or your family could be electrocuted. Modern DB boards have earth leakage units that detect as little as 30mA of current leakage and trip within milliseconds. An upgrade also gives you dedicated circuits for high-load appliances, preventing the nuisance tripping that happens when a geyser and oven share the same circuit."
      },
      {
        "heading": "Booking Your DB Upgrade on Bouul",
        "body": "Select 'Electricians' then 'DB Board Upgrade' on Bouul. Upload clear photos of your existing DB board — inside and out — plus your electricity meter box. Tell Bouul which appliances you run, when the tripping happens, and any unusual signs (hot wires, buzzing, burning smell). Bouul verifies every electrician's Wireman's Licence and CoC-issuing authority before they can accept your booking."
      },
      {
        "heading": "Zola AI Load Assessment",
        "body": "Zola AI analyses your photos and appliance list to calculate your household's maximum demand per SANS 10142-1 tables. It identifies whether your supply cable from the municipality can handle the upgrade, checks for signs of overheated connections in your existing board, and produces a recommended circuit schedule. This means your electrician arrives with the correct breakers and board size — no second trips for forgotten parts."
      },
      {
        "heading": "The Certificate of Compliance (COC)",
        "body": "A COC is a legal requirement under the Electrical Machinery Regulations of the Occupational Health and Safety Act. Every DB board upgrade must be certified. Your electrician provides the COC after testing: earth continuity, insulation resistance, earth leakage trip time, polarity, and circuit load balance. Bouul escrows your payment until the COC is uploaded and you confirm receipt."
      },
      {
        "heading": "Escrow & Safety Guarantee",
        "body": "Your payment is held in escrow until the COC is issued and you've verified the board operates safely — no tripping under normal load, all circuits labelled, earth leakage test works. If the electrician's work fails an inspection, Bouul coordinates rectification at no extra cost."
      }
    ]
  },
  {
    "slug": "escrow-trust-architecture",
    "title": "Full Home Furniture Relocation",
    "tag": "Residential Moving",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "Stress-free residential furniture moving with wrapped protection and insurance",
    "pullQuote": "\"Moving house is rated as one of life's top stressors when items break or movers no-show\"",
    "visualTitle": "Full Home Furniture Relocation Protocol",
    "visualCaption": "Comprehensive guide for booking Residential Moving services on Bouul.",
    "quickFacts": [
      "Pricing: R2,500 – R6,500",
      "Timeline: Duration: 4 – 8 Hours",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "Pre-Move Packing & Wrapping Protocol",
        "body": "Proper preparation prevents transit damage. Professional movers blanket-wrap polished wood surfaces, shrink-wrap upholstered sofas, and secure appliance doors before lifting."
      },
      {
        "heading": "Navigating Complex Property Access",
        "body": "High-density residential estates often restrict truck tonnage. Bouul logistics coordinators confirm estate gate clearances and shuttle requirements prior to move day."
      }
    ]
  },
  {
    "slug": "geyser-timer-energy-guide",
    "title": "Geyser Timer & Energy-Saving Installation",
    "tag": "Geyser Control",
    "date": "July 2026",
    "readTime": "4 min read",
    "summary": "How to install a geyser timer or smart geyser controller through Bouul to cut your electricity bill.",
    "pullQuote": "\"Your geyser is the biggest electricity user in the house, and it's heating water all day when nobody's home.\"",
    "visualTitle": "Geyser Timer & Energy-Saving Installation Protocol",
    "visualCaption": "Comprehensive guide for booking Geyser Control services on Bouul.",
    "quickFacts": [
      "Pricing: R650 – R2,200",
      "Timeline: Duration: 1 – 2 Hours",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "Why You Need a Geyser Timer",
        "body": "A geyser doesn't need to run all day. With proper insulation, a well-lagged 150L geyser loses only about 1°C per hour. Heating it for 2-3 hours per day — split between morning and evening — is enough for a family of four. A timer or smart controller automates this. Smart controllers go further: they can detect load-shedding schedules and adjust heating times so you always have hot water when Eskom cuts power."
      },
      {
        "heading": "Booking the Installation on Bouul",
        "body": "Under 'Electricians' select 'Geyser Timer.' Upload a photo of your DB board showing the geyser breaker label and rating, and a photo of the geyser itself. Bouul matches you with an electrician who has geyser timer experience and a valid Wireman's Licence. You'll see their rating for similar energy-saving installations."
      },
      {
        "heading": "Zola AI Energy Usage Analysis",
        "body": "Tell Zola AI your household size, daily routine, and current electricity bill. Zola estimates your geyser's kWh consumption and suggests the optimal timer program. For smart controllers, Zola recommends models compatible with South African utilities (CBI Astute, Sonoff, or local brands) and configures them for Eskom load-shedding time slots."
      },
      {
        "heading": "Installation and Savings",
        "body": "The electrician isolates the geyser circuit, installs the timer or smart controller in the DB board (or at the geyser for some models), wires it through the geyser contactor, and programs the heating schedule. Testing ensures the geyser doesn't run outside programmed hours. Most households recoup the installation cost in 2-3 months of electricity savings."
      }
    ]
  },
  {
    "slug": "property-conveyancing-guide",
    "title": "Property Conveyancing & Deed Transfers",
    "tag": "Conveyancing",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "Legal transfer of residential and commercial property ownership",
    "pullQuote": "\"Property transfer delays cause unexpected holding costs and risk contract cancellation\"",
    "visualTitle": "Property Conveyancing & Deed Transfers Protocol",
    "visualCaption": "Comprehensive guide for booking Conveyancing services on Bouul.",
    "quickFacts": [
      "Pricing: Law Society Tariff Based",
      "Timeline: Duration: 6 – 10 Weeks",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "SARS & Rates Clearance Expediting",
        "body": "Conveyancers track municipal rates clearance and SARS transfer duty receipts daily to prevent delays."
      },
      {
        "heading": "Deeds Office Lodgement Tracking",
        "body": "Real-time updates as your property documents pass through the 3 levels of Deeds Office examination."
      }
    ]
  },
  {
    "slug": "flatbed-towing-guide",
    "title": "Flatbed Towing: Why It Is Safer Than a Standard Tow",
    "tag": "Towing Services",
    "date": "July 2026",
    "readTime": "4 min read",
    "summary": "When to choose a flatbed truck — and why your gearbox will thank you",
    "pullQuote": "\"Does your car need a flatbed or will a standard tow do?\"",
    "visualTitle": "Flatbed Towing: Why It Is Safer Than a Standard Tow Protocol",
    "visualCaption": "Comprehensive guide for booking Towing Services services on Bouul.",
    "quickFacts": [
      "Pricing: R800 – R2 500 (local within 15 km); R2 500 – R6 000 (long-distance 50–100 km)",
      "Timeline: 30–60 min arrival; 15–30 min loading",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "Flatbed vs hook-and-chain",
        "body": "Flatbed: all four wheels off ground — safe for automatic transmissions, AWD, low-clearance sports cars. Hook-and-chain: lifts only front wheels — rear wheels dragging spin the driveshaft, damaging automatic transmissions and AWD transfer cases."
      },
      {
        "heading": "AWD and RWD towing requirements",
        "body": "AWD vehicles (BMW X3, Audi Q5, RAV4 AWD) and RWD vehicles (BMW 3 Series, Mercedes C-Class, Hilux) MUST be flatbed-towed. Towing with rear wheels on ground can destroy the transfer case or differential within 5 km."
      },
      {
        "heading": "Loading and tie-down safety",
        "body": "Cars loaded onto flatbed using winch. Operator must attach to manufacturer recovery point, not suspension components. Four-point tie-down straps secure wheels — never body panels or sills."
      },
      {
        "heading": "What roadside assistance covers",
        "body": "Most SA packages (AA, insurer add-on) include flatbed towing up to a distance (15–50 km). Bouul coordinates with your roadside provider for seamless handover."
      },
      {
        "heading": "Average towing costs in SA (2026)",
        "body": "Local within 15 km: R800–R2 500. Metro 15–30 km: R1 500–R3 500. Long-distance 50–100 km: R2 500–R6 000. Weekend/night surcharge 25–50% extra."
      },
      {
        "heading": "Avoiding towing scams",
        "body": "Unscrupulous towers appear at accident scenes and charge inflated storage fees. Always call a Bouul-vetted tower. Never let an unsolicited tower take your keys."
      }
    ]
  },
  {
    "slug": "electric-fence-coc-guide",
    "title": "COC Compliant Electric Fence Installation",
    "tag": "Electric Fence",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "High-voltage perimeter electric fencing with energizer and alarm monitoring",
    "pullQuote": "\"Low or sagging perimeter walls invite opportunistic trespassing and burglary\"",
    "visualTitle": "COC Compliant Electric Fence Installation Protocol",
    "visualCaption": "Comprehensive guide for booking Electric Fence services on Bouul.",
    "quickFacts": [
      "Pricing: R65 – R120 per meter",
      "Timeline: Duration: 1 – 3 Days",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "SANS 10222-3 Safety Standard",
        "body": "Fences are installed with mandated warning signs, earthing spikes, and legal wire spacing."
      },
      {
        "heading": "High-Voltage Pulse Test",
        "body": "Energizers deliver a legal 9,000V shock that deters intruders while triggering alarms on wire cuts."
      }
    ]
  },
  {
    "slug": "retirement-planning-guide",
    "title": "Retirement Portfolio & Pension Transfer Planning",
    "tag": "Retirement Planning",
    "date": "July 2026",
    "readTime": "5 min read",
    "summary": "Structuring tax-efficient retirement annuities, pension transfers, and living annuities",
    "pullQuote": "\"Outliving your retirement savings or paying unnecessary tax on pension drawdowns is a major risk\"",
    "visualTitle": "Retirement Portfolio & Pension Transfer Planning Protocol",
    "visualCaption": "Comprehensive guide for booking Retirement Planning services on Bouul.",
    "quickFacts": [
      "Pricing: R2,500 – R7,500",
      "Timeline: Duration: 2 – 5 Days",
      "100% Escrow Protected"
    ],
    "sections": [
      {
        "heading": "Tax-Free Lump Sum Drawdown",
        "body": "Advisors optimize the R550,000 tax-free retirement lump sum threshold under SA tax law."
      },
      {
        "heading": "Sustainable Living Annuity Drawdowns",
        "body": "Recommending safe 4% to 5% annual drawdown rates to preserve capital over 25+ years."
      }
    ]
  }
];

export function getNewsroomArticle(slug: string): NewsroomArticle | undefined {
  return newsroomArticles.find((article) => article.slug === slug);
}

export const newsroomUpdates = [
  {
    title: "Master Article Registry Launched Across 80+ Service Domains",
    detail: "Over 480 technical activity guides are now live across Bouul, detailing SABS/PIRB standards, Zola AI diagnostics, and escrow security.",
  },
  {
    title: "Trophy & Category Mastery Engine Live for Merchants",
    detail: "Vendors can now leverage automated repeat customer retention, dynamic pricing rules, and co-branded inner circle badges.",
  },
  {
    title: "DeepSeek V4 Visual Photo Diagnostics Integrated into Zola AI",
    detail: "Clients can snap photos of leaking valves or electrical DB boards to get instant part identification and precise escrow quotes.",
  },
];

export const newsroomPressAssets = [
  {
    label: "Bouul Brand Kit & Logos",
    note: "ZIP (SVG, PNG) — 14.2 MB",
    href: "/press/bouul-brand-kit.zip",
  },
  {
    label: "Zola AI & Commerce Suite Architecture Whitepaper",
    note: "PDF — 4.8 MB",
    href: "/press/zola-ai-whitepaper.pdf",
  },
];
