import SlideUpH2 from "@/components/common/SlideUpH2";

const headingText =
  "Specialising in structural design and assessment, we make safety and innovation our business";

export default function HeroText() {
  return (
    <div className="hero-text absolute right-0 top-1/4 z-20 mx-14 my-12 text-right text-white">
      <h3 className="mb-8 text-3xl font-medium xs:text-5xl ">
        Transform your vision into reality
      </h3>
      <div className="text-xl xs:text-2xl">
        <SlideUpH2 headingText={headingText} />
      </div>
    </div>
  );
}
