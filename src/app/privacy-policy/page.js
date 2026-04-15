import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Standard Pile Foundation to understand how contact details and enquiry information are collected and used.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect the information you share through contact forms, phone calls, email enquiries, or direct project discussions. This can include your name, company name, phone number, email address, project location, and other details required to understand your engineering requirement.",
      "We may also receive basic technical information such as browser type or approximate device data when you visit the website.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use your information to respond to enquiries, prepare quotations, coordinate site visits, communicate about ongoing work, and improve our services.",
      "Your information is used only for legitimate business and customer support purposes related to Standard Pile Foundation.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We do not sell personal information. Information may be shared only with trusted staff, consultants, or service providers when required to respond to your request or deliver a project.",
      "We may also disclose information if required by law or to protect our legal rights and business operations.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We retain business enquiry and project communication records only for as long as reasonably necessary for operations, legal compliance, and follow-up support.",
      "We take practical steps to protect information from unauthorized access, misuse, or disclosure, but no website or online transmission can be guaranteed as completely secure.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request updates or corrections to information you have shared with us. You may also ask questions about how your information is being used.",
      "For privacy-related requests, please email standardpile87@gmail.com or call our office using the contact details provided on this website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-sm md:text-base leading-7 text-slate-600">
                This policy explains how Standard Pile Foundation collects,
                uses, and safeguards information shared through this website and
                our business communications.
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
