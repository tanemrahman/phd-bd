import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, Badge } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Transparency & Accountability",
  description:
    "PHD's financial statements, audit reports, policies, safeguarding, anti-corruption stance and complaints mechanism — accountability by design.",
};

const docs = [
  { t: "Audited Financial Statements FY2024–25", type: "Financial", year: "2025" },
  { t: "Annual Audit Report (External)", type: "Audit", year: "2025" },
  { t: "Income & Expenditure Summary", type: "Financial", year: "2025" },
  { t: "Donor Fund Utilisation Report", type: "Financial", year: "2024" },
];

const policies = [
  { t: "Safeguarding (PSEAH) Policy", icon: "shield" as const },
  { t: "Child Protection Policy", icon: "users" as const },
  { t: "Anti-Corruption & Fraud Policy", icon: "scale" as const },
  { t: "Whistleblower Policy", icon: "pulse" as const },
  { t: "Conflict of Interest Policy", icon: "target" as const },
  { t: "Data Protection & Privacy Policy", icon: "doc" as const },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        kicker="Transparency & accountability"
        title="Open books. Open feedback. Open to scrutiny."
        intro="Accountability isn't a department at PHD — it's a design principle. Here are the documents, policies and channels that let anyone hold us to account."
        crumbs={[{ label: "Transparency", href: "/transparency" }]}
      />

      {/* Financials */}
      <section id="financials" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Financials & audit" title="Where the money comes from — and goes" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div id="audit" className="overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
              <ul className="divide-y divide-black/5">
                {docs.map((d) => (
                  <li key={d.t} className="flex items-center gap-4 px-5 py-4 hover:bg-brand-50/40">
                    <Icon.doc className="h-6 w-6 shrink-0 text-brand-700" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{d.t}</p>
                      <p className="text-xs text-ink-soft">{d.year}</p>
                    </div>
                    <Badge tone="neutral">{d.type}</Badge>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">
                      <Icon.download className="h-4 w-4" /> PDF
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-brand-700 p-8 text-white">
              <h3 className="font-display text-lg font-bold">Annual income</h3>
              <p className="mt-1 font-display text-4xl font-extrabold text-accent-300">৳1.94B</p>
              <p className="text-sm text-white/70">FY2024–25 · independently audited</p>
              <div className="mt-6 space-y-3">
                {[
                  { l: "Institutional & bilateral donors", pct: 72 },
                  { l: "UN agencies", pct: 16 },
                  { l: "Foundations & corporate", pct: 9 },
                  { l: "Individual & other", pct: 3 },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>{r.l}</span><span className="font-bold text-white">{r.pct}%</span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-accent-400" style={{ width: `${r.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Policies & safeguarding" title="The standards we hold ourselves to" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((p) => {
              const I = Icon[p.icon];
              return (
                <div key={p.t} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-6 card-shadow">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <I className="h-6 w-6" />
                  </span>
                  <p className="font-semibold text-ink">{p.t}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complaints */}
      <section id="complaints" className="py-16 lg:py-20">
        <div className="rail">
          <div className="overflow-hidden rounded-3xl mesh dotgrid p-8 text-white lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge tone="accent" className="bg-white/10 text-accent-300 ring-white/20">Confidential · safe · responsive</Badge>
                <h2 className="mt-4 font-display text-3xl font-bold">Complaints &amp; feedback mechanism</h2>
                <p className="mt-3 text-white/80">
                  Anyone — a community member, partner, supplier or member of staff — can raise a
                  concern about PHD&apos;s conduct. Reports can be made anonymously and are handled
                  independently, without retaliation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact" variant="secondary" withArrow>Report a concern</Button>
                  <Button href="/contact" variant="outline-white">Community hotline</Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Hotline", d: "+880 1700 000 000", icon: "phone" as const },
                  { t: "Confidential email", d: "speakup@phd-bd.com", icon: "mail" as const },
                  { t: "Web form", d: "Anonymous online reporting", icon: "doc" as const },
                  { t: "In person", d: "Help desks at every field site", icon: "mapPin" as const },
                ].map((c) => {
                  const I = Icon[c.icon];
                  return (
                    <div key={c.t} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                      <I className="h-6 w-6 text-accent-300" />
                      <p className="mt-2 font-semibold">{c.t}</p>
                      <p className="text-sm text-white/70">{c.d}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
