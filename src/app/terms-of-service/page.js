import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service for Standard Pile Foundation regarding website usage, enquiries, and project-related communications.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    title: "Website Use",
    body: [
      "This website is provided for general information about Standard Pile Foundation and its engineering services. By using the site, you agree to use it only for lawful purposes and in a way that does not interfere with the site or its users.",
      "Content on this website may be updated, revised, or removed at any time without prior notice.",
    ],
  },
  {
    title: "Service Information",
    body: [
      "Project descriptions, service details, and other website content are provided for general guidance only. Final scope, pricing, timelines, and technical responsibilities will be governed by direct discussions, quotations, work orders, or signed agreements.",
      "Submitting an enquiry through this website does not create a contractor-client relationship by itself.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Website text, branding, images, and other materials belong to Standard Pile Foundation unless stated otherwise. They may not be copied, republished, or commercially reused without permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "We aim to keep the information on this website accurate and useful, but we do not guarantee that all content is always complete, current, or error-free.",
      "Standard Pile Foundation will not be responsible for indirect or incidental loss arising solely from reliance on website content, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "Contact and Updates",
    body: [
      "If you have questions about these terms or need project-specific clarification, contact us directly before relying on information from the website.",
      "Continued use of the website after changes are posted means you accept the updated terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f6f8fb]">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="rounded-[32px] bg-white shadow-sm ring-1 ring-black/5 p-8 md:p-12 space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-900">
                Legal
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Terms of Service
              </h1>
              <p className="text-sm md:text-base leading-7 text-slate-600">
                These terms explain the conditions for using the Standard Pile
                Foundation website and interacting with us through online
                enquiries.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm md:text-base leading-7 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <p className="text-sm text-slate-500">
              Last updated: April 15, 2026
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
