"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Drill,
  Mountain,
  ShieldCheck,
  Waves,
} from "lucide-react";

const primaryMethods = [
  {
    title: "Hydraulic Rotary Pile",
    image: "/pilling.png",
    icon: Drill,
    summary:
      "A dependable deep foundation method used where controlled drilling, depth accuracy, and strong load transfer are important.",
    details: [
      "Suitable for projects that need deeper pile execution in varying soil conditions.",
      "Helps maintain precision during boring and reinforcement placement.",
      "Commonly preferred where vibration-sensitive surroundings require a more controlled approach.",
    ],
    tags: ["Deep foundation", "Controlled drilling", "Low vibration"],
  },
  {
    title: "DMC Chiseling",
    image: "/soil-investigation.jpg",
    icon: Mountain,
    summary:
      "Direct Mud Circulation with chiseling support is used when harder strata or rock layers demand extra penetration capability during execution.",
    details: [
      "Useful in locations where ordinary boring faces resistance from dense or difficult ground layers.",
      "Supports better progress through challenging subsurface conditions before final pile completion.",
      "Helps the foundation system reach the required founding level with stronger technical control.",
    ],
    tags: ["Hard strata", "Rock socketing", "Tough ground"],
  },
];

const supportMethods = [
  {
    title: "Under-reamed Pile",
    image: "/pile-foundation.webp",
    icon: Compass,
    description:
      "Bored cast-in-situ piles with enlarged bulb sections that improve anchorage and are especially useful in expansive soil conditions.",
    useCase: "Helpful where soil movement or swelling behavior needs additional resistance.",
  },
  {
    title: "Granular Pile",
    image: "/loadtest.png",
    icon: ShieldCheck,
    description:
      "Ground improvement using compacted granular material to enhance bearing capacity and reduce settlement-related concerns.",
    useCase: "Chosen when weak soil needs strengthening before or along with foundation work.",
  },
  {
    title: "Sand Pile",
    image: "/soil-investigation.jpg",
    icon: Waves,
    description:
      "Vertical sand columns or drains introduced to improve drainage characteristics and support soil densification.",
    useCase: "Useful where consolidation and compaction support are needed in softer ground.",
  },
];

export default function FoundationGrid() {
  return (
    <section className="bg-[#f8f9fb] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-[#0b1f3a]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0b1f3a]">
            Foundation specialization
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0b1f3a] sm:text-4xl">
            Methods selected to match soil behavior, structural demand, and site conditions.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every project does not require the same foundation approach. This
            section explains our key execution methods in a simpler and more
            visual way so clients can understand why the right technique matters
            for stability, speed, and long-term performance.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {primaryMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.article
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative">
                  <img
                    src={method.image}
                    alt={method.title}
                    className="h-[270px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08172d]/85 via-[#08172d]/20 to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">
                      {method.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {method.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {method.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#eaf0f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0b1f3a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {method.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-2xl border border-slate-200 bg-[#fbfcfd] px-4 py-4 text-sm leading-7 text-slate-700"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[30px] bg-[#0b1f3a] p-7 text-white sm:p-9">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Supporting ground improvement methods
            </p>
            <h3 className="mt-4 text-2xl font-bold sm:text-[2rem]">
              Additional techniques used when the soil needs a more tailored solution.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Alongside major pile execution systems, we also work with
              specialized methods that improve soil behavior, strengthen support,
              and help foundations perform better under difficult site
              conditions.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {supportMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.article
                  key={method.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06]"
                >
                  <img
                    src={method.image}
                    alt={method.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/12 text-blue-200">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-white">
                      {method.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {method.description}
                    </p>
                    <p className="mt-4 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-200">
                      {method.useCase}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
