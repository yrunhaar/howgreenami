"use client";

import {
  CAR_KG_CO2_PER_KM,
  EV_KWH_PER_KM,
} from "@/data/emission-factors";
import {
  COUNTRIES,
  COUNTRY_CODES,
  type CountryCode,
} from "@/data/carbon-data";

const COMPARED: CountryCode[] = [
  "FR",
  "NO",
  "SE",
  "CH",
  "BR",
  "GB",
  "ES",
  "IT",
  "JP",
  "US",
  "DE",
  "CN",
  "AU",
  "IN",
  "PL",
  "ZA",
];

export default function ActivityElectricCars() {
  const evRows = COMPARED.map((code) => {
    const c = COUNTRIES[code];
    const evKgPerKm = EV_KWH_PER_KM * (c.gridIntensityGCO2PerKWh / 1000);
    return {
      country: c,
      evKgPerKm,
      petrolKgPerKm: CAR_KG_CO2_PER_KM.petrol,
      ratio: evKgPerKm / CAR_KG_CO2_PER_KM.petrol,
    };
  }).sort((a, b) => a.evKgPerKm - b.evKgPerKm);
  void COUNTRY_CODES;

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Electric cars: how clean depends on the country
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          An EV&apos;s carbon emissions per kilometre depend almost entirely on
          how its electricity is generated. The same Tesla in France emits ~6×
          less than the same Tesla in Poland. Here&apos;s how every grid stacks
          up.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            We use a typical EV consumption of{" "}
            <strong className="text-text-primary">{EV_KWH_PER_KM} kWh/km</strong>
            {" "}(about right for a Tesla Model 3 / VW ID.3 / Hyundai Kona EV at
            mixed driving). Multiply by the country&apos;s grid carbon
            intensity and you get the per-km emissions.
          </p>
          <p className="text-text-secondary leading-relaxed">
            For comparison: a typical petrol car emits{" "}
            <strong className="text-text-primary">{CAR_KG_CO2_PER_KM.petrol} kg CO2e/km</strong>{" "}
            tank-to-wheel. So an EV beats petrol any time the grid is below ~950
            g CO2/kWh — which is virtually every grid in our data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            EV emissions by country grid
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4 text-right">Grid intensity</th>
                  <th className="py-3 px-4 text-right">EV kg CO2/km</th>
                  <th className="py-3 px-4 text-right">vs petrol</th>
                </tr>
              </thead>
              <tbody>
                {evRows.map(({ country: c, evKgPerKm, ratio }) => (
                  <tr
                    key={c.code}
                    className="border-b border-border-subtle/50 last:border-b-0"
                  >
                    <td className="py-3 px-4">
                      <span className="mr-2">{c.flag}</span>
                      <span className="text-text-primary">{c.name}</span>
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                      {c.gridIntensityGCO2PerKWh} g/kWh
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-semibold">
                      {evKgPerKm.toFixed(3)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={
                          ratio < 0.3
                            ? "text-accent-sage font-semibold"
                            : ratio < 0.6
                              ? "text-accent-periwinkle font-semibold"
                              : "text-accent-amber"
                        }
                      >
                        {(ratio * 100).toFixed(0)}% as much
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Annual carbon savings
          </h2>
          <p className="text-text-secondary leading-relaxed">
            For 12,000 km of driving per year (typical European), switching from
            a petrol car to an EV saves about{" "}
            <strong className="text-text-primary">
              {Math.round((CAR_KG_CO2_PER_KM.petrol - evRows[0].evKgPerKm) * 12_000) / 1000} tCO2e
            </strong>{" "}
            in {evRows[0].country.flag} {evRows[0].country.name}, but only about{" "}
            <strong className="text-text-primary">
              {Math.round((CAR_KG_CO2_PER_KM.petrol - evRows[evRows.length - 1].evKgPerKm) * 12_000) / 1000} tCO2e
            </strong>{" "}
            in {evRows[evRows.length - 1].country.flag} {evRows[evRows.length - 1].country.name}. Same vehicle, same driving pattern, very different climate
            outcome.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Caveats
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Battery production</strong>{" "}
              adds a one-off ~5–10 tCO2 (size-dependent). Most EVs break even
              against an equivalent ICE within 2 years on a clean grid, 4 years
              on a dirty grid.
            </li>
            <li>
              <strong className="text-text-primary">Marginal vs average grid</strong>:
              charging at night may pull from the cleanest dispatchable
              capacity in a renewable-heavy grid, or the dirtiest (coal) in a
              fossil-heavy grid. We use average-grid intensity.
            </li>
            <li>
              <strong className="text-text-primary">Home solar</strong> charges
              an EV with effectively zero marginal emissions. If you have it,
              the table doesn&apos;t describe your situation — you&apos;re close
              to zero.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Sources
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a
                href="https://www.iea.org/data-and-statistics/data-product/electricity-information"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                IEA Electricity Information
              </a>
              {" "}— country grid carbon intensity.
            </li>
            <li>
              <a
                href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                UK DEFRA conversion factors
              </a>
              {" "}— ICE per-km factor and EV consumption assumption.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
