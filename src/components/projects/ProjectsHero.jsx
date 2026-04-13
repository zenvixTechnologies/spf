// components/ProjectsHero.jsx
export default function ProjectsHero() {
  return (
    <section className="relative bg-[#f5f7fa] pt-32 pb-20">
      <div className="absolute inset-0 opacity-[0.05] blueprint-grid"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#e6eef8] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a] rounded-full mb-6">
              Projects Portfolio
            </span>

            <h1 className="text-[42px] md:text-[72px] font-extrabold text-[#0b1f3a] leading-[1] tracking-tight mb-6">
              Churches And <br /> Buildings Portfolio.
            </h1>

            <p className="text-[15px] md:text-lg text-gray-500 leading-relaxed max-w-xl">
              Browse churches under Changanacherry Diocese, other churches, and building projects. Open any card to view its dedicated details page.
            </p>
          </div>

  
        </div>
      </div>
    </section>
  );
}
