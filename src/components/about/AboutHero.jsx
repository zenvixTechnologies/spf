"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Users } from "lucide-react";

const stats = [
  { value: "35+", label: "Years of field expertise" },
  { value: "4000+", label: "Investigations and foundation works" },
  { value: "Kerala", label: "Trusted execution across districts" },
];

const badges = [
  { icon: BadgeCheck, text: "Quality-led execution" },
  { icon: Users, text: "Experienced engineering team" },
  { icon: MapPin, text: "Edathua, Alleppey based" },
];

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden bg-[#08162c] px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.15),transparent_28%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_35%,transparent_60%,rgba(255,255,255,0.03))]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-7"
        >
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-blue-100 sm:text-xs">
            About Standard Pile Foundation
          </span>

          <div className="space-y-4">
            <h1 className="font-['Manrope'] text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.4rem] md:text-[4.6rem]">
              Building trust below the surface,
              <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                project after project.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-[1.8] text-slate-300 sm:text-lg md:text-[1.08rem]">
              Since 1987, we have partnered with builders, consultants, and
              institutions across Kerala to deliver soil investigation, pile
              foundation work, and load testing with dependable engineering
              discipline.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2.5 text-sm text-slate-100 backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-cyan-300" strokeWidth={2.1} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0b4db9] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(11,77,185,0.34)] transition hover:bg-[#1d63d8] sm:px-7 sm:text-base"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-7 sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-6 right-8 h-28 w-28 rounded-full bg-blue-500/25 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(8,22,44,0.42)] backdrop-blur">
            <img
              src="/family.jpg"
              alt="Foundation team and equipment on site"
              className="h-[320px] w-full rounded-[24px]  sm:h-[420px] lg:h-[520px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-[#071324]/82 p-5 text-white backdrop-blur-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-200">
                Foundation legacy
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
                Family-led values, hands-on site knowledge, and methodical
                execution remain at the center of every assignment we take on.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-white/10 bg-white/[0.06] px-5 py-5 text-white backdrop-blur"
              >
                <p className="text-2xl font-extrabold text-cyan-300">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
