import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { getProjectBySlug, projects } from "@/components/projects/projectsData";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Details",
    };
  }

  return {
    title: `${project.title} - ${project.location}`,
    description: `${project.title} in ${project.location}, listed in the ${project.section} collection.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20 bg-[#f8f9fb] min-h-screen">
        <section className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a78c2] hover:text-[#0b1f3a] transition"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
              Back to Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_20px_50px_rgba(25,28,30,0.06)]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[260px] md:h-[420px] object-cover"
                />
              ) : (
                <div className="h-[260px] md:h-[420px] bg-[linear-gradient(135deg,#0b1f3a_0%,#4a78c2_100%)] text-white p-8 flex flex-col justify-end">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    Project Details
                  </span>
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-3">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-white/80 mt-3">
                    {project.location}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_20px_50px_rgba(25,28,30,0.06)]">
              <span className="inline-block px-4 py-1.5 bg-[#e6eef8] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a] rounded-full mb-5">
                {project.section}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1f3a] leading-tight">
                {project.title}
              </h1>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-[#0b1f3a] mt-1">
                    {project.location}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    About This Entry
                  </p>
                  <p className="text-[15px] leading-7 text-gray-600 mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
