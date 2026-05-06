"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { localePath } from "@/lib/i18n/urls";

/**
 * Compact provenance line above the calculator. Trust signal for users
 * and an E-E-A-T signal for Google.
 */
export default function DataProvenanceBanner() {
  const { locale } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto mt-6 px-4 text-center text-xs text-text-muted">
      <span aria-hidden="true">📊 </span>
      Data: Our World in Data + UK DEFRA + IEA + IPCC AR6.{" "}
      <Link href={localePath(locale, "/methodology")} className="underline hover:text-accent-sage">
        See methodology
      </Link>
      .
    </div>
  );
}
