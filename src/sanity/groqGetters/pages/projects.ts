import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { Project } from "@/types/groqGetters/project.type";

const sanityClient = createClient(clientConfig);

export async function getInitialProjects(): Promise<Project[]> {
  const query = groq`
  *[_type == "project"] | order(completionDate, name, _id) [0...10] {
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

export async function getMoreProjects(
  lastCompletionDate: string,
  lastName: string,
  lastId: string,
): Promise<Project[]> {
  const query = groq`
  *[_type == "project" && (
    completionDate > $lastCompletionDate ||
      completionDate == $lastCompletionDate && (
        name > $lastName ||
        name == $lastName && _id > $lastId
      )
    )]
    | order(completionDate, name, _id) [0...5] {
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

  return sanityClient.fetch(query, { lastCompletionDate, lastName, lastId });
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
        "aspectRatio": dimensions.aspectRatio
      }
    }
  }`;

  return sanityClient.fetch(query, { slug });
}
