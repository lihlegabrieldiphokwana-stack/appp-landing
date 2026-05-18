// Vendor service categories with pain points and benefits.
// Used by /vendors and /vendors/[category] pages.

export interface VendorService {
  name: string;
  painPoint: string;
  bouulBenefit: string;
  detailedPainPoints?: { problem: string; solution: string }[];
}

export interface VendorCategory {
  name: string;
  icon: string;
  slug: string;
  services: VendorService[];
  categoryPainPoint: string;
  categoryBenefit: string;
}

export const vendorCategories: VendorCategory[] = [
  {
    name: "Home Services",
    icon: "🏠",
    slug: "home-services",
    services: [
      { name: "Plumbers", painPoint: "Emergency calls at 2AM", bouulBenefit: "Set emergency hours & premium rates", detailedPainPoints: [
        { problem: "Emergency calls at 2AM", solution: "Set emergency hours & charge premium rates for after-hours" },
        { problem: "Clients sourcing cheap materials", solution: "Specify exact materials in quotes with markup options" },
        { problem: "Payment delays after completion", solution: "Progress payments built into booking flow" },
        { problem: "Scope creep on jobs", solution: "Change order approval before extra work" },
        { problem: "No-shows for appointments", solution: "Deposit requirements & automated reminders" },
      ]},
      { name: "Electricians", painPoint: "Clients sourcing cheap materials", bouulBenefit: "Specify exact materials in quotes", detailedPainPoints: [
        { problem: "Clients sourcing cheap materials", solution: "Specify exact materials in quotes with markup options" },
        { problem: "Compliance certification paperwork", solution: "Automated COC generation & storage" },
        { problem: "Emergency call-out underpriced", solution: "Dynamic after-hours pricing" },
        { problem: "Parts running costs", solution: "Include parts in upfront quotes" },
        { problem: "Follow-up visits unpaid", solution: "Guarantee period tracking" },
      ]},
      { name: "Carpenters", painPoint: "Scope creep on custom projects", bouulBenefit: "Milestone-based payments", detailedPainPoints: [
        { problem: "Scope creep on custom projects", solution: "Milestone-based payments with approval gates" },
        { problem: "Material cost fluctuations", solution: "Quote validity periods" },
        { problem: "Design revision hell", solution: "Limited revision rounds in contract" },
        { problem: "Workshop overhead costs", solution: "Workshop time billed separately" },
        { problem: "Installation delays", solution: "Clear timeline expectations" },
      ]},
      { name: "Painters", painPoint: "Weather delays affecting income", bouulBenefit: "Flexible rescheduling policies", detailedPainPoints: [
        { problem: "Weather delays affecting income", solution: "Flexible rescheduling policies built-in" },
        { problem: "Paint costs eating margins", solution: "Material markup transparency" },
        { problem: "Prep time uncompensated", solution: "Prep work itemized in quotes" },
        { problem: "Touch-up requests", solution: "Clear warranty terms" },
        { problem: "Access/scaffolding costs", solution: "Site requirements specified upfront" },
      ]},
      { name: "Builders", painPoint: "Payment delays after completion", bouulBenefit: "Progress payments built-in", detailedPainPoints: [
        { problem: "Payment delays after completion", solution: "Progress payments built into booking flow" },
        { problem: "Change order disputes", solution: "Digital change order approvals" },
        { problem: "Subcontractor coordination", solution: "Multi-contractor scheduling" },
        { problem: "Material delivery delays", solution: "Timeline buffers automatically added" },
        { problem: "Snag list endless revisions", solution: "Defined completion criteria" },
      ]},
      { name: "Gardeners", painPoint: "Seasonal work inconsistency", bouulBenefit: "Year-round subscription packages", detailedPainPoints: [
        { problem: "Seasonal work inconsistency", solution: "Year-round subscription packages" },
        { problem: "Equipment maintenance costs", solution: "Equipment costs in pricing" },
        { problem: "Fuel surcharges", solution: "Distance-based pricing" },
        { problem: "Weather cancellations", solution: "Weather rescheduling policies" },
        { problem: "Green waste disposal", solution: "Disposal fees included" },
      ]},
      { name: "Pool Cleaners", painPoint: "Chemical costs eating margins", bouulBenefit: "Dynamic pricing per pool size", detailedPainPoints: [
        { problem: "Chemical costs eating margins", solution: "Dynamic pricing per pool size" },
        { problem: "Travel between pools", solution: "Route optimization & clustering" },
        { problem: "Equipment wear", solution: "Maintenance costs factored in" },
        { problem: "Seasonal demand swings", solution: "Off-season promotions" },
        { problem: "Emergency cleanups", solution: "Premium emergency rates" },
      ]},
      { name: "Pest Control", painPoint: "Follow-up visits unpaid", bouulBenefit: "Guarantee packages with deposits", detailedPainPoints: [
        { problem: "Follow-up visits unpaid", solution: "Guarantee packages with deposits" },
        { problem: "Chemical handling certification", solution: "Certification badges displayed" },
        { problem: "Safety liability concerns", solution: "Waivers built into booking" },
        { problem: "Recurring treatment scheduling", solution: "Automated recurring bookings" },
        { problem: "Inspection time uncompensated", solution: "Inspection fees charged" },
      ]},
      { name: "AC Repair", painPoint: "Peak season burnout", bouulBenefit: "Demand-based surge pricing", detailedPainPoints: [
        { problem: "Peak season burnout", solution: "Demand-based surge pricing" },
        { problem: "Gas refill costs", solution: "Gas costs itemized" },
        { problem: "Diagnostic time", solution: "Diagnostic fees applied" },
        { problem: "Warranty claim paperwork", solution: "Digital warranty submissions" },
        { problem: "Emergency breakdowns", solution: "Emergency premium pricing" },
      ]},
      { name: "Appliance Repair", painPoint: "Diagnostic time uncompensated", bouulBenefit: "Charge call-out fees", detailedPainPoints: [
        { problem: "Diagnostic time uncompensated", solution: "Charge call-out fees" },
        { problem: "Parts sourcing delays", solution: "Parts availability checked first" },
        { problem: "Multiple visit requirements", solution: "Multi-visit pricing packages" },
        { problem: "Old appliance incompatibility", solution: "Model/year verification upfront" },
        { problem: "Warranty confusion", solution: "Clear warranty explanations" },
      ]},
      { name: "Handyman", painPoint: "Too many small jobs, not enough profit", bouulBenefit: "Minimum booking values", detailedPainPoints: [
        { problem: "Too many small jobs, not enough profit", solution: "Minimum booking values" },
        { problem: "Travel time wasted", solution: "Geographic clustering" },
        { problem: "Tool wear costs", solution: "Tool costs factored in" },
        { problem: "Skill undervalued", solution: "Portfolio showcases expertise" },
        { problem: "Job scope unclear", solution: "Photo-based scoping" },
      ]},
      { name: "Roofers", painPoint: "Insurance claim complexities", bouulBenefit: "Direct insurer billing options", detailedPainPoints: [
        { problem: "Insurance claim complexities", solution: "Direct insurer billing options" },
        { problem: "Weather dependency", solution: "Weather contingency planning" },
        { problem: "Safety equipment costs", solution: "Safety costs included" },
        { problem: "Height work premiums", solution: "Height pricing tiers" },
        { problem: "Debris removal", solution: "Cleanup fees itemized" },
      ]},
      { name: "Tilers", painPoint: "Material wastage costs", bouulBenefit: "Precise quote calculators", detailedPainPoints: [
        { problem: "Material wastage costs", solution: "Precise quote calculators" },
        { problem: "Pattern complexity underpriced", solution: "Complexity multipliers" },
        { problem: "Surface prep time", solution: "Prep work quoted separately" },
        { problem: "Grout color matching", solution: "Sample approval process" },
        { problem: "Cutting time", solution: "Cut time factored in" },
      ]},
      { name: "Welders", painPoint: "Specialized skills undervalued", bouulBenefit: "Portfolio showcases expertise", detailedPainPoints: [
        { problem: "Specialized skills undervalued", solution: "Portfolio showcases expertise" },
        { problem: "Equipment costs", solution: "Equipment fees line items" },
        { problem: "Material costs", solution: "Material markup options" },
        { problem: "Safety certification", solution: "Certification badges" },
        { problem: "Custom design time", solution: "Design time billed" },
      ]},
      { name: "Aluminum & Glass", painPoint: "Measurement errors costly", bouulBenefit: "Digital measurement tools", detailedPainPoints: [
        { problem: "Measurement errors costly", solution: "Digital measurement tools" },
        { problem: "Custom fabrication time", solution: "Fabrication time quoted" },
        { problem: "Installation complexity", solution: "Site assessment required" },
        { problem: "Breakage during transport", solution: "Insurance included" },
        { problem: "Sealant curing time", solution: "Timeline buffers added" },
      ]},
    ],
    categoryPainPoint: "Emergency calls at odd hours",
    categoryBenefit: "Set your own availability. You control when you work.",
  },
  {
    name: "Cleaning",
    icon: "✨",
    slug: "cleaning",
    services: [
      { name: "House Cleaning", painPoint: "Clients expecting hotel-level service", bouulBenefit: "Clear service tier definitions" },
      { name: "Carpet Cleaning", painPoint: "Equipment transport costs", bouulBenefit: "Distance-based pricing" },
      { name: "Office Cleaning", painPoint: "After-hours work life balance", bouulBenefit: "Set preferred time slots" },
      { name: "Deep Cleaning", painPoint: "Physically demanding, low rates", bouulBenefit: "Premium pricing for deep services" },
      { name: "Move-In/Out Cleaning", painPoint: "Last-minute booking chaos", bouulBenefit: "Advance booking requirements" },
      { name: "Window Cleaning", painPoint: "Height work risk vs reward", bouulBenefit: "Risk-adjusted pricing tools" },
      { name: "Upholstery Cleaning", painPoint: "Stain removal guarantees", bouulBenefit: "Realistic expectation setting" },
      { name: "Pressure Washing", painPoint: "Equipment maintenance costs", bouulBenefit: "Job pricing includes overhead" },
    ],
    categoryPainPoint: "Clients don't value your expertise",
    categoryBenefit: "Showcase before/after videos. Let your work speak.",
  },
  {
    name: "Beauty & Wellness",
    icon: "💅",
    slug: "beauty",
    services: [
      { name: "Hairdressers", painPoint: "No-shows killing schedule", bouulBenefit: "Non-refundable deposits" },
      { name: "Barbers", painPoint: "Walk-in unpredictability", bouulBenefit: "Appointment-only options" },
      { name: "Nail Technicians", painPoint: "Complex designs underpriced", bouulBenefit: "Photo-based price calculator" },
      { name: "Massage Therapists", painPoint: "Physical burnout", bouulBenefit: "Booking limits per day" },
      { name: "Facial Treatments", painPoint: "Product costs not covered", bouulBenefit: "Product-inclusive pricing" },
      { name: "Makeup Artists", painPoint: "Trial sessions unpaid", bouulBenefit: "Trial fee structures" },
      { name: "Eyelash & Brows", painPoint: "Touch-up requests", bouulBenefit: "Clear aftercare policies" },
      { name: "Spas", painPoint: "Staff scheduling nightmares", bouulBenefit: "Multi-therapist management" },
      { name: "Personal Trainers", painPoint: "Client consistency issues", bouulBenefit: "Package commitments" },
    ],
    categoryPainPoint: "Clients don't value your expertise",
    categoryBenefit: "Showcase before/after videos. Let your work speak.",
  },
  {
    name: "Automotive",
    icon: "🔧",
    slug: "automotive",
    services: [
      { name: "Mechanics", painPoint: "Diagnostic time uncompensated", bouulBenefit: "Charge diagnostic fees" },
      { name: "Panel Beaters", painPoint: "Insurance assessment delays", bouulBenefit: "Digital damage assessments" },
      { name: "Auto Electricians", painPoint: "Complex electrical diagnostics", bouulBenefit: "Specialist pricing tiers" },
      { name: "Tire Fitters", painPoint: "Price comparison pressure", bouulBenefit: "Tire brand markup options" },
      { name: "Car Wash/Detailing", painPoint: "Weather dependency", bouulBenefit: "Indoor/outdoor pricing modes" },
    ],
    categoryPainPoint: "Price comparison pressure",
    categoryBenefit: "Showcase expertise. Charge for diagnostics.",
  },
  {
    name: "Education",
    icon: "📚",
    slug: "education",
    services: [
      { name: "Tutors", painPoint: "Preparation time unpaid", bouulBenefit: "Hourly rates include prep" },
      { name: "Music Teachers", painPoint: "Cancellation inconsistency", bouulBenefit: "24hr cancellation policy" },
      { name: "Driving Instructors", painPoint: "Fuel costs eating margins", bouulBenefit: "Fuel surcharge options" },
      { name: "Language Teachers", painPoint: "Beginner cancellations", bouulBenefit: "Package commitments" },
    ],
    categoryPainPoint: "Cancellation inconsistency",
    categoryBenefit: "Set cancellation policies that protect your time.",
  },
  {
    name: "Health & Medical",
    icon: "🏥",
    slug: "health",
    services: [
      { name: "Physiotherapists", painPoint: "Session duration undervalued", bouulBenefit: "Fixed session pricing" },
      { name: "Dieticians", painPoint: "Follow-up sessions unpaid", bouulBenefit: "Package plans" },
      { name: "Counsellors", painPoint: "Confidentiality concerns", bouulBenefit: "Secure platform compliance" },
    ],
    categoryPainPoint: "Confidentiality and payment security",
    categoryBenefit: "Secure, compliant platform. Fixed session pricing.",
  },
  {
    name: "Events & Photography",
    icon: "📸",
    slug: "events",
    services: [
      { name: "Photographers", painPoint: "Editing time uncompensated", bouulBenefit: "Editing fees included" },
      { name: "Videographers", painPoint: "Equipment rental costs", bouulBenefit: "Equipment line items" },
      { name: "DJs", painPoint: "Setup/breakdown time", bouulBenefit: "Full event pricing" },
      { name: "Caterers", painPoint: "Ingredient cost fluctuations", bouulBenefit: "Dynamic menu pricing" },
    ],
    categoryPainPoint: "Hidden time costs",
    categoryBenefit: "Price for the full service, not just the event.",
  },
  {
    name: "Professional",
    icon: "💼",
    slug: "professional",
    services: [
      { name: "Accountants", painPoint: "Tax season bottlenecks", bouulBenefit: "Year-round retainer options" },
      { name: "Lawyers", painPoint: "Consultation time billing", bouulBenefit: "Fixed consultation fees" },
      { name: "Graphic Designers", painPoint: "Revision scope creep", bouulBenefit: "Limited revision packages" },
    ],
    categoryPainPoint: "Scope creep on projects",
    categoryBenefit: "Clear deliverables. Defined revision rounds.",
  },
  {
    name: "Pets",
    icon: "🐾",
    slug: "pets",
    services: [
      { name: "Dog Walkers", painPoint: "Travel time between clients", bouulBenefit: "Route-based pricing" },
      { name: "Pet Groomers", painPoint: "Breed-specific complexity", bouulBenefit: "Breed pricing tiers" },
      { name: "Pet Sitters", painPoint: "Overnight pricing unclear", bouulBenefit: "Clear daily/overnight rates" },
    ],
    categoryPainPoint: "Travel and time complexity",
    categoryBenefit: "Price by breed, distance, and care type.",
  },
  {
    name: "Logistics",
    icon: "🚚",
    slug: "logistics",
    services: [
      { name: "Couriers", painPoint: "Fuel price volatility", bouulBenefit: "Dynamic fuel surcharges" },
      { name: "Movers", painPoint: "Job size estimation errors", bouulBenefit: "Photo-based estimation" },
      { name: "Delivery Drivers", painPoint: "Peak time bottlenecks", bouulBenefit: "Surge pricing" },
    ],
    categoryPainPoint: "Fuel and distance costs",
    categoryBenefit: "Dynamic pricing that tracks real costs.",
  },
  {
    name: "Tech & IT",
    icon: "💻",
    slug: "tech",
    services: [
      { name: "Web Developers", painPoint: "Scope creep on builds", bouulBenefit: "Milestone payments" },
      { name: "IT Support", painPoint: "Call-out underpricing", bouulBenefit: "Remote vs on-site tiers" },
      { name: "Phone Repair", painPoint: "Parts sourcing delays", bouulBenefit: "Parts availability checked first" },
    ],
    categoryPainPoint: "Project scope and parts management",
    categoryBenefit: "Milestone payments. Parts pricing control.",
  },
  {
    name: "Legal & Financial",
    icon: "⚖️",
    slug: "legal",
    services: [
      { name: "Notaries", painPoint: "Per-document undervaluing", bouulBenefit: "Document type pricing" },
      { name: "Tax Consultants", painPoint: "Seasonal income gaps", bouulBenefit: "Year-round retainers" },
      { name: "Financial Advisors", painPoint: "Initial consultation unpaid", bouulBenefit: "Consultation fees" },
    ],
    categoryPainPoint: "Professional time undervalued",
    categoryBenefit: "Charge for expertise. Retainer options.",
  },
];

export const vendorCategoriesList = vendorCategories.map(c => ({
  name: c.name,
  icon: c.icon,
  slug: c.slug,
  serviceCount: c.services.length,
  categoryPainPoint: c.categoryPainPoint,
  categoryBenefit: c.categoryBenefit,
}));
