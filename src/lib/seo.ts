import { COUNTRIES, type CountryCode, isCountryCode } from "@/data/carbon-data";

/** All country codes that get their own page. */
export const SEO_COUNTRY_CODES: readonly CountryCode[] = Object.keys(COUNTRIES) as CountryCode[];

export const SITE_URL = "https://howgreenami.org";
export const SITE_NAME = "How Green Am I?";
export const SITE_OG_IMAGE = `${SITE_URL}/opengraph-image`;

export interface CountrySeoData {
  readonly code: CountryCode;
  readonly name: string;
  /** Lowercase ISO code used as the URL slug. */
  readonly slug: string;
}

export function getCountrySeo(code: CountryCode): CountrySeoData {
  const country = COUNTRIES[code];
  return {
    code,
    name: country.name,
    slug: code.toLowerCase(),
  };
}

export function getAllCountrySeo(): readonly CountrySeoData[] {
  return SEO_COUNTRY_CODES.map(getCountrySeo);
}

export function resolveCountryCode(slug: string): CountryCode | null {
  const upper = slug.toUpperCase();
  if (isCountryCode(upper)) return upper;
  return null;
}
