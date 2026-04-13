import About from "@/components/home/About";
import AboutUs from "@/components/home/AboutUs";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";

export const metadata = {
  title: "Pile Foundation and Soil Investigation in Kerala",
  description:
    "Standard Pile Foundation delivers soil investigation, pile foundation works, deep foundation systems, and load testing across Kerala for residential, commercial, and institutional projects.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />

      <About />
      {/* <Services /> */}
      <PortfolioShowcase />
      <WhyChoose />
      <Footer />
    </>
  );
}
