import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button, toneText, toneBg } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "PHD's eight integrated program areas — from climate resilience and disaster risk reduction to health, education, WASH and women's empowerment.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Integrated programmes for resilient, dignified communities."
        intro="PHD works across eight interconnected program areas. We design them to reinforce one another — because real resilience is never single-sector."
        crumbs={[{ label: "What we do", href: "/what-we-do" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="rail grid gap-6 md:grid-cols-2">
          {programs.map((p) => {
            const I = Icon[p.icon as IconKey];
            return (
              <Link
                key={p.slug}
                href={`/what-we-do/${p.slug}`}
                className="group grid gap-6 rounded-3xl border border-black/5 bg-white p-7 transition-all hover:-translate-y-1 card-shadow hover:card-shadow-lg sm:grid-cols-[auto_1fr]"
              >
                <span className={`grid h-14 w-14 place-items-center self-start rounded-2xl ${toneBg[p.tone]} ${toneText[p.tone]}`}>
                  <I className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {p.stats.slice(0, 3).map((s) => (
                      <div key={s.label}>
                        <span className={`font-display text-lg font-bold ${toneText[p.tone]}`}>{s.value}</span>{" "}
                        <span className="text-xs text-ink-soft">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Explore programme
                    <Icon.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <h2 className="max-w-2xl text-3xl font-bold">How we work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Listen", d: "Co-define problems with communities and local government." },
              { n: "02", t: "Design", d: "Build evidence-based, inclusive programmes with partners." },
              { n: "03", t: "Deliver", d: "Implement with rigorous MEAL and accountability built in." },
              { n: "04", t: "Sustain", d: "Hand over to local systems so impact outlasts the project." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-black/5 bg-white p-6 card-shadow">
                <span className="font-display text-3xl font-extrabold text-accent-400">{s.n}</span>
                <p className="mt-2 font-display text-lg font-bold text-ink">{s.t}</p>
                <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/projects" variant="primary" withArrow>
              Browse the project directory
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
