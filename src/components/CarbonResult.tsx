"use client";

import { useDictionary, useLanguage } from "./LanguageProvider";
import { GLOBAL_ANCHORS, type CountryData } from "@/data/carbon-data";
import { interpolate } from "@/lib/i18n";
import { formatTons } from "@/lib/format";
import type { FootprintInputs, FootprintResult } from "@/lib/carbon-estimate";

interface Props {
  readonly country: CountryData;
  readonly inputs: FootprintInputs;
  readonly result: FootprintResult;
  readonly percentile: number;
  readonly onRecalculate: () => void;
}

export default function CarbonResult({ country, result, percentile, onRecalculate }: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();

  const anchors: { label: string; value: number; color: string }[] = [
    { label: t.result.compareYou, value: result.totalTCO2, color: "var(--accent)" },
    { label: interpolate(t.result.compareCountryAvg, { country: country.name }), value: country.perCapitaCO2, color: "var(--fg)" },
    { label: t.result.compareWorldAvg, value: GLOBAL_ANCHORS.worldAverage, color: "var(--muted)" },
    { label: t.result.compareParisBudget, value: GLOBAL_ANCHORS.parisAligned2030, color: "var(--accent)" },
    { label: t.result.compareTop1, value: GLOBAL_ANCHORS.top1Average, color: "var(--over)" },
  ];
  const maxValue = Math.max(...anchors.map((a) => a.value), 1);

  type BreakdownKey = keyof FootprintResult["breakdown"];
  const breakdown: ReadonlyArray<{ key: BreakdownKey; value: number; label: string }> = (
    [
      { key: "diet", value: result.breakdown.diet, label: t.result.breakdownLabels.diet },
      { key: "transport", value: result.breakdown.transport, label: t.result.breakdownLabels.transport },
      { key: "flights", value: result.breakdown.flights, label: t.result.breakdownLabels.flights },
      { key: "home", value: result.breakdown.home, label: t.result.breakdownLabels.home },
      { key: "consumption", value: result.breakdown.consumption, label: t.result.breakdownLabels.consumption },
    ] as const
  ).slice().sort((a, b) => b.value - a.value);

  const breakdownTotal = breakdown.reduce((s, b) => s + b.value, 0) || 1;

  const percentileLabel = percentile >= 50
    ? interpolate(t.result.percentileTemplate, { percent: 100 - percentile, country: country.flag + " " + country.name })
    : interpolate(t.result.bottomPercentileTemplate, { percent: percentile, country: country.flag + " " + country.name });

  return (
    <section className="max-w-3xl mx-auto px-4 mt-10 space-y-8">
      <div className="card text-center">
        <p className="text-sm uppercase tracking-wider text-[var(--muted)]">{t.result.heading}</p>
        <p className="text-5xl md:text-6xl font-bold my-3 text-[var(--fg)]">
          {formatTons(result.totalTCO2, locale)} <span className="text-[var(--muted)] text-2xl">tCO2e</span>
        </p>
        <p className="text-[var(--muted)]">{t.result.perYearLabel}</p>
        <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--fg)] text-sm font-semibold">
          {percentileLabel}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl mb-4">{t.result.compareHeading}</h3>
        <div className="space-y-2.5">
          {anchors.map((a) => (
            <div key={a.label}>
              <div className="flex justify-between text-sm mb-0.5">
                <span className="text-[var(--fg)]">{a.label}</span>
                <span className="text-[var(--muted)]">{formatTons(a.value, locale)} tCO2</span>
              </div>
              <div className="h-3 rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${Math.max(2, (a.value / maxValue) * 100)}%`,
                    background: a.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl mb-4">{t.result.breakdownHeading}</h3>
        <div className="space-y-2.5">
          {breakdown.map((b) => (
            <div key={b.key}>
              <div className="flex justify-between text-sm mb-0.5">
                <span className="text-[var(--fg)]">{b.label}</span>
                <span className="text-[var(--muted)]">
                  {formatTons(b.value, locale)} tCO2 ({Math.round((b.value / breakdownTotal) * 100)}%)
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)]"
                  style={{ width: `${Math.max(2, (b.value / breakdownTotal) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onRecalculate}
          className="px-5 py-2 rounded-lg border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)]"
        >
          ↺ {t.result.recalculate}
        </button>
      </div>
    </section>
  );
}
