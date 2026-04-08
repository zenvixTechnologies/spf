// export default function About() {
//   return (
//     <section id="about" className="py-14 sm:py-32 bg-[#f8f9fb]">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {/* IMAGE SIDE */}
//         <div className="relative group">
//           {/* Background decorative box */}
//           <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-xl opacity-40"></div>

//           {/* Main Image */}
//           <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
//             <img
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPMepl0k17GEA0DMzr7hGgukR3R5kTKAggg6Xvwc5EHuOoqZAoHn42YnfxBf8d6OBdDoOnSmEQ3O2-48Eo4C10Cf6I5N0GZK-IPrDaCgcIkfSO12OHNy9wWfQzxv5AKh1taCHEWBBkvbFL47CS0j0aY85LARSo4a8ajY3GoR19lXgphkQJj8Y9pwDXWhSXkMS0khOkYQMZczR1njtAxPqns4kgrlr-yhtw-msMQHZGLUSgs_y0OJeALjPPobTlvpxmw7so2WhfBPj"
//               className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
//               alt="about"
//             />
//           </div>

//           {/* Floating Card */}
//           <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl hidden md:block z-10">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <span className="material-symbols-outlined text-blue-900">
//                   history
//                 </span>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-500">
//                   Established
//                 </p>
//                 <h4 className="text-xl font-extrabold text-gray-900">1987</h4>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CONTENT SIDE */}
//         <div className="space-y-8">
//           {/* Label */}
//           <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-xs">
//             Legacy & Expertise
//           </span>

//           {/* Heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             Building Foundations <br /> That Last Centuries
//           </h2>

//           {/* Description */}
//           <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
//             As a family-run partnership with over 35 years of specialized
//             experience, we pride ourselves on precision and structural
//             integrity. Since our founding in 1987, we have been the silent
//             strength behind thousands of structures across the region.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm">
//               <h3 className="text-2xl font-extrabold text-blue-900">4000+</h3>
//               <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
//                 Soil Investigations
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm">
//               <h3 className="text-2xl font-extrabold text-blue-900">35+</h3>
//               <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
//                 Years Experience
//               </p>
//             </div>
//           </div>

//           {/* Points */}
//           <div className="space-y-4">
//             <div className="flex gap-3 items-start">
//               <span className="material-symbols-outlined text-blue-600">
//                 check_circle
//               </span>
//               <p className="text-gray-700 font-medium">
//                 Family-run values combined with industrial-scale technical
//                 expertise.
//               </p>
//             </div>

//             <div className="flex gap-3 items-start">
//               <span className="material-symbols-outlined text-blue-600">
//                 check_circle
//               </span>
//               <p className="text-gray-700 font-medium">
//                 Specialized focus on complex piling and soil engineering
//                 challenges.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function About() {
  const router = useRouter();

  return (
    <section
      className="relative cursor-pointer overflow-hidden bg-[#0b1f3a] py-20"
      onClick={() => router.push("/about#about-capabilities")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push("/about#about-capabilities");
        }
      }}
      role="link"
      tabIndex={0}
    >

      {/* BACKGROUND GLOW (BLUE THEME) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-300 text-xs tracking-[0.3em] uppercase font-bold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight">
            Engineering The <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Future Foundations
            </span>
          </h2>
        </motion.div>

        {/* IMAGE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Pile Foundation",
              img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Soil Investigation",
              img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Load Testing",
              img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden group backdrop-blur-xl border border-blue-300/10 bg-white/5 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                alt={item.title}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-blue-100 text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            { value: "4000+", label: "Projects Completed" },
            { value: "35+", label: "Years Experience" },
            { value: "100%", label: "Quality Assurance" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-blue-300/10 backdrop-blur-xl text-center shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <h3 className="text-3xl font-extrabold text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                {stat.value}
              </h3>
              <p className="text-sm text-blue-200 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-blue-300/20 bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.12] sm:text-base"
          >
            View Company Profile
          </Link>
        </div>

      </div>
    </section>
  );
}
