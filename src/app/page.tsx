import HomeClient from "@/components/HomeClient";
import HowToJsonLd from "@/components/HowToJsonLd";

export default function HomePage() {
  return (
    <>
      <HowToJsonLd
        name="Calculate your personal carbon footprint"
        description="A free, four-step calculator that turns your diet, transport, home energy and consumption choices into tonnes of CO2 per year, then compares the result to your country and the Paris-aligned target."
        url="/"
        steps={[
          { name: "Pick your country", text: "Select your country so the calculator can use the right electricity grid carbon intensity and country-typical defaults." },
          { name: "Diet", text: "Pick your dietary pattern from heavy-meat to vegan. Diet emissions come from peer-reviewed cohort estimates (Scarborough et al. 2023)." },
          { name: "Transport and flights", text: "Enter annual driving kilometres + fuel type, plus number of flights by haul. Factors are from UK DEFRA 2024 conversion tables." },
          { name: "Home and consumption", text: "Add household size, heating fuel, kWh/year (or use country defaults). Pick a consumption tier for clothes, electronics and services." },
        ]}
      />
      <HomeClient initialCountry="US" />
    </>
  );
}
