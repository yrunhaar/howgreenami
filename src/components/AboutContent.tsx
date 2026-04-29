"use client";

import { useLanguage } from "./LanguageProvider";
import { ABOUT } from "@/lib/i18n/content/about";

export default function AboutContent() {
  const { locale } = useLanguage();
  const c = ABOUT[locale];

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-8">
          {c.h1}
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          {c.intro}
        </p>

        <Block heading={c.howItWorks.heading} body={c.howItWorks.body} />
        <Block heading={c.why.heading} body={c.why.body} />
        <Block heading={c.limits.heading} body={c.limits.body} />

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            {c.contact.heading}
          </h2>
          <p className="text-text-secondary leading-relaxed">{c.contact.body}</p>
        </section>
      </article>
    </main>
  );
}

function Block({ heading, body }: { heading: string; body: readonly string[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
        {heading}
      </h2>
      <div className="space-y-3 text-text-secondary leading-relaxed">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
