import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import {
  ServicesPageInfo,
  ServicesCards,
} from "@/types/groqGetters/servicesPage.type";

const sanityClient = createClient(clientConfig);

export async function getServicesPageInfo(): Promise<ServicesPageInfo> {
  const query = groq`
    *[_type == "servicesPage"][0] {
      header,
      paragraphs,
    }
  `;

  return sanityClient.fetch(query);
}

export async function getServicesCards(): Promise<ServicesCards> {
  const query = groq`
  *[_type == "servicesPage"][0].services[] {
    title,
    shortDescription,
    paragraphs,
    "image": image.asset->{
      url,
      metadata {
        lqip
      }
    }
  }`;

  return sanityClient.fetch(query);
}
