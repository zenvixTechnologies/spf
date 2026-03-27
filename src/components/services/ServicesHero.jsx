export default function ServicesHero() {
  return (
    <section className="relative py-28 bg-[#f8f9fb] overflow-hidden">
      {/* Light blueprint background */}
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-blue-100/70 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full text-blue-900 mb-6">
              Capabilities & Expertise
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0b1f3a] leading-[1.05] tracking-tight mb-6">
              Engineering <br />
              Foundations <span className="text-[#4a78c2]">Since</span> <br />
              1987.
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-lg text-gray-500 leading-relaxed max-w-xl">
              Specialized geotechnical engineering and deep foundation solutions
              designed for structural permanence. Our technical precision
              ensures stability in the most challenging terrains.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="flex gap-4">
            {/* Card 1 */}
            <div className="bg-white px-6 py-5 rounded-xl border-l-[3px] border-blue-500 shadow-sm min-w-[140px]">
              <h3 className="text-2xl font-extrabold text-[#0b1f3a]">35+</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                Years Experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white px-6 py-5 rounded-xl border-l-[3px] border-blue-500 shadow-sm min-w-[140px]">
              <h3 className="text-2xl font-extrabold text-[#0b1f3a]">500+</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
