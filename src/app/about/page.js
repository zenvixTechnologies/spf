import AboutCTA from "@/components/about/AboutCTA";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f6f8fb]">
        <AboutHero />
        <AboutStory />
        <AboutCapabilities />
        <AboutWhyChoose />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
