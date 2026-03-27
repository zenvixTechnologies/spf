// components/ProjectsCTA.jsx
export default function ProjectsCTA() {
  return (
    <section className="mt-28 bg-[#001e40] py-28 relative overflow-hidden">

      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Ready to build on solid ground?
        </h2>

        {/* Description */}
        <p className="text-blue-200/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Our engineering expertise has been the backbone of monumental structures since 1987. 
          Let’s discuss your next project’s foundation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary Button */}
          <button className="bg-white text-[#001e40] px-10 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            View Technical Specs
          </button>

          {/* Secondary Button */}
          <button className="border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
            Consult Our Engineers
          </button>

        </div>

      </div>
    </section>
  );
}