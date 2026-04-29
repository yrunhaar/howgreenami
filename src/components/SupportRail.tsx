"use client";

import { useDictionary } from "./LanguageProvider";

const KOFI_URL = "https://ko-fi.com/yrunhaar";
const BOOKSHOP_URL = "https://bookshop.org/lists/howgreenami";

export default function SupportRail() {
  const t = useDictionary();
  return (
    <section
      className="border-t border-[var(--border)] bg-[var(--card)]/30 px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Support and further reading"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent-soft)]/40 p-6 sm:p-7 flex flex-col">
          <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold mb-3 text-[var(--fg)]">
            {t.cta.support.heading}
          </h2>
          <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base mb-5 flex-1">
            {t.cta.support.body}
          </p>
          <div>
            <a href={KOFI_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/15 hover:bg-[var(--accent)]/25 text-[var(--accent)] border border-[var(--accent)]/40 px-5 py-2.5 text-sm font-semibold transition-colors no-underline">
              <span aria-hidden="true">☕</span>
              <span>{t.cta.support.ctaLabel}</span>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 flex flex-col">
          <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold mb-3 text-[var(--fg)]">
            {t.cta.furtherReading.heading}
          </h2>
          <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base mb-5 flex-1">
            {t.cta.furtherReading.body}
          </p>
          <div>
            <a href={BOOKSHOP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--card)] hover:bg-[var(--accent-soft)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent)] px-5 py-2.5 text-sm font-semibold transition-colors no-underline">
              <span aria-hidden="true">📚</span>
              <span>{t.cta.furtherReading.ctaLabel}</span>
            </a>
            <p className="text-xs text-[var(--muted)]/80 mt-3 italic">
              {t.cta.furtherReading.disclosure}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
