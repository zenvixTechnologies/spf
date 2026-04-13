import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import CTA from "@/components/services/CTA";
import FoundationGrid from "@/components/services/FoundationGrid";
import LoadTesting from "@/components/services/LoadTesting";
import ServicesHero from "@/components/services/ServicesHero";
import SoilSection from "@/components/services/SoilSection";

export const metadata = {
  title: "Services",
  description:
    "Explore Standard Pile Foundation services including soil investigation, hydraulic rotary piling, DMC piling, under-reamed piles, granular piles, sand piles, and pile load testing in Kerala.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="">
        <ServicesHero />
        <SoilSection />
        <FoundationGrid />
        <LoadTesting />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
