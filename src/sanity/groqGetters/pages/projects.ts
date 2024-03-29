import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { Project } from "@/types/groqGetters/project.type";

const sanityClient = createClient(clientConfig);

export async function getProjectCategories(): Promise<string[]> {
  const query = groq`
  *[_type == "category"][].title`;

  return sanityClient.fetch(query);
}
export async function getInitialProjects(
  categoryTitle?: string,
): Promise<Project[]> {
  const categoryFilter = categoryTitle
    ? `&& category->title == $categoryTitle`
    : "";
  const query = groq`
  *[_type == "project" ${categoryFilter}] | order(completionDate desc, name, _id) [0...10] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    location,
    completionDate,
    description,
    "images": images[].asset->{
      url,
      metadata {
        lqip
      }
    }
  }`;

  const params = categoryTitle ? { categoryTitle } : {};

  return sanityClient.fetch(query, params);
}

export async function getMoreProjects(
  lastCompletionDate: string,
  lastName: string,
  lastId: string,
  categoryTitle?: string,
): Promise<Project[]> {
  const categoryFilter = categoryTitle
    ? `&& category->title == $categoryTitle`
    : "";
  const query = groq`
  *[_type == "project" && (
    completionDate < $lastCompletionDate ||
    completionDate == $lastCompletionDate && (
      name > $lastName ||
      name == $lastName && _id > $lastId
    )
  ) ${categoryFilter}]
  | order(completionDate desc, name, _id) [0...5] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    location,
    completionDate,
    description,
    "images": images[].asset->{
      url,
      metadata {
        lqip
      }
    },
  }`;

  const params = {
    lastCompletionDate,
    lastName,
    lastId,
    ...(categoryTitle && { categoryTitle }),
  };

  return sanityClient.fetch(query, params);
}

export async function getProject(slug: string): Promise<Project> {
  const query = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    location,
    completionDate,
    description,
    "images": images[].asset->{
      url,
      metadata {
        lqip,
        "aspectRatio": dimensions.aspectRatio,
        "width": dimensions.width,
        "height": dimensions.height,
      }
    }
  }`;

  return sanityClient.fetch(query, { slug });
}
