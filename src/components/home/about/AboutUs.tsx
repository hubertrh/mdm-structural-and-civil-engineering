import GuidingPillars from "./GuidingPillars";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import LegacyIcon from "@/assets/icons/animated-legacy.min.json";
import { getHomepageAboutText } from "@/sanity/groqGetters/pages/home";

export default async function AboutUs() {
  const sectionContent = await getHomepageAboutText();

  return (
    <div className="flex flex-col items-center justify-center gap-16 px-48 py-20 sm:gap-20 sm:py-28">
      <SectionHeader
        title={sectionContent.header}
        description={sectionContent.paragraphs}
      />
      <GuidingPillars />
      <PrimaryBtn
        icon={LegacyIcon}
        text="Explore Our Legacy"
        pageURL="/about"
      />
    </div>
  );
}
