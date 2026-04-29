"use client";

import { useDictionary } from "./LanguageProvider";
import CarbonCalculator from "./CarbonCalculator";
import { GLOBAL_ANCHORS, type CountryCode } from "@/data/carbon-data";

interface Props {
  readonly initialCountry: CountryCode;
}

export default function HomeClient({ initialCountry }: Props) {
  const t = useDictionary();
  return (
    <main className="min-h-screen pt-14">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {t.home.headline}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            {t.home.subheadline}
          </p>
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 text-xs text-text-muted">
            <span className="px-3 py-1.5 rounded-full bg-accent-sage/15 text-accent-sage border border-accent-sage/30">
              🌍 {GLOBAL_ANCHORS.worldAverage} tCO2 world avg
            </span>
            <span className="px-3 py-1.5 rounded-full bg-accent-periwinkle/15 text-accent-periwinkle border border-accent-periwinkle/30">
              🎯 {GLOBAL_ANCHORS.parisAligned2030} tCO2 Paris 2030
            </span>
            <span className="px-3 py-1.5 rounded-full bg-accent-rose/15 text-accent-rose border border-accent-rose/30">
              🛢️ {GLOBAL_ANCHORS.top1Average} tCO2 global top 1%
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          <CarbonCalculator initialCountry={initialCountry} />
        </div>
      </section>
    </main>
  );
}
