"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";
import {
  projects,
  donors,
  sectors,
  divisions,
  fmtUsd,
  type ProjectStatus,
} from "@/data/projects";

const statuses: ProjectStatus[] = ["Ongoing", "Completed", "Pipeline"];

type Filters = {
  q: string;
  donor: string;
  sector: string;
  division: string;
  status: string;
};

const empty: Filters = { q: "", donor: "", sector: "", division: "", status: "" };

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full appearance-none rounded-xl border bg-white px-4 py-2.5 pr-9 text-sm font-medium text-ink transition-colors focus:border-brand-600 focus:outline-none",
          value ? "border-brand-600 text-brand-800" : "border-black/10",
        )}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <Icon.chevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
    </label>
  );
}

export function ProjectsExplorer() {
  const [f, setF] = useState<Filters>(empty);
  const set = (k: keyof Filters, v: string) => setF((p) => ({ ...p, [k]: v }));

  const results = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return projects.filter((p) => {
      if (q && !(`${p.title} ${p.summary} ${p.districts.join(" ")} ${p.id}`.toLowerCase().includes(q))) return false;
      if (f.donor && p.donor !== f.donor) return false;
      if (f.sector && p.sector !== f.sector) return false;
      if (f.division && p.division !== f.division) return false;
      if (f.status && p.status !== f.status) return false;
      return true;
    });
  }, [f]);

  const totalBudget = results.reduce((s, p) => s + p.budgetUsd, 0);
  const totalBen = results.reduce((s, p) => s + p.beneficiaries, 0);
  const active = Object.entries(f).filter(([k, v]) => v && k !== "q");

  return (
    <div>
      {/* Controls */}
      <div className="rounded-3xl border border-black/5 bg-white p-5 card-shadow lg:p-6">
        <div className="relative">
          <Icon.search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={f.q}
            onChange={(e) => set("q", e.target.value)}
            placeholder="Search projects, districts or reference no. — e.g. “coastal”, “Khulna”, “PHD-2401”"
            className="w-full rounded-2xl border border-black/10 bg-paper py-3.5 pl-12 pr-4 text-ink placeholder:text-ink-soft/70 focus:border-brand-600 focus:outline-none"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select label="All donors" value={f.donor} options={donors} onChange={(v) => set("donor", v)} />
          <Select label="All sectors" value={f.sector} options={sectors} onChange={(v) => set("sector", v)} />
          <Select label="All divisions" value={f.division} options={divisions} onChange={(v) => set("division", v)} />
          <Select label="Any status" value={f.status} options={statuses} onChange={(v) => set("status", v)} />
        </div>
      </div>

      {/* Summary bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-ink">
            {results.length} {results.length === 1 ? "project" : "projects"}
          </span>
          {active.length > 0 && (
            <>
              <span className="text-ink-soft">·</span>
              {active.map(([k, v]) => (
                <button
                  key={k}
                  onClick={() => set(k as keyof Filters, "")}
                  className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 hover:bg-brand-100"
                >
                  {v}
                  <Icon.close className="h-3 w-3" />
                </button>
              ))}
              <button
                onClick={() => setF(empty)}
                className="text-xs font-semibold text-coral-600 hover:underline"
              >
                Clear all
              </button>
            </>
          )}
        </div>
        <div className="flex gap-5 text-sm text-ink-soft">
          <span><b className="text-brand-800">{fmtUsd(totalBudget)}</b> portfolio</span>
          <span><b className="text-brand-800">{(totalBen / 1_000_000).toFixed(2)}M</b> people</span>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-black/15 bg-paper-2 p-12 text-center">
          <Icon.search className="mx-auto h-8 w-8 text-ink-soft" />
          <p className="mt-3 font-display text-lg font-bold">No projects match those filters</p>
          <p className="mt-1 text-sm text-ink-soft">Try widening your search or clearing a filter.</p>
          <button
            onClick={() => setF(empty)}
            className="mt-4 rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 transition-all hover:-translate-y-1 card-shadow hover:card-shadow-lg"
            >
              <div className="flex items-center justify-between">
                <Badge tone={p.status === "Ongoing" ? "brand" : p.status === "Completed" ? "neutral" : "accent"}>
                  {p.status}
                </Badge>
                <span className="font-mono text-xs text-ink-soft">{p.id}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-black/5 pt-4 text-xs">
                <div>
                  <dt className="text-ink-soft">Donor</dt>
                  <dd className="font-semibold text-brand-800">{p.donor}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Sector</dt>
                  <dd className="font-semibold text-ink">{p.sector}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Location</dt>
                  <dd className="font-semibold text-ink">{p.division}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Timeline</dt>
                  <dd className="font-semibold text-ink">{p.startYear}–{p.endYear}</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-paper-2 px-4 py-3">
                <div>
                  <p className="font-display text-base font-bold text-brand-800">{fmtUsd(p.budgetUsd)}</p>
                  <p className="text-[0.7rem] text-ink-soft">Budget</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-base font-bold text-brand-800">
                    {(p.beneficiaries / 1000).toFixed(0)}K
                  </p>
                  <p className="text-[0.7rem] text-ink-soft">Beneficiaries</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
