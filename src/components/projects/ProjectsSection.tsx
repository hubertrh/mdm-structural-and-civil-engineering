"use client";

import { Suspense } from "react";
import CategoryFilter from "./CategoryFilter";
import CategoryFilterSkeleton from "./CategoryFilterSkeleton";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsGridSkeleton from "./ProjectsGridSkeleton";

type CategoryFilterProps = {
  categories: string[];
};

export default function ProjectsSection({ categories }: CategoryFilterProps) {
  return (
    <section>
      <Suspense fallback={<CategoryFilterSkeleton />}>
        <CategoryFilter categories={categories} />
      </Suspense>
      <Suspense
        fallback={
          <div className="mx-auto w-[85vw] max-w-4xl pb-6 md:w-[90vw]">
            <ProjectsGridSkeleton />
          </div>
        }
      >
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
