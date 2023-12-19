import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { HomepageAboutText } from "@/types/groqGetters/homepageAboutText.type";
import { HomepageContactHeader } from "@/types/groqGetters/homepageContactHeader.type";
import { HomepageHeroText } from "@/types/groqGetters/homepageHeroText.type";
import { HomepageWelcomeText } from "@/types/groqGetters/homepageWelcomeText.type";

const sanityClient = createClient(clientConfig);

export async function getHomepageHeroText(): Promise<HomepageHeroText> {
  const query = groq`
    *[_type == "homePage"][0] {
      "header1": hero.header1,
      "header2": [hero.header2.firstLine, hero.header2.secondLine]
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageWelcomeText(): Promise<HomepageWelcomeText> {
  const query = groq`
    *[_type == "homePage"][0] {
      "paragraphs": welcome.paragraphs,
      "slogan": welcome.slogan
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageAboutText(): Promise<HomepageAboutText> {
  const query = groq`
    *[_type == "homePage"][0] {
      "header": about.header,
      "paragraphs": about.paragraphs
    }
  `;

  return sanityClient.fetch(query);
}

export async function getHomepageContactHeader(): Promise<HomepageContactHeader> {
  const query = groq`
    *[_type == "homePage"][0] {
      "header": contact.header,
    }
  `;

  return sanityClient.fetch(query);
}
