"use client";

import dynamic from "next/dynamic";
import SectionPlaceholder from "@/components/lazy/SectionPlaceholder";

const AboutUs = dynamic(() => import("@/components/home/AboutUs"), {
  loading: () => (
    <SectionPlaceholder className="py-16 sm:py-20 md:py-24" />
  ),
});

const About = dynamic(() => import("@/components/home/About"), {
  loading: () => <SectionPlaceholder className="py-20" />,
});

const PortfolioShowcase = dynamic(
  () => import("@/components/home/PortfolioShowcase"),
  {
    loading: () => (
      <SectionPlaceholder className="bg-[#0b1020] py-24 md:py-28" />
    ),
  },
);

const WhyChoose = dynamic(() => import("@/components/home/WhyChoose"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#edf3fb] px-3 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" />
  ),
});

export default function HomeSections() {
  return (
    <>
      <AboutUs />
      <About />
      <PortfolioShowcase />
      <WhyChoose />
    </>
  );
}
