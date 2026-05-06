import ActivityTransport from "@/components/ActivityTransport";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Transport CO2: per-mode emissions per kilometre",
  description:
    "DEFRA factors for every transport mode side by side. Which trips dominate your transport carbon, and what swaps actually move the number.",
  alternates: { canonical: "https://howgreenami.org/transport" },
};

export default function TransportPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[{ name: "Home", path: "/" }, { name: "Transport", path: "/transport" }]}
      />
      <ActivityTransport />
    </>
  );
}
