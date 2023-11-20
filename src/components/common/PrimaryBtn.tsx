"use client";

import Link from "next/link";
import { useRef } from "react";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import LottieIcon from "./LottieIcon";
import { LottieIconJson } from "@/types/LottieIconJson.type";

type PrimaryBtnProps = {
  icon: LottieIconJson;
  iconAlt: string;
  text: string;
  pageURL: string;
};

export default function PrimaryBtn({ icon, text, pageURL }: PrimaryBtnProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <Link
        href={pageURL}
        className="flex w-max items-center justify-center gap-5 rounded-md bg-green px-6 py-4 text-xl text-white transition-all duration-200 hover:bg-green-dark hover:shadow sm:px-8 sm:text-lg"
        onMouseEnter={() => animationControlRef.current.startAnimation()}
      >
        <LottieIcon icon={icon} duration={1000} sizeInRem={2} />
        <p>{text}</p>
      </Link>
    </AnimationControlContext.Provider>
  );
}
