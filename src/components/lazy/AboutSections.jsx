"use client";

import dynamic from "next/dynamic";
import SectionPlaceholder from "@/components/lazy/SectionPlaceholder";

const AboutStory = dynamic(() => import("@/components/about/AboutStory"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" />
  ),
});

const AboutCapabilities = dynamic(
  () => import("@/components/about/AboutCapabilities"),
  {
    loading: () => (
      <SectionPlaceholder className="bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" />
    ),
  },
);

const AboutWhyChoose = dynamic(
  () => import("@/components/about/AboutWhyChoose"),
  {
    loading: () => (
      <SectionPlaceholder className="bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" />
    ),
  },
);

const AboutCTA = dynamic(() => import("@/components/about/AboutCTA"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" />
  ),
});

export default function AboutSections() {
  return (
    <>
      <AboutStory />
      <AboutCapabilities />
      <AboutWhyChoose />
      <AboutCTA />
    </>
  );
}
