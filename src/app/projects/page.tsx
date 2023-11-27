import Link from "next/link";
import SubHero from "@/components/common/SubHero";

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
      <div className="mx-auto flex max-w-[51rem] flex-wrap justify-center gap-12 py-24">
        {Projects.map((project) => {
          return (
            <Link
              href={project.projectURL}
              className="h-96 w-96 bg-gray-200"
              key={project.title}
            ></Link>
          );
        })}
      </div>
    </>
  );
}
