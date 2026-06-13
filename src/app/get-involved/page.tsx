import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, Badge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { partnerGroups, tenders } from "@/data/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner with PHD — donors and development partners, corporate CSR, procurement and tenders, and ways to give.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        kicker="Get involved"
        title="Resilience is built together."
        intro="Whether you fund, partner, supply or give — there's a meaningful way to stand with Bangladesh's most vulnerable communities."
        crumbs={[{ label: "Get involved", href: "/get-involved" }]}
      />

      {/* Donate */}
      <section id="donate" className="py-16 lg:py-20">
        <div className="rail grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Give"
              title="Your support, multiplied in the field."
              intro="Every contribution is pooled with co-financing, delivered through proven models, and reported on transparently. 87 taka of every 100 reaches programmes."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {["৳1,000", "৳5,000", "৳25,000", "Custom"].map((a, i) => (
                <button
                  key={a}
                  className={`rounded-full px-6 py-3 font-semibold ${i === 1 ? "bg-brand-700 text-white" : "bg-paper-2 text-ink hover:bg-brand-50"}`}
                >
                  {a}
                </button>
              ))}
            </div>
            <Button href="#" variant="secondary" size="lg" className="mt-5" withArrow>
              Donate securely
            </Button>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 card-shadow">
            <h3 className="font-display text-lg font-bold">Where your money goes</h3>
            <div className="mt-5 space-y-4">
              {[
                { l: "Programmes & frontline delivery", pct: 87 },
                { l: "Monitoring, evaluation & accountability", pct: 7 },
                { l: "Administration & governance", pct: 6 },
              ].map((r) => (
                <div key={r.l}>
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-soft">{r.l}</span>
                    <span className="font-display font-bold text-brand-800">{r.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-paper-2">
                    <div className="h-full rounded-full bg-brand-600" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading
            kicker="Donors & partners"
            title="In good company"
            intro="PHD is proud to deliver alongside UN agencies, bilateral donors, multilaterals and foundations who share our commitment to evidence and accountability."
          />
          <div className="mt-10 space-y-8">
            {partnerGroups.map((g) => (
              <div key={g.group}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{g.group}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.names.map((n) => (
                    <span key={n} className="flex h-14 items-center rounded-xl border border-black/5 bg-white px-6 font-display text-sm font-bold text-ink-soft">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section id="csr" className="py-16 lg:py-20">
        <div className="rail grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="rounded-3xl mesh dotgrid p-8 text-white lg:p-10">
            <Icon.handshake className="h-9 w-9 text-accent-300" />
            <h2 className="mt-4 font-display text-2xl font-bold">Corporate &amp; CSR partnerships</h2>
            <p className="mt-3 text-white/80">
              Align your CSR with measurable impact — from climate and WASH to women&apos;s
              livelihoods. We co-design, deliver and report against your objectives.
            </p>
            <Button href="/contact" variant="secondary" size="sm" className="mt-5">Discuss a partnership</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Co-funded programmes", d: "Sponsor a project from design to evaluation." },
              { t: "Employee engagement", d: "Skills-based volunteering and matched giving." },
              { t: "Cause marketing", d: "Tie products and campaigns to verified impact." },
              { t: "In-kind & technology", d: "Contribute goods, services or expertise." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-black/5 bg-white p-6 card-shadow">
                <p className="font-display font-bold text-ink">{c.t}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section id="procurement" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading
            kicker="Procurement"
            title="Tenders & procurement notices"
            intro="PHD procures goods and services through a fair, transparent and competitive process. Current opportunities are listed below."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
            <ul className="divide-y divide-black/5">
              {tenders.map((t) => (
                <li key={t.ref} className="flex flex-wrap items-center gap-4 px-5 py-4 hover:bg-brand-50/40">
                  <Icon.doc className="h-6 w-6 shrink-0 text-brand-700" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{t.title}</p>
                    <p className="font-mono text-xs text-ink-soft">{t.ref}</p>
                  </div>
                  <Badge tone="accent">{t.type}</Badge>
                  <span className="text-xs text-ink-soft">Closes {t.closing}</span>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">
                    <Icon.download className="h-4 w-4" /> Documents
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-sm text-ink-soft">
            Vendors can register on our supplier roster via the{" "}
            <a href="/contact" className="font-semibold text-brand-700 link-underline">procurement contact form</a>.
          </p>
        </div>
      </section>
    </>
  );
}
