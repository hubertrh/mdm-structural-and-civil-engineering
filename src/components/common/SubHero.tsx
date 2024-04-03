import Image from "next/image";
import heroSubImage from "/public/images/hero-sub.png";

type SubHero = {
  variant:
    | "services"
    | "about us"
    | "projects"
    | "contact"
    | "cookie policy"
    | "privacy policy";
};

export default function SubHero({ variant }: SubHero) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="relative mt-[4.6rem] grid h-fit w-full min-w-[768px] place-items-center md:mt-[6.6rem] lg:mt-[8.6rem]">
        <h1 className="subhero-text absolute inset-0 z-10 grid place-items-center text-3xl font-normal text-blue-dark sm:text-[2.5rem]">
          {variant}
        </h1>
        <Image
          className="w-full hue-rotate-[45deg] portrait:object-top"
          src={heroSubImage}
          alt="Hero subpage image"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
