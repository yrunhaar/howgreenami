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
    { label: t.result.compareYou, value: result.totalTCO2, color: "var(--accent-periwinkle)" },
    { label: interpolate(t.result.compareCountryAvg, { country: country.name }), value: country.perCapitaCO2, color: "var(--text-primary)" },
    { label: t.result.compareWorldAvg, value: GLOBAL_ANCHORS.worldAverage, color: "var(--text-muted)" },
    { label: t.result.compareParisBudget, value: GLOBAL_ANCHORS.parisAligned2030, color: "var(--accent-periwinkle)" },
    { label: t.result.compareTop1, value: GLOBAL_ANCHORS.top1Average, color: "var(--accent-rose)" },
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
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6 text-center">
        <p className="text-sm uppercase tracking-wider text-text-muted">{t.result.heading}</p>
        <p className="text-5xl md:text-6xl font-bold my-3 text-text-primary">
          {formatTons(result.totalTCO2, locale)} <span className="text-text-muted text-2xl">tCO2e</span>
        </p>
        <p className="text-text-muted">{t.result.perYearLabel}</p>
        <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-accent-periwinkle/15 text-text-primary text-sm font-semibold">
          {percentileLabel}
        </div>
      </div>

      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="text-xl mb-4">{t.result.compareHeading}</h3>
        <div className="space-y-2.5">
          {anchors.map((a) => (
            <div key={a.label}>
              <div className="flex justify-between text-sm mb-0.5">
                <span className="text-text-primary">{a.label}</span>
                <span className="text-text-muted">{formatTons(a.value, locale)} tCO2</span>
              </div>
              <div className="h-3 rounded-full bg-border-subtle overflow-hidden">
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

      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="text-xl mb-4">{t.result.breakdownHeading}</h3>
        <div className="space-y-2.5">
          {breakdown.map((b) => (
            <div key={b.key}>
              <div className="flex justify-between text-sm mb-0.5">
                <span className="text-text-primary">{b.label}</span>
                <span className="text-text-muted">
                  {formatTons(b.value, locale)} tCO2 ({Math.round((b.value / breakdownTotal) * 100)}%)
                </span>
              </div>
              <div className="h-2 rounded-full bg-border-subtle overflow-hidden">
                <div
                  className="h-full bg-accent-periwinkle"
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
          className="px-5 py-2 rounded-lg border border-border-subtle text-text-primary hover:border-accent-periwinkle"
        >
          ↺ {t.result.recalculate}
        </button>
      </div>
    </section>
  );
}
