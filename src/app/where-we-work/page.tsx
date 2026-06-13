import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BangladeshMap } from "@/components/bangladesh-map";
import { SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { divisionNodes } from "@/data/map";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "PHD's coverage across all eight divisions and 41 districts of Bangladesh — explore project locations, district coverage and regional offices.",
};

const offices = [
  { name: "Head Office", city: "Dhaka", role: "Strategy, finance & partnerships" },
  { name: "Coastal Regional Office", city: "Khulna", role: "South-west coastal programmes" },
  { name: "Haor Regional Office", city: "Sylhet", role: "North-east wetland programmes" },
  { name: "Char Regional Office", city: "Rangpur", role: "Northern char & flood programmes" },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <PageHero
        kicker="Where we work"
        title="Following vulnerability, not visibility."
        intro="PHD operates in 41 of Bangladesh's 64 districts — concentrated where climate, poverty and disaster risk hit hardest. Explore our footprint division by division."
        crumbs={[{ label: "Where we work", href: "/where-we-work" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="rail">
          <BangladeshMap />
        </div>
      </section>

      <section className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Division coverage" title="Our reach, division by division" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper-2 text-xs uppercase tracking-wide text-ink-soft">
                <tr>
                  <th className="px-5 py-4 font-semibold">Division</th>
                  <th className="px-5 py-4 font-semibold">Focus</th>
                  <th className="px-5 py-4 text-right font-semibold">Districts</th>
                  <th className="px-5 py-4 text-right font-semibold">Projects</th>
                  <th className="px-5 py-4 text-right font-semibold">People reached</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {divisionNodes.map((d) => (
                  <tr key={d.name} className="hover:bg-brand-50/40">
                    <td className="px-5 py-4 font-display font-bold text-ink">{d.name}</td>
                    <td className="px-5 py-4 text-ink-soft">{d.headline}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{d.districts}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{d.projects}</td>
                    <td className="px-5 py-4 text-right font-semibold text-brand-800">
                      {(d.beneficiaries / 1000).toFixed(0)}K
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Regional offices" title="Close to the communities we serve" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <div key={o.name} className="rounded-2xl border border-black/5 bg-white p-6 card-shadow">
                <Icon.mapPin className="h-7 w-7 text-brand-700" />
                <p className="mt-3 font-display text-lg font-bold text-ink">{o.city}</p>
                <p className="text-sm font-semibold text-brand-700">{o.name}</p>
                <p className="mt-2 text-sm text-ink-soft">{o.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary" withArrow>Contact a regional office</Button>
          </div>
        </div>
      </section>
    </>
  );
}
