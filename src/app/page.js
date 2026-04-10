import About from "@/components/home/About";
import AboutUs from "@/components/home/AboutUs";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <> 
      <Navbar />
      <Hero />
      <AboutUs/>

      <About />
      {/* <Services /> */}
      <PortfolioShowcase />
      <WhyChoose />
      <Footer />
    </>
  );
}
