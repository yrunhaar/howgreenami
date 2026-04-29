import FaqContent from "@/components/FaqContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about howgreenami.org: how the math works, why some numbers may differ from elsewhere, what to trust.",
  alternates: { canonical: "https://howgreenami.org/faq" },
};

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqContent />
    </>
  );
}
