import Image from "next/image";

type ServicesCardProps = {
  title: string;
  summary: string;
  description: string[];
  imgURL: string;
};

export default function ServicesCard({
  title,
  summary,
  description,
  imgURL,
}: ServicesCardProps) {
  return (
    <div className="mx-4 flex h-[30rem] w-[45rem] max-w-3xl scale-[85%] flex-col justify-between rounded-lg bg-background-blue/80 lg:scale-90">
      <div className="grid-services-cards relative w-full rounded-lg bg-background-blue shadow-xl">
        <div className="relative aspect-square h-full max-w-full">
          <Image
            className="w-full rounded-lg object-cover"
            src={imgURL}
            alt={title}
            fill
            priority
            sizes="40vw"
            // TODO: Add blur after implementing Sanity CMS
            // placeholder="blur"
          />
        </div>
        <div className="mb-2 flex h-auto flex-col justify-center gap-4 p-6">
          <p className="text-2xl">{title}</p>
          <p>{summary}</p>
        </div>
      </div>
      <div className="grid h-full w-full place-items-center px-14 py-6 text-justify text-sm text-black-300">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
