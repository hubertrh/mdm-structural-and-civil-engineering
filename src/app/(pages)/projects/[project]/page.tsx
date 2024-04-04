import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/sanity/groqGetters/pages/projects";
import ProjectImagesGrid from "@/components/projects/ProjectImagesGrid";

type MetadataProps = {
  params: { project: string };
};

type ProjectProps = {
  params: { project: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.project;
  const project = await getProject(slug);

  return {
    title: project.name,
  };
}

export default async function Project({ params }: ProjectProps) {
  const slug = params.project;
  const project = await getProject(slug);

  const parsedDate = new Date(project.completionDate);
  const formattedDate = parsedDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mx-auto flex w-[85vw] max-w-3xl flex-col gap-4 py-24 md:py-36 lg:py-44">
      <Link
        className="-ml-2 w-fit px-2 py-3 text-gray-500 md:py-2"
        href="/projects"
      >
        <p>&larr;&ensp;Projects</p>
      </Link>
      <div className="flex w-full flex-col gap-12">
        <div className="grid-project">
          <div className="relative aspect-[2/1] w-full md:aspect-square">
            <Image
              className="w-full object-cover"
              src={project.images[0].url}
              alt={project.name}
              fill
              priority
              sizes="40vw"
              placeholder="blur"
              blurDataURL={project.images[0].metadata.lqip}
            />
          </div>
          <div>
            <h1 className="pb-6 text-3xl text-black-200">{project.name}</h1>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-gray-500 md:text-sm">Location</p>
                <p className="text-xl md:text-lg">{project.location}</p>
              </div>
              <div>
                <p className="text-gray-500 md:text-sm">Date of completion</p>
                <p className="text-xl md:text-lg">{formattedDate}</p>
              </div>
              <div>
                <p className="text-gray-500 md:text-sm">Category</p>
                <p className="text-xl md:text-lg">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-gray-500 md:mb-2">Project Overview</p>
          {project.description.map((paragraph, index) => (
            <p className="text-justify text-base leading-7" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <ProjectImagesGrid images={project.images} projectName={project.name} />
      </div>
    </section>
  );
}
