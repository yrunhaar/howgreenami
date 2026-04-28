"use client";

import Link from "next/link";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { localePath } from "@/lib/i18n/urls";

const KOFI_URL = "https://ko-fi.com/yrunhaar";
const BOOKSHOP_URL = "https://bookshop.org/lists/mycarbonfootprint";

export default function SupportRail() {
  const t = useDictionary();
  const { locale } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="grid md:grid-cols-3 gap-4">
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener"
          className="card !block no-underline hover:border-[var(--accent)] transition"
        >
          <div className="text-[var(--accent)] text-xs uppercase tracking-wider font-semibold mb-1">
            {t.cta.support.heading}
          </div>
          <div className="text-[var(--fg)] font-semibold mb-2">{t.cta.support.body}</div>
          <div className="text-[var(--accent)] font-semibold">{t.cta.support.ctaLabel} →</div>
        </a>

        <a
          href={BOOKSHOP_URL}
          target="_blank"
          rel="noopener"
          className="card !block no-underline hover:border-[var(--accent)] transition"
        >
          <div className="text-[var(--accent)] text-xs uppercase tracking-wider font-semibold mb-1">
            {t.cta.furtherReading.heading}
          </div>
          <div className="text-[var(--fg)] font-semibold mb-2">{t.cta.furtherReading.body}</div>
          <div className="text-[var(--accent)] font-semibold">{t.cta.furtherReading.ctaLabel} →</div>
          <div className="text-xs text-[var(--muted)] mt-2">{t.cta.furtherReading.disclosure}</div>
        </a>

        <div className="card">
          <div className="text-[var(--accent)] text-xs uppercase tracking-wider font-semibold mb-1">
            {t.cta.sister.heading}
          </div>
          <div className="text-[var(--fg)] font-semibold mb-2">{t.cta.sister.body}</div>
          <div className="flex flex-col gap-1 text-sm">
            <a href="https://howpoorami.org" target="_blank" rel="noopener">
              {t.cta.sister.howpoorami} ↗
            </a>
            <a href="https://canIaffordahouse.org" target="_blank" rel="noopener">
              {t.cta.sister.canIaffordahouse} ↗
            </a>
          </div>
          <div className="mt-3 text-xs">
            <Link href={localePath(locale, "/about")}>About →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
