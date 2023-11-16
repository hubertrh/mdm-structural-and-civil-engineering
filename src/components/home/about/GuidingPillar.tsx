"use client";

import { useRef } from "react";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";
import LottieIcon from "@/components/common/LottieIcon";
import safetyIcon from "@/assets/icons/animated-arrow-right.json";

type GuidingPillarProps = {
  title: string;
  description: string;
};

export default function GuidingPillar({
  title,
  description,
}: GuidingPillarProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <div
        className="group relative flex w-[80vw] max-w-[50rem] flex-col items-center justify-center rounded-lg bg-white transition-all duration-300 ease-out sm:flex-row xl:w-80 xl:flex-col"
        onMouseEnter={() => animationControlRef.current.startAnimation()}
      >
        <div className="relative h-52 w-full">
          <LottieIcon icon={safetyIcon} duration={1000} />
        </div>
        <div className="z-10 mb-8 flex flex-col justify-center gap-2 px-6 pb-5 pt-5 text-center transition-all duration-300 sm:mb-5 sm:gap-0 sm:px-10 xl:gap-3 xl:bg-white xl:px-6 xl:pb-0">
          <h2 className="h-max text-lg font-medium leading-tight">{title}</h2>
          <p className="py-2 text-base leading-snug sm:py-1 sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </AnimationControlContext.Provider>
  );
}
