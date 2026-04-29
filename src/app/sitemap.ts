import type { MetadataRoute } from "next";
import { LOCALE_CODES, NON_DEFAULT_LOCALES } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/urls";
import { getAllCountrySeo, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * The sitemap lists every public URL across every locale. Each URL also
 * lists its `alternates.languages` so Google can discover the full
 * hreflang graph from the sitemap alone — a belt-and-suspenders complement
 * to the in-page `<link rel="alternate">` tags.
 *
 * Country slugs that overlap with non-default locale codes (de/fr/it/es/pt)
 * are skipped at the English root because the locale interpretation owns
 * the URL there.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const countries = getAllCountrySeo();
  const now = new Date().toISOString();

  const conflictingCountrySlugs = new Set<string>(NON_DEFAULT_LOCALES);

  const localizedDefaultPaths: ReadonlyArray<{
    readonly path: string;
    readonly priority: number;
    readonly changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/compare", priority: 0.8, changeFrequency: "weekly" },
    { path: "/flights", priority: 0.85, changeFrequency: "monthly" },
    { path: "/diet", priority: 0.85, changeFrequency: "monthly" },
    { path: "/electric-cars", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.6, changeFrequency: "monthly" },
    ...countries.map((c) => ({
      path: `/${c.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  const isEnglishOnlyConflict = (path: string): boolean => {
    const segments = path.split("/").filter(Boolean);
    return segments.length === 1 && conflictingCountrySlugs.has(segments[0]);
  };

  return localizedDefaultPaths.flatMap(({ path, priority, changeFrequency }) => {
    const englishCollides = isEnglishOnlyConflict(path);
    return LOCALE_CODES.flatMap((locale) => {
      if (locale === "en" && englishCollides) return [];
      const localePriority =
        locale === "en"
          ? priority
          : Math.max(0.1, +(priority - 0.05).toFixed(2));
      return [
        {
          url: `${SITE_URL}${localePath(locale, path)}`,
          lastModified: now,
          changeFrequency,
          priority: localePriority,
          alternates: {
            languages: Object.fromEntries(
              LOCALE_CODES.filter((alt) => !(alt === "en" && englishCollides)).map(
                (alt) => {
                  const bcp47 = alt === "zh-cn" ? "zh-CN" : alt;
                  return [bcp47, `${SITE_URL}${localePath(alt, path)}`];
                },
              ),
            ),
          },
        },
      ];
    });
  });
}
