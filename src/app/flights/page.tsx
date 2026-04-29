import ActivityFlights from "@/components/ActivityFlights";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Flight CO2 calculator: how much your flight emits",
  description:
    "DEFRA emission factors for short / medium / long-haul flights, with round-trip CO2 for popular routes and how each compares to the Paris-aligned annual budget.",
  alternates: { canonical: "https://howgreenami.org/flights" },
};

export default function FlightsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Flights", path: "/flights" },
        ]}
      />
      <ActivityFlights />
    </>
  );
}
