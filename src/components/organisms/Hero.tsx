import Image from "next/image";
import HeroText from "../atoms/HeroText";
import heroImage from "@/public/images/hero-lg.png";

export default function Hero() {
  return (
    <div className="hero relative w-full">
      <div className="hero-gradient absolute inset-0 z-10"></div>
      <Image
        className="h-screen object-cover portrait:object-top landscape:object-[50%_12%]"
        src={heroImage}
        alt="Hero image"
        placeholder="blur"
        priority
      />
      <HeroText />
    </div>
  );
}
