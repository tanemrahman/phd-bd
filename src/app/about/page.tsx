import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Button, toneText } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "About PHD",
  description:
    "PHD's history, mission, vision and values; our governance, leadership and board; strategic plan, certifications and compliance.",
};

const timeline = [
  { year: "1998", t: "Founded", d: "Established in a single char-land village to respond to recurrent flooding." },
  { year: "2006", t: "First donor partnership", d: "Began UN and bilateral-funded livelihoods programming in the north." },
  { year: "2014", t: "Coastal expansion", d: "Scaled climate-adaptation work across the cyclone-prone south-west." },
  { year: "2020", t: "Humanitarian scale-up", d: "Led COVID-19 and flood response reaching over a million people." },
  { year: "2025", t: "Strategy 2025–2030", d: "Launched a locally-led, climate-centred five-year strategy." },
];

const leadership = [
  { name: "Dr. Ayesha Rahman", role: "Executive Director" },
  { name: "Md. Kamrul Hasan", role: "Director, Programmes" },
  { name: "Farzana Akter", role: "Director, Finance & Operations" },
  { name: "Tanvir Ahmed", role: "Director, Quality & Accountability" },
];

const board = [
  { name: "Prof. Salma Khatun", role: "Chairperson" },
  { name: "Barrister Imran Chowdhury", role: "Vice-Chair" },
  { name: "Nasrin Sultana", role: "Treasurer" },
  { name: "Dr. Rezaul Karim", role: "Member" },
  { name: "Shahidul Islam", role: "Member" },
  { name: "Dr. Fatema Begum", role: "Member" },
];

const values: { t: string; d: string; icon: IconKey }[] = [
  { t: "Dignity", d: "We uphold the agency and worth of every person we serve.", icon: "users" },
  { t: "Integrity", d: "We are honest, transparent and accountable in all we do.", icon: "scale" },
  { t: "Equity", d: "We put the most marginalised — women, the poor, the excluded — first.", icon: "spark" },
  { t: "Excellence", d: "We hold ourselves to international standards and independent evidence.", icon: "target" },
];

const compliance = [
  "NGO Affairs Bureau (Reg. No. 1234)",
  "Joint Stock Companies & Firms",
  "Microcredit Regulatory Authority",
  "Core Humanitarian Standard (CHS)",
  "ISO 9001:2015 Quality Management",
  "PSEAH & Child Safeguarding certified",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About PHD"
        title={`${org.fullName}.`}
        intro="From a single flood-stricken village to one of Bangladesh's most trusted development partners — built on proximity, evidence and an unshakeable belief in dignity."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      {/* History */}
      <section id="history" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Our journey" title="27 years on the frontline of change" />
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {timeline.map((m) => (
              <div key={m.year} className="relative">
                <div className="font-display text-3xl font-extrabold text-accent-400">{m.year}</div>
                <div className="mt-3 h-1 w-12 rounded-full bg-brand-600" />
                <p className="mt-3 font-display font-bold text-ink">{m.t}</p>
                <p className="mt-1 text-sm text-ink-soft">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section id="mission" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl mesh dotgrid p-8 text-white lg:p-10">
              <Icon.target className="h-9 w-9 text-accent-300" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our mission</h2>
              <p className="mt-3 text-white/80">
                To empower Bangladesh&apos;s most vulnerable communities to overcome
                poverty, adapt to climate change and claim their rights — through
                evidence-based, locally-led and accountable programming.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-700 p-8 text-white lg:p-10">
              <Icon.globe className="h-9 w-9 text-accent-300" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our vision</h2>
              <p className="mt-3 text-white/85">
                A Bangladesh where every community — however remote or exposed —
                lives with dignity, resilience and opportunity.
              </p>
            </div>
          </div>

          <div id="values" className="mt-12">
            <SectionHeading kicker="Our values" title="What guides every decision" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const I = Icon[v.icon];
                return (
                  <div key={v.t} className="rounded-2xl border border-black/5 bg-white p-6 card-shadow">
                    <I className="h-7 w-7 text-brand-700" />
                    <p className="mt-3 font-display text-lg font-bold text-ink">{v.t}</p>
                    <p className="mt-1 text-sm text-ink-soft">{v.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 lg:py-20">
        <div className="rail">
          <SectionHeading kicker="Governance" title="Leadership team" intro="A senior team blending decades of field experience with international standards." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => (
              <div key={p.name} className="rounded-3xl border border-black/5 bg-white p-6 text-center card-shadow">
                <div className="duotone mx-auto h-24 w-24 rounded-full" />
                <p className="mt-4 font-display font-bold text-ink">{p.name}</p>
                <p className={`text-sm font-semibold ${toneText.brand}`}>{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board + Organogram */}
      <section id="board" className="bg-paper-2 py-16 lg:py-20">
        <div className="rail grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="Board of trustees" title="Independent oversight" />
            <ul className="mt-8 divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white card-shadow">
              {board.map((b) => (
                <li key={b.name} className="flex items-center justify-between px-5 py-4">
                  <span className="font-semibold text-ink">{b.name}</span>
                  <span className="text-sm text-ink-soft">{b.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="organogram">
            <SectionHeading kicker="Organogram" title="How we are organised" />
            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-8 card-shadow">
              <div className="flex flex-col items-center gap-3 text-center text-sm font-semibold">
                <div className="rounded-xl bg-brand-700 px-5 py-3 text-white">Board of Trustees</div>
                <div className="h-5 w-px bg-black/15" />
                <div className="rounded-xl bg-brand-600 px-5 py-3 text-white">Executive Director</div>
                <div className="h-5 w-px bg-black/15" />
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                  {["Programmes", "Finance & Ops", "Quality & MEAL", "Communications"].map((u) => (
                    <div key={u} className="rounded-xl bg-paper-2 px-3 py-3 text-ink">{u}</div>
                  ))}
                </div>
                <div className="h-5 w-px bg-black/15" />
                <div className="rounded-xl border border-dashed border-black/20 px-5 py-2 text-ink-soft">
                  4 Regional Offices · 41 District Teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy + Compliance */}
      <section id="strategy" className="py-16 lg:py-20">
        <div className="rail grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Strategic plan 2025–2030"
              title="Locally led. Climate centred. Accountable by design."
              intro="Our five-year strategy commits PHD to shifting power and resources closer to communities, putting climate resilience at the core, and setting a new bar for transparency."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/knowledge#annual" variant="primary" withArrow>Download the strategy</Button>
              <Button href="/transparency" variant="ghost">Our accountability</Button>
            </div>
          </div>
          <div id="compliance" className="rounded-3xl border border-black/5 bg-white p-8 card-shadow">
            <h3 className="font-display text-xl font-bold">Certifications &amp; compliance</h3>
            <ul className="mt-5 space-y-3">
              {compliance.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon.check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
