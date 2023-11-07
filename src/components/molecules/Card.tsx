import Image from "next/image";

interface CardProps {
  imgURL: string;
  title: string;
  description: string;
}

export default function Card({ imgURL, title, description }: CardProps) {
  return (
    <div className="group relative flex w-[80vw] max-w-[50rem] flex-col items-center justify-center rounded-lg bg-white shadow-lg transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-2xl sm:flex-row xl:w-80 xl:flex-col">
      <div className="relative h-52 w-full">
        <Image
          className="rounded-lg object-cover"
          src={imgURL}
          alt={title}
          fill={true}
          sizes="25vw"
        />
      </div>

      <div className="z-10 mb-8 flex flex-col justify-center gap-2 px-6 pb-5 pt-5 transition-all duration-300 sm:mb-5 sm:gap-0 sm:px-10 xl:gap-3 xl:bg-white xl:px-6 xl:pb-0 xl:group-hover:-translate-y-9">
        <h2 className="h-12 w-11/12 text-lg font-semibold leading-tight">
          {title}
        </h2>
        <p className="text-sm leading-tight">{description}</p>
      </div>

      <button className="absolute bottom-0 right-0 flex w-max items-center justify-center gap-2 px-6 py-4 opacity-100 transition-all duration-300 group-hover:opacity-100">
        <p className="text-blue-dark">Learn more</p>
        <Image
          className="h-[16px] w-[16px]"
          src="/icons/arrow-right.svg"
          alt="Arrow right"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
