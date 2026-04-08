import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#f6f8fb] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0b4db9]">
              Let&apos;s connect
            </span>
            <h2 className="font-['Manrope'] text-[2rem] font-extrabold leading-[1.04] tracking-[-0.05em] text-slate-900 sm:text-[2.6rem] md:text-[3.2rem]">
              Need a dependable partner for investigation or foundation work?
            </h2>
            <p className="max-w-2xl text-base leading-[1.8] text-slate-600 sm:text-lg">
              Share your project details with our team. We can help you assess
              requirements, suggest the right service path, and plan the next
              steps clearly.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0b4db9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(11,77,185,0.24)] transition hover:bg-[#1d63d8] sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:text-base"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
