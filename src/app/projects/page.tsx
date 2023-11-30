import Link from "next/link";
import SubHero from "@/components/common/SubHero";
import ProjectThumbnail from "@/components/common/ProjectThumbnail";

const projects = [
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
  {
    imgURL: "/images/project-example-1.png",
    title: "Project Example 4",
    projectURL: "/projects/project-example-1",
  },
  {
    imgURL: "/images/project-example-2.png",
    title: "Project Example 5",
    projectURL: "/projects/project-example-2",
  },
  {
    imgURL: "/images/project-example-3.png",
    title: "Project Example 6 Really Long Project Title Here",
    projectURL: "/projects/project-example-3",
  },
];

export default function page() {
  return (
    <>
      <SubHero variant="projects" />
      <div className="mx-auto flex max-w-[51rem] flex-col flex-wrap items-center justify-center gap-32 py-24 md:flex-row md:gap-12">
        {projects.map((project) => {
          return (
            <Link
              href={project.projectURL}
              className="relative aspect-square w-80 max-w-[90vw] bg-gray-200 lg:w-96"
              key={project.title}
            >
              <ProjectThumbnail
                imgURL={project.imgURL}
                projectTitle={project.title}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
