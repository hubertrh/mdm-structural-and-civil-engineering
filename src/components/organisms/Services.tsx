import PrimaryBtn from "../atoms/PrimaryBtn";
import Cards from "../molecules/Cards";
import SectionHeader from "../molecules/SectionHeader";

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
      <PrimaryBtn
        iconURL="/icons/services.svg"
        iconAlt="Services button icon"
        text="Explore Services"
        pageURL="#"
      />
    </div>
  );
}
