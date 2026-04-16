"use client";

import dynamic from "next/dynamic";
import SectionPlaceholder from "@/components/lazy/SectionPlaceholder";

const SoilSection = dynamic(() => import("@/components/services/SoilSection"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#f2f4f6] px-4 py-20 sm:px-6 lg:px-8 lg:py-24" />
  ),
});

const FoundationGrid = dynamic(
  () => import("@/components/services/FoundationGrid"),
  {
    loading: () => (
      <SectionPlaceholder className="bg-[#f8f9fb] px-4 py-20 sm:px-6 lg:px-8 lg:py-24" />
    ),
  },
);

const LoadTesting = dynamic(() => import("@/components/services/LoadTesting"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#f8f9fb] px-4 py-20 sm:px-6 lg:px-8 lg:py-24" />
  ),
});

const CTA = dynamic(() => import("@/components/services/CTA"), {
  loading: () => (
    <SectionPlaceholder className="bg-[#f8f9fb] px-4 py-20 sm:px-6 lg:px-8 lg:py-24" />
  ),
});

export default function ServicesSections() {
  return (
    <>
      <SoilSection />
      <FoundationGrid />
      <LoadTesting />
      <CTA />
    </>
  );
}
