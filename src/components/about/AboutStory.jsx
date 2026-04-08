"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FlaskConical, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Built on experience",
    description:
      "Founded in Edathua in 1987, our firm has grown through consistent site delivery and long-term relationships.",
  },
  {
    icon: FlaskConical,
    title: "Technical clarity",
    description:
      "We combine field observations, testing discipline, and practical engineering judgment to guide safe decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality with accountability",
    description:
      "Each assignment is approached with safety, documentation, and dependable execution standards in mind.",
  },
];

export default function AboutStory() {
  return (
    <section
      id="about-story"
      className="bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-4 top-6 hidden h-40 w-40 rounded-full bg-[#d8e7ff] blur-3xl sm:block" />

          <div className="relative overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80"
              alt="Soil investigation work in progress"
              className="h-[320px] w-full rounded-[24px] object-cover sm:h-[400px] lg:h-[500px]"
            />
          </div>

          <div className="absolute -bottom-5 right-4 max-w-[240px] rounded-[24px] border border-white bg-[#0b4db9] px-5 py-5 text-white shadow-[0_20px_45px_rgba(11,77,185,0.3)] sm:-bottom-8 sm:right-0 sm:max-w-[280px] sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
              Our focus
            </p>
            <p className="mt-3 text-sm leading-7 text-blue-50">
              Soil investigation, pile systems, and load testing delivered in a
              coordinated, field-ready manner.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-7"
        >
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0b4db9]">
              Our story
            </span>

            <h2 className="font-['Manrope'] text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#0f172a] sm:text-[2.8rem] md:text-[3.7rem]">
              A family-run company shaped by field knowledge and trust.
            </h2>
          </div>

          <div className="space-y-5 text-[0.98rem] leading-[1.85] text-slate-600 sm:text-[1.05rem]">
            <p>
              Standard Pile Foundation was established as a partnership of six
              brothers from one family, bringing together commitment, practical
              site understanding, and a long-view approach to quality.
            </p>

            <p>
              Over the decades, our work has expanded across investigation,
              bored cast-in-situ piling, DMC systems, under-reamed piles,
              compaction and granular pile solutions, integrity checks, and pile
              load testing.
            </p>

            <p>
              Clients rely on us not only for execution, but also for clear
              communication, realistic site coordination, and engineering
              support that stays useful from start to handover.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#0b4db9]">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
