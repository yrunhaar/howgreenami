"use client";

import { useLanguage } from "./LanguageProvider";
import { FAQ } from "@/lib/i18n/content/faq";

export default function FaqContent() {
  const { locale } = useLanguage();
  const c = FAQ[locale];
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl mb-3">{c.h1}</h1>
        <p className="text-lg text-[var(--muted)]">{c.intro}</p>
      </header>
      <div className="space-y-6">
        {c.entries.map((e, i) => (
          <details key={i} className="card open:shadow-sm">
            <summary className="cursor-pointer font-semibold text-lg list-none">
              {e.question}
            </summary>
            <div className="mt-3 space-y-2 text-[var(--fg)]">
              {e.answer.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </article>
  );
}
