import SlideUpH2 from "@/components/common/SlideUpH2";
import { getHomepageHeroText } from "@/sanity/utils/groqGetters";

export default async function HeroText() {
  const headingText = await getHomepageHeroText();

  return (
    <div className="hero-text absolute right-0 top-1/4 z-20 mx-14 my-12 text-right text-white">
      <h3 className="mb-8 text-3xl font-medium xs:text-5xl ">
        {headingText.header1}
      </h3>
      <div className="text-xl xs:text-2xl">
        <SlideUpH2 headingText={headingText.header2} justify="end" />
      </div>
    </div>
  );
}
