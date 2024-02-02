import SubHero from "@/components/common/SubHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default async function page() {
  return (
    <>
      <SubHero variant="projects" />
      <ProjectsGrid />
    </>
  );
}
