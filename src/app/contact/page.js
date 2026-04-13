import ContactInfo from "@/components/contact/Cards";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import MapGallery from "@/components/contact/MapGallery";
import WhatsAppButton from "@/components/contact/WhatsappButton";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Contact",
  description:
    "Contact Standard Pile Foundation in Edathua, Alappuzha, Kerala for soil investigation, pile foundation work, load testing, and geotechnical engineering support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f8f9fb]">
        <ContactHero />

        <section className="max-w-7xl mx-auto px-6  grid lg:grid-cols-12 gap-8">
          <ContactInfo />
          <ContactForm />
        </section>
        <WhatsAppButton />
        <MapGallery />
      </main>

      <Footer />
    </>
  );
}
