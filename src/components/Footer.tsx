"use client";

import Link from "next/link";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { localePath } from "@/lib/i18n/urls";

export default function Footer() {
  const t = useDictionary();
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <SisterProjects />
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
          <div className="text-sm text-[var(--muted)]">
            <div className="text-[var(--fg)] font-semibold mb-1">🌱 howgreenami.org</div>
            <div>{t.footer.tagline}</div>
            <div className="mt-2">
              {t.footer.madeBy} ·{" "}
              <a href="https://yohanrunhaar.com" target="_blank" rel="noopener">
                yohanrunhaar.com
              </a>
            </div>
          </div>
          <div className="text-sm text-[var(--muted)] flex flex-col gap-1">
            <Link href={localePath(locale, "/methodology")} className="text-[var(--muted)] hover:text-[var(--fg)]">
              {t.footer.source}
            </Link>
            <a
              href="https://github.com/yrunhaar/howgreenami"
              target="_blank"
              rel="noopener"
              className="text-[var(--muted)] hover:text-[var(--fg)]"
            >
              GitHub · MIT {t.footer.license}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SisterProjects() {
  const sites = [
    { id: "howpoorami", emoji: "💸", label: "howpoorami.org", url: "https://howpoorami.org" },
    { id: "howgreenami", emoji: "🌱", label: "howgreenami.org", url: "https://howgreenami.org" },
    { id: "howaffordable", emoji: "🏠", label: "howaffordable.org", url: "https://howaffordable.org" },
  ] as const;
  const current = "howgreenami";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
      <span className="text-[var(--muted)] mr-1">Sister projects:</span>
      {sites.map((s) => {
        const isCurrent = s.id === current;
        const className = isCurrent
          ? "inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] px-3 py-1"
          : "inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--fg)] px-3 py-1 transition-colors no-underline";
        const inner = (
          <>
            <span aria-hidden="true">{s.emoji}</span>
            <span>{s.label}</span>
          </>
        );
        return isCurrent ? (
          <span key={s.id} className={className} aria-current="page">
            {inner}
          </span>
        ) : (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className={className}>
            {inner}
          </a>
        );
      })}
    </div>
  );
}
