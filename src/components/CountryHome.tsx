"use client";

import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryData,
} from "@/data/carbon-data";
import {
  HISTORICAL_PER_CAPITA,
  HISTORICAL_WORLD,
} from "@/data/historical-emissions";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { interpolate } from "@/lib/i18n";
import { localizedCountryName } from "@/lib/i18n/country-names";
import CarbonCalculator from "./CarbonCalculator";

interface Props {
  readonly country: CountryData;
}

/**
 * Country-specific landing page rendered at `/{country}` and
 * `/{locale}/{country}`. All copy reads from `t.country.*` so each locale
 * presents native text and Google indexes it as a real translated page.
 */
export default function CountryHome({ country }: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();

  const ranked = [...COUNTRY_CODES].sort(
    (a, b) => COUNTRIES[b].perCapitaCO2 - COUNTRIES[a].perCapitaCO2,
  );
  const rank = ranked.indexOf(country.code) + 1;
  const total = ranked.length;

  const vsWorld = country.perCapitaCO2 / GLOBAL_ANCHORS.worldAverage;
  const vsParis = country.perCapitaCO2 / GLOBAL_ANCHORS.parisAligned2030;

  const verdict =
    country.perCapitaCO2 < GLOBAL_ANCHORS.parisAligned2030
      ? { color: "var(--accent-sage)", label: t.country.verdictBelowParis }
      : country.perCapitaCO2 < GLOBAL_ANCHORS.worldAverage
        ? { color: "var(--accent-periwinkle)", label: t.country.verdictBelowWorld }
        : country.perCapitaCO2 < 10
          ? { color: "var(--accent-amber)", label: t.country.verdictAboveWorld }
          : { color: "var(--accent-rose)", label: t.country.verdictHighest };

  const localeName = localizedCountryName(country.code, locale, country.name);

  const worldComparison =
    vsWorld >= 1
      ? interpolate(t.country.bodyMultiplierAbove, { factor: vsWorld.toFixed(1) })
      : interpolate(t.country.bodyMultiplierBelow, { factor: (1 / vsWorld).toFixed(1) });
  const parisComparison =
    vsParis >= 1
      ? interpolate(t.country.bodyParisAbove, { factor: vsParis.toFixed(1) })
      : t.country.bodyParisBelow;

  const histSeries = HISTORICAL_PER_CAPITA[country.code] ?? [];
  const peakPoint = histSeries.length > 0
    ? histSeries.reduce(
        (peak, p) => (p.perCapitaCO2 > peak.perCapitaCO2 ? p : peak),
        histSeries[0],
      )
    : null;
  const trendDelta =
    histSeries.length >= 2 && histSeries[0].perCapitaCO2 > 0
      ? country.perCapitaCO2 - histSeries[0].perCapitaCO2
      : 0;
  const trendPct =
    histSeries.length >= 2 && histSeries[0].perCapitaCO2 > 0
      ? Math.round((trendDelta / histSeries[0].perCapitaCO2) * 100)
      : 0;
  const trendNarrative =
    trendPct < -2
      ? interpolate(t.country.historyTrendDropTemplate, {
          pct: Math.abs(trendPct),
          startYear: histSeries[0]?.year ?? "",
        })
      : trendPct > 2
        ? interpolate(t.country.historyTrendRiseTemplate, {
            pct: trendPct,
            startYear: histSeries[0]?.year ?? "",
          })
        : t.country.historyTrendFlat;

  return (
    <main className="min-h-screen pt-14">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-text-muted">
            {country.flag} {localeName}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            {interpolate(t.country.headlineTemplate, { country: localeName })}
          </h1>

          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
              style={{ background: verdict.color }}
            >
              {verdict.label}
            </div>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {interpolate(t.country.bodyTemplate, {
                country: localeName,
                value: country.perCapitaCO2,
                worldComparison,
                parisComparison,
                rank,
                total,
              })}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          <StatCard
            label={t.country.statPerCapitaLabel}
            value={`${country.perCapitaCO2} tCO2`}
            sub={t.country.statPerCapitaSub}
          />
          <StatCard
            label={t.country.statTotalLabel}
            value={`${country.totalMtCO2.toLocaleString()} Mt`}
            sub={interpolate(t.country.statTotalSub, {
              population: (country.population / 1_000_000).toFixed(1),
            })}
          />
          <StatCard
            label={t.country.statGridLabel}
            value={`${country.gridIntensityGCO2PerKWh} g/kWh`}
            sub={t.country.statGridSub}
          />
        </div>

        {histSeries.length > 0 && peakPoint && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              {interpolate(t.country.historyHeading, { country: localeName })}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {interpolate(t.country.historyBodyTemplate, {
                country: localeName,
                peakValue: peakPoint.perCapitaCO2,
                peakYear: peakPoint.year,
                todayValue: country.perCapitaCO2,
                trend: trendNarrative,
                worldStart: HISTORICAL_WORLD[0].perCapitaCO2,
                worldYear: HISTORICAL_WORLD[0].year,
                worldToday: GLOBAL_ANCHORS.worldAverage,
              })}
            </p>
            <HistoricalSparkline
              series={histSeries}
              countryName={localeName}
            />
          </div>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-2 text-center">
            {interpolate(t.country.calculatorHeadingTemplate, { country: localeName })}
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto leading-relaxed mb-8">
            {interpolate(t.country.calculatorSubheadingTemplate, { country: localeName })}
          </p>
          <CarbonCalculator initialCountry={country.code} />
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-5">
      <div className="text-xs uppercase tracking-wider text-text-muted">{label}</div>
      <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-primary mt-1">
        {value}
      </div>
      <div className="text-sm text-text-muted mt-1">{sub}</div>
    </div>
  );
}

function HistoricalSparkline({
  series,
  countryName,
}: {
  series: ReadonlyArray<{ year: number; perCapitaCO2: number }>;
  countryName: string;
}) {
  if (series.length === 0) return null;
  const W = 600;
  const H = 140;
  const PAD = { top: 8, right: 8, bottom: 18, left: 28 };

  const minYear = series[0].year;
  const maxYear = series[series.length - 1].year;
  const maxV = Math.max(...series.map((p) => p.perCapitaCO2));

  const xScale = (y: number) =>
    PAD.left + ((y - minYear) / (maxYear - minYear)) * (W - PAD.left - PAD.right);
  const yScale = (v: number) =>
    PAD.top + (1 - v / (maxV * 1.1)) * (H - PAD.top - PAD.bottom);

  const path = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.year)} ${yScale(p.perCapitaCO2)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto mt-4"
      role="img"
      aria-label={`${countryName} per-capita CO2 emissions over time`}
    >
      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={H - PAD.bottom}
        y2={H - PAD.bottom}
        stroke="var(--border-subtle)"
        strokeWidth={1}
      />
      <text x={PAD.left} y={H - 4} fontSize="10" fill="var(--text-muted)">
        {minYear}
      </text>
      <text x={W - PAD.right} y={H - 4} fontSize="10" textAnchor="end" fill="var(--text-muted)">
        {maxYear}
      </text>
      <path d={path} fill="none" stroke="var(--accent-periwinkle)" strokeWidth={2} />
      <circle
        cx={xScale(series[series.length - 1].year)}
        cy={yScale(series[series.length - 1].perCapitaCO2)}
        r={4}
        fill="var(--accent-periwinkle)"
        stroke="var(--bg-card)"
        strokeWidth={2}
      />
    </svg>
  );
}
