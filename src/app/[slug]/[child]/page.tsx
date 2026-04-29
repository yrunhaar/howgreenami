import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocaleCode,
  NON_DEFAULT_LOCALES,
  type LocaleCode,
} from "@/lib/i18n";
import { buildHreflangAlternates, localePath } from "@/lib/i18n/urls";
import {
  getAllCountrySeo,
  resolveCountryCode,
  SITE_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
} from "@/lib/seo";
import { COUNTRIES, GLOBAL_ANCHORS } from "@/data/carbon-data";
import CountryHome from "@/components/CountryHome";

interface ChildPageProps {
  readonly params: Promise<{ slug: string; child: string }>;
}

export const dynamicParams = false;

/**
 * Locale-prefixed country pages: /{locale}/{country}, e.g. /de/us = German
 * "United States" carbon footprint page. Cross product of every non-default
 * locale × every country code.
 */
export function generateStaticParams() {
  const params: { slug: string; child: string }[] = [];
  for (const locale of NON_DEFAULT_LOCALES) {
    for (const c of getAllCountrySeo()) {
      params.push({ slug: locale, child: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ChildPageProps): Promise<Metadata> {
  const { slug, child } = await params;
  if (!isLocaleCode(slug) || slug === "en") return {};
  const code = resolveCountryCode(child);
  if (!code) return {};
  const country = COUNTRIES[code];
  const url = `${SITE_URL}${localePath(slug, `/${child}`)}`;
  const vsWorld = country.perCapitaCO2 / GLOBAL_ANCHORS.worldAverage;
  const vsParis = country.perCapitaCO2 / GLOBAL_ANCHORS.parisAligned2030;

  const title = `Carbon footprint in ${country.name}: ${country.perCapitaCO2} tCO2 per person`;
  const description = `${country.name} emits ${country.perCapitaCO2} tonnes of CO2 per person per year — ${
    vsWorld >= 1
      ? `${vsWorld.toFixed(1)}× the world average`
      : `${(1 / vsWorld).toFixed(1)}× lower than the world`
  }, and ${
    vsParis >= 1 ? `${vsParis.toFixed(1)}×` : "below"
  } the Paris-aligned 2030 target.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(SITE_URL, `/${child}`),
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: SITE_NAME,
      locale: (slug as LocaleCode).replace("-", "_"),
      url,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: `Carbon footprint in ${country.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}

export default async function LocaleCountryPage({ params }: ChildPageProps) {
  const { slug, child } = await params;
  if (!isLocaleCode(slug) || slug === "en") notFound();
  const code = resolveCountryCode(child);
  if (!code) notFound();

  const country = COUNTRIES[code];
  const url = `${SITE_URL}${localePath(slug, `/${child}`)}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${localePath(slug, "/")}` },
      { "@type": "ListItem", position: 2, name: country.name, item: url },
    ],
  };

  return (
    <>
      <CountryHome country={country} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
