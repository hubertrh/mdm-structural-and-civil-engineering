import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { HomepageAboutText } from "@/types/groqGetters/homepageAboutText.type";
import { HomepageContactHeader } from "@/types/groqGetters/homepageContactHeader.type";
import { HomepageHeroText } from "@/types/groqGetters/homepageHeroText.type";
import { HomepageWelcomeText } from "@/types/groqGetters/homepageWelcomeText.type";
import { HomepageServicesText } from "@/types/groqGetters/homepageServicesText.type";
import { HomepageServicesCards } from "@/types/groqGetters/homepageServicesCards.type";

const sanityClient = createClient(clientConfig);

export async function getHomepageHeroText(): Promise<HomepageHeroText> {
  const query = groq`
    *[_type == "homePage"][0].hero {
      header1,
      "header2": [header2.firstLine, header2.secondLine]
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageWelcomeText(): Promise<HomepageWelcomeText> {
  const query = groq`
    *[_type == "homePage"][0].welcome {
      paragraphs,
      slogan
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageServicesText(): Promise<HomepageServicesText> {
  const query = groq`
    *[_type == "homePage"][0].services {
      header,
      paragraphs
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageServicesCards(): Promise<HomepageServicesCards> {
  const query = groq`
  *[_type == "homePage"][0].services.services[] {
    title,
    description,
    "image": image.asset->{
      url,
      metadata {
        lqip
      }
    }
  }`;

  return sanityClient.fetch(query);
}

export async function getHomepageAboutText(): Promise<HomepageAboutText> {
  const query = groq`
    *[_type == "homePage"][0].about {
      header,
      paragraphs
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageContactHeader(): Promise<HomepageContactHeader> {
  const query = groq`
    *[_type == "homePage"][0].contact {
      header,
    }
  `;

  return sanityClient.fetch(query);
}
