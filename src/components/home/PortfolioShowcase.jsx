"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, MapPin } from "lucide-react";

const projects = [
  {
    category: "Residential",
    title: "Chandy's Tall County",
    location: "Kottayam",
    image: "/Chandys County Kottayam.png",
  },
  {
    category: "Educational",
    title: "Brilliant Study Centre",
    location: "Pala",
    image:
      "/Brilliant Study Centre Pala.png",
  },
  {
    category: "Educational",
    title: "Darsana Academy",
    location: "Nagampadam",
    image:
      "/Darsana Academy Nagampadam.avif",
  },
  {
    category: "Hospitality",
    title: "Lake Palace Resort",
    location: "Alleppey",
    image:
      "/Lake Palace Resort.png",
  },
  {
    category: "Residential",
    title: "AVS Serene City",
    location: "Thiruvalla",
    image:
      "/AVS Serene City.png",
  },
  {
    category: "Commercial",
    title: "Arcadia Hotel",
    location: "Idinjillam",
    image:
      "/Arcadia Hotel.png",
  },
];

export default function PortfolioShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const featuredProjects = [
    projects[startIndex % projects.length],
    projects[(startIndex + 1) % projects.length],
    projects[(startIndex + 2) % projects.length],
  ];

  const nextProjects = () => {
    setStartIndex((current) => (current + 1) % projects.length);
  };

  const previousProjects = () => {
    setStartIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-[#0b1020] py-24 md:py-28">
      <div className="mx-auto max-w-[1720px] px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-start md:justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#10284d] px-5 py-3 text-[#60a5fa] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <Building2 className="h-4 w-4" strokeWidth={2.3} />
              <span className="text-lg font-semibold">Portfolio</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-[2.7rem] font-extrabold leading-none tracking-[-0.04em] text-white md:text-[4.3rem]">
                Projects <span className="text-[#60a5fa]">Accomplished</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 self-start md:pt-3">
            <button
              type="button"
              onClick={previousProjects}
              aria-label="Previous projects"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/7 text-white transition hover:bg-white/12"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextProjects}
              aria-label="Next projects"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0b4db9]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.03fr_1.03fr_1fr]">
          {featuredProjects.map((project, index) => {
            const isHighlighted = index === 1;

            return (
              <motion.article
                key={`${project.title}-${startIndex}-${index}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[22px] ${
                  isHighlighted
                    ? "ring-2 ring-[#60a5fa] ring-offset-0"
                    : "border border-white/6"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-black/20 ${
                    isHighlighted ? "shadow-[inset_0_0_0_1px_rgba(96,165,250,0.65)]" : ""
                  }`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full bg-[#0b4db9] px-4 py-2 text-sm font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="max-w-[18ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.1rem]">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-lg text-white/72">
                    <MapPin className="h-4 w-4 text-[#60a5fa]" fill="currentColor" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {projects.map((project, index) => {
            const isActive = featuredProjects.some(
              (featuredProject) => featuredProject.title === project.title
            );

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setStartIndex(index)}
                className={`group relative overflow-hidden rounded-[20px] text-left transition ${
                  isActive
                    ? "ring-2 ring-[#60a5fa]"
                    : "border border-white/8 hover:border-white/18"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-28 w-full object-cover transition duration-500 group-hover:scale-105 md:h-36"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/88 via-[#030712]/18 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="line-clamp-2 text-sm font-semibold leading-tight text-white">
                    {project.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
