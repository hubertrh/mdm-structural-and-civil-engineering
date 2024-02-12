import SubHero from "@/components/common/SubHero";
import { getProjectCategories } from "@/sanity/groqGetters/pages/projects";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default async function page() {
  const categories = await getProjectCategories();

  return (
    <>
      <SubHero variant="projects" />
      <ProjectsSection categories={categories} />
    </>
  );
}
