import AboutCTA from "@/components/about/AboutCTA";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "About",
  description:
    "Learn about Standard Pile Foundation, a family-run geotechnical and pile foundation company serving Kerala since 1987 with dependable engineering execution and testing services.",
  alternates: {
    canonical: "/about",
  },
};

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
