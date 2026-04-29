import MethodologyContent from "@/components/MethodologyContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Methodology",
  description:
    "How we turn your answers into tonnes of CO2: emission factors, country grid intensities, dietary cohort estimates, full source list.",
  alternates: { canonical: "https://howgreenami.org/methodology" },
};

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Per-capita CO2 emissions and electricity grid carbon intensity",
  description:
    "Country-level per-capita CO2 (tonnes/year), total emissions, and electricity grid carbon intensity (g CO2/kWh) used by howgreenami.org.",
  url: "https://howgreenami.org/methodology",
  license: "https://creativecommons.org/licenses/by/4.0/",
  creator: {
    "@type": "Organization",
    name: "Our World in Data, Global Carbon Project, IEA, UK DEFRA",
  },
  isAccessibleForFree: true,
  keywords: ["carbon emissions","CO2 per capita","grid carbon intensity","DEFRA conversion factors","Paris-aligned target"],
  citation: [
    { "@type": "CreativeWork", url: "https://ourworldindata.org/co2-emissions", name: "Our World in Data — CO2 emissions" },
    { "@type": "CreativeWork", url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024", name: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024" },
    { "@type": "CreativeWork", url: "https://www.iea.org/data-and-statistics/data-product/electricity-information", name: "IEA Electricity Information" }
  ],
};

export default function MethodologyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Methodology", path: "/methodology" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
      <MethodologyContent />
    </>
  );
}
