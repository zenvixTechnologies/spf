// components/ProjectsHero.jsx
export default function ProjectsHero() {
  return (
    <section className="relative bg-[#f5f7fa] pt-32 pb-20">

      {/* Subtle Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05] blueprint-grid"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-[#e6eef8] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a] rounded-full mb-6">
              Portfolio of Excellence
            </span>

            {/* Heading */}
            <h1 className="text-[42px] md:text-[72px] font-extrabold text-[#0b1f3a] leading-[1] tracking-tight mb-6">
              Engineering <br /> Success Stories.
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-lg text-gray-500 leading-relaxed max-w-xl">
              Since 1987, we've provided the foundational strength for some of Kerala's most iconic architectural landmarks.
            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-xl border border-[#e5e7eb] shadow-sm">

              <h3 className="text-4xl font-extrabold text-[#0b1f3a] mb-1">
                35+
              </h3>

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Years of Legacy
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}