import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import CTA from "@/components/services/CTA";
import FoundationGrid from "@/components/services/FoundationGrid";
import LoadTesting from "@/components/services/LoadTesting";
import ServicesHero from "@/components/services/ServicesHero";
import SoilSection from "@/components/services/SoilSection";



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