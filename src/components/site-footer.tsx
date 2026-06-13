import Link from "next/link";
import { org } from "@/lib/site";
import { Logo } from "@/components/ui";
import { Icon } from "@/components/icons";

const footerCols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "About",
    links: [
      { label: "Who we are", href: "/about" },
      { label: "Leadership & board", href: "/about#leadership" },
      { label: "Strategic plan", href: "/about#strategy" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Our work",
    links: [
      { label: "Program areas", href: "/what-we-do" },
      { label: "Projects", href: "/projects" },
      { label: "Where we work", href: "/where-we-work" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge hub", href: "/knowledge" },
      { label: "Annual reports", href: "/knowledge#annual" },
      { label: "News & media", href: "/knowledge#news" },
      { label: "Procurement", href: "/get-involved#procurement" },
    ],
  },
  {
    title: "Accountability",
    links: [
      { label: "Transparency", href: "/transparency" },
      { label: "Financial statements", href: "/transparency#financials" },
      { label: "Safeguarding", href: "/transparency#policies" },
      { label: "Complaints mechanism", href: "/transparency#complaints" },
    ],
  },
];

const socials: { label: string; href: string }[] = [
  { label: "in", href: org.social.linkedin },
  { label: "f", href: org.social.facebook },
  { label: "X", href: org.social.x },
  { label: "▶", href: org.social.youtube },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-950 text-white/80">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="rail grid gap-8 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay close to the frontline.
            </h2>
            <p className="mt-2 max-w-md text-white/70">
              Quarterly impact, research and field stories from across Bangladesh —
              straight to your inbox. No noise.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-3 md:ml-auto"
            // Demo prototype — no backend wired
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="you@organisation.org"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-400 px-6 py-3 font-semibold text-ink transition-colors hover:bg-accent-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="rail grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {org.fullName} — a Bangladeshi development and humanitarian
            organisation building dignity, resilience and opportunity with the
            country&apos;s most vulnerable communities since {org.established}.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p className="flex items-start gap-2">
              <Icon.mapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span>
                {org.headOffice.line1}, {org.headOffice.line2}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Icon.phone className="h-4 w-4 shrink-0 text-accent-300" />
              {org.headOffice.phone}
            </p>
            <p className="flex items-center gap-2">
              <Icon.mail className="h-4 w-4 shrink-0 text-accent-300" />
              {org.headOffice.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/65 transition-colors hover:text-accent-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation strip */}
      <div className="border-t border-white/10">
        <div className="rail flex flex-wrap items-center gap-x-6 gap-y-2 py-5 text-[0.72rem] uppercase tracking-[0.12em] text-white/45">
          <span className="font-semibold text-white/60">Registered &amp; compliant:</span>
          <span>NGO Affairs Bureau</span>
          <span>•</span>
          <span>Joint Stock</span>
          <span>•</span>
          <span>Microcredit Regulatory Authority</span>
          <span>•</span>
          <span>Core Humanitarian Standard</span>
          <span>•</span>
          <span>ISO 9001</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="rail flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {org.established}–2026 {org.shortName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/transparency" className="hover:text-white/80">Privacy</Link>
            <Link href="/transparency" className="hover:text-white/80">Terms</Link>
            <Link href="/transparency#complaints" className="hover:text-white/80">Report a concern</Link>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs font-semibold text-white/70 transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
