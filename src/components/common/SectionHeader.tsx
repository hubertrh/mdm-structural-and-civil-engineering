type SectionHeaderProps = {
  title: string;
  description?: string[];
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section className="flex w-[80vw] max-w-4xl flex-col gap-2 text-justify sm:text-center">
      <h2 className="pb-4 text-center text-xl font-medium text-black-200 sm:text-3xl">
        {title}
      </h2>
      {description?.map((paragraph, index) => (
        <p className="text-base leading-7" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
