import Image from "next/image";
import HeroText from "../molecules/HeroText";
import heroImage from "@/public/images/hero-lg.png";

export default function Hero() {
  return (
    <div className="hero relative w-full">
      <div className="hero-gradient absolute inset-0 z-10"></div>
      <Image
        className="max-h-dvh object-cover object-[50%_12%]"
        src={heroImage}
        alt="Hero image"
        placeholder="blur"
        priority
      />
      <HeroText />
    </div>
  );
}