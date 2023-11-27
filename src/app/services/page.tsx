import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";

const sectionContent = {
  title: "Dive into our comprehensive offerings",
  description: [
    "At MDM, we're not just structural engineers - we're architects of safety, stability, and innovation.",
  ],
};

export default function page() {
  return (
    <>
      <SubHero variant="services" />
      <div className="flex w-full flex-col items-center justify-center gap-20 py-20 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionContent.title}
          description={sectionContent.description}
        />
      </div>
    </>
  );
}
