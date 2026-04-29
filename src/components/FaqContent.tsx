"use client";

import { useLanguage } from "./LanguageProvider";
import { FAQ } from "@/lib/i18n/content/faq";

function buildFaqJsonLd(items: readonly { question: string; answer: readonly string[] }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join(" "),
      },
    })),
  });
}

export default function FaqContent() {
  const { locale } = useLanguage();
  const c = FAQ[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(c.entries) }}
      />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            {c.h1}
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-10">{c.intro}</p>

          <div className="space-y-4">
            {c.entries.map((item) => (
              <details
                key={item.question}
                className="group border border-text-secondary/20 rounded-lg"
              >
                <summary className="cursor-pointer select-none px-5 py-4 font-[family-name:var(--font-heading)] text-lg font-bold list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-text-secondary leading-relaxed space-y-3">
                  {item.answer.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
