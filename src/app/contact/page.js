import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ContactSections from "@/components/lazy/ContactSections";

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
        <ContactSections />
      </main>

      <Footer />
    </>
  );
}
