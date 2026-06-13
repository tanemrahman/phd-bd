import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icon = {
  leaf: (p: IconProps) => (
    <svg {...base(p)}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z" /><path d="M11 20c0-7 2-11 9-13" /></svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  sprout: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 21v-7" /><path d="M12 14C12 9 8 8 4 8c0 4 4 6 8 6Z" /><path d="M12 13c0-4 4-6 8-6 0 4-4 6-8 6Z" /></svg>
  ),
  heart: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 20s-7-4.5-9.3-9C1 7.5 3 4.5 6.3 4.8 8.2 5 12 8 12 8s3.8-3 5.7-3.2C21 4.5 23 7.5 21.3 11 19 15.5 12 20 12 20Z" /></svg>
  ),
  book: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19a2 2 0 0 1 2-2h12" /></svg>
  ),
  drop: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" /></svg>
  ),
  spark: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /><circle cx="12" cy="12" r="2.5" /></svg>
  ),
  pulse: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 12h4l2 6 4-14 2 8h6" /></svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  arrowUpRight: (p: IconProps) => (
    <svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>
  ),
  chevronDown: (p: IconProps) => (
    <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
  ),
  close: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  search: (p: IconProps) => (
    <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
  ),
  globe: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg>
  ),
  mapPin: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  doc: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v4h4M9 13h6M9 16h6" /></svg>
  ),
  download: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
  ),
  check: (p: IconProps) => (
    <svg {...base(p)}><path d="m5 12 4 4 10-11" /></svg>
  ),
  chart: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 4v16h16" /><rect x="7" y="11" width="3" height="6" /><rect x="12" y="7" width="3" height="10" /><rect x="17" y="13" width="3" height="4" /></svg>
  ),
  users: (p: IconProps) => (
    <svg {...base(p)}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" /></svg>
  ),
  briefcase: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg>
  ),
  handshake: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 12 4-4 5 3 5-3 4 4-5 6-4-3-4 3Z" /></svg>
  ),
  target: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>
  ),
  scale: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 4v16M7 20h10M5 9l-2 5h6Zm14 0-2 5h6ZM5 9l7-3 7 3" /></svg>
  ),
};

export type IconKey = keyof typeof Icon;
