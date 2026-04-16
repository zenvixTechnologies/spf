import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ServicesSections from "@/components/lazy/ServicesSections";
import ServicesHero from "@/components/services/ServicesHero";

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
        <ServicesSections />
      </main>
      <Footer />
    </>
  );
}
