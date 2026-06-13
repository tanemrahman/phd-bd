import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/icons";

/* ---------------- Button ---------------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white" | "outline-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  withArrow?: boolean;
};

const variants: Record<string, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
  secondary:
    "bg-accent-400 text-ink hover:bg-accent-300 shadow-sm",
  ghost:
    "bg-brand-50 text-brand-800 hover:bg-brand-100",
  white:
    "bg-white text-brand-800 hover:bg-brand-50 shadow-sm",
  "outline-white":
    "border border-white/40 text-white hover:bg-white/10",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
      {withArrow && (
        <Icon.arrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ---------------- Kicker / eyebrow ---------------- */
export function Kicker({
  children,
  className,
  light,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("kicker", light && "text-accent-300", className)}>
      <span
        className={cn(
          "h-px w-6",
          light ? "bg-accent-300" : "bg-brand-600",
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  light,
  className,
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && <Kicker light={light}>{kicker}</Kicker>}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-[2.7rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/75" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------- Badge / pill ---------------- */
export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "accent" | "coral" | "neutral";
  className?: string;
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-50 text-brand-800 ring-brand-600/20",
    accent: "bg-accent-50 text-accent-800 ring-accent-500/25",
    coral: "bg-coral-500/10 text-coral-700 ring-coral-500/25",
    neutral: "bg-paper-2 text-ink-soft ring-black/10",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Logo ---------------- */
export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="PHD — home"
    >
      <span
        className={cn(
          "grid h-11 w-11 place-items-center rounded-xl shadow-sm transition-transform group-hover:scale-105",
          light ? "bg-white" : "bg-brand-700",
        )}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <path
            d="M16 3c5 4 9 8 9 14a9 9 0 0 1-18 0c0-6 4-10 9-14Z"
            fill={light ? "#0e7c64" : "#ffffff"}
          />
          <path
            d="M16 11c2.4 1.8 4 3.6 4 6a4 4 0 1 1-8 0c0-2.4 1.6-4.2 4-6Z"
            fill={light ? "#e0a536" : "#e0a536"}
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          PHD
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-semibold uppercase tracking-[0.14em]",
            light ? "text-white/70" : "text-ink-soft",
          )}
        >
          Bangladesh
        </span>
      </span>
    </Link>
  );
}

/* ---------------- Tone helpers ---------------- */
export const toneText: Record<string, string> = {
  brand: "text-brand-700",
  accent: "text-accent-600",
  coral: "text-coral-600",
};
export const toneBg: Record<string, string> = {
  brand: "bg-brand-50",
  accent: "bg-accent-50",
  coral: "bg-coral-500/10",
};
export const toneSolid: Record<string, string> = {
  brand: "bg-brand-700",
  accent: "bg-accent-400",
  coral: "bg-coral-500",
};
export const toneRing: Record<string, string> = {
  brand: "ring-brand-600/15",
  accent: "ring-accent-500/20",
  coral: "ring-coral-500/20",
};
