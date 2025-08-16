import { Metadata } from "next";
import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ContactDetailsLink from "@/components/contact/ContactDetailsLink";
import Mapbox from "@/components/contact/Mapbox";
import { getCompanyDetails } from "@/sanity/groqGetters/getCompanyDetails";
import { getContactPage } from "@/sanity/groqGetters/pages/contact";

export const metadata: Metadata = {
  title: "Contact",
};

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN || "";

export default async function page() {
  const sectionContent = await getContactPage();
  const companyDetails = await getCompanyDetails();

  return (
    <>
      <SubHero variant="contact" />
      <div className="flex w-full flex-col items-center justify-center gap-20 py-16 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionContent.header}
          description={sectionContent.paragraphs}
          textAlign="center"
        />
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row lg:gap-40">
          <div className="grid gap-8">
            <ContactDetailsLink
              variant="phone"
              companyDetails={companyDetails}
            />
            <ContactDetailsLink
              variant="email"
              companyDetails={companyDetails}
            />
            <ContactDetailsLink
              variant="address"
              companyDetails={companyDetails}
            />
          </div>
          <Mapbox token={mapboxToken} />
        </div>
      </div>
    </>
  );
}
