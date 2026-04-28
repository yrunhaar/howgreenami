import type { MetadataRoute } from "next";
import { LOCALE_CODES, DEFAULT_LOCALE } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/urls";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const PATHS = ["/", "/about", "/methodology", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const path of PATHS) {
    for (const locale of LOCALE_CODES) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, path)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "/" ? 1.0 : 0.7,
      });
      if (locale === DEFAULT_LOCALE) {
        // default locale is at root, no duplication
      }
    }
  }
  return entries;
}
