import Image from "next/image";

type ServicesCardProps = {
  title: string;
  shortDescription: string;
  description: string[];
  imgURL: string;
  blurDataURL?: string;
};

export default function ServicesCard({
  title,
  shortDescription,
  description,
  imgURL,
  blurDataURL,
}: ServicesCardProps) {
  return (
    <div className="flex w-full max-w-3xl flex-col justify-between rounded-t-lg bg-background-blue/50 sm:w-[30rem] md:mx-4 md:w-[45rem] md:scale-[85%] lg:scale-90">
      <div className="grid-services-cards relative w-full rounded-lg border-[1.18px] border-blue bg-white/70">
        <div className="relative aspect-square h-full max-w-full">
          <Image
            className="w-full rounded-lg object-cover"
            src={imgURL}
            alt={title}
            fill
            priority
            sizes="40vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="mb-2 flex h-auto flex-col justify-center gap-4 p-6">
          <p className="text-2xl">{title}</p>
          <p className="leading-relaxed">{shortDescription}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 border-b-[1.18px] border-blue px-6 py-8 text-justify leading-relaxed text-black-300 md:h-full md:px-10 md:py-8 md:text-center">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
