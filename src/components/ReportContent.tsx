"use client";

import { useState } from "react";
import { useDictionary, useLanguage } from "./LanguageProvider";
import {
  COUNTRIES,
  COUNTRY_CODES,
  type CountryCode,
} from "@/data/carbon-data";
import { computeFootprint, defaultInputs } from "@/lib/carbon-estimate";
import { interpolate } from "@/lib/i18n";
import { generateReportPdf } from "@/lib/report/generate-pdf";

const FALLBACK_TONS = 4.7;

export default function ReportContent() {
  const t = useDictionary();
  const { locale } = useLanguage();
  const [country, setCountry] = useState<CountryCode>("US");
  const [tons, setTons] = useState<number>(FALLBACK_TONS);
  const [generating, setGenerating] = useState(false);

  const onGenerate = async () => {
    setGenerating(true);
    try {
      // Build a synthetic FootprintInputs whose computed total roughly
      // matches the user-entered tons. We do this by starting from the
      // country's defaultInputs and uniformly scaling.
      const c = COUNTRIES[country];
      const baseInputs = defaultInputs(c);
      const baseResult = computeFootprint(baseInputs, c);
      const scale = tons / Math.max(0.001, baseResult.totalTCO2);
      const breakdown = {
        diet: baseResult.breakdown.diet * scale,
        transport: baseResult.breakdown.transport * scale,
        flights: baseResult.breakdown.flights * scale,
        home: baseResult.breakdown.home * scale,
        consumption: baseResult.breakdown.consumption * scale,
      };
      await generateReportPdf({
        locale,
        countryCode: country,
        inputs: baseInputs,
        result: { totalTCO2: tons, breakdown },
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <main className="min-h-screen pt-14 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            {t.report.landingTitle}
          </h1>
          <span className="inline-block mt-6 text-xs font-semibold text-accent-amber bg-accent-amber/15 border border-accent-amber/30 rounded-full px-3 py-1.5">
            ☕ {t.report.landingFreeBadge}
          </span>
        </header>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <FeatureCard
            title={t.report.landingFeatureA.title}
            body={t.report.landingFeatureA.body}
          />
          <FeatureCard
            title={t.report.landingFeatureB.title}
            body={t.report.landingFeatureB.body}
          />
          <FeatureCard
            title={t.report.landingFeatureC.title}
            body={t.report.landingFeatureC.body}
          />
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-1">
            {t.report.landingPicker.title}
          </h2>
          <p className="text-text-secondary text-sm mb-5">
            {t.report.landingPicker.subtitle}
          </p>

          <label className="block mb-4">
            <span className="block text-sm font-medium text-text-primary mb-1">
              {t.report.landingPicker.countryLabel}
            </span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value as CountryCode)}
              className="w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
            >
              {[...COUNTRY_CODES]
                .sort((a, b) =>
                  COUNTRIES[a].name.localeCompare(COUNTRIES[b].name),
                )
                .map((code) => (
                  <option key={code} value={code}>
                    {COUNTRIES[code].flag} {COUNTRIES[code].name}
                  </option>
                ))}
            </select>
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium text-text-primary">
              {t.report.landingPicker.tonsLabel}
            </span>
            <span className="block text-xs text-text-muted mt-0.5">
              {t.report.landingPicker.tonsHelp}
            </span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step={0.1}
              value={Number.isFinite(tons) ? tons : 0}
              onChange={(e) => {
                const n = Number(e.target.value);
                setTons(Number.isFinite(n) ? n : 0);
              }}
              className="mt-1 w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
            />
          </label>

          <button
            type="button"
            onClick={onGenerate}
            disabled={generating || tons <= 0}
            className="w-full mt-2 px-5 py-3 rounded-lg bg-accent-sage text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {generating
              ? t.report.landingPicker.generatingButton
              : t.report.landingPicker.generateButton}
          </button>
        </div>
      </article>
    </main>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-5">
      <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
    </div>
  );
}

void interpolate;
