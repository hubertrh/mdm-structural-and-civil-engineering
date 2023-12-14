import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ProjectDomains from "@/components/services/ProjectDomains";
import ServicesCards from "@/components/services/ServicesCards";
import {
  getServicesCards,
  getServicesPageInfo,
} from "@/sanity/utils/groqGetters";

export default async function page() {
  const sectionContent = await getServicesPageInfo();
  const servicesCards = await getServicesCards();

  return (
    <>
      <SubHero variant="services" />
      <div className="flex w-full flex-col items-center justify-center gap-28 py-20 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionContent.header}
          description={sectionContent.paragraphs}
          textAlign="center"
        />
        <ServicesCards cards={servicesCards} />
        <ProjectDomains />
      </div>
    </>
  );
}
