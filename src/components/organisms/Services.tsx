import CTAButton from "../atoms/CTAButton";
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
    <div className="flex flex-col items-center justify-center gap-20 bg-background-blue px-48 py-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
      <Cards />
      <CTAButton
        iconURL="/icons/services.svg"
        iconAlt="Services button icon"
        text="Explore Services"
        pageURL="#"
      />
    </div>
  );
}
