import AboutCards from "@/components/about/aboutCards";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ContactIcon from "@/assets/icons/animated-contact.min.json";

const sectionIntro = {
  title: "The Foundation of MDM Engineering",
  description: [
    "Since our inception in 2017, MDM Engineering has been committed to upholding high standards in structural design in London. Guided by our three core principles — safety, integrity, and innovative design — we strive to make a meaningful impact on the built environment.",
  ],
};

const sectionOutro = {
  title: "Shape the Future with Us",
  description: [
    "With these core values, we're here to help you with your next project and change London's skyline, one structure at a time. Ready to get started?",
  ],
};

export default function page() {
  return (
    <>
      <SubHero variant="about us" />
      <div className="flex w-full flex-col items-center justify-center gap-20 py-20 sm:gap-28 sm:py-28">
        <SectionHeader
          title={sectionIntro.title}
          description={sectionIntro.description}
        />
        <AboutCards />
        <div className="flex flex-col items-center justify-center gap-8 text-center sm:gap-14">
          <SectionHeader
            title={sectionOutro.title}
            description={sectionOutro.description}
            variant="light"
          />
          <PrimaryBtn icon={ContactIcon} text="Let's talk" pageURL="/contact" />
        </div>
      </div>
    </>
  );
}
