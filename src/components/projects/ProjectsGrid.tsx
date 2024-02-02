"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getFirstPageProjects,
  getNextPageProjects,
} from "@/sanity/groqGetters/pages/projects";
import { Project } from "@/types/groqGetters/project.type";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lastId, setLastId] = useState("");

  // Load initial projects
  useEffect(() => {
    getFirstPageProjects().then((initialProjects) => {
      setProjects(initialProjects);
      if (initialProjects.length > 0) {
        setLastId(initialProjects[initialProjects.length - 1]._id);
      }
    });
  }, []);

  async function loadMore() {
    const newProjects = await getNextPageProjects(lastId);
    if (newProjects.length > 0) {
      setProjects([...projects, ...newProjects]);
      setLastId(newProjects[newProjects.length - 1]._id);
    }
  }

  return (
    <>
      <div className="mx-auto flex w-[85vw] max-w-4xl flex-col py-24">
        {projects.map((project, index) => {
          const parsedDate = new Date(project.completionDate);
          const formattedDate = parsedDate.toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          });

          return (
            <Link
              href={`/projects/${project.slug}`}
              className={`grid-projects group relative border-gray-400 p-6 ${
                index !== projects.length - 1 ? "border-b" : ""
              }`}
              key={project._id}
            >
              <div className="relative my-auto aspect-square w-full duration-200 ease-out group-hover:translate-x-2">
                <Image
                  src={project.images[0].url}
                  alt={project.name}
                  fill
                  priority
                  sizes="40vw"
                  placeholder="blur"
                  blurDataURL={project.images[0].metadata.lqip}
                />
              </div>
              <div className="flex flex-col justify-center gap-2 py-5 text-sm sm:gap-2 sm:p-6 sm:text-sm md:flex md:gap-4 md:p-10 md:text-base">
                <p className="text-2xl">{project.name}</p>
                <p className="h-auto text-gray-500 sm:h-[2rem]">{`${project.location}\u2002|\u2002${formattedDate}\u2002|\u2002${project.category}`}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* TODO: */}
      <button onClick={loadMore}>Load more</button>
    </>
  );
}
