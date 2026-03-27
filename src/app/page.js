import About from "@/components/home/About";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Footer />
    </>
  );
}
