import PrimaryBtn from "../atoms/PrimaryBtn";
import SectionHeader from "../molecules/SectionHeader";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center gap-14 py-28">
      <h2 className="pb-4 text-3xl font-normal text-black-300">
        Interested in making your vision a reality?
      </h2>
      <PrimaryBtn
        iconURL="/icons/contact.svg"
        iconAlt="Contact button icon"
        text="Let's talk"
        pageURL="/contact-us"
      />
    </div>
  );
}
