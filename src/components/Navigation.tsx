"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { localePath, stripLocale } from "@/lib/i18n/urls";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_KEYS = ["home", "compare", "methodology", "faq", "about"] as const;

const NAV_PATHS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  compare: "/compare",
  methodology: "/methodology",
  faq: "/faq",
  about: "/about",
};

export default function Navigation() {
  const t = useDictionary();
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const stripped = stripLocale(pathname || "/");

  return (
    <nav className="border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href={localePath(locale, "/")}
          className="font-[var(--font-heading)] text-lg font-bold text-[var(--fg)] no-underline"
        >
          🌱 mycarbonfootprint
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {NAV_KEYS.map((key) => {
            const target = localePath(locale, NAV_PATHS[key]);
            const active =
              key === "home"
                ? stripped.path === "/"
                : stripped.path.startsWith(NAV_PATHS[key]);
            return (
              <Link
                key={key}
                href={target}
                className={`text-sm no-underline ${
                  active
                    ? "text-[var(--fg)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                {t.nav[key]}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--fg)]"
          aria-label={t.nav.menu}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] px-4 py-3 flex flex-col gap-3">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={localePath(locale, NAV_PATHS[key])}
              className="text-sm text-[var(--fg)] no-underline"
              onClick={() => setOpen(false)}
            >
              {t.nav[key]}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
