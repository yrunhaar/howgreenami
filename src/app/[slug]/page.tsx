import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";
import { buildHreflangAlternates, localePath } from "@/lib/i18n/urls";
import {
  getAllCountrySeo,
  resolveCountryCode,
  SITE_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
} from "@/lib/seo";
import { COUNTRIES, GLOBAL_ANCHORS } from "@/data/carbon-data";
import HomeClient from "@/components/HomeClient";
import CountryHome from "@/components/CountryHome";

interface SlugPageProps {
  readonly params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

/**
 * Single dispatcher for every top-level dynamic segment under howgreenami.
 *
 * Resolves either to a non-default locale home (e.g. /es, /de, /zh-cn) or
 * to an English country page (e.g. /us, /gb, /jp). For codes that overlap
 * (de/fr/it/es/pt are both ISO country codes AND locale codes), the locale
 * interpretation wins at the URL root.
 */
export function generateStaticParams() {
  const localeSet = new Set<string>(NON_DEFAULT_LOCALES);
  const countrySlugs = getAllCountrySeo()
    .filter((c) => !localeSet.has(c.slug))
    .map((c) => ({ slug: c.slug }));
  const localeSlugs = NON_DEFAULT_LOCALES.map((l) => ({ slug: l }));
  return [...countrySlugs, ...localeSlugs];
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isLocaleCode(slug) && slug !== "en") {
    const url = `${SITE_URL}${localePath(slug, "/")}`;
    return {
      alternates: {
        canonical: url,
        languages: buildHreflangAlternates(SITE_URL, "/"),
      },
    };
  }

  const code = resolveCountryCode(slug);
  if (!code) return {};
  const country = COUNTRIES[code];
  const url = `${SITE_URL}/${slug}`;
  const vsWorld = country.perCapitaCO2 / GLOBAL_ANCHORS.worldAverage;
  const vsParis = country.perCapitaCO2 / GLOBAL_ANCHORS.parisAligned2030;

  const title = `Carbon footprint in ${country.name}: ${country.perCapitaCO2} tCO2 per person · How Green Am I?`;
  const description = `${country.name} emits ${country.perCapitaCO2} tonnes of CO2 per person per year — ${
    vsWorld >= 1
      ? `${vsWorld.toFixed(1)}× the world average`
      : `${(1 / vsWorld).toFixed(1)}× lower than the world`
  }, and ${
    vsParis >= 1 ? `${vsParis.toFixed(1)}×` : "below"
  } the Paris-aligned 2030 target. Calculate your own footprint and see how you compare.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(SITE_URL, `/${slug}`),
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
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

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  if (isLocaleCode(slug) && slug !== "en") {
    return <HomeClient initialCountry="US" />;
  }

  const code = resolveCountryCode(slug);
  if (!code) notFound();

  const country = COUNTRIES[code];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: country.name, item: `${SITE_URL}/${slug}` },
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
