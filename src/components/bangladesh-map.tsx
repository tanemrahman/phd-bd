"use client";

import { useState } from "react";
import { bangladeshPath, divisionNodes, type DivisionNode } from "@/data/map";
import { cn } from "@/lib/cn";

export function BangladeshMap({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [active, setActive] = useState<DivisionNode>(divisionNodes[5]); // Khulna default

  const maxBen = Math.max(...divisionNodes.map((d) => d.beneficiaries));
  const radius = (d: DivisionNode) => 3.2 + (d.beneficiaries / maxBen) * 5.5;

  return (
    <div
      className={cn(
        "grid items-center gap-6",
        compact ? "lg:grid-cols-1" : "lg:grid-cols-[1.2fr_1fr]",
      )}
    >
      <div className="relative">
        <svg
          viewBox="0 0 100 110"
          className="mx-auto h-auto w-full max-w-md"
          role="img"
          aria-label="Map of PHD's coverage across the divisions of Bangladesh"
        >
          <defs>
            <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d9f2ea" />
              <stop offset="100%" stopColor="#b3e5d6" />
            </linearGradient>
          </defs>

          <path
            d={bangladeshPath}
            fill="url(#land)"
            stroke="#0e7c64"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />

          {/* connecting lines to head office */}
          {divisionNodes.map((d) => (
            <line
              key={`l-${d.name}`}
              x1={46}
              y1={50}
              x2={d.x}
              y2={d.y}
              stroke="#0e7c64"
              strokeOpacity={0.18}
              strokeWidth={0.4}
            />
          ))}

          {/* division coverage bubbles */}
          {divisionNodes.map((d) => {
            const isActive = active.name === d.name;
            return (
              <g
                key={d.name}
                className="cursor-pointer"
                onMouseEnter={() => setActive(d)}
                onFocus={() => setActive(d)}
                tabIndex={0}
                role="button"
                aria-label={`${d.name}: ${d.projects} projects`}
              >
                <circle
                  cx={d.x}
                  cy={d.y}
                  r={radius(d) + 2.5}
                  fill="#0e7c64"
                  opacity={isActive ? 0.18 : 0}
                  className="transition-opacity"
                />
                <circle
                  cx={d.x}
                  cy={d.y}
                  r={radius(d)}
                  fill={isActive ? "#e0a536" : "#0e7c64"}
                  stroke="#fbfbf8"
                  strokeWidth={0.7}
                  className="transition-all duration-200"
                />
                <text
                  x={d.x}
                  y={d.y - radius(d) - 1.4}
                  textAnchor="middle"
                  className="select-none"
                  fontSize={3}
                  fontWeight={700}
                  fill="#0b1f25"
                >
                  {d.name}
                </text>
              </g>
            );
          })}

          {/* head office marker */}
          <g>
            <circle cx={46} cy={50} r={1.6} fill="#cf3f2c" stroke="#fff" strokeWidth={0.6} />
          </g>
        </svg>
      </div>

      {/* Detail panel */}
      <div
        className={cn(
          "rounded-2xl border border-black/5 bg-white p-6 card-shadow",
          compact && "lg:mt-2",
        )}
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
          {active.name} Division
        </p>
        <p className="mt-1 text-lg font-semibold text-ink">{active.headline}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            { v: active.projects, l: "Projects" },
            { v: active.districts, l: "Districts" },
            {
              v: `${(active.beneficiaries / 1000).toFixed(0)}K`,
              l: "Reached",
            },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-paper-2 px-2 py-3">
              <div className="font-display text-2xl font-bold text-brand-800">
                {s.v}
              </div>
              <div className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-ink-soft">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Hover or tab through the map to explore PHD&apos;s footprint across all
          eight divisions of Bangladesh.
        </p>
      </div>
    </div>
  );
}
