"use client";

import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryCode,
  type CountryData,
} from "@/data/carbon-data";
import {
  HISTORICAL_PER_CAPITA,
  HISTORICAL_WORLD,
} from "@/data/historical-emissions";
import CarbonCalculator from "./CarbonCalculator";

interface Props {
  readonly country: CountryData;
}

/**
 * Country-specific landing page. Used at `/{country}` and `/{locale}/{country}`.
 *
 * Above the fold: a tight stat block — per-capita CO2, world ranking, a 2-3
 * sentence narrative — followed by the calculator pre-selected for that
 * country.
 *
 * The country-specific content gives the page real substance for SEO and
 * lets a visitor who arrived via search ("carbon footprint Germany") see
 * the headline number immediately, then drill into their personal one.
 */
export default function CountryHome({ country }: Props) {
  // Rank vs all countries (1 = highest emitter)
  const ranked = [...COUNTRY_CODES].sort(
    (a, b) => COUNTRIES[b].perCapitaCO2 - COUNTRIES[a].perCapitaCO2,
  );
  const rank = ranked.indexOf(country.code) + 1;
  const total = ranked.length;

  const vsWorld = country.perCapitaCO2 / GLOBAL_ANCHORS.worldAverage;
  const vsParis = country.perCapitaCO2 / GLOBAL_ANCHORS.parisAligned2030;

  const verdict =
    country.perCapitaCO2 < GLOBAL_ANCHORS.parisAligned2030
      ? { color: "var(--accent-sage)", label: "Below the Paris-aligned target" }
      : country.perCapitaCO2 < GLOBAL_ANCHORS.worldAverage
        ? { color: "var(--accent-periwinkle)", label: "Below the world average" }
        : country.perCapitaCO2 < 10
          ? { color: "var(--accent-amber)", label: "Above the world average" }
          : { color: "var(--accent-rose)", label: "Among the highest emitters per person" };

  const histSeries = HISTORICAL_PER_CAPITA[country.code] ?? [];
  const peakPoint = histSeries.length > 0
    ? histSeries.reduce(
        (peak, p) => (p.perCapitaCO2 > peak.perCapitaCO2 ? p : peak),
        histSeries[0],
      )
    : null;
  const trend =
    histSeries.length >= 2
      ? country.perCapitaCO2 - histSeries[0].perCapitaCO2
      : 0;
  const trendPct =
    histSeries.length >= 2 && histSeries[0].perCapitaCO2 > 0
      ? Math.round((trend / histSeries[0].perCapitaCO2) * 100)
      : 0;

  return (
    <main className="min-h-screen pt-14">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-text-muted">
            {country.flag} {country.name}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            How green is the average person in {country.name}?
          </h1>

          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
              style={{ background: verdict.color }}
            >
              {verdict.label}
            </div>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {country.name} emits <strong className="text-text-primary">{country.perCapitaCO2} tCO2</strong> per
              person per year — {vsWorld >= 1
                ? `${vsWorld.toFixed(1)}× the world average`
                : `${(1 / vsWorld).toFixed(1)}× lower than the world average`}{" "}
              and {vsParis >= 1
                ? `${vsParis.toFixed(1)}× the Paris-aligned 2030 target`
                : `below the Paris-aligned 2030 target`}
              . Ranked <strong className="text-text-primary">{rank}</strong> of {total} countries by per-capita emissions.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          <StatCard
            label="Per-capita CO2"
            value={`${country.perCapitaCO2} tCO2`}
            sub="per person, per year"
          />
          <StatCard
            label="Total emissions"
            value={`${country.totalMtCO2.toLocaleString()} Mt`}
            sub={`${(country.population / 1_000_000).toFixed(1)}M people`}
          />
          <StatCard
            label="Electricity grid"
            value={`${country.gridIntensityGCO2PerKWh} g/kWh`}
            sub="CO2 per kWh of electricity"
          />
        </div>

        {histSeries.length > 0 && peakPoint && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              How {country.name}&apos;s emissions changed over time
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {country.name} per-capita emissions peaked at{" "}
              <strong className="text-text-primary">
                {peakPoint.perCapitaCO2} tCO2
              </strong>{" "}
              in {peakPoint.year}. Today: {country.perCapitaCO2} tCO2.
              {trendPct < 0
                ? ` That's a ${Math.abs(trendPct)}% drop since ${histSeries[0].year}.`
                : trendPct > 0
                  ? ` That's a ${trendPct}% rise since ${histSeries[0].year}.`
                  : ""}{" "}
              The world average over the same period went from{" "}
              {HISTORICAL_WORLD[0].perCapitaCO2} tCO2 in{" "}
              {HISTORICAL_WORLD[0].year} to {GLOBAL_ANCHORS.worldAverage} tCO2 today.
            </p>
            <HistoricalSparkline
              series={histSeries}
              countryName={country.name}
            />
          </div>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-2 text-center">
            Calculate your own footprint in {country.name}
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto leading-relaxed mb-8">
            Diet, driving, flying, heating. We turn your lifestyle into tonnes of CO2 per year and compare it to {country.name}&apos;s average.
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
      <text
        x={PAD.left}
        y={H - 4}
        fontSize="10"
        fill="var(--text-muted)"
      >
        {minYear}
      </text>
      <text
        x={W - PAD.right}
        y={H - 4}
        fontSize="10"
        textAnchor="end"
        fill="var(--text-muted)"
      >
        {maxYear}
      </text>
      <path
        d={path}
        fill="none"
        stroke="var(--accent-periwinkle)"
        strokeWidth={2}
      />
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
