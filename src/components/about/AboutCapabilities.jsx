"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CircleGauge,
  Drill,
  FlaskConical,
  Shield,
  Waves,
} from "lucide-react";

const services = [
  {
    title: "Soil Investigation",
    description:
      "Detailed sub-soil testing and reporting to support safer structural decisions.",
    image:
      "/soil-investigation.jpg",
    icon: FlaskConical,
  },
  {
    title: "Pile Foundation Work",
    description:
      "Execution across hydraulic rotary, DMC, under-reamed, compaction, granular, and sand pile methods.",
    image:
      "/pilling.png",
    icon: Drill,
  },
  {
    title: "Load & Integrity Testing",
    description:
      "Verification services focused on strength, stability, and long-term foundation reliability.",
    image:
      "/loadtest.png",
    icon: CircleGauge,
  },
];

const methods = [
  "Hydraulic Rotary Pile",
  "DMC Method",
  "Chiseling Support",
  "Under-reamed Cast-in-situ Pile",
  "Granular Pile",
  "Sand Pile",
];

const values = [
  {
    icon: Shield,
    title: "Safety-first execution",
    description:
      "We plan and execute with attention to site safety, process discipline, and coordination.",
  },
  {
    icon: ArrowUpRight,
    title: "Responsive project support",
    description:
      "From enquiry to completion, clients receive practical updates and clear guidance at every stage.",
  },
  {
    icon: Waves,
    title: "Method matched to soil condition",
    description:
      "We adapt our approach to ground realities so the solution fits the site, not the other way around.",
  },
];

export default function AboutCapabilities() {
  return (
    <section
      id="about-capabilities"
      className="bg-[#0b1120] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-4"
        >
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
            What we do
          </span>
          <h2 className="font-['Manrope'] text-[2.2rem] font-extrabold leading-[1.03] tracking-[-0.05em] sm:text-[2.9rem] md:text-[3.9rem]">
            Specialized services designed for dependable foundations.
          </h2>
          <p className="text-base leading-[1.8] text-slate-400 sm:text-lg">
            Our capabilities cover investigation, execution, and validation,
            helping projects move forward with stronger technical confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.06] shadow-[0_20px_55px_rgba(2,6,23,0.32)]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[250px] w-full object-cover"
                />
                <div className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-extrabold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.98rem]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-white/8 bg-white/[0.04] p-7 sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Foundation methods
            </p>
            <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-[2rem]">
              Techniques selected to match site needs.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              We use multiple pile and ground improvement approaches so each
              project receives a method aligned to its soil profile, load
              requirements, and execution conditions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {methods.map((method) => (
                <div
                  key={method}
                  className="rounded-[22px] border border-white/8 bg-white/[0.05] px-4 py-4 text-sm font-semibold text-slate-100 sm:text-base"
                >
                  {method}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="grid gap-4"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[26px] border border-white/8 bg-white/[0.05] px-6 py-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
