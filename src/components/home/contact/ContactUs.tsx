import ContactIcon from "@/assets/icons/animated-contact.min.json";
import PrimaryBtn from "@/components/common/PrimaryBtn";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20 text-center leading-relaxed sm:gap-14 sm:py-28">
      <h2 className="mx-4 pb-4 text-xl font-normal text-black-300 sm:text-3xl">
        Interested&nbsp;in&nbsp;making&nbsp;your&nbsp;vision a&nbsp;reality?
      </h2>
      <PrimaryBtn icon={ContactIcon} text="Let's talk" pageURL="/contact" />
    </div>
  );
}
