"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Drill,
  Hammer,
  Layers3,
  MoveUpRight,
  Settings2,
  Waves,
} from "lucide-react";

const methods = [
  {
    title: "Hydraulic Rotary",
    icon: Drill,
  },
  {
    title: "DMC Method",
    icon: Settings2,
  },
  {
    title: "Chiseling",
    icon: Hammer,
  },
  {
    title: "Under-reamed Pile",
    icon: MoveUpRight,
  },
  {
    title: "Granular Pile",
    icon: Layers3,
  },
  {
    title: "Sand Pile",
    icon: Waves,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#edf3fb] px-3 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-[2048px] overflow-hidden rounded-[26px] bg-[#0b1120] px-5 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:rounded-[30px] sm:px-8 sm:py-10 md:px-12 md:py-16 xl:rounded-[34px] xl:px-[72px] xl:py-[74px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_32%)]" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" />

        <div className="relative z-10 grid gap-8 sm:gap-10 xl:grid-cols-[0.95fr_1fr] xl:items-center xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[760px] space-y-6 sm:space-y-8 xl:space-y-10"
          >
            <div className="space-y-4 sm:space-y-5">
              <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-200 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                Pile Systems
              </span>

              <h2 className="text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.8rem] md:text-6xl">
                Pile Foundation Methods
              </h2>

              <p className="max-w-[740px] text-base leading-[1.65] text-slate-400 sm:text-lg md:text-[1.08rem]">
                We employ various advanced techniques tailored to your project
                requirements and soil conditions.
              </p>
            </div>

            <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0b4db9] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_36px_rgba(11,77,185,0.34)] transition hover:bg-[#1d63d8] sm:gap-3 sm:px-9 sm:py-5 sm:text-xl"
                >
                  Discuss Your Project
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>

                <Link
                  href="/about#about-why-choose"
                  className="inline-flex items-center rounded-full border border-white/[0.12] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:px-8 sm:py-5 sm:text-base"
                >
                  Why Choose Us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-4 sm:gap-5 md:grid-cols-2"
          >
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <motion.div
                  key={method.title}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group rounded-[22px] border border-white/5 bg-white/[0.11] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.14] sm:rounded-[26px] sm:px-7 sm:py-8"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-400 transition duration-300 group-hover:bg-blue-500/18 group-hover:text-blue-300 sm:mb-7 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-[1.2rem] font-bold tracking-[-0.03em] text-white sm:text-[1.35rem] xl:text-[1.28rem]">
                    {method.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
