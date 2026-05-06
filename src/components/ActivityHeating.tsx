"use client";

import { HEATING_KG_CO2_PER_KWH } from "@/data/emission-factors";
import { COUNTRIES, type CountryCode } from "@/data/carbon-data";

const COMPARED: CountryCode[] = ["FR", "NO", "SE", "CH", "GB", "DE", "PL", "US", "CA", "JP", "CN", "IN"];

export default function ActivityHeating() {
  // 12,000 kWh/yr is a typical detached-home heating load in temperate climates.
  const annualKWh = 12000;
  const fuelRows = [
    { name: "Heat pump (electric, mild climate, COP 3)", factor: 0.061, note: "kg CO2 per kWh of heat delivered, on a typical EU grid" },
    { name: "District heating (EU average)", factor: HEATING_KG_CO2_PER_KWH.district, note: "varies widely by country" },
    { name: "Natural gas boiler", factor: HEATING_KG_CO2_PER_KWH.gas, note: "DEFRA 2024" },
    { name: "Oil boiler", factor: HEATING_KG_CO2_PER_KWH.oil, note: "DEFRA 2024" },
    { name: "Wood / biomass", factor: HEATING_KG_CO2_PER_KWH.wood, note: "short-cycle, treated as non-fossil" },
  ] as const;

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Heating: heat pumps vs gas vs oil
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          For most temperate climate homes, heating is the single biggest line item in the annual carbon budget. Here&apos;s how the main fuel options compare on emissions and what &quot;electrify heating&quot; actually means in practice.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Per-kWh emissions, by fuel
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            DEFRA factors per kWh of heat delivered to the home (gas/oil) or per kWh of heat output (heat pump / district).
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Fuel</th>
                  <th className="py-3 px-4 text-right">kg CO2/kWh</th>
                  <th className="py-3 px-4 text-right">12,000 kWh/yr</th>
                </tr>
              </thead>
              <tbody>
                {fuelRows.map((r) => (
                  <tr key={r.name} className="border-b border-border-subtle/50 last:border-b-0">
                    <td className="py-3 px-4">
                      <div className="text-text-primary">{r.name}</div>
                      <div className="text-xs text-text-muted">{r.note}</div>
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-semibold">
                      {r.factor.toFixed(3)}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                      {(r.factor * annualKWh / 1000).toFixed(2)} tCO2
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Heat pump emissions by country grid
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A heat pump is only as clean as the grid it runs on. Same unit, same heat demand, different country: emissions vary by an order of magnitude. Assuming COP 3 (one kWh of electricity yields three kWh of heat).
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4 text-right">Grid intensity</th>
                  <th className="py-3 px-4 text-right">Heat-pump kg CO2/kWh heat</th>
                </tr>
              </thead>
              <tbody>
                {COMPARED.map((code) => {
                  const c = COUNTRIES[code];
                  const factor = (c.gridIntensityGCO2PerKWh / 1000) / 3;
                  return (
                    <tr key={code} className="border-b border-border-subtle/50 last:border-b-0">
                      <td className="py-3 px-4">
                        <span className="mr-2">{c.flag}</span>
                        <span className="text-text-primary">{c.name}</span>
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                        {c.gridIntensityGCO2PerKWh} g/kWh
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums font-semibold">
                        {factor.toFixed(3)}
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
            What this means in practice
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Gas → heat pump on a clean grid</strong> (FR, NO, SE, CH) cuts heating emissions by ~95%.
            </li>
            <li>
              <strong className="text-text-primary">Gas → heat pump on a dirty grid</strong> (PL, IN) still cuts emissions, but only by ~25%. The win compounds as the grid decarbonizes.
            </li>
            <li>
              <strong className="text-text-primary">Insulation comes first</strong>. A heat pump that runs at half capacity in a well-insulated home beats a heat pump that compensates for poor insulation.
            </li>
            <li>
              <strong className="text-text-primary">Oil and direct electric resistive</strong> are the worst combinations on most grids. Switch order of operations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Sources
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                UK DEFRA GHG Reporting Conversion Factors 2024
              </a>
            </li>
            <li>
              <a href="https://www.iea.org/data-and-statistics/data-product/electricity-information" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                IEA Electricity Information
              </a> — country grid carbon intensity.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
