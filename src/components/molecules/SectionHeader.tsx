interface SectionHeaderProps {
  title: string;
  description?: string[];
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section className="flex w-[80vw] max-w-4xl flex-col gap-2 text-center">
      <h2 className="pb-4 text-3xl font-medium text-black-200">{title}</h2>
      {description?.map((paragraph, index) => (
        <p className="text-lg leading-7" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
