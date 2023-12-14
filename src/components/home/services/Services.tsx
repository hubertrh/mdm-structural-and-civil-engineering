import Cards from "./Cards";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import ServicesIcon from "@/assets/icons/animated-services.min.json";
import { getServicesPageInfo } from "@/sanity/utils/groqGetters";

export default async function Services() {
  const sectionContent = await getServicesPageInfo();

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-background-blue py-20 sm:gap-20 sm:py-28">
      <SectionHeader
        title={sectionContent.header}
        description={sectionContent.paragraphs}
      />
      <Cards />
      <PrimaryBtn
        icon={ServicesIcon}
        text="Explore Services"
        pageURL="/services"
      />
    </div>
  );
}
