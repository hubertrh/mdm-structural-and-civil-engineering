import SectionHeader from "../molecules/SectionHeader";

export default function Services() {
  const sectionContent = {
    title: "Our Comprehensive Services",
    description: [
      "Dive into our range of tailored solutions designed to meet and exceed your structural engineering needs.",
    ],
  };

  return (
    <div className="flex flex-col gap-20 bg-background-blue px-44 py-28">
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
    </div>
  );
}
