"use client";

import { useLanguage } from "./LanguageProvider";
import { METHODOLOGY } from "@/lib/i18n/content/methodology";

export default function MethodologyContent() {
  const { locale } = useLanguage();
  const c = METHODOLOGY[locale];
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <header>
        <h1 className="text-4xl mb-3">{c.h1}</h1>
        <p className="text-lg text-[var(--muted)]">{c.intro}</p>
      </header>

      {c.sections.map((s) => (
        <section key={s.heading}>
          <h2 className="text-2xl mb-3">{s.heading}</h2>
          <div className="space-y-3 text-[var(--fg)]">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-2xl mb-3">{c.assumptions.heading}</h2>
        <ul className="list-disc pl-6 space-y-1.5 text-[var(--fg)]">
          {c.assumptions.body.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-3">Sources</h2>
        <div className="space-y-3">
          {c.sources.map((s) => (
            <div key={s.url} className="card">
              <a href={s.url} target="_blank" rel="noopener" className="font-semibold">
                {s.title} ↗
              </a>
              <p className="text-sm text-[var(--muted)] mt-1">{s.note}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
