"use client";

import { motion } from "framer-motion";

export default function SoilSection() {
  return (
    <section className="py-28 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-[#0b1f3a] mb-16"
        >
          Sub-Soil Investigation
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWHUr2y1VoKh4fXS1YLvdbmFdunMWwkpE9nu2p-XjXo3HihuKkmxRKqHE9QqLigvh9V5hTLDw8Ev7eZtPgmlFJd0Nz1psYUCTANfZa_dAjQ_JRUsAFahJpXv5Q6_UJm4YhKPOF5FgxPuH0N-wyTygDOay2rRnxDEwQhc8s5eQR4-7d0I5n3lvMvowps4VGWBJFoJGNJgawiHNJ9GRQpp4IoRsOlyKTLxDyqypdp4go-3AuJ0F-g2M6H74liC9KNFdctMuaaVw9FLp"
              className="w-full h-full object-cover"
              alt="soil"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
              <p className="text-white text-sm leading-relaxed">
                Precision analysis of subsurface conditions using advanced
                borehole drilling and laboratory testing protocols.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
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
            className="space-y-6"
          >
            {/* CARD 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-lg text-blue-900 group-hover:bg-[#0b1f3a] group-hover:text-white transition">
                <span className="material-symbols-outlined text-sm">
                  biotech
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-[#0b1f3a]">
                  Borehole Execution
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Systematic vertical exploration to determine stratigraphy and
                  groundwater levels using specialized drilling rigs.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-lg text-blue-900 group-hover:bg-[#0b1f3a] group-hover:text-white transition">
                <span className="material-symbols-outlined text-sm">
                  architecture
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-[#0b1f3a]">
                  Lab Characterization
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Detailed analysis of soil shear strength, plasticity index,
                  and chemical properties for foundation design.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex gap-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-lg text-blue-900 group-hover:bg-[#0b1f3a] group-hover:text-white transition">
                <span className="material-symbols-outlined text-sm">
                  analytics
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-[#0b1f3a]">
                  Bearing Capacity Analysis
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Providing precise data for safe load limits based on Standard
                  Penetration Test (SPT) values.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
