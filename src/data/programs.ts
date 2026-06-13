export type Program = {
  slug: string;
  name: string;
  icon: string; // key into icon set
  tone: "brand" | "accent" | "coral";
  summary: string;
  overview: string;
  sdgs: number[];
  stats: { value: string; label: string }[];
  approaches: string[];
  outcomes: { value: string; label: string }[];
};

export const programs: Program[] = [
  {
    slug: "climate-resilience",
    name: "Climate Resilience",
    icon: "leaf",
    tone: "brand",
    summary:
      "Helping coastal and char communities adapt to a changing climate through nature-based solutions and resilient infrastructure.",
    overview:
      "Bangladesh is on the front line of the climate crisis. PHD works with the most exposed communities — in the coastal belt, haors and river chars — to reduce vulnerability, restore ecosystems, and build adaptive capacity that lasts beyond the life of a project.",
    sdgs: [13, 14, 15, 1],
    stats: [
      { value: "318k", label: "people climate-proofed" },
      { value: "1,240 ha", label: "mangrove & land restored" },
      { value: "47", label: "climate-resilient schemes" },
    ],
    approaches: [
      "Nature-based solutions: mangrove afforestation, floating gardens, slope stabilisation",
      "Climate-resilient water, sanitation and shelter infrastructure",
      "Locally-led adaptation planning with union and upazila committees",
      "Anticipatory action triggered by forecast-based financing",
    ],
    outcomes: [
      { value: "63%", label: "drop in flood-related asset loss" },
      { value: "2.4×", label: "increase in saline-tolerant yields" },
    ],
  },
  {
    slug: "disaster-risk-reduction",
    name: "Disaster Risk Reduction",
    icon: "shield",
    tone: "coral",
    summary:
      "Building early-warning systems, trained volunteers and prepared institutions so disasters cause fewer losses.",
    overview:
      "From cyclones to flash floods, PHD strengthens the full disaster-management cycle. We invest in preparedness and anticipatory action so that communities act before a hazard becomes a catastrophe.",
    sdgs: [11, 13, 1],
    stats: [
      { value: "9,800", label: "trained volunteers" },
      { value: "112", label: "early-warning units" },
      { value: "24 hrs", label: "average lead-time gained" },
    ],
    approaches: [
      "Community-based early-warning and last-mile dissemination",
      "Contingency planning and simulation drills with local government",
      "Forecast-based financing and pre-positioned relief stocks",
      "Inclusive evacuation planning for women, elderly and persons with disability",
    ],
    outcomes: [
      { value: "41%", label: "faster evacuation times" },
      { value: "0", label: "preventable deaths in pilot unions" },
    ],
  },
  {
    slug: "livelihoods",
    name: "Livelihoods & Food Security",
    icon: "sprout",
    tone: "accent",
    summary:
      "Lifting families out of poverty with climate-smart agriculture, market access and inclusive value chains.",
    overview:
      "Sustainable income is the foundation of resilience. PHD links smallholders, women entrepreneurs and youth to skills, finance and markets — turning subsistence into surplus and dependency into dignity.",
    sdgs: [1, 2, 8, 5],
    stats: [
      { value: "186k", label: "households with new income" },
      { value: "BDT 2.1B", label: "additional income generated" },
      { value: "640", label: "producer groups formed" },
    ],
    approaches: [
      "Climate-smart and saline-tolerant agriculture",
      "Village savings & loan associations and graduation model",
      "Market systems development and value-chain upgrading",
      "Vocational and enterprise skills for youth and women",
    ],
    outcomes: [
      { value: "2.3×", label: "average household income growth" },
      { value: "71%", label: "of borrowers women-led" },
    ],
  },
  {
    slug: "health-nutrition",
    name: "Health & Nutrition",
    icon: "heart",
    tone: "coral",
    summary:
      "Bringing essential maternal, child and community health services to underserved districts.",
    overview:
      "PHD extends the reach of the public health system into hard-to-reach communities — combining frontline health workers, nutrition counselling and referral networks to reduce preventable deaths and stunting.",
    sdgs: [3, 2, 6],
    stats: [
      { value: "1.2M", label: "health-service contacts" },
      { value: "2,300", label: "community health workers" },
      { value: "94%", label: "immunisation coverage reached" },
    ],
    approaches: [
      "Maternal, newborn and child health outreach",
      "Community management of acute malnutrition",
      "Adolescent and reproductive health services",
      "Digital referral and patient-tracking systems",
    ],
    outcomes: [
      { value: "38%", label: "reduction in child stunting" },
      { value: "29%", label: "fewer maternal complications" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "book",
    tone: "brand",
    summary:
      "Keeping children — especially girls — learning through inclusive, climate-aware education.",
    overview:
      "Education is interrupted by poverty, disaster and discrimination. PHD runs second-chance learning centres, supports government schools, and removes the barriers that keep the most marginalised children out of class.",
    sdgs: [4, 5, 10],
    stats: [
      { value: "94k", label: "children enrolled" },
      { value: "1,150", label: "learning centres" },
      { value: "88%", label: "transition to formal school" },
    ],
    approaches: [
      "Second-chance and accelerated learning programmes",
      "Disability-inclusive and mother-tongue education",
      "Teacher training and digital learning content",
      "School-based disaster preparedness",
    ],
    outcomes: [
      { value: "+22pp", label: "girls' completion rate" },
      { value: "3:2", label: "girl-to-boy enrolment ratio" },
    ],
  },
  {
    slug: "wash",
    name: "Water, Sanitation & Hygiene",
    icon: "drop",
    tone: "brand",
    summary:
      "Safe water and dignified sanitation for communities facing salinity, arsenic and flooding.",
    overview:
      "Clean water is a daily struggle in saline and flood-prone Bangladesh. PHD delivers climate-resilient WASH infrastructure and behaviour change that keeps families healthy through every season.",
    sdgs: [6, 3, 5],
    stats: [
      { value: "742k", label: "people with safe water" },
      { value: "1,900", label: "climate-resilient latrines" },
      { value: "520", label: "water points rehabilitated" },
    ],
    approaches: [
      "Managed aquifer recharge and rainwater harvesting",
      "Desalination and pond-sand-filter systems",
      "Community-led total sanitation",
      "Menstrual hygiene management in schools",
    ],
    outcomes: [
      { value: "57%", label: "fewer waterborne illnesses" },
      { value: "100%", label: "of target unions open-defecation free" },
    ],
  },
  {
    slug: "women-empowerment",
    name: "Women's Empowerment",
    icon: "spark",
    tone: "accent",
    summary:
      "Advancing women's economic power, leadership and protection from violence.",
    overview:
      "Gender equality is woven through everything PHD does — and championed directly through programmes that put resources, voice and safety in women's hands.",
    sdgs: [5, 8, 10, 16],
    stats: [
      { value: "210k", label: "women reached" },
      { value: "3,400", label: "women in leadership roles" },
      { value: "61%", label: "of staff are women" },
    ],
    approaches: [
      "Women's economic empowerment and enterprise",
      "Prevention of and response to gender-based violence",
      "Women's participation in local governance",
      "Engaging men and boys as allies",
    ],
    outcomes: [
      { value: "2.7×", label: "rise in women's asset ownership" },
      { value: "48%", label: "more women in union councils" },
    ],
  },
  {
    slug: "emergency-response",
    name: "Emergency Response",
    icon: "pulse",
    tone: "coral",
    summary:
      "Fast, accountable, dignified humanitarian assistance when crisis strikes.",
    overview:
      "When floods, cyclones or displacement overwhelm communities, PHD responds within hours — delivering cash, shelter, water and protection while upholding humanitarian standards and accountability to affected people.",
    sdgs: [1, 2, 3, 11],
    stats: [
      { value: "1.6M", label: "people assisted in crises" },
      { value: "<48 hrs", label: "typical response time" },
      { value: "BDT 1.4B", label: "humanitarian cash delivered" },
    ],
    approaches: [
      "Multipurpose cash and voucher assistance",
      "Emergency shelter, WASH and dignity kits",
      "Protection and psychosocial support",
      "Accountability to affected populations and CHS compliance",
    ],
    outcomes: [
      { value: "92%", label: "recipients report needs met" },
      { value: "Day 1", label: "response activation capability" },
    ],
  },
];

export const programBySlug = (slug: string) =>
  programs.find((p) => p.slug === slug);
