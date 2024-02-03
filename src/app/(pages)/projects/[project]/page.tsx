import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/sanity/groqGetters/pages/projects";

type ProjectProps = {
  params: { project: string };
};

export default async function Project({ params }: ProjectProps) {
  const slug = params.project;
  const project = await getProject(slug);

  const parsedDate = new Date(project.completionDate);
  const formattedDate = parsedDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mx-auto flex w-[85vw] max-w-3xl flex-col gap-4 py-28 md:py-44">
      <Link className="-ml-2 w-fit p-2 text-gray-500" href="/projects">
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
            <h1 className="pb-3 text-xl text-black-200 sm:text-3xl md:pb-6">
              {project.name}
            </h1>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="md:text-lg">{project.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of completion</p>
                <p className="md:text-lg">{formattedDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="md:text-lg">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 md:mb-2">Project Overview</p>
          {project.description.map((paragraph, index) => (
            <p className="text-justify text-base leading-7" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.images.map((image, index) => (
            <div className="relative aspect-square" key={index}>
              <Image
                className="w-full object-cover"
                src={image.url}
                alt={`${project.name} — image ${index + 1}`}
                fill
                priority
                sizes="(min-width: 768px) 30vw, 95vw"
                placeholder="blur"
                blurDataURL={image.metadata.lqip}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
