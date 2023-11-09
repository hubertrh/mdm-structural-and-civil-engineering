import Image from "next/image";
import SectionHeader from "../molecules/SectionHeader";
import SecondaryBtn from "../atoms/SecondaryBtn";

export default function Projects() {
  const Projects = [
    {
      imgURL: "/images/project-example-1.png",
      title: "Project Example 1",
    },
    {
      imgURL: "/images/project-example-2.png",
      title: "Project Example 2",
    },
    {
      imgURL: "/images/project-example-3.png",
      title: "Project Example 3",
    },
  ];

  const sectionContent = {
    title: "Our Projects",
    description: [
      "We take pride in our diverse range of projects that stand as testaments to our commitment to safety, innovation, and excellence.",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-background-blue py-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
      <div className="relative grid grid-cols-3 gap-4">
        {Projects.map((project) => {
          return (
            <div
              className="relative aspect-square w-[20vw]"
              key={project.title}
            >
              <Image
                className="object-cover"
                src={project.imgURL}
                alt={project.title}
                fill={true}
                sizes="25vw"
              />
            </div>
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
