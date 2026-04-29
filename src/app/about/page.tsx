import AboutContent from "@/components/AboutContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "About",
  description:
    "Why howgreenami.org exists: open data, real numbers, no tracking. Personal carbon footprint with sources you can audit.",
  alternates: { canonical: "https://howgreenami.org/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <AboutContent />
    </>
  );
}
