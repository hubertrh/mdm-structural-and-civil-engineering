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
    <div className="flex w-full max-w-3xl flex-col justify-between rounded-lg bg-background-blue/70 sm:w-[30rem] md:mx-4 md:w-[45rem] md:scale-[85%] lg:scale-90">
      <div className="grid-services-cards relative w-full rounded-lg bg-background-blue shadow-lg md:shadow-xl">
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
      <div className="grid w-full place-items-center gap-3 px-6 py-8 text-justify text-sm text-black-300 md:h-full md:px-14 md:py-6">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
