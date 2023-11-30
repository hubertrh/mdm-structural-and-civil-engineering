type SectionHeaderProps = {
  title: string;
  description?: string[];
  weight?: "light";
  textAlign?: "center";
};

export default function SectionHeader({
  title,
  description,
  weight,
  textAlign,
}: SectionHeaderProps) {
  return (
    <section
      className={`flex w-[80vw] max-w-4xl flex-col gap-2 sm:text-center ${
        textAlign === "center" ? "text-center" : "text-justify"
      }
    `}
    >
      <h2
        className={`pb-4 text-center text-black-200
      ${
        weight === "light"
          ? "text-lg font-normal sm:text-2xl"
          : "text-xl font-medium sm:text-3xl"
      }
      `}
      >
        {title}
      </h2>
      {description?.map((_, index) => (
        <p
          className="flex flex-wrap justify-center gap-x-1 text-base leading-7"
          key={index}
        >
          {description}
        </p>
      ))}
    </section>
  );
}
