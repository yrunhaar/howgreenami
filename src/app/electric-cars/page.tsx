import ActivityElectricCars from "@/components/ActivityElectricCars";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Electric car CO2 emissions by country grid",
  description:
    "An EV's per-km emissions depend almost entirely on the local electricity grid. France emits ~6× less per km than Poland — same vehicle. Full country-by-country table.",
  alternates: { canonical: "https://howgreenami.org/electric-cars" },
};

export default function EVPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Electric cars", path: "/electric-cars" },
        ]}
      />
      <ActivityElectricCars />
    </>
  );
}
