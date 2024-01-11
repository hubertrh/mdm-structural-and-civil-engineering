import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { AboutCards } from "@/types/groqGetters/aboutCards.type";
import { AboutPage } from "@/types/groqGetters/aboutPage.type";

const sanityClient = createClient(clientConfig);

export async function getAboutPage(): Promise<AboutPage> {
  const query = groq`
  *[_type == "aboutPage"][0] {
    intro {
      header,
      paragraphs,
    },
    contact {
      header,
      paragraphs,
    }
  }
  `;

  return sanityClient.fetch(query);
}

export async function getAboutCards(): Promise<AboutCards> {
  const query = groq`
  *[_type == "aboutPage"][0] {
    team {
      title,
      description
    },
    vision {
      title,
      description
    },
    trackRecord {
      title,
      description
    },
  }
  `;

  return sanityClient.fetch(query);
}
