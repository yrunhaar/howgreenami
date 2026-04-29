import { SITE_URL } from "@/lib/seo";

interface Crumb {
  readonly name: string;
  readonly path: string;
}

interface Props {
  readonly crumbs: readonly Crumb[];
}

/**
 * Server-rendered Schema.org BreadcrumbList JSON-LD for static pages.
 * Drop into each route's page.tsx alongside the content component.
 */
export default function BreadcrumbJsonLd({ crumbs }: Props) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
