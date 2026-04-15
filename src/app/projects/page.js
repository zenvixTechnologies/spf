import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

export const metadata = {
  title: "Projects Portfolio",
  description:
    "Explore churches under Changanacherry Diocese, other churches, and building projects, each with an individual details page.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-8 pb-20 overflow-hidden bg-[#f8f9fb]">
        <ProjectsHero />
        <ProjectsGrid />
        {/* <ProjectsCTA /> */}
      </main>

      <Footer />
    </>
  );
}
