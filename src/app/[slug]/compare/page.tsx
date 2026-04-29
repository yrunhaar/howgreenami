import { notFound } from "next/navigation";
import CompareContent from "@/components/CompareContent";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LocaleCompare({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isLocaleCode(slug)) notFound();
  return <CompareContent />;
}
