"use client";

import { DIET_EMISSIONS_T_CO2_PER_YEAR } from "@/data/emission-factors";

const FOODS = [
  { name: "Beef", kg: 60.0, note: "highest of any major food" },
  { name: "Lamb", kg: 24.0, note: "" },
  { name: "Cheese", kg: 21.0, note: "" },
  { name: "Pork", kg: 7.6, note: "" },
  { name: "Chicken", kg: 6.9, note: "" },
  { name: "Fish (farmed)", kg: 5.0, note: "" },
  { name: "Eggs", kg: 4.5, note: "" },
  { name: "Rice", kg: 2.7, note: "methane from paddies" },
  { name: "Milk", kg: 2.7, note: "per litre" },
  { name: "Tofu", kg: 2.0, note: "" },
  { name: "Bread / pasta", kg: 1.4, note: "" },
  { name: "Beans / lentils", kg: 0.9, note: "" },
  { name: "Vegetables", kg: 0.4, note: "average" },
  { name: "Fruits", kg: 0.5, note: "average" },
  { name: "Nuts", kg: 0.3, note: "low — net-positive land use" },
] as const;

export default function ActivityDiet() {
  const max = Math.max(...FOODS.map((f) => f.kg));

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Diet and carbon footprint
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          Food is roughly a fifth of a typical European or American footprint.
          Within food, animal protein dominates: red meat and dairy account for
          most of the emissions, plant foods almost none.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Annual diet footprint by pattern
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            UK cohort estimates from Scarborough et al. (2023, Nature Food) for
            average dietary patterns. Tonnes of CO2-equivalent per person per
            year, food production from farm to retail.
          </p>
          <div className="space-y-2">
            {(
              [
                ["heavy_meat", "Heavy meat (>100 g/day)"],
                ["medium_meat", "Medium meat (50-100 g/day)"],
                ["low_meat", "Low meat (<50 g/day)"],
                ["pescatarian", "Pescatarian"],
                ["vegetarian", "Vegetarian"],
                ["vegan", "Vegan"],
              ] as const
            ).map(([key, label]) => {
              const v = DIET_EMISSIONS_T_CO2_PER_YEAR[key];
              const maxV = DIET_EMISSIONS_T_CO2_PER_YEAR.heavy_meat;
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-primary">{label}</span>
                    <span className="text-text-muted tabular-nums">
                      {v} tCO2e/yr
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-border-subtle overflow-hidden">
                    <div
                      className="h-full bg-accent-periwinkle"
                      style={{ width: `${Math.max(2, (v / maxV) * 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-text-secondary leading-relaxed mt-5">
            Going from heavy-meat to vegan saves ~2.3 tCO2e/year. That&apos;s
            comparable to skipping one transatlantic round-trip flight, or to a
            full year of careful driving on a 12,000 km/year petrol car.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            CO2 per kilogram, by food
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            From Poore &amp; Nemecek (2018, Science 360): farm-to-retail
            emissions per kilogram of product. The variation is enormous — beef
            is 200× more carbon-intensive than nuts.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Food</th>
                  <th className="py-3 px-4 text-right">kg CO2e per kg</th>
                  <th className="py-3 px-4">Relative</th>
                  <th className="py-3 px-4 text-text-muted">Note</th>
                </tr>
              </thead>
              <tbody>
                {FOODS.map((f) => (
                  <tr
                    key={f.name}
                    className="border-b border-border-subtle/50 last:border-b-0"
                  >
                    <td className="py-2.5 px-4 text-text-primary">{f.name}</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-semibold">
                      {f.kg}
                    </td>
                    <td className="py-2.5 px-4 w-1/3">
                      <div className="h-2 rounded-full bg-border-subtle overflow-hidden">
                        <div
                          className="h-full bg-accent-periwinkle"
                          style={{ width: `${Math.max(2, (f.kg / max) * 100)}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-text-muted text-xs">
                      {f.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            What actually moves the diet number
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Beef and lamb</strong> first.
              These are 5–10× the emissions of chicken or pork per kilogram.
              Cutting beef in half drops a heavy-meat diet by ~25%.
            </li>
            <li>
              <strong className="text-text-primary">Dairy second</strong>.
              Cheese is surprisingly high (21 kg CO2e/kg). Halving cheese is
              comparable to halving chicken.
            </li>
            <li>
              <strong className="text-text-primary">Local and seasonal does
              little</strong>. Transport is typically under 10% of food
              emissions. Production matters far more than miles.
            </li>
            <li>
              <strong className="text-text-primary">Food waste compounds</strong>.
              A third of food produced is wasted. Buying less and eating
              leftovers is roughly equivalent to going from heavy meat to
              medium meat.
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
                href="https://www.science.org/doi/10.1126/science.aaq0216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                Poore &amp; Nemecek (2018), Science 360
              </a>
              {" "}— per-food emissions meta-analysis.
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s43016-023-00795-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                Scarborough et al. (2023), Nature Food 4, 565–574
              </a>
              {" "}— per-capita diet emissions by dietary pattern.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
