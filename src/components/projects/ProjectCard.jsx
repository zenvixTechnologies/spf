// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#e5e7eb] border-l-[3px] border-l-[#4a78c2] shadow-[0_20px_40px_rgba(25,28,30,0.06)] hover:shadow-[0_25px_50px_rgba(25,28,30,0.08)] transition-all duration-300">
      {/* IMAGE */}
     <div className="h-[200px] overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
  />
</div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        {/* LOCATION */}
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-[16px] text-[#0b1f3a]">
            location_on
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            {project.location}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-[18px] font-extrabold text-[#0b1f3a] mb-2 leading-tight">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* FOOTER */}
        <div className="mt-auto pt-4 border-t border-gray-200/60 flex justify-between items-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0b1f3a]">
            Project Specs
          </span>

          <span className="material-symbols-outlined text-gray-400 group-hover:text-[#0b1f3a] transition">
            arrow_forward
          </span>
        </div>
      </div>
    </article>
  );
}
