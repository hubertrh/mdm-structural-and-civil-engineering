import SlideUpH2 from "@/components/common/SlideUpH3";
import { getHomepageWelcomeText } from "@/sanity/groqGetters/pages/home";

export default async function Welcome() {
  const welcomeText = await getHomepageWelcomeText();

  return (
    <section className="mx-auto flex w-[85vw] max-w-3xl flex-col gap-5 py-20 text-center text-lg leading-8 sm:py-28">
      {welcomeText.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="mx-auto mt-10 text-2xl sm:mt-8">
        <SlideUpH2 headingText={welcomeText.slogan} justify="center" />
      </div>
    </section>
  );
}
