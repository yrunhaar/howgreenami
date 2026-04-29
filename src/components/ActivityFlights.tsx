"use client";

import { FLIGHT_KG_CO2_PER_KM, FLIGHT_TYPICAL_DISTANCE_KM } from "@/data/emission-factors";
import { GLOBAL_ANCHORS } from "@/data/carbon-data";

const FLIGHT_ROUTES = [
  { from: "London", to: "Paris", distanceKm: 344, type: "short" as const },
  { from: "London", to: "Rome", distanceKm: 1432, type: "short" as const },
  { from: "Paris", to: "Athens", distanceKm: 2095, type: "medium" as const },
  { from: "London", to: "New York", distanceKm: 5567, type: "long" as const },
  { from: "London", to: "Tokyo", distanceKm: 9582, type: "long" as const },
  { from: "Sydney", to: "Singapore", distanceKm: 6293, type: "long" as const },
  { from: "Los Angeles", to: "Tokyo", distanceKm: 8800, type: "long" as const },
  { from: "Frankfurt", to: "Cape Town", distanceKm: 9648, type: "long" as const },
];

export default function ActivityFlights() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Flight CO2 calculator
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          The fastest way to ruin a careful low-carbon year is one long-haul return
          flight. Here&apos;s how flying compares to the rest of your footprint, with
          DEFRA emission factors and the multiplier for high-altitude effects.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            How we count it
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            DEFRA publishes per-passenger-km factors that include a 1.9× multiplier
            for non-CO2 effects at altitude (contrails, NOx). We follow that
            convention. If you want to count CO2 only, divide by 1.9.
          </p>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Short-haul</strong> (under 1,500 km):{" "}
              <span className="tabular-nums">{FLIGHT_KG_CO2_PER_KM.short} kg CO2e/passenger-km</span>
            </li>
            <li>
              <strong className="text-text-primary">Medium-haul</strong> (1,500–5,000 km):{" "}
              <span className="tabular-nums">{FLIGHT_KG_CO2_PER_KM.medium} kg CO2e/passenger-km</span>
            </li>
            <li>
              <strong className="text-text-primary">Long-haul</strong> (over 5,000 km):{" "}
              <span className="tabular-nums">{FLIGHT_KG_CO2_PER_KM.long} kg CO2e/passenger-km</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Typical routes
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Round-trip CO2 for popular routes. The Paris-aligned 2030 budget for
            a single person is{" "}
            <strong className="text-text-primary">{GLOBAL_ANCHORS.parisAligned2030} tCO2/year</strong>{" "}
            in total.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Route</th>
                  <th className="py-3 px-4 text-right">One-way km</th>
                  <th className="py-3 px-4 text-right">Round-trip CO2e</th>
                  <th className="py-3 px-4 text-right">% of Paris budget</th>
                </tr>
              </thead>
              <tbody>
                {FLIGHT_ROUTES.map((r) => {
                  const factor = FLIGHT_KG_CO2_PER_KM[r.type];
                  const tCO2 = (r.distanceKm * 2 * factor) / 1000;
                  const pct = Math.round((tCO2 / GLOBAL_ANCHORS.parisAligned2030) * 100);
                  return (
                    <tr
                      key={`${r.from}-${r.to}`}
                      className="border-b border-border-subtle/50 last:border-b-0"
                    >
                      <td className="py-3 px-4 text-text-primary">
                        {r.from} ↔ {r.to}
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                        {r.distanceKm.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums font-semibold">
                        {tCO2.toFixed(2)} tCO2e
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                        {pct}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Why one long-haul return is so much
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            A single London-NYC return is roughly 1.6 tCO2e per passenger.
            That&apos;s 70% of the entire Paris-aligned annual budget for one person
            — gone in two days. A London-Tokyo return runs ~2.8 tCO2e, more than
            the whole budget.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The math is simple: planes burn a lot of fuel per passenger-km, and
            distance compounds. There is no clean technological fix at scale on
            the 2030 timeline — sustainable aviation fuels are scarce, hydrogen
            is decades out, and electric aviation only works for short hops. The
            cheapest carbon you can save is the flight you don&apos;t take.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Train alternatives
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Where high-speed rail exists, it slashes emissions. Same Paris-Athens
            distance by train (where feasible) is ~80 kg CO2 instead of 600+ kg
            by flight. London-Edinburgh by train is ~15 kg vs ~140 kg by flight.
            For Europe and East Asia, the rail option exists for most short and
            medium-haul; for transatlantic / transpacific, there is no
            alternative.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Sources
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a
                href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                UK DEFRA GHG Reporting Conversion Factors 2024
              </a>{" "}
              — per-passenger-km factors
            </li>
            <li>
              <a
                href="https://ourworldindata.org/travel-carbon-footprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                Our World in Data — Travel and CO2
              </a>{" "}
              — comparison to other modes of transport
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
