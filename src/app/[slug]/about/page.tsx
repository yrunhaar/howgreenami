import { notFound } from "next/navigation";
import AboutContent from "@/components/AboutContent";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LocaleAbout({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isLocaleCode(slug)) notFound();
  return <AboutContent />;
}
