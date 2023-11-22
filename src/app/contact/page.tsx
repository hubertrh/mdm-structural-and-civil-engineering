import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ContactDetailsLink from "@/components/contact/ContactDetailsLink";
import Mapbox from "@/components/contact/Mapbox";

const sectionContent = {
  title: "Connect With Us",
  description: [
    "Your vision deserves the expert touch — let's discuss how we can make it a reality",
  ],
};

let mapboxToken: string;

if (typeof process.env.MAPBOX_ACCESS_TOKEN === "string") {
  mapboxToken = process.env.MAPBOX_ACCESS_TOKEN;
} else {
  console.error("MAPBOX_ACCESS_TOKEN is not set");
}

export default function page() {
  return (
    <>
      <SubHero variant="contact" />;
      <div className="flex w-full flex-col items-center justify-center gap-16 px-16 py-20 sm:gap-20 sm:py-28 md:px-48">
        <SectionHeader
          title={sectionContent.title}
          description={sectionContent.description}
        />
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row lg:gap-40">
          <div className="grid gap-8">
            <ContactDetailsLink variant="phone" />
            <ContactDetailsLink variant="email" />
            <ContactDetailsLink variant="address" />
          </div>
          <Mapbox token={mapboxToken} />
        </div>
      </div>
    </>
  );
}
