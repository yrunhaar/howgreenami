"use client";

import Link from "next/link";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { localePath } from "@/lib/i18n/urls";

export default function Footer() {
  const t = useDictionary();
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div className="text-sm text-[var(--muted)]">
          <div className="text-[var(--fg)] font-semibold mb-1">🌱 mycarbonfootprint.org</div>
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
            href="https://github.com/yrunhaar/mycarbonfootprint"
            target="_blank"
            rel="noopener"
            className="text-[var(--muted)] hover:text-[var(--fg)]"
          >
            GitHub · MIT {t.footer.license}
          </a>
        </div>
      </div>
    </footer>
  );
}
