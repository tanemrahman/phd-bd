import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, Badge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { publications, news } from "@/data/content";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "PHD's publications, research, policy briefs, annual reports, evaluations and newsletters — plus the latest news, press and media.",
};

const typeTone: Record<string, "brand" | "accent" | "coral" | "neutral"> = {
  "Annual Report": "brand",
  Research: "accent",
  "Policy Brief": "coral",
  Evaluation: "brand",
  Financial: "neutral",
  Newsletter: "accent",
};

export default function KnowledgePage() {
  const annual = publications.filter((p) => p.type === "Annual Report");
  const rest = publications.filter((p) => p.type !== "Annual Report");

  return (
    <>
      <PageHero
        kicker="Knowledge hub"
        title="Evidence, openly shared."
        intro="Research, evaluations, policy briefs and reports from across PHD's programmes — because what we learn belongs to the whole sector."
        crumbs={[{ label: "Knowledge", href: "/knowledge" }]}
      />

      {/* Annual reports */}
      <section id="annual" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Digital annual report" title="Our year, in full" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {annual.map((p, i) => (
              <div
                key={p.title}
                className={`group flex items-center gap-6 rounded-3xl p-7 card-shadow ${i === 0 ? "mesh dotgrid text-white" : "border border-black/5 bg-white"}`}
              >
                <div className={`grid h-20 w-16 shrink-0 place-items-center rounded-xl ${i === 0 ? "bg-white/15" : "bg-paper-2"}`}>
                  <Icon.doc className={`h-8 w-8 ${i === 0 ? "text-accent-300" : "text-brand-700"}`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wide ${i === 0 ? "text-accent-300" : "text-brand-700"}`}>
                    {p.year} · {p.pages} pages
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold leading-tight">{p.title}</h3>
                  <div className="mt-4 flex gap-3">
                    <button className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? "bg-accent-400 text-ink" : "bg-brand-700 text-white"}`}>
                      <Icon.arrowUpRight className="h-4 w-4" /> Read online
                    </button>
                    <button className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? "text-white ring-1 ring-white/30" : "text-brand-800 ring-1 ring-brand-600/20"}`}>
                      <Icon.download className="h-4 w-4" /> PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications library */}
      <section id="publications" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading kicker="Publications library" title="Research, briefs & evaluations" />
            <div className="relative">
              <Icon.search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
              <input
                placeholder="Search the library…"
                className="rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
            <ul className="divide-y divide-black/5">
              {rest.map((p) => (
                <li key={p.title} className="flex flex-wrap items-center gap-4 px-5 py-4 hover:bg-brand-50/40">
                  <Icon.doc className="h-6 w-6 shrink-0 text-brand-700" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{p.title}</p>
                    <p className="text-xs text-ink-soft">{p.year} · {p.pages} pages</p>
                  </div>
                  <Badge tone={typeTone[p.type]}>{p.type}</Badge>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">
                    <Icon.download className="h-4 w-4" /> Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p id="newsletters" className="mt-6 text-sm text-ink-soft">
            Looking for our newsletter? Subscribe in the footer to receive every quarterly edition.
          </p>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Newsroom" title="News, press & events" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {news.map((n) => (
              <article key={n.title} className="group flex gap-5 rounded-3xl border border-black/5 bg-white p-6 card-shadow hover:card-shadow-lg">
                <div className="duotone h-28 w-36 shrink-0 rounded-xl" />
                <div>
                  <div className="flex items-center gap-3 text-xs">
                    <Badge tone="coral">{n.category}</Badge>
                    <span className="text-ink-soft">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold leading-tight text-ink group-hover:text-brand-800">{n.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media gallery */}
      <section id="media" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Media centre" title="Photo & video gallery" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="duotone group relative aspect-square overflow-hidden rounded-2xl">
                {i % 3 === 0 && (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-brand-700">
                      <Icon.pulse className="h-6 w-6" />
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="ghost">Media &amp; press enquiries</Button>
          </div>
        </div>
      </section>
    </>
  );
}
