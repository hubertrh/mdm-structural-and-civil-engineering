import Link from "next/link";
import SecondaryBtn from "@/components/common/SecondaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectThumbnail from "@/components/common/ProjectThumbnail";
import {
  getHomepageProjects,
  getHomepageProjectsText,
} from "@/sanity/groqGetters/pages/home";

export default async function Projects() {
  const sectionContent = await getHomepageProjectsText();
  const projects = await getHomepageProjects();

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-background-blue pb-28 pt-20 sm:gap-20 sm:pt-28">
      <SectionHeader
        title={sectionContent.header}
        description={sectionContent.paragraphs}
      />
      <div className="relative grid w-[80vw] max-w-4xl grid-flow-row gap-12 md:grid-flow-col md:gap-4">
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              className="relative mb-24 aspect-square w-full md:mb-0"
              key={project.slug}
            >
              <ProjectThumbnail
                imgURL={project.image.url}
                imgLQIP={project.image.metadata.lqip}
                projectTitle={project.name}
              />
            </Link>
          );
        })}
        <SecondaryBtn
          text="View all projects"
          pageURL="/projects"
          position="outside"
        />
      </div>
    </div>
  );
}
