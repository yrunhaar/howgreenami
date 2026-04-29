import CompareContent from "@/components/CompareContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Compare countries by per-capita CO2",
  description:
    "Pick countries side-by-side: per-capita CO2, total emissions, electricity grid carbon intensity. Real public data.",
  alternates: { canonical: "https://howgreenami.org/compare" },
};

export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Compare countries", path: "/compare" },
        ]}
      />
      <CompareContent />
    </>
  );
}
