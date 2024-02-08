import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  getInitialProjects,
  getMoreProjects,
} from "@/sanity/groqGetters/pages/projects";
import { Project } from "@/types/groqGetters/project.type";
import formatDateToISOString from "@/utils/formatDateToISOString";

export function useProjectsPagination() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMoreProjects, setHasMoreProjects] = useState(false);
  const searchParams = useSearchParams();

  const fetchInitialProjects = async (category?: string) => {
    const initialProjects = await getInitialProjects(category);
    setProjects(initialProjects);
    setIsLoading(false);
    setHasMoreProjects(initialProjects.length >= 10);
  };

  useEffect(() => {
    const category = searchParams.get("category");

    if (!category) {
      fetchInitialProjects();
    } else {
      fetchInitialProjects(category);
    }
  }, [searchParams]);

  const loadMoreProjects = useCallback(async () => {
    if (isMoreLoading || !hasMoreProjects) return;

    setIsMoreLoading(true);
    const lastProject = projects[projects.length - 1];
    const dateObj = new Date(lastProject.completionDate);

    const newProjects = await getMoreProjects(
      formatDateToISOString(dateObj),
      lastProject.name,
      lastProject._id,
    );
    setProjects((prev) => [...prev, ...newProjects]);
    setHasMoreProjects(newProjects.length >= 5);
    setIsMoreLoading(false);
  }, [isMoreLoading, hasMoreProjects, projects]);

  return {
    projects,
    isLoading,
    isMoreLoading,
    loadMoreProjects,
  };
}
