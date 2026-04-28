/**
 * Locale-aware formatters for numbers, percentages, and tCO2 quantities.
 */

import type { LocaleCode } from "./i18n/locales";

const LOCALE_TO_BCP47: Readonly<Record<LocaleCode, string>> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  "zh-cn": "zh-CN",
  ja: "ja-JP",
  pt: "pt-PT",
  it: "it-IT",
};

function bcp47(locale: LocaleCode): string {
  return LOCALE_TO_BCP47[locale];
}

/** Format a number as a tCO2 figure with one decimal place. */
export function formatTons(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatInteger(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), { maximumFractionDigits: 0 }).format(value);
}

export function formatPercent(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value / 100);
}

export function formatDate(value: Date, locale: LocaleCode = "en"): string {
  return new Intl.DateTimeFormat(bcp47(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(value);
}
