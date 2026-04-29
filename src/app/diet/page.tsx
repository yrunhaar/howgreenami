import ActivityDiet from "@/components/ActivityDiet";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Diet and carbon footprint: per-pattern and per-food emissions",
  description:
    "Per-capita annual emissions by dietary pattern (heavy meat to vegan) plus a per-food breakdown (beef, lamb, dairy, plants). Real cohort estimates, no nutrition fluff.",
  alternates: { canonical: "https://howgreenami.org/diet" },
};

export default function DietPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Diet", path: "/diet" },
        ]}
      />
      <ActivityDiet />
    </>
  );
}
