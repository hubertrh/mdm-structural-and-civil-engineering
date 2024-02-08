import SubHero from "@/components/common/SubHero";
import CategoryFilter from "@/components/projects/CategoryFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { getProjectCategories } from "@/sanity/groqGetters/pages/projects";

export default async function page() {
  const categories = await getProjectCategories();

  return (
    <>
      <SubHero variant="projects" />
      <section>
        <CategoryFilter categories={categories} />
        <ProjectsGrid />
      </section>
    </>
  );
}
