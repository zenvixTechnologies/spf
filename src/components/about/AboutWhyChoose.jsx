"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, FileText, Users } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Consistent quality standards",
    description:
      "Structured execution with attention to safety, testing, and dependable reporting.",
  },
  {
    icon: Users,
    title: "Experienced team coordination",
    description:
      "A qualified team with decades of combined project exposure supports each phase of work.",
  },
  {
    icon: FileText,
    title: "Useful communication",
    description:
      "Clear updates, transparent scope understanding, and practical support for consultants and clients.",
  },
  {
    icon: Clock3,
    title: "Reliable turnaround mindset",
    description:
      "We value schedule discipline and site responsiveness without compromising execution quality.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section
      id="about-why-choose"
      className="bg-[#edf3fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[32px] bg-[#0b1f3a] px-6 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:px-8 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-14"
      >
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
            Why clients choose us
          </span>

          <div className="space-y-4">
            <h2 className="font-['Manrope'] text-[2.2rem] font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-[2.8rem] md:text-[3.7rem]">
              Practical expertise for complex ground and foundation work.
            </h2>
            <p className="max-w-xl text-base leading-[1.8] text-slate-300 sm:text-lg">
              We blend family-led commitment with specialized technical service,
              helping clients move from investigation to execution with better
              clarity and confidence.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/8">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
              alt="Construction team planning foundation work"
              loading="lazy"
              className="h-[260px] w-full object-cover sm:h-[320px]"
            />
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1f3a] transition hover:bg-blue-50 sm:text-base"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[26px] border border-white/8 bg-white/[0.07] px-5 py-6 backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
