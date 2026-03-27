import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 bg-[#f8f9fb]">
      <div className="max-w-5xl mx-auto px-6">
        {/* CARD */}
        <div className="relative bg-[#f1f3f5] rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-sm">
          {/* CONTENT */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-4">
              Ready to secure your foundation?
            </h2>

            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl mx-auto">
              Get in touch with our engineering team for a technical
              consultation and detailed project estimate.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#0b1f3a] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
              >
                Inquire Now
              </Link>

              <button className="bg-white border border-gray-300 text-[#0b1f3a] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
                Download Brochure
              </button>
            </div>
          </div>

          {/* DECORATIVE ICON */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px] text-[#0b1f3a]">
              precision_manufacturing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
