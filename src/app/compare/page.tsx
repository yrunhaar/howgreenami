import CompareContent from "@/components/CompareContent";

export const metadata = {
  title: "Compare countries by per-capita CO2",
  description: "Pick countries side-by-side: per-capita CO2, total emissions, electricity grid carbon intensity. Real public data.",
};

export default function ComparePage() {
  return <CompareContent />;
}
