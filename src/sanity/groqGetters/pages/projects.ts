import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { Project } from "@/types/groqGetters/project.type";

const sanityClient = createClient(clientConfig);

export async function getFirstPageProjects(): Promise<Project[]> {
  const query = groq`
  *[_type == "project"] | order(_id) [0...20] {
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

  return sanityClient.fetch(query);
}

export async function getNextPageProjects(lastId: string): Promise<Project[]> {
  const query = groq`
  *[_type == "project" && _id > $lastId] | order(_id) [0...20] {
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

  return sanityClient.fetch(query, { lastId });
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
        lqip
      }
    }
  }`;

  return sanityClient.fetch(query, { slug });
}
