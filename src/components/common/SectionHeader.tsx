type SectionHeaderProps = {
  title: string;
  description?: string[];
  variant?: "light";
};

export default function SectionHeader({
  title,
  description,
  variant,
}: SectionHeaderProps) {
  return (
    <section className="flex w-[80vw] max-w-4xl flex-col gap-2 text-justify sm:text-center">
      <h2
        className={`pb-4 text-center text-black-200
      ${
        variant === "light"
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
