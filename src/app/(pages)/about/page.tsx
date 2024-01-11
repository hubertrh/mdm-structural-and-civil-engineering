import AboutCards from "@/components/about/aboutCards";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ContactIcon from "@/assets/icons/animated-contact.min.json";
import { getAboutPage } from "@/sanity/groqGetters/pages/about";

export default async function page() {
  const sectionContent = await getAboutPage();

  return (
    <>
      <SubHero variant="about us" />
      <div className="flex w-full flex-col items-center justify-center gap-20 py-20 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionContent.intro.header}
          description={sectionContent.intro.paragraphs}
        />
        <AboutCards />
        <div className="flex flex-col items-center justify-center gap-8 text-center sm:gap-14">
          <SectionHeader
            title={sectionContent.contact.header}
            description={sectionContent.contact.paragraphs}
            weight="light"
          />
          <PrimaryBtn icon={ContactIcon} text="Let's talk" pageURL="/contact" />
        </div>
      </div>
    </>
  );
}
