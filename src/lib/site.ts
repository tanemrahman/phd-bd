export const org = {
  shortName: "PHD",
  fullName: "Program for Helpless and Lagged Societies",
  tagline: "Dignity, resilience and opportunity for every community.",
  established: 1998,
  headOffice: {
    line1: "House 42, Road 11, Banani",
    line2: "Dhaka 1213, Bangladesh",
    phone: "+880 2 1234 5678",
    email: "info@phd-bd.com",
  },
  social: {
    facebook: "#",
    linkedin: "#",
    youtube: "#",
    x: "#",
    instagram: "#",
  },
};

export type NavLink = { label: string; href: string; desc?: string };
export type NavColumn = { title: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
  feature?: { title: string; text: string; href: string; cta: string };
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        title: "Who we are",
        links: [
          { label: "History & journey", href: "/about#history" },
          { label: "Mission, vision & values", href: "/about#mission" },
          { label: "Strategic plan 2025–2030", href: "/about#strategy" },
          { label: "Certifications & compliance", href: "/about#compliance" },
        ],
      },
      {
        title: "Governance",
        links: [
          { label: "Leadership team", href: "/about#leadership" },
          { label: "Board of trustees", href: "/about#board" },
          { label: "Organogram", href: "/about#organogram" },
          { label: "Policies & safeguarding", href: "/transparency#policies" },
        ],
      },
    ],
    feature: {
      title: "27 years of frontline impact",
      text: "From a single char-land village to one of Bangladesh's most trusted development partners.",
      href: "/about#history",
      cta: "Read our story",
    },
  },
  {
    label: "What we do",
    href: "/what-we-do",
    columns: [
      {
        title: "Program areas",
        links: [
          { label: "Climate resilience", href: "/what-we-do/climate-resilience" },
          { label: "Disaster risk reduction", href: "/what-we-do/disaster-risk-reduction" },
          { label: "Livelihoods & food security", href: "/what-we-do/livelihoods" },
          { label: "Health & nutrition", href: "/what-we-do/health-nutrition" },
        ],
      },
      {
        title: "More programs",
        links: [
          { label: "Education", href: "/what-we-do/education" },
          { label: "WASH", href: "/what-we-do/wash" },
          { label: "Women's empowerment", href: "/what-we-do/women-empowerment" },
          { label: "Emergency response", href: "/what-we-do/emergency-response" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "All program areas", href: "/what-we-do" },
          { label: "Project directory", href: "/projects" },
          { label: "Where we work", href: "/where-we-work" },
          { label: "SDG alignment", href: "/impact#sdg" },
        ],
      },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    columns: [
      {
        title: "Our results",
        links: [
          { label: "Impact dashboard", href: "/impact#dashboard" },
          { label: "Results & outcomes", href: "/impact#results" },
          { label: "SDG alignment", href: "/impact#sdg" },
          { label: "Climate impact tracker", href: "/impact#climate" },
        ],
      },
      {
        title: "Voices from the field",
        links: [
          { label: "Beneficiary stories", href: "/impact#stories" },
          { label: "Case studies", href: "/impact#stories" },
          { label: "Before & after", href: "/impact#dashboard" },
        ],
      },
    ],
    feature: {
      title: "5.2M people reached",
      text: "Explore our live impact dashboard — disaggregated by sector, district and donor.",
      href: "/impact#dashboard",
      cta: "Open dashboard",
    },
  },
  {
    label: "Knowledge",
    href: "/knowledge",
    columns: [
      {
        title: "Resources",
        links: [
          { label: "Publications & research", href: "/knowledge#publications" },
          { label: "Annual reports", href: "/knowledge#annual" },
          { label: "Policy briefs", href: "/knowledge#publications" },
          { label: "Newsletters", href: "/knowledge#newsletters" },
        ],
      },
      {
        title: "Transparency",
        links: [
          { label: "Financial statements", href: "/transparency#financials" },
          { label: "Audit reports", href: "/transparency#audit" },
          { label: "Policies & safeguarding", href: "/transparency#policies" },
          { label: "Complaints mechanism", href: "/transparency#complaints" },
        ],
      },
      {
        title: "Newsroom",
        links: [
          { label: "News & press releases", href: "/knowledge#news" },
          { label: "Photo & video gallery", href: "/knowledge#media" },
          { label: "Events", href: "/knowledge#news" },
        ],
      },
    ],
  },
  {
    label: "Get involved",
    href: "/get-involved",
    columns: [
      {
        title: "Work with us",
        links: [
          { label: "Careers & jobs", href: "/careers" },
          { label: "Internships", href: "/careers#internships" },
          { label: "Volunteer", href: "/careers#volunteer" },
          { label: "Talent pool", href: "/careers#talent" },
        ],
      },
      {
        title: "Partner with us",
        links: [
          { label: "Donors & partners", href: "/get-involved#partners" },
          { label: "Corporate CSR", href: "/get-involved#csr" },
          { label: "Procurement & tenders", href: "/get-involved#procurement" },
          { label: "Contact us", href: "/contact" },
        ],
      },
    ],
    feature: {
      title: "Become a partner",
      text: "Co-design programs, fund proven models, or join our procurement roster.",
      href: "/get-involved#partners",
      cta: "Explore partnership",
    },
  },
];

// Utility nav shown in the slim top bar
export const utilityNav: NavLink[] = [
  { label: "Transparency", href: "/transparency" },
  { label: "Careers", href: "/careers" },
  { label: "Procurement", href: "/get-involved#procurement" },
  { label: "Contact", href: "/contact" },
];
