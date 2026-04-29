"use client";

import { useDictionary } from "./LanguageProvider";

const KOFI_URL = "https://ko-fi.com/yrunhaar";
const BOOKSHOP_URL = "https://bookshop.org/lists/howgreenami";

export default function SupportRail() {
  const t = useDictionary();
  return (
    <section
      className="border-t border-border-subtle bg-bg-card/30 px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Support and further reading"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-accent-periwinkle/30 bg-accent-periwinkle/15 p-6 sm:p-7 flex flex-col">
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold mb-3 text-text-primary">
            {t.cta.support.heading}
          </h2>
          <p className="text-text-muted leading-relaxed text-sm sm:text-base mb-5 flex-1">
            {t.cta.support.body}
          </p>
          <div>
            <a href={KOFI_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-periwinkle/15 hover:bg-accent-periwinkle/25 text-accent-periwinkle border border-accent-periwinkle/40 px-5 py-2.5 text-sm font-semibold transition-colors no-underline">
              <span aria-hidden="true">☕</span>
              <span>{t.cta.support.ctaLabel}</span>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-7 flex flex-col">
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold mb-3 text-text-primary">
            {t.cta.furtherReading.heading}
          </h2>
          <p className="text-text-muted leading-relaxed text-sm sm:text-base mb-5 flex-1">
            {t.cta.furtherReading.body}
          </p>
          <div>
            <a href={BOOKSHOP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bg-card hover:bg-accent-periwinkle/15 text-text-primary border border-border-subtle hover:border-accent-periwinkle px-5 py-2.5 text-sm font-semibold transition-colors no-underline">
              <span aria-hidden="true">📚</span>
              <span>{t.cta.furtherReading.ctaLabel}</span>
            </a>
            <p className="text-xs text-text-muted/80 mt-3 italic">
              {t.cta.furtherReading.disclosure}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
