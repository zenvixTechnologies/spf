"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error message

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "default_service",
        "template_rc1trkj",
        formRef.current,
        "gOsh7N_-pdfvbdmcB",
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="w-full lg:col-span-8 md:px-0">
      <div className="relative bg-[#f1f3f5] p-6 sm:p-8 md:p-12 rounded-xl overflow-hidden text-black">
        {/* Decorative Shape */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#0b1f3a]/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b1f3a] mb-6 md:mb-8 relative z-10">
          Project Inquiry Form
        </h2>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative z-10"
        >
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase text-[#6b7280]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-[#e5e7eb] focus:bg-white p-3 md:p-4 rounded-lg outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase text-[#6b7280]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full bg-[#e5e7eb] focus:bg-white p-3 md:p-4 rounded-lg outline-none transition"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase text-[#6b7280]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              required
              placeholder="+91 00000 00000"
              className="w-full bg-[#e5e7eb] focus:bg-white p-3 md:p-4 rounded-lg outline-none transition"
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase text-[#6b7280]">
              Service Required
            </label>

            <input
              type="text"
              name="service"
              placeholder="Enter required service"
              className="w-full bg-[#e5e7eb] focus:bg-white p-3 md:p-4 rounded-lg outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-semibold uppercase text-[#6b7280]">
              Project Details
            </label>

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Tell us about your project..."
              className="w-full bg-[#e5e7eb] focus:bg-white p-3 md:p-4 rounded-lg outline-none transition"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#0b1f3a] text-white py-4 md:py-5 rounded-xl font-semibold text-sm md:text-[15px] transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && (
              <p className="mt-3 text-sm text-center font-medium">{status}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
