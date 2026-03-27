"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-xs">
            Our Specializations
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Engineering Services
          </h2>

          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-blue-900"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-900 text-2xl">
                explore
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Soil Investigation
            </h3>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Comprehensive geotechnical analysis to determine load-bearing
              capacity and subsurface characteristics.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Borehole Drilling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Lab Testing & Reports
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-blue-900"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-900 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white text-2xl">
                architecture
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Pile Foundation
            </h3>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Expert execution of deep foundation systems tailored to specific
              terrain requirements.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Hydraulic Rotary Piling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                DMC Chiseling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Under-reamed Piles
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-blue-900"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-900 text-2xl">
                speed
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Pile Load Testing
            </h3>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Rigorous quality assurance through static and dynamic load
              testing.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Vertical Load Tests
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                Lateral Capacity Verification
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
