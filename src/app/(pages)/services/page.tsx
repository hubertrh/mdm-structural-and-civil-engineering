import { Metadata } from "next";
import { Suspense } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ProjectDomains from "@/components/services/ProjectDomains";
import ServicesCards from "@/components/services/ServicesCards";
import {
  getServicesPageInfo,
  getServicesCards,
  getDomainsCards,
} from "@/sanity/groqGetters/pages/services";
import ServicesCardsSkeleton from "@/components/services/ServicesCardsSkeleton";

export const metadata: Metadata = {
  title: "Services",
};

export default async function page() {
  const sectionContent = await getServicesPageInfo();
  const servicesCards = await getServicesCards();
  const projectDomains = await getDomainsCards();

  return (
    <>
      <SubHero variant="services" />
      <div className="flex w-full flex-col items-center justify-center gap-28 py-20 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionContent.header}
          description={sectionContent.paragraphs}
          textAlign="center"
        />
        <Suspense fallback={<ServicesCardsSkeleton />}>
          <ServicesCards cards={servicesCards} />
        </Suspense>
        <ProjectDomains cards={projectDomains} />
      </div>
    </>
  );
}
