import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, Badge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { jobs } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PHD — current job openings, internships, volunteer opportunities and talent-pool registration across Bangladesh.",
};

const perks = [
  { t: "Purpose at scale", d: "Your work reaches communities most others never reach.", icon: "target" as const },
  { t: "Grow with us", d: "Structured learning, mentoring and clear progression.", icon: "chart" as const },
  { t: "Safe & inclusive", d: "A safeguarding-first, gender-balanced workplace.", icon: "shield" as const },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Do the work that matters most."
        intro="PHD is a team of 900+ people across Bangladesh. We're looking for those who pair technical excellence with a deep respect for the communities we serve."
        crumbs={[{ label: "Careers", href: "/careers" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="rail">
          <div className="grid gap-5 md:grid-cols-3">
            {perks.map((p) => {
              const I = Icon[p.icon];
              return (
                <div key={p.t} className="rounded-2xl border border-black/5 bg-white p-7 card-shadow">
                  <I className="h-7 w-7 text-brand-700" />
                  <p className="mt-3 font-display text-lg font-bold text-ink">{p.t}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Open positions" title="Current vacancies" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
            <ul className="divide-y divide-black/5">
              {jobs.map((j) => (
                <li key={j.title} className="flex flex-wrap items-center gap-4 px-5 py-5 hover:bg-brand-50/40">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-bold text-ink">{j.title}</h3>
                      <Badge tone={j.type === "Internship" ? "accent" : "brand"}>{j.type}</Badge>
                    </div>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
                      <span className="flex items-center gap-1"><Icon.briefcase className="h-3.5 w-3.5" /> {j.unit}</span>
                      <span className="flex items-center gap-1"><Icon.mapPin className="h-3.5 w-3.5" /> {j.location}</span>
                      <span>Closes {j.closing}</span>
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">
                    Apply <Icon.arrowRight className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-16 lg:py-20">
        <div className="rail grid gap-6 md:grid-cols-3">
          {[
            { id: "internships", t: "Internships", d: "Hands-on experience across programmes, MEAL, finance and communications.", cta: "View internships" },
            { id: "volunteer", t: "Volunteer", d: "Lend your skills to community mobilisation and emergency response.", cta: "Become a volunteer" },
            { id: "talent", t: "Talent pool", d: "Not seeing the right role? Register your profile for future openings.", cta: "Join the talent pool" },
          ].map((c) => (
            <div key={c.id} id={c.id} className="flex flex-col rounded-3xl mesh dotgrid p-7 text-white">
              <h3 className="font-display text-xl font-bold">{c.t}</h3>
              <p className="mt-2 flex-1 text-sm text-white/75">{c.d}</p>
              <Button href="/contact" variant="secondary" size="sm" className="mt-5 self-start">
                {c.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="rail rounded-3xl border border-accent-300/40 bg-accent-50 p-7 text-center">
          <p className="text-sm font-medium text-ink">
            <b>PHD is an equal-opportunity employer.</b> We are committed to safeguarding and
            zero tolerance of sexual exploitation, abuse and harassment. All offers are subject to
            reference and background checks.
          </p>
        </div>
      </section>
    </>
  );
}
