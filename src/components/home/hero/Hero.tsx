import Image from "next/image";
import HeroText from "./HeroText";
import heroImage from "/public/images/hero.png";

export default function Hero() {
  return (
    <div className="hero relative h-screen w-full xl:max-h-[900px]">
      <div className="hero-gradient absolute inset-0 z-10"></div>
      <Image
        className="h-full object-cover portrait:object-top landscape:object-[50%_12%]"
        src={heroImage}
        alt="Hero image"
        placeholder="blur"
        priority
      />
      <HeroText />
    </div>
  );
}
