import Image from "next/image";
import HeroText from "./HeroText";
import heroImage from "/public/images/hero.png";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden xl:max-h-[900px]">
      <div className="hero-gradient absolute inset-0 z-10"></div>
      <Image
        className="h-[150%] object-cover hue-rotate-[15deg] portrait:object-[65%_50%] landscape:object-[50%_16%]"
        src={heroImage}
        alt="Hero image"
        placeholder="blur"
        priority
      />
      <HeroText />
    </div>
  );
}
