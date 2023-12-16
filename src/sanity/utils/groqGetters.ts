import { createClient, groq } from "next-sanity";
import clientConfig from "./clientConfig";
import { ContactPage } from "@/types/sanityGetters/contactPage.type";
import {
  ServicesCards,
  ServicesPageInfo,
} from "@/types/sanityGetters/servicesPage.type";
import { companyDetails } from "@/types/sanityGetters/companyDetails.type";

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
