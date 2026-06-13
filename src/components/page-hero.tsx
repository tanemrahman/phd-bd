import Link from "next/link";
import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";
import { Icon } from "@/components/icons";

export function PageHero({
  kicker,
  title,
  intro,
  crumbs = [],
  children,
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: { label: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden mesh text-white">
      <div className="absolute inset-0 dotgrid opacity-50" aria-hidden />
      <div className="rail relative py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-2">
                <Icon.chevronDown className="h-3.5 w-3.5 -rotate-90 text-white/40" />
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
        {kicker && <Kicker light>{kicker}</Kicker>}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
