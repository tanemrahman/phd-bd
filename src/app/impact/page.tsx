import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, Badge, toneBg, toneText } from "@/components/ui";
import { Counter } from "@/components/counter";
import { Icon } from "@/components/icons";
import { headlineStats, stories, sdgList } from "@/data/content";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "PHD's live impact dashboard — results disaggregated by sector, district and donor, SDG alignment, climate impact and beneficiary stories.",
};

const sectorImpact = [
  { sector: "Climate resilience", reached: 318, pct: 64, tone: "brand" },
  { sector: "Livelihoods & food security", reached: 186, pct: 92, tone: "accent" },
  { sector: "Health & nutrition", reached: 1200, pct: 100, tone: "coral" },
  { sector: "WASH", reached: 742, pct: 78, tone: "brand" },
  { sector: "Education", reached: 94, pct: 48, tone: "brand" },
  { sector: "Women's empowerment", reached: 210, pct: 70, tone: "accent" },
];

const climate = [
  { v: "1,240 ha", l: "Land & mangrove restored" },
  { v: "84,000 t", l: "CO₂e avoided / sequestered" },
  { v: "47", l: "Climate-resilient schemes" },
  { v: "318K", l: "People climate-proofed" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        kicker="Impact"
        title="Proof, not promises."
        intro="We publish what changes in people's lives — measured by independent evaluators and our own MEAL systems, disaggregated by sex, age and disability."
        crumbs={[{ label: "Impact", href: "/impact" }]}
      />

      {/* Dashboard */}
      <section id="dashboard" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Impact dashboard" title="Cumulative impact at a glance" />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/5 card-shadow md:grid-cols-3 lg:grid-cols-5">
            {headlineStats.map((s) => (
              <div key={s.label} className="bg-white p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-brand-800 sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-semibold text-ink">{s.label}</div>
                <div className="mt-0.5 text-xs text-ink-soft">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Results bars */}
          <div id="results" className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">People reached by sector</h3>
              <p className="mt-2 text-sm text-ink-soft">Thousands of people, latest reporting period.</p>
              <div className="mt-6 space-y-4">
                {sectorImpact.map((s) => (
                  <div key={s.sector}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{s.sector}</span>
                      <span className="font-display font-bold text-brand-800">{s.reached}K</span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-paper-2">
                      <div
                        className={`h-full rounded-full ${s.tone === "accent" ? "bg-accent-400" : s.tone === "coral" ? "bg-coral-500" : "bg-brand-600"}`}
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl mesh dotgrid p-8 text-white">
              <h3 className="text-2xl font-bold">Before &amp; after</h3>
              <p className="mt-2 text-sm text-white/75">
                Endline vs. baseline across PHD's graduation programmes.
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { l: "Households above poverty line", before: 18, after: 71 },
                  { l: "Women owning productive assets", before: 22, after: 64 },
                  { l: "Children fully immunised", before: 61, after: 94 },
                ].map((r) => (
                  <div key={r.l}>
                    <p className="text-sm text-white/80">{r.l}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1">
                        <div className="h-3 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-white/30" style={{ width: `${r.before}%` }} />
                        </div>
                      </div>
                      <span className="w-10 text-right text-xs text-white/50">{r.before}%</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-3">
                      <div className="flex-1">
                        <div className="h-3 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-accent-400" style={{ width: `${r.after}%` }} />
                        </div>
                      </div>
                      <span className="w-10 text-right text-xs font-bold text-accent-300">{r.after}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG alignment */}
      <section id="sdg" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading
            kicker="SDG alignment"
            title="Mapped to the Global Goals"
            intro="Every PHD project is tagged to the Sustainable Development Goals it advances — making our contribution to national and global targets measurable."
          />
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {sdgList.map((s) => (
              <div
                key={s.n}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl p-3 text-center text-white"
                style={{ backgroundColor: s.color }}
              >
                <span className="font-display text-2xl font-extrabold">{s.n}</span>
                <span className="mt-1 text-[0.62rem] font-semibold leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate tracker */}
      <section id="climate" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Climate impact tracker" title="Environmental outcomes we can count" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {climate.map((c) => (
              <div key={c.l} className="rounded-2xl border border-black/5 bg-white p-7 card-shadow">
                <Icon.leaf className="h-7 w-7 text-brand-700" />
                <p className="mt-4 font-display text-3xl font-extrabold text-brand-800">{c.v}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Beneficiary stories" title="Behind every number, a life changed" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article key={s.slug} className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white card-shadow">
                <div className="duotone relative aspect-[4/3]">
                  <span className="absolute bottom-3 left-3">
                    <Badge tone="neutral" className="bg-white/90">{s.program}</Badge>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-tight text-ink">{s.headline}</h3>
                  <p className="mt-3 flex-1 text-sm italic text-ink-soft">&ldquo;{s.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                    <span className={`grid h-10 w-10 place-items-center rounded-full ${toneBg[s.tone]} ${toneText[s.tone]} font-display font-bold`}>
                      {s.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{s.name}</p>
                      <p className="text-xs text-ink-soft">{s.location}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/knowledge" variant="primary" withArrow>Read evaluations &amp; case studies</Button>
          </div>
        </div>
      </section>
    </>
  );
}
