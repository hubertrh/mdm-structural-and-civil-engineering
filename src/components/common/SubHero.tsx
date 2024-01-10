import Image from "next/image";
import heroSubImage from "/public/images/hero-sub.png";

type SubHero = {
  variant: "services" | "about us" | "projects" | "contact";
};

export default function SubHero({ variant }: SubHero) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="subhero relative mt-[4.6rem] grid h-fit w-full min-w-[768px] place-items-center md:mt-[6.6rem] lg:mt-[8.6rem]">
        <h1 className="absolute inset-0 grid place-items-center text-2xl text-white sm:text-4xl">
          {variant}
        </h1>
        <Image
          className="w-full portrait:object-top"
          src={heroSubImage}
          alt="Hero subpage image"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
