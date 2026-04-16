"use client";

import dynamic from "next/dynamic";
import SectionPlaceholder from "@/components/lazy/SectionPlaceholder";

const ProjectsGrid = dynamic(() => import("@/components/projects/ProjectsGrid"), {
  loading: () => (
    <SectionPlaceholder
      className="mt-10"
      containerClassName="space-y-10"
    />
  ),
});

export default function ProjectsSections() {
  return <ProjectsGrid />;
}
