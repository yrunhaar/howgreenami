"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useDictionary, useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, stripLocale } from "@/lib/i18n/urls";

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
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const stripped = stripLocale(pathname || "/");
  const isItemActive = (key: (typeof NAV_KEYS)[number]) =>
    key === "home" ? stripped.path === "/" : stripped.path.startsWith(NAV_PATHS[key]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur-xl border-b border-[var(--border)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 h-12 sm:h-14 flex items-center justify-between gap-2">
          <Link
            href={localePath(locale, "/")}
            onClick={() => setOpen(false)}
            className="font-[var(--font-heading)] text-base sm:text-lg font-bold text-[var(--fg)] no-underline whitespace-nowrap shrink-0"
          >
            🌱 howgreenami
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_KEYS.map((key) => {
              const href = localePath(locale, NAV_PATHS[key]);
              const isActive = isItemActive(key);
              return (
                <Link
                  key={key}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors no-underline whitespace-nowrap ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)]"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <LanguageSwitcher />
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="flex md:hidden items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              className="p-2 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)] transition-colors"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t.nav.close}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        <div
          className={`absolute left-0 right-0 top-12 bg-[var(--bg)] border-b border-[var(--border)] shadow-xl transition-transform duration-200 ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="max-w-6xl mx-auto px-3 py-4 flex flex-col gap-1">
            {NAV_KEYS.map((key) => {
              const href = localePath(locale, NAV_PATHS[key]);
              const isActive = isItemActive(key);
              return (
                <Link
                  key={key}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium no-underline transition-colors ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)]"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function ThemeToggleButton({ theme, toggleTheme }: { theme: "light" | "dark"; toggleTheme: () => void }) {
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="p-2 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)] transition-colors"
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
