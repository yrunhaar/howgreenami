import MapContent from "@/components/MapContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "World map of CO2 emissions per capita",
  description:
    "Interactive choropleth showing per-capita CO2 emissions, electricity grid intensity, and total emissions for every country. Click a country for the full breakdown.",
  alternates: { canonical: "https://howgreenami.org/map" },
  openGraph: {
    title: "World map of CO2 emissions per capita",
    description: "Interactive choropleth: per-capita CO2 by country, color-coded by Paris-aligned target.",
    url: "https://howgreenami.org/map",
  },
};

export default function MapPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[{ name: "Home", path: "/" }, { name: "Map", path: "/map" }]}
      />
      <MapContent />
    </>
  );
}
