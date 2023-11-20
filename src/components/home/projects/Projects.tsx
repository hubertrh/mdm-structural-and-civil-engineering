import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../common/SectionHeader";
import SecondaryBtn from "../../common/SecondaryBtn";

export default function Projects() {
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

  const sectionContent = {
    title: "Our Projects",
    description: [
      "We take pride in our diverse range of projects that stand as testaments to our commitment to safety, innovation, and excellence.",
    ],
  };

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
              <Image
                className="object-cover"
                src={project.imgURL}
                alt={project.title}
                fill={true}
                sizes="100dvw"
              />
              <div className="group absolute top-[102%] grid h-20 w-full place-items-center bg-blue-dark bg-opacity-0 transition-all duration-300 hover:bg-opacity-40 sm:inset-0 sm:h-auto">
                <div className="home-projects-text grid h-20 w-full place-items-center bg-blue-dark bg-opacity-100 px-4 text-center text-white opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1 sm:opacity-0">
                  {project.title}
                </div>
              </div>
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
