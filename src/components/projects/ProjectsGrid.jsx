import ProjectCard from "./ProjectCard";
import { projectSections } from "./projectsData";

export default function ProjectsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-10 space-y-16">
      {projectSections.map((section) => (
        <div key={section.id} id={section.id}>
          <div className="max-w-3xl mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4a78c2]">
              Portfolio Section
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0b1f3a]">
              {section.title}
            </h2>
            <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
              {section.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {section.items.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
