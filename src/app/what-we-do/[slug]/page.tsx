import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button, Badge, toneText, toneBg, toneSolid } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import { programs, programBySlug } from "@/data/programs";
import { projects, fmtUsd } from "@/data/projects";
import { sdgList } from "@/data/content";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) return { title: "Program area" };
  return { title: program.name, description: program.summary };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) notFound();

  const related = projects.filter((p) => p.sector === program.name).slice(0, 3);
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 4);
  const I = Icon[program.icon as IconKey];

  return (
    <>
      <PageHero
        kicker={program.name}
        title={program.name}
        intro={program.summary}
        crumbs={[
          { label: "What we do", href: "/what-we-do" },
          { label: program.name, href: `/what-we-do/${program.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {program.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 px-5 py-3 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <span className="font-display text-2xl font-bold text-accent-300">{s.value}</span>
              <span className="ml-2 text-sm text-white/75">{s.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-16 lg:py-20">
        <div className="rail grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className={`inline-grid h-14 w-14 place-items-center rounded-2xl ${toneBg[program.tone]} ${toneText[program.tone]}`}>
              <I className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-bold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{program.overview}</p>

            <h3 className="mt-12 text-2xl font-bold">Our approach</h3>
            <ul className="mt-5 space-y-3">
              {program.approaches.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${toneSolid[program.tone]} text-white`}>
                    <Icon.check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-soft">{a}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-2xl font-bold">Results that last</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {program.outcomes.map((o) => (
                <div key={o.label} className="rounded-2xl border border-black/5 bg-paper-2 p-6">
                  <p className={`font-display text-4xl font-extrabold ${toneText[program.tone]}`}>{o.value}</p>
                  <p className="mt-1 text-sm text-ink-soft">{o.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 card-shadow">
              <h3 className="font-display text-lg font-bold">Contributing to the SDGs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.sdgs.map((n) => {
                  const sdg = sdgList.find((s) => s.n === n);
                  return (
                    <span
                      key={n}
                      className="grid h-12 w-12 place-items-center rounded-lg font-display text-lg font-bold text-white"
                      style={{ backgroundColor: sdg?.color ?? "#0e7c64" }}
                      title={sdg?.name}
                    >
                      {n}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl mesh dotgrid p-6 text-white">
              <h3 className="font-display text-lg font-bold">Partner on this work</h3>
              <p className="mt-2 text-sm text-white/75">
                Fund a proven model or co-design the next programme in {program.name.toLowerCase()}.
              </p>
              <Button href="/get-involved#partners" variant="secondary" size="sm" className="mt-4">
                Start a conversation
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-paper-2 py-16 lg:py-20">
          <div className="rail">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold">Projects in this area</h2>
              <Button href="/projects" variant="ghost">All projects</Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((pr) => (
                <Link
                  key={pr.id}
                  href="/projects"
                  className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 card-shadow hover:card-shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Badge tone={pr.status === "Ongoing" ? "brand" : pr.status === "Completed" ? "neutral" : "accent"}>
                      {pr.status}
                    </Badge>
                    <span className="text-xs font-semibold text-ink-soft">{pr.id}</span>
                  </div>
                  <h3 className="mt-3 font-display font-bold leading-tight text-ink group-hover:text-brand-800">
                    {pr.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">{pr.summary}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-black/5 pt-4 text-xs text-ink-soft">
                    <span className="font-semibold text-brand-700">{pr.donor}</span>
                    <span>{fmtUsd(pr.budgetUsd)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other programs */}
      <section className="py-16 lg:py-20">
        <div className="rail">
          <h2 className="text-2xl font-bold">Explore other program areas</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => {
              const OI = Icon[o.icon as IconKey];
              return (
                <Link
                  key={o.slug}
                  href={`/what-we-do/${o.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 card-shadow hover:card-shadow-lg"
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${toneBg[o.tone]} ${toneText[o.tone]}`}>
                    <OI className="h-5 w-5" />
                  </span>
                  <span className="font-display font-bold leading-tight text-ink group-hover:text-brand-800">
                    {o.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
