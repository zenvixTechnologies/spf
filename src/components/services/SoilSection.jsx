"use client";

import { motion } from "framer-motion";
import { CircleGauge, Drill, FlaskConical } from "lucide-react";

const detailedServices = [
  {
    title: "Soil Investigation",
    image: "/soil.jpeg",
    icon: FlaskConical,
    summary:
      "Detailed sub-soil exploration that gives engineers and clients a clearer picture of the ground before structural decisions are finalized.",
    points: [
      "Borehole drilling and field logging to identify soil strata, groundwater condition, and depth variation.",
      "Collection of representative samples for laboratory testing, classification, and engineering review.",
      "Reporting support with observations that help guide foundation type, depth, and site preparation.",
    ],
  },
  {
    title: "Pile Foundation Work",
    image: "/pilling.png",
    icon: Drill,
    summary:
      "Execution-focused piling solutions designed around load demand, site constraints, and the actual behavior of the soil on site.",
    points: [
      "Capability across hydraulic rotary piling, DMC method, under-reamed cast-in-situ piles, granular piles, and sand piles.",
      "Method selection based on project condition, access, depth requirement, and the expected foundation performance.",
      "Close coordination during execution to maintain alignment, depth control, and dependable site progress.",
    ],
  },
  {
    title: "Pile Load & Integrity Testing",
    image: "/loadtest.png",
    icon: CircleGauge,
    summary:
      "Validation services that confirm the installed foundation system is performing as expected for strength, continuity, and long-term reliability.",
    points: [
      "Load testing support to verify pile behavior under working and higher applied loads.",
      "Integrity assessment to detect possible discontinuities and confirm the condition of the completed pile.",
      "Results that help consultants and clients proceed with greater confidence in safety and performance.",
    ],
  },
];

export default function SoilSection() {
  return (
    <section className="bg-[#f2f4f6] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#0b1f3a]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0b1f3a]">
            Service details
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1f3a] sm:text-4xl">
            Complete foundation support from investigation to execution and testing.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We expanded this section to clearly present the three core services
            highlighted in the about page, with more detail, stronger visual
            presentation, and practical scope for each stage of work.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-[#0b1f3a]/20 to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                    {service.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl bg-[#f7f9fb] px-4 py-4 text-sm leading-7 text-slate-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
