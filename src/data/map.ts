// Stylized, recognizable Bangladesh silhouette (viewBox 0 0 100 110)
export const bangladeshPath =
  "M22,8 L40,10 L44,4 L52,12 L60,10 L66,16 L82,18 L86,28 L76,34 L78,46 L84,52 " +
  "L90,64 L86,80 L92,96 L84,104 L74,92 L70,78 L60,86 L56,96 L46,98 L40,90 " +
  "L30,92 L24,82 L30,70 L22,58 L14,50 L18,36 L12,24 L22,8 Z";

export type DivisionNode = {
  name: string;
  x: number;
  y: number;
  projects: number;
  beneficiaries: number;
  districts: number;
  headline: string;
};

// x/y positioned to roughly match Bangladesh geography within the viewBox
export const divisionNodes: DivisionNode[] = [
  { name: "Rangpur", x: 26, y: 20, projects: 14, beneficiaries: 540_000, districts: 6, headline: "Char livelihoods & anticipatory action" },
  { name: "Rajshahi", x: 24, y: 42, projects: 7, beneficiaries: 210_000, districts: 4, headline: "Drought-resilient agriculture" },
  { name: "Mymensingh", x: 46, y: 26, projects: 9, beneficiaries: 295_000, districts: 4, headline: "Women's economic empowerment" },
  { name: "Sylhet", x: 74, y: 26, projects: 11, beneficiaries: 430_000, districts: 4, headline: "Haor health & flash-flood resilience" },
  { name: "Dhaka", x: 46, y: 50, projects: 12, beneficiaries: 380_000, districts: 5, headline: "Urban climate resilience" },
  { name: "Khulna", x: 30, y: 74, projects: 18, beneficiaries: 720_000, districts: 7, headline: "Coastal adaptation & WASH" },
  { name: "Barishal", x: 48, y: 82, projects: 13, beneficiaries: 460_000, districts: 5, headline: "Saline WASH & cyclone preparedness" },
  { name: "Chattogram", x: 74, y: 66, projects: 16, beneficiaries: 610_000, districts: 6, headline: "Education & emergency response" },
];

export const headOffice = { name: "Head Office — Dhaka", x: 46, y: 50 };
