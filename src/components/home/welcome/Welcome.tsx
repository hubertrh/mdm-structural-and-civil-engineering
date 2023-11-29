import SlideUpH2 from "@/components/common/SlideUpH2";

const headingText = "We don't just engineer structures — we craft legacies";

export default function Welcome() {
  return (
    <section className="mx-auto flex w-[85vw] max-w-3xl flex-col gap-5 py-20 text-center text-lg leading-8 sm:py-28">
      <p>
        Welcome to MDM, your specialists in structural engineering for London
        and beyond. We combine fresh perspectives with qualified expertise to
        offer you unparalleled structural solutions.
      </p>
      <p>
        With a deep understanding of structural principles and a commitment to
        innovation, we ensure the safety, integrity and longevity of your
        structures.
      </p>
      <div className="mx-auto mt-10 text-2xl sm:mt-8">
        <SlideUpH2 headingText={headingText} />
      </div>
    </section>
  );
}
