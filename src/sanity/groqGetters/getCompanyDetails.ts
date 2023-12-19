import { createClient, groq } from "next-sanity";
import clientConfig from "../utils/clientConfig";
import { companyDetails } from "@/types/groqGetters/companyDetails.type";

const sanityClient = createClient(clientConfig);

export async function getCompanyDetails(): Promise<companyDetails> {
  const query = groq`
    *[_type == "companyInfo"][0] {
      name,
      nameNarrow {
        firstLine,
        secondLine,
      },
      email,
      phone,
      address,
      addressNarrow {
        firstLine,
        secondLine,
      },
      googleMapsLink
    }
  `;

  return sanityClient.fetch(query);
}
