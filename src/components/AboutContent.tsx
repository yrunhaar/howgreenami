"use client";

import { useLanguage } from "./LanguageProvider";
import { ABOUT } from "@/lib/i18n/content/about";

export default function AboutContent() {
  const { locale } = useLanguage();
  const c = ABOUT[locale];
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <header>
        <h1 className="text-4xl mb-3">{c.h1}</h1>
        <p className="text-lg text-[var(--muted)]">{c.intro}</p>
      </header>
      <Block title={c.howItWorks.heading} body={c.howItWorks.body} />
      <Block title={c.why.heading} body={c.why.body} />
      <Block title={c.limits.heading} body={c.limits.body} />
      <section>
        <h2 className="text-2xl mb-2">{c.contact.heading}</h2>
        <p className="text-[var(--fg)]">{c.contact.body}</p>
      </section>
    </article>
  );
}

function Block({ title, body }: { title: string; body: readonly string[] }) {
  return (
    <section>
      <h2 className="text-2xl mb-3">{title}</h2>
      <div className="space-y-3 text-[var(--fg)]">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
