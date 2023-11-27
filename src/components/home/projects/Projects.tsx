import Link from "next/link";
import SecondaryBtn from "@/components/common/SecondaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectThumbnail from "@/components/common/ProjectThumbnail";

export default function Projects() {
  const sectionContent = {
    title: "Our Projects",
    description: [
      "We take pride in our diverse range of projects that stand as testaments to our commitment to safety, innovation, and excellence.",
    ],
  };

  const Projects = [
    {
      imgURL: "/images/project-example-1.png",
      title: "Project Example 1",
      projectURL: "/projects/project-example-1",
    },
    {
      imgURL: "/images/project-example-2.png",
      title: "Project Example 2",
      projectURL: "/projects/project-example-2",
    },
    {
      imgURL: "/images/project-example-3.png",
      title: "Project Example 3 Really Long Project Title Here",
      projectURL: "/projects/project-example-3",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-background-blue pb-28 pt-20 sm:gap-20 sm:pt-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
      <div className="relative grid w-[80vw] max-w-4xl grid-flow-row gap-12 sm:grid-flow-col sm:gap-4">
        {Projects.map((project) => {
          return (
            <Link
              href={project.projectURL}
              className="relative mb-24 aspect-square w-full sm:mb-0"
              key={project.title}
            >
              <ProjectThumbnail
                imgURL={project.imgURL}
                projectTitle={project.title}
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
