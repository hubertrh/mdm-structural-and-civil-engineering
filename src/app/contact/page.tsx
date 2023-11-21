import LottieIcon from "@/components/common/LottieIcon";
import SectionHeader from "@/components/common/SectionHeader";
import SubHero from "@/components/common/SubHero";
import ContactDetailsLink from "@/components/contact/ContactDetailsLink";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";

const sectionContent = {
  title: "Connect With Us",
  description: [
    "Your vision deserves the expert touch — let's discuss how we can make it a reality",
  ],
};

export default function page() {
  return (
    <>
      <SubHero variant="contact" />;
      <div className="flex flex-col items-center justify-center gap-16 px-48 py-20 sm:gap-8 sm:py-28">
        <SectionHeader
          title={sectionContent.title}
          description={sectionContent.description}
        />
        <div className="flex justify-between">
          <div className="grid h-[500px] w-[500px] place-items-center">
            <div className="flex flex-col justify-center gap-8">
              <ContactDetailsLink variant="phone" />
              <ContactDetailsLink variant="email" />
              <ContactDetailsLink variant="address" />
            </div>
          </div>
          <div className="ml-auto h-[500px] w-[500px] scale-75 overflow-hidden rounded-full">
            <iframe
              className="scale-[1.10] rounded-full"
              src="https://snazzymaps.com/embed/547322"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
