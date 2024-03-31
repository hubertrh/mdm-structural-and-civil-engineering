"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type CategoryFilterProps = {
  categories: string[];
};

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "All") {
        params.delete("category");
      } else {
        params.set("category", value);
      }

      return `${params.toString()}`;
    },
    [searchParams],
  );

  return (
    <nav className="mb-6 mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <Link
        href={"/projects?" + createQueryString("All")}
        className={`mr-10 uppercase ${
          currentCategory === "All"
            ? "font-bold text-green-dark"
            : "hover:font-medium"
        }`}
      >
        ALL
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={"/projects?" + createQueryString(category)}
          className={`uppercase ${
            currentCategory === category
              ? "font-bold text-green-dark"
              : "hover:font-medium"
          }`}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
