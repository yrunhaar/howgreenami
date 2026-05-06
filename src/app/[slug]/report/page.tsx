import { notFound } from "next/navigation";
import ReportContent from "@/components/ReportContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/urls";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LocaleReport({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isLocaleCode(slug)) notFound();
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: localePath(slug, "/") },
          { name: "Report", path: localePath(slug, "/report") },
        ]}
      />
      <ReportContent />
    </>
  );
}
