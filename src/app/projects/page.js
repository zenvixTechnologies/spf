import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-8 pb-20 overflow-hidden bg-[#f8f9fb]">
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsCTA />
      </main>

      <Footer />
    </>
  );
}