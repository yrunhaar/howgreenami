import ReportContent from "@/components/ReportContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Carbon footprint report (PDF)",
  description:
    "Free, private personal carbon footprint report PDF. Diet, transport, flights, home — broken down with country, world, and Paris-aligned context.",
  alternates: { canonical: "https://howgreenami.org/report" },
};

export default function ReportPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Report", path: "/report" },
        ]}
      />
      <ReportContent />
    </>
  );
}
