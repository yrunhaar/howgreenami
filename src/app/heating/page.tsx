import ActivityHeating from "@/components/ActivityHeating";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Home heating CO2: heat pump vs gas vs oil",
  description:
    "Per-kWh emissions by heating fuel, and how heat pump emissions vary across country grids. DEFRA + IEA data; insulation-first guidance.",
  alternates: { canonical: "https://howgreenami.org/heating" },
};

export default function HeatingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[{ name: "Home", path: "/" }, { name: "Heating", path: "/heating" }]}
      />
      <ActivityHeating />
    </>
  );
}
