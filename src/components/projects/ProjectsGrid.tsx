"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ProjectsGridSkeleton from "./ProjectsGridSkeleton";
import { useProjectsPagination } from "@/hooks/useProjectsPagination";

export default function ProjectsGrid() {
  const { projects, isLoading, isMoreLoading, loadMoreProjects } =
    useProjectsPagination();

  // Ref for the sentinel element used in infinite scrolling
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Initialize IntersectionObserver for infinite scrolling
  useEffect(() => {
    if (!loadMoreProjects) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMoreProjects();
      },
      { root: null, rootMargin: "0px 0px 1000px 0px", threshold: 0.01 },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [loadMoreProjects]);

  // Render ProjectsGrid or Skeleton based on loading state
  return (
    <div className="mx-auto w-[85vw] max-w-4xl py-24">
      {isLoading && <ProjectsGridSkeleton />}

      {!isLoading && (
        <div className="flex flex-col">
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
                  index !== projects.length - 1 || isMoreLoading
                    ? "border-b"
                    : ""
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

          {isMoreLoading && <ProjectsGridSkeleton />}
          <div ref={sentinelRef} className="h-1" />
        </div>
      )}
    </div>
  );
}
