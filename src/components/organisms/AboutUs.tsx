import PrimaryBtn from "../atoms/PrimaryBtn";
import GuidingPillars from "../molecules/GuidingPillars";
import SectionHeader from "../molecules/SectionHeader";

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
        iconURL="/icons/legacy.svg"
        iconAlt="About us button icon"
        text="Explore Our Legacy"
        pageURL="#"
      />
    </div>
  );
}
