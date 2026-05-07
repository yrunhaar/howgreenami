"use client";

import { useState, useMemo } from "react";
import { useDictionary, useLanguage } from "./LanguageProvider";
import {
  COUNTRIES,
  COUNTRY_CODES,
  type CountryCode,
} from "@/data/carbon-data";
import WorldMap from "./WorldMap";
import { localePath } from "@/lib/i18n/urls";

type Metric = "perCapita" | "grid" | "total";

const METRIC_CONFIG: Record<
  Metric,
  {
    readonly accessor: (c: (typeof COUNTRIES)[CountryCode]) => number;
    readonly unit: string;
    readonly format: (v: number) => string;
    readonly scaleMin: number;
    readonly scaleMax: number;
    readonly stops: readonly string[];
  }
> = {
  perCapita: {
    accessor: (c) => c.perCapitaCO2,
    unit: "tCO2",
    format: (v) => v.toFixed(1),
    scaleMin: 0,
    scaleMax: 25,
    stops: ["#deefe5", "#7fb89c", "#d4a64a", "#A5404E"],
  },
  grid: {
    accessor: (c) => c.gridIntensityGCO2PerKWh,
    unit: "g/kWh",
    format: (v) => Math.round(v).toString(),
    scaleMin: 0,
    scaleMax: 800,
    stops: ["#deefe5", "#7fb89c", "#d4a64a", "#A5404E"],
  },
  total: {
    accessor: (c) => c.totalMtCO2,
    unit: "Mt",
    format: (v) => v.toLocaleString(),
    scaleMin: 0,
    scaleMax: 12000,
    stops: ["#deefe5", "#7fb89c", "#d4a64a", "#A5404E"],
  },
};

export default function MapContent() {
  const t = useDictionary();
  const { locale } = useLanguage();
  const [metric, setMetric] = useState<Metric>("perCapita");

  const cfg = METRIC_CONFIG[metric];

  const dataByCountry = useMemo(() => {
    const out: Record<string, number> = {};
    for (const code of COUNTRY_CODES) {
      out[code] = cfg.accessor(COUNTRIES[code]);
    }
    return out;
  }, [cfg]);

  const metricLabels: Record<Metric, string> = {
    perCapita: t.map.metricPerCapita,
    grid: t.map.metricGrid,
    total: t.map.metricTotal,
  };

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-5xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-3 text-center">
          {t.map.title}
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto">
          {t.map.subtitle}
        </p>

        {/* Metric toggle */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {(Object.keys(metricLabels) as Metric[]).map((m) => {
            const active = metric === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMetric(m)}
                aria-pressed={active}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-accent-periwinkle text-white"
                    : "border border-border-subtle text-text-secondary hover:text-text-primary"
                }`}
              >
                {metricLabels[m]}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-4 sm:p-6">
          <WorldMap
            dataByCountry={dataByCountry}
            scale={{
              min: cfg.scaleMin,
              max: cfg.scaleMax,
              stops: cfg.stops,
              noData: "var(--bg-secondary)",
            }}
            unit={cfg.unit}
            formatValue={cfg.format}
            hrefForCountry={(code) => localePath(locale, `/${code.toLowerCase()}`)}
            noDataLabel={t.map.noDataLabel}
            belowLabel={t.map.legendLow}
            aboveLabel={t.map.legendHigh}
          />
        </div>

        <p className="text-xs text-text-muted mt-4 text-center">{t.map.source}</p>
      </article>
    </main>
  );
}
