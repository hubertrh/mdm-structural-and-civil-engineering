import Image from "next/image";
import heroSubImage from "/public/images/hero-sub.png";

type SubHero = {
  variant: "services" | "about us" | "projects" | "contact";
};

export default function SubHero({ variant }: SubHero) {
  return (
    // <div className="relative top-[8.5rem] grid h-fit w-full place-items-center">
    <div className="relative mt-[8.5rem] grid h-fit w-full place-items-center">
      <h1 className="absolute inset-0 grid place-items-center text-4xl text-white">
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
  );
}
