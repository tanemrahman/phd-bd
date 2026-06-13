// ---- Headline impact statistics (home + impact) ----
export const headlineStats = [
  { value: 5_200_000, suffix: "+", label: "People reached", sub: "across 27 years" },
  { value: 41, suffix: "", label: "Districts covered", sub: "of 64 nationwide" },
  { value: 340, suffix: "+", label: "Projects delivered", sub: "since 1998" },
  { value: 38, suffix: "", label: "Donor partners", sub: "UN, bilateral & foundations" },
  { value: 27, suffix: "", label: "Years of service", sub: "established 1998" },
];

// ---- Donors & partners (text-based logo wall) ----
export const partnerGroups: { group: string; names: string[] }[] = [
  {
    group: "UN agencies",
    names: ["UNICEF", "WFP", "UNDP", "UNHCR", "UN Women", "FAO", "IOM", "WHO"],
  },
  {
    group: "Bilateral & government",
    names: ["European Union", "FCDO", "USAID / BHA", "GIZ", "SIDA", "Global Affairs Canada", "Embassy of the Netherlands", "KOICA"],
  },
  {
    group: "Multilaterals & foundations",
    names: ["World Bank", "Asian Development Bank", "Green Climate Fund", "Gates Foundation", "START Network", "BRAC", "Save the Children", "Oxfam"],
  },
];

// ---- Beneficiary stories ----
export type Story = {
  slug: string;
  name: string;
  location: string;
  program: string;
  headline: string;
  quote: string;
  tone: "brand" | "accent" | "coral";
};

export const stories: Story[] = [
  {
    slug: "rahima-floating-garden",
    name: "Rahima Begum",
    location: "Satkhira, Khulna",
    program: "Climate Resilience",
    headline: "From saline ruin to a floating harvest",
    quote:
      "When the land turned to salt, I thought we would have to leave. Now my floating garden feeds my children and earns enough to send them to school.",
    tone: "brand",
  },
  {
    slug: "jamal-early-warning",
    name: "Jamal Uddin",
    location: "Kurigram, Rangpur",
    program: "Disaster Risk Reduction",
    headline: "The volunteer who gives his village a head start",
    quote:
      "Now the warning reaches us a full day earlier. Last monsoon, not one family in my ward lost a goat or a grain store.",
    tone: "coral",
  },
  {
    slug: "shilpi-enterprise",
    name: "Shilpi Rani",
    location: "Jamalpur, Mymensingh",
    program: "Women's Empowerment",
    headline: "A savings group that became a business",
    quote:
      "I started with a loan of five thousand taka. Today I employ six women from my char, and I sit on the union council.",
    tone: "accent",
  },
];

// ---- News & press ----
export type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export const news: NewsItem[] = [
  {
    date: "12 June 2026",
    category: "Press release",
    title: "PHD and the European Union launch $8.4M coastal resilience programme",
    excerpt:
      "A four-year initiative will climate-proof livelihoods for 142,000 people across the Sundarbans belt.",
  },
  {
    date: "28 May 2026",
    category: "Field update",
    title: "Anticipatory cash reaches 96,000 people before monsoon flood peak",
    excerpt:
      "Forecast-based financing released payments 24 hours before the Brahmaputra crossed danger level.",
  },
  {
    date: "09 May 2026",
    category: "Publication",
    title: "New study: graduation model lifts 64,000 households out of extreme poverty",
    excerpt:
      "Independent evaluation finds average household income more than doubled over the project period.",
  },
  {
    date: "21 April 2026",
    category: "Event",
    title: "PHD joins national dialogue on locally-led adaptation finance",
    excerpt:
      "Calling for direct climate finance to flow to the communities on the front line of the crisis.",
  },
];

// ---- Knowledge hub: publications & reports ----
export type Publication = {
  title: string;
  type: "Annual Report" | "Research" | "Policy Brief" | "Evaluation" | "Financial" | "Newsletter";
  year: number;
  pages: number;
};

export const publications: Publication[] = [
  { title: "PHD Annual Report 2025", type: "Annual Report", year: 2025, pages: 84 },
  { title: "PHD Annual Report 2024", type: "Annual Report", year: 2024, pages: 78 },
  { title: "Locally-Led Adaptation: Evidence from the Coastal Belt", type: "Research", year: 2025, pages: 46 },
  { title: "Forecast-Based Financing in Bangladesh — A Policy Brief", type: "Policy Brief", year: 2025, pages: 12 },
  { title: "Graduation Model Endline Evaluation (UTTORON)", type: "Evaluation", year: 2024, pages: 58 },
  { title: "Audited Financial Statements FY2024–25", type: "Financial", year: 2025, pages: 32 },
  { title: "Gender Transformative Programming: Lessons Learned", type: "Research", year: 2024, pages: 38 },
  { title: "PHD Quarterly Newsletter — Q2 2026", type: "Newsletter", year: 2026, pages: 8 },
];

// ---- Careers ----
export type Job = {
  title: string;
  unit: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  closing: string;
};

export const jobs: Job[] = [
  { title: "Programme Manager — Climate Resilience", unit: "Programmes", location: "Khulna", type: "Full-time", closing: "30 Jun 2026" },
  { title: "MEAL Coordinator", unit: "Quality & Accountability", location: "Dhaka", type: "Full-time", closing: "05 Jul 2026" },
  { title: "Gender & Inclusion Specialist", unit: "Technical", location: "Dhaka", type: "Full-time", closing: "12 Jul 2026" },
  { title: "Finance Officer — Grants", unit: "Finance", location: "Dhaka", type: "Full-time", closing: "08 Jul 2026" },
  { title: "WASH Engineer", unit: "Programmes", location: "Barishal", type: "Contract", closing: "18 Jul 2026" },
  { title: "Communications Intern", unit: "Communications", location: "Dhaka", type: "Internship", closing: "25 Jun 2026" },
];

// ---- Procurement notices ----
export const tenders = [
  { ref: "PHD/RFQ/2026/061", title: "Supply of solar-powered water pumps (12 units)", type: "RFQ", closing: "24 Jun 2026" },
  { ref: "PHD/RFP/2026/058", title: "Endline evaluation — ALOKITO education programme", type: "RFP", closing: "01 Jul 2026" },
  { ref: "PHD/ITT/2026/055", title: "Construction of 3 climate-resilient cyclone shelters", type: "Tender", closing: "10 Jul 2026" },
  { ref: "PHD/RFQ/2026/053", title: "Framework agreement — ICT equipment & support", type: "RFQ", closing: "19 Jun 2026" },
];

// ---- SDGs PHD contributes to ----
export const sdgList: { n: number; name: string; color: string }[] = [
  { n: 1, name: "No Poverty", color: "#e5243b" },
  { n: 2, name: "Zero Hunger", color: "#dda63a" },
  { n: 3, name: "Good Health", color: "#4c9f38" },
  { n: 4, name: "Quality Education", color: "#c5192d" },
  { n: 5, name: "Gender Equality", color: "#ff3a21" },
  { n: 6, name: "Clean Water", color: "#26bde2" },
  { n: 8, name: "Decent Work", color: "#a21942" },
  { n: 10, name: "Reduced Inequalities", color: "#dd1367" },
  { n: 11, name: "Sustainable Cities", color: "#fd9d24" },
  { n: 13, name: "Climate Action", color: "#3f7e44" },
  { n: 14, name: "Life Below Water", color: "#0a97d9" },
  { n: 15, name: "Life on Land", color: "#56c02b" },
];
