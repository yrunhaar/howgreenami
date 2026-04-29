"use client";

import { useLanguage } from "./LanguageProvider";
import { METHODOLOGY } from "@/lib/i18n/content/methodology";

export default function MethodologyContent() {
  const { locale } = useLanguage();
  const c = METHODOLOGY[locale];

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-8">
          {c.h1}
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-10">{c.intro}</p>

        {c.sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              {s.heading}
            </h2>
            <div className="space-y-3 text-text-secondary leading-relaxed">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            {c.assumptions.heading}
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            {c.assumptions.body.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Sources
          </h2>
          <ul className="list-none text-text-secondary leading-relaxed space-y-3 ml-2">
            {c.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-periwinkle hover:underline font-semibold"
                >
                  {s.title}
                </a>
                <span className="text-text-muted"> — {s.note}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
