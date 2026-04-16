import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import HomeSections from "@/components/lazy/HomeSections";

export const metadata = {
  title: "Standard Pile Foundation | Pile Foundation and Soil Investigation in Kerala",
  description:
    "Standard Pile Foundation delivers soil investigation, pile foundation works, deep foundation systems, and load testing across Kerala from Edathua, Alappuzha for residential, commercial, and institutional projects.",
  keywords: [
    "Standard Pile Foundation",
    "standard pile foundation",
    "standard pile foundation kerala",
    "standard pile foundation alappuzha",
    "pile foundation and soil investigation in Kerala",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Standard Pile Foundation | Pile Foundation and Soil Investigation in Kerala",
    description:
      "Standard Pile Foundation delivers soil investigation, pile foundation works, deep foundation systems, and load testing across Kerala from Edathua, Alappuzha.",
    url: "/",
  },
  twitter: {
    title:
      "Standard Pile Foundation | Pile Foundation and Soil Investigation in Kerala",
    description:
      "Standard Pile Foundation delivers soil investigation, pile foundation works, deep foundation systems, and load testing across Kerala from Edathua, Alappuzha.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSections />
      <Footer />
    </>
  );
}
