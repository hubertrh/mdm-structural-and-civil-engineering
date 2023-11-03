interface SectionHeaderProps {
  title: string;
  description: string[];
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section className="flex flex-col gap-8 text-center">
      <h2 className="text-3xl font-medium text-black-200">{title}</h2>
      {description.map((paragraph, index) => (
        <p className="text-lg leading-8" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
