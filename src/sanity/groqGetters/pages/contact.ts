import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/utils/clientConfig";
import { ContactPage } from "@/types/groqGetters/contactPage.type";

const sanityClient = createClient(clientConfig);

export async function getContactPage(): Promise<ContactPage> {
  const query = groq`
    *[_type == "contactPage"][0] {
      header,
      paragraphs,
    }
  `;

  return sanityClient.fetch(query);
}
