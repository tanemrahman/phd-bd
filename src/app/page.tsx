import Link from "next/link";
import { Button, Kicker, SectionHeading, Badge, toneText, toneBg } from "@/components/ui";
import { Counter } from "@/components/counter";
import { BangladeshMap } from "@/components/bangladesh-map";
import { Icon, type IconKey } from "@/components/icons";
import { programs } from "@/data/programs";
import { headlineStats, stories, news, partnerGroups } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactBand />
      <Mission />
      <Programs />
      <Coverage />
      <ImpactHighlight />
      <Stories />
      <Partners />
      <Newsroom />
      <CtaBand />
    </>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section className="relative overflow-hidden mesh text-white">
      <div className="absolute inset-0 dotgrid opacity-60" aria-hidden />
      <div className="rail relative grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="reveal">
          <Badge tone="accent" className="bg-white/10 text-accent-300 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
            Development &amp; humanitarian action since 1998
          </Badge>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.7rem]">
            Serving{" "}
            <span className="text-accent-300">5&nbsp;million+</span>{" "}
            vulnerable people across Bangladesh.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            PHD partners with the country&apos;s most exposed communities — on the
            coast, in the chars and across the haors — to build climate
            resilience, livelihoods and dignity that outlast any single project.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/impact" variant="secondary" size="lg" withArrow>
              See our impact
            </Button>
            <Button href="/what-we-do" variant="outline-white" size="lg">
              Explore our work
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Icon.check className="h-4 w-4 text-accent-300" /> CHS-certified
            </span>
            <span className="flex items-center gap-2">
              <Icon.check className="h-4 w-4 text-accent-300" /> 38 donor partners
            </span>
            <span className="flex items-center gap-2">
              <Icon.check className="h-4 w-4 text-accent-300" /> Independently audited
            </span>
          </div>
        </div>

        {/* Floating visual cluster */}
        <div className="relative hidden lg:block">
          <div className="duotone floaty absolute right-0 top-2 h-64 w-72 rounded-3xl" />
          <div className="absolute right-40 top-40 h-56 w-56 rounded-3xl bg-accent-400/90 floaty [animation-delay:-2s]" />
          <div className="absolute left-2 top-24 z-10 w-60 rounded-2xl bg-white p-5 text-ink card-shadow-lg reveal">
            <div className="flex items-center gap-2 text-brand-700">
              <Icon.leaf className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Climate resilience
              </span>
            </div>
            <p className="mt-2 font-display text-3xl font-bold text-ink">
              <Counter value={318_000} suffix="" />
            </p>
            <p className="text-sm text-ink-soft">people climate-proofed</p>
          </div>
          <div className="absolute bottom-2 right-4 z-10 w-56 rounded-2xl bg-white p-5 text-ink card-shadow-lg reveal [animation-delay:0.15s]">
            <div className="flex items-center gap-2 text-coral-600">
              <Icon.pulse className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Emergency response
              </span>
            </div>
            <p className="mt-2 font-display text-3xl font-bold text-ink">
              &lt;48 hrs
            </p>
            <p className="text-sm text-ink-soft">typical activation time</p>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" fill="#fbfbf8" />
      </svg>
    </section>
  );
}

/* ============================ IMPACT BAND ============================ */
function ImpactBand() {
  return (
    <section className="relative -mt-2 pb-4">
      <div className="rail">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/5 card-shadow md:grid-cols-3 lg:grid-cols-5">
          {headlineStats.map((s) => (
            <div key={s.label} className="bg-paper p-6 text-center sm:p-7">
              <div className="font-display text-3xl font-extrabold text-brand-800 sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">{s.label}</div>
              <div className="mt-0.5 text-xs text-ink-soft">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ MISSION ============================ */
function Mission() {
  const values = [
    { t: "Dignity first", d: "We work with communities, never for them.", icon: "users" as IconKey },
    { t: "Locally led", d: "Decisions and resources sit closest to those affected.", icon: "mapPin" as IconKey },
    { t: "Evidence driven", d: "Independent data shapes every programme we run.", icon: "chart" as IconKey },
    { t: "Radically accountable", d: "Open books, open feedback, open to scrutiny.", icon: "scale" as IconKey },
  ];
  return (
    <section className="py-20 lg:py-24">
      <div className="rail grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            kicker="Who we are"
            title={
              <>
                A Bangladeshi organisation built on{" "}
                <span className="text-brand-700">trust and proximity.</span>
              </>
            }
            intro="For over a quarter-century, PHD has stood with the communities others find hardest to reach — translating local knowledge and international standards into measurable change."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v) => {
              const I = Icon[v.icon];
              return (
                <div key={v.t} className="rounded-2xl border border-black/5 bg-white p-5 card-shadow">
                  <I className="h-6 w-6 text-brand-700" />
                  <p className="mt-3 font-display font-bold text-ink">{v.t}</p>
                  <p className="mt-1 text-sm text-ink-soft">{v.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Button href="/about" variant="primary" withArrow>
              About PHD
            </Button>
          </div>
        </div>

        {/* Collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="duotone aspect-[3/4] rounded-3xl" />
          <div className="mt-10 grid gap-4">
            <div className="duotone aspect-square rounded-3xl" />
            <div className="rounded-3xl bg-brand-700 p-6 text-white">
              <p className="font-display text-4xl font-extrabold text-accent-300">
                61%
              </p>
              <p className="mt-1 text-sm text-white/80">
                of our staff — and most field leaders — are women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ PROGRAMS ============================ */
function Programs() {
  return (
    <section className="bg-paper-2 py-20 lg:py-24">
      <div className="rail">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="What we do"
            title="Eight program areas, one integrated mission."
            intro="We rarely tackle one problem in isolation. Climate, livelihoods, health and protection reinforce one another in everything we deliver."
          />
          <Button href="/what-we-do" variant="ghost">
            All program areas
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => {
            const I = Icon[p.icon as IconKey];
            return (
              <Link
                key={p.slug}
                href={`/what-we-do/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 transition-all duration-200 hover:-translate-y-1 card-shadow hover:card-shadow-lg"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${toneBg[p.tone]} ${toneText[p.tone]}`}
                >
                  <I className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {p.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Explore
                  <Icon.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ COVERAGE / MAP ============================ */
function Coverage() {
  return (
    <section className="py-20 lg:py-24">
      <div className="rail">
        <SectionHeading
          align="center"
          kicker="Where we work"
          title="Present in 41 of 64 districts — and going deeper, not wider."
          intro="Our footprint follows vulnerability, not visibility. Explore PHD's coverage across all eight divisions of Bangladesh."
          className="mx-auto"
        />
        <div className="mt-12">
          <BangladeshMap />
        </div>
        <div className="mt-8 text-center">
          <Button href="/where-we-work" variant="primary" withArrow>
            Open the coverage map
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============================ IMPACT HIGHLIGHT ============================ */
function ImpactHighlight() {
  const rows = [
    { label: "Average household income growth in livelihoods programmes", value: 100, display: "2.3×" },
    { label: "Reduction in child stunting across nutrition districts", value: 38, display: "38%" },
    { label: "People with safe water in saline & flood-prone areas", value: 74, display: "742K" },
    { label: "Recipients reporting their needs were met in crises", value: 92, display: "92%" },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-white lg:py-24">
      <div className="absolute inset-0 mesh opacity-90" aria-hidden />
      <div className="absolute inset-0 dotgrid opacity-40" aria-hidden />
      <div className="rail relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            light
            kicker="Proof, not promises"
            title="We measure what changes in people's lives."
            intro="Every figure below is drawn from independent evaluations and our own MEAL systems — disaggregated by sex, age and disability, and published in full."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/impact" variant="secondary" withArrow>
              Open impact dashboard
            </Button>
            <Button href="/transparency" variant="outline-white">
              See our methodology
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          {rows.map((r) => (
            <div key={r.label}>
              <div className="flex items-end justify-between gap-4">
                <span className="text-sm text-white/75">{r.label}</span>
                <span className="font-display text-2xl font-bold text-accent-300">
                  {r.display}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-400"
                  style={{ width: `${Math.min(r.value, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ STORIES ============================ */
function Stories() {
  return (
    <section className="py-20 lg:py-24">
      <div className="rail">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Voices from the field"
            title="Change, told by the people who live it."
          />
          <Button href="/impact#stories" variant="ghost">
            More stories
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white card-shadow"
            >
              <div className="duotone relative aspect-[4/3]">
                <span className="absolute bottom-3 left-3">
                  <Badge tone="neutral" className="bg-white/90">
                    {s.program}
                  </Badge>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-tight text-ink">
                  {s.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm italic leading-relaxed text-ink-soft">
                  &ldquo;{s.quote}&rdquo;
                </p>
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
      </div>
    </section>
  );
}

/* ============================ PARTNERS ============================ */
function Partners() {
  const allNames = partnerGroups.flatMap((g) => g.names);
  return (
    <section className="border-y border-black/5 bg-paper-2 py-16">
      <div className="rail">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
          Trusted by 38 donors &amp; partners worldwide
        </p>
      </div>
      <div className="marquee mt-8 overflow-hidden">
        <div className="marquee-track gap-4">
          {[...allNames, ...allNames].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex h-14 shrink-0 items-center rounded-xl border border-black/5 bg-white px-7 font-display text-sm font-bold text-ink-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="rail mt-8 text-center">
        <Button href="/get-involved#partners" variant="ghost">
          See all partners
        </Button>
      </div>
    </section>
  );
}

/* ============================ NEWSROOM ============================ */
function Newsroom() {
  const [lead, ...rest] = news;
  return (
    <section className="py-20 lg:py-24">
      <div className="rail">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Newsroom" title="Latest from PHD" />
          <Button href="/knowledge#news" variant="ghost">
            All news &amp; press
          </Button>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Link
            href="/knowledge#news"
            className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white card-shadow hover:card-shadow-lg"
          >
            <div className="duotone aspect-[16/9]" />
            <div className="p-7">
              <div className="flex items-center gap-3 text-xs">
                <Badge tone="coral">{lead.category}</Badge>
                <span className="text-ink-soft">{lead.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink group-hover:text-brand-800">
                {lead.title}
              </h3>
              <p className="mt-2 text-ink-soft">{lead.excerpt}</p>
            </div>
          </Link>

          <div className="divide-y divide-black/5">
            {rest.map((n) => (
              <Link
                key={n.title}
                href="/knowledge#news"
                className="group flex gap-5 py-5 first:pt-0"
              >
                <div className="duotone h-24 w-32 shrink-0 rounded-xl" />
                <div>
                  <div className="flex items-center gap-3 text-xs">
                    <Badge tone="brand">{n.category}</Badge>
                    <span className="text-ink-soft">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold leading-tight text-ink group-hover:text-brand-800">
                    {n.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ CTA BAND ============================ */
function CtaBand() {
  const cards = [
    { t: "Fund proven models", d: "Co-invest in approaches with independent evidence of impact.", href: "/get-involved#partners", cta: "Become a donor", icon: "handshake" as IconKey },
    { t: "Partner with us", d: "Co-design programmes or join our procurement roster.", href: "/get-involved#procurement", cta: "Explore partnership", icon: "briefcase" as IconKey },
    { t: "Build your career", d: "Join a team of 900+ working where it matters most.", href: "/careers", cta: "View openings", icon: "users" as IconKey },
  ];
  return (
    <section className="pb-24">
      <div className="rail">
        <div className="overflow-hidden rounded-[2rem] mesh dotgrid p-10 text-white lg:p-14">
          <div className="max-w-2xl">
            <Kicker light>Get involved</Kicker>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Resilience is built together. Let&apos;s build it.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cards.map((c) => {
              const I = Icon[c.icon];
              return (
                <Link
                  key={c.t}
                  href={c.href}
                  className="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <I className="h-7 w-7 text-accent-300" />
                  <h3 className="mt-4 font-display text-xl font-bold">{c.t}</h3>
                  <p className="mt-2 text-sm text-white/75">{c.d}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300">
                    {c.cta}
                    <Icon.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
