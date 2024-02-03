"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import ProjectsGridSkeleton from "./ProjectsGridSkeleton";
import {
  getInitialProjects,
  getMoreProjects,
} from "@/sanity/groqGetters/pages/projects";
import { Project } from "@/types/groqGetters/project.type";
import formatDateToISOString from "@/utils/formatDateToISOString";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const lastProjectDetailsRef = useRef({
    lastCompletionDate: new Date(),
    lastName: "",
    lastId: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMoreProjects, setHasMoreProjects] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Load initial projects
  useEffect(() => {
    getInitialProjects().then((initialProjects) => {
      setProjects(initialProjects);
      setIsLoading(false);

      if (initialProjects.length > 0) {
        const lastProject = initialProjects[initialProjects.length - 1];
        lastProjectDetailsRef.current = {
          lastCompletionDate: new Date(lastProject.completionDate),
          lastName: lastProject.name,
          lastId: lastProject._id,
        };
        setHasMoreProjects(initialProjects.length >= 10);
      }
    });
  }, []);

  const loadMoreProjects = useCallback(async () => {
    if (isMoreLoading || !hasMoreProjects) return;

    setIsMoreLoading(true);

    const { lastCompletionDate, lastName, lastId } =
      lastProjectDetailsRef.current;
    const dateObj = new Date(lastCompletionDate);
    const formattedDate = formatDateToISOString(dateObj);
    const newProjects = await getMoreProjects(formattedDate, lastName, lastId);

    if (newProjects.length > 0) {
      setProjects((prev) => [...prev, ...newProjects]);

      const lastNewProject = newProjects[newProjects.length - 1];

      lastProjectDetailsRef.current = {
        lastCompletionDate: new Date(lastNewProject.completionDate),
        lastName: lastNewProject.name,
        lastId: lastNewProject._id,
      };
      setHasMoreProjects(newProjects.length >= 5);
    } else {
      setHasMoreProjects(false);
    }
    setIsMoreLoading(false);
  }, [isMoreLoading, hasMoreProjects]);

  // Observer effect for infinite scrolling
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        loadMoreProjects();
      }
    };
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 1000px 0px",
      threshold: 0.01,
    };
    observer.current = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    if (sentinelRef.current) observer.current.observe(sentinelRef.current);
    return () => observer.current?.disconnect();
  }, [loadMoreProjects]);

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
