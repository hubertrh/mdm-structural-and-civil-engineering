import Image from "next/image";

type ServicesCardProps = {
  id: number;
  title: string;
  shortDescription: string;
  description: string[];
  imgURL: string;
  blurDataURL?: string;
};

export default function ServicesCard({
  id,
  title,
  shortDescription,
  description,
  imgURL,
  blurDataURL,
}: ServicesCardProps) {
  return (
    <div
      className="flex w-full max-w-3xl flex-col justify-between bg-background-blue/50 sm:w-[30rem] md:mx-4 md:w-[45rem] md:scale-[85%] lg:scale-90"
      id={`services-card-${id}`}
    >
      <div className="grid-services-cards relative w-full border-y-[1.5px] border-blue bg-white/70">
        <div className="relative aspect-square h-full max-w-full">
          <Image
            className="w-full object-cover"
            src={imgURL}
            alt={title}
            fill
            priority
            sizes="40vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="mb-5 flex h-auto flex-col justify-center gap-4 p-3 md:mb-2 md:p-6">
          <p className="text-2xl">{title}</p>
          <p className="leading-relaxed">{shortDescription}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 border-b-[1.18px] border-blue p-4 text-justify leading-relaxed text-black-300 md:h-full md:px-10 md:py-8 md:text-center">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
