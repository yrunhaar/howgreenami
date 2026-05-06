"use client";

import {
  CAR_KG_CO2_PER_KM,
  TRANSIT_KG_CO2_PER_KM,
  FLIGHT_KG_CO2_PER_KM,
} from "@/data/emission-factors";

const ROW = (label: string, kgPerKm: number, note?: string) => ({ label, kgPerKm, note });

export default function ActivityTransport() {
  const rows = [
    ROW("Flight (long-haul)", FLIGHT_KG_CO2_PER_KM.long, "DEFRA, with radiative forcing"),
    ROW("Flight (medium-haul)", FLIGHT_KG_CO2_PER_KM.medium, "1500-5000 km"),
    ROW("Flight (short-haul)", FLIGHT_KG_CO2_PER_KM.short, "<1500 km"),
    ROW("Petrol car (alone)", CAR_KG_CO2_PER_KM.petrol, "DEFRA, average"),
    ROW("Petrol car (4 passengers)", CAR_KG_CO2_PER_KM.petrol / 4, "per-person split"),
    ROW("Plug-in hybrid (alone)", CAR_KG_CO2_PER_KM.plugin_hybrid, "DEFRA"),
    ROW("Hybrid (alone)", CAR_KG_CO2_PER_KM.hybrid, "DEFRA"),
    ROW("Bus (per passenger)", TRANSIT_KG_CO2_PER_KM.bus, "DEFRA"),
    ROW("Taxi (per passenger)", TRANSIT_KG_CO2_PER_KM.taxi, "DEFRA"),
    ROW("Rail (per passenger)", TRANSIT_KG_CO2_PER_KM.rail, "DEFRA, average"),
    ROW("Metro (per passenger)", TRANSIT_KG_CO2_PER_KM.metro, "DEFRA"),
  ];
  rows.sort((a, b) => b.kgPerKm - a.kgPerKm);
  const max = rows[0].kgPerKm;

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Transport emissions, mode by mode
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          Per-passenger-km emissions for every mode you might choose for a given trip. The same 500 km journey can be 20× more or less carbon-intensive depending on what you take.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            CO2 per passenger-kilometre
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Mode</th>
                  <th className="py-3 px-4 text-right">kg CO2e / passenger-km</th>
                  <th className="py-3 px-4">Relative</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-border-subtle/50 last:border-b-0">
                    <td className="py-3 px-4">
                      <div className="text-text-primary">{r.label}</div>
                      {r.note && <div className="text-xs text-text-muted">{r.note}</div>}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-semibold">
                      {r.kgPerKm.toFixed(3)}
                    </td>
                    <td className="py-3 px-4 w-1/3">
                      <div className="h-2 rounded-full bg-border-subtle overflow-hidden">
                        <div
                          className="h-full bg-accent-periwinkle"
                          style={{ width: `${Math.max(2, (r.kgPerKm / max) * 100)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            What actually shifts your transport number
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li><strong className="text-text-primary">One long-haul flight</strong> typically dwarfs every other transport choice for the year combined.</li>
            <li><strong className="text-text-primary">Carpooling halves a car&apos;s per-person emissions</strong>. Two people in a petrol car beat a half-empty bus.</li>
            <li><strong className="text-text-primary">Trains are nearly always cleanest</strong> on European-style high-speed networks. The factor is &lt; 50 g CO2/passenger-km even on dirtier grids.</li>
            <li><strong className="text-text-primary">Walking and cycling are zero on the marginal trip</strong> (lifecycle emissions of bikes/shoes are negligible at any reasonable use rate).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                UK DEFRA GHG Reporting Conversion Factors 2024
              </a>
            </li>
            <li>
              <a href="https://ourworldindata.org/travel-carbon-footprint" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                Our World in Data — Travel and CO2
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
