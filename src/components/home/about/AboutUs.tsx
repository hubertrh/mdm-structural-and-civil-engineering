import GuidingPillars from "./GuidingPillars";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import LegacyIcon from "@/assets/icons/animated-legacy.min.json";

export default function AboutUs() {
  const sectionContent = {
    title: "About Us",
    description: [
      "From London, For London: Transforming Structural Engineering since 2017",
      "In a city as dynamic as London, traditional engineering just won't cut it. We exist to bring innovation, safety, and integrity into every crevice of London's evolving skyline.",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 px-48 py-20 sm:gap-20 sm:py-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
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
