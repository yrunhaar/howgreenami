import { notFound } from "next/navigation";
import HomeClient from "@/components/HomeClient";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isLocaleCode(slug)) notFound();
  return <HomeClient initialCountry="US" />;
}
