"use client";

import { useDictionary } from "./LanguageProvider";
import { GLOBAL_ANCHORS } from "@/data/carbon-data";

/**
 * Compact ticker-style stat strip rendered above the calculator on /. Four
 * world-anchor numbers that contextualize the user's eventual result before
 * they touch the calculator.
 */
export default function StatisticsSection() {
  const t = useDictionary();
  const cells = [
    { label: t.statistics.worldAverageLabel, value: `${GLOBAL_ANCHORS.worldAverage} tCO2`, color: "var(--accent-periwinkle)" },
    { label: t.statistics.parisLabel, value: `${GLOBAL_ANCHORS.parisAligned2030} tCO2`, color: "var(--accent-sage)" },
    { label: t.statistics.top1Label, value: `${GLOBAL_ANCHORS.top1Average} tCO2`, color: "var(--accent-rose)" },
    { label: t.statistics.bottom50Label, value: `${GLOBAL_ANCHORS.bottom50Average} tCO2`, color: "var(--accent-amber)" },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-8" aria-label={t.statistics.heading}>
      <div className="max-w-4xl mx-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className={`p-4 text-center ${i > 0 ? "border-l border-border-subtle/50" : ""}`}
            >
              <div className="text-[10px] uppercase tracking-wider text-text-muted">{c.label}</div>
              <div className="font-[family-name:var(--font-heading)] text-xl font-bold mt-1" style={{ color: c.color }}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-text-muted text-center pb-3">
          {t.statistics.perCapitaUnit}
        </p>
      </div>
    </section>
  );
}
