import Link from "next/link";

export default function ProjectCard({ project }) {
  const hasImage = Boolean(project.image);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full"
    >
      <article className="h-full flex flex-col bg-white rounded-xl overflow-hidden border border-[#e5e7eb] border-l-[3px] border-l-[#4a78c2] shadow-[0_20px_40px_rgba(25,28,30,0.06)] hover:shadow-[0_25px_50px_rgba(25,28,30,0.08)] transition-all duration-300 hover:-translate-y-1">
        <div className="h-[200px] overflow-hidden">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
            />
          ) : (
            <div className="w-full h-full bg-[linear-gradient(135deg,#0b1f3a_0%,#4a78c2_100%)] text-white p-6 flex flex-col justify-end">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Church Project
              </span>
              <h3 className="text-[22px] font-extrabold leading-tight mt-2">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mt-2">{project.location}</p>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#0b1f3a]">
              location_on
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              {project.location}
            </span>
          </div>

          <h3 className="text-[18px] font-extrabold text-[#0b1f3a] mb-2 leading-tight">
            {project.title}
          </h3>

          <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-200/60 flex justify-between items-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0b1f3a]">
              View Details
            </span>

            <span className="material-symbols-outlined text-gray-400 group-hover:text-[#0b1f3a] transition">
              arrow_forward
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
