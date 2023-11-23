import PrimaryBtn from "../../common/PrimaryBtn";
import SectionHeader from "../../common/SectionHeader";
import Cards from "./Cards";
import ServicesIcon from "@/assets/icons/animated-services.min.json";

export default function Services() {
  const sectionContent = {
    title: "Our Comprehensive Services",
    description: [
      "Dive into our range of tailored solutions designed to meet and exceed your structural engineering needs.",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-background-blue py-20 sm:gap-20 sm:py-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
      <Cards />
      <PrimaryBtn icon={ServicesIcon} text="Explore Services" pageURL="#" />
    </div>
  );
}
