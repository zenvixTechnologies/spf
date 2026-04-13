"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Headset, MapPin, Users } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    subtitle: "ISO Standards",
  },
  {
    icon: Users,
    title: "Expert Team",
    subtitle: "35+ Years Exp.",
  },
  {
    icon: MapPin,
    title: "Kerala Wide",
    subtitle: "All Districts",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    subtitle: "Always Available",
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] py-16 sm:py-20 md:py-24">
      <div className="absolute xl:inline hidden left-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-r-full bg-[#d9e8ff]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative pb-20 sm:pb-24 lg:pb-12"
        >
          <div className="absolute left-2 top-2 z-20 rounded-[18px] bg-[#0b4db9] px-4 py-4 text-white shadow-[0_22px_50px_rgba(11,77,185,0.28)] sm:left-1 sm:-top-6 sm:rounded-[22px] sm:px-7 sm:py-8">
            <p className="text-3xl font-extrabold leading-none sm:text-5xl">35+</p>
            <p className="mt-2 text-sm font-medium leading-snug sm:mt-3 sm:text-[1.05rem]">
              Years of
              <br />
              Excellence
            </p>
          </div>

          <div className="relative ml-0 overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(15,23,42,0.14)] sm:ml-8 sm:rounded-[26px] lg:ml-10">
            <img
              src="/family.jpg"
              alt="Standard Pile Foundation team at site"
              loading="lazy"
              className="h-[360px] w-full bg-[#e9eef5] object-contain sm:h-[460px] lg:h-[540px]"
            />
          </div>

          <div className="absolute -bottom-2 right-3 overflow-hidden rounded-[16px] border-[3px] border-white bg-white shadow-[0_24px_60px_rgba(15,23,42,0.2)] sm:-bottom-8 sm:right-0 sm:rounded-[18px] sm:border-4">
            <img
              src="/family1.jpg"
              alt="Pile foundation equipment"
              loading="lazy"
              className="h-[140px] w-[180px] bg-[#eef3f8] object-contain min-[420px]:h-[160px] min-[420px]:w-[220px] sm:h-[210px] sm:w-[280px] md:h-[250px] md:w-[340px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 sm:space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#dbeafe] px-4 py-2.5 text-[#0b4db9] sm:gap-3 sm:px-6 sm:py-3">
            <span className="material-symbols-outlined text-[18px]">
              info
            </span>
            <span className="text-sm font-semibold sm:text-[1.05rem]">About Us</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-[2.4rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#0f172a] sm:text-[3rem] md:text-[4.7rem]">
              Family Legacy
              <br />
              <span className="text-[#0b4db9]">Since 1987</span>
            </h2>
          </div>

          <div className="space-y-5 text-[0.98rem] leading-[1.75] text-[#4b5563] sm:space-y-6 sm:text-[1.04rem] md:space-y-7 md:text-[1.08rem]">
            <p>
              Established in 1987 in Edathua, Alleppey district, Kerala,
              Standard Pile Foundation is a family-run partnership formed by
              six brothers from a single family, backed by a qualified and
              experienced team.
            </p>

            <p>
              With over 35 years of experience, we specialize in soil
              investigation and a wide range of pile foundation services,
              including bored cast-in-situ piles (hydraulic rotary, DMC),
              under-reamed cast-in-situ, compaction piles, sand piles, and
              granular piles.
            </p>

            <p>
              Our expertise extends to integrity testing and pile load testing,
              ensuring the highest standards of quality and safety for every
              project we undertake.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-5 pt-2 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#0b4db9] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#111827] sm:text-[1.08rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6b7280] sm:text-[1.02rem]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/about#about-hero"
              className="inline-flex items-center rounded-full bg-[#0b4db9] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(11,77,185,0.24)] transition hover:bg-[#1d63d8] sm:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
