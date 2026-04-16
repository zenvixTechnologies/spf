"use client";

import dynamic from "next/dynamic";
import SectionPlaceholder from "@/components/lazy/SectionPlaceholder";

const ContactInfo = dynamic(() => import("@/components/contact/Cards"), {
  loading: () => (
    <SectionPlaceholder
      className="w-full lg:col-span-4"
      containerClassName="max-w-none px-0"
    />
  ),
});

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => (
    <SectionPlaceholder
      className="w-full lg:col-span-8"
      containerClassName="max-w-none px-0"
    />
  ),
});

const WhatsAppButton = dynamic(
  () => import("@/components/contact/WhatsappButton"),
  {
    ssr: false,
  },
);

const MapGallery = dynamic(() => import("@/components/contact/MapGallery"), {
  loading: () => (
    <SectionPlaceholder className="mt-20 py-4" />
  ),
});

export default function ContactSections() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
        <ContactInfo />
        <ContactForm />
      </section>
      <WhatsAppButton />
      <MapGallery />
    </>
  );
}
