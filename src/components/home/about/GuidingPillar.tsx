"use client";

import { useEffect, useRef } from "react";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";
import LottieIcon from "@/components/common/LottieIcon";
import { LottieIconJson } from "@/types/LottieIconJson.type";

type GuidingPillarProps = {
  title: string;
  description: string;
  icon: LottieIconJson;
  duration: number;
  index: number;
};

export default function GuidingPillar({
  title,
  description,
  icon,
  duration,
  index,
}: GuidingPillarProps) {
  const pillarRef = useRef<HTMLDivElement>(null);
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  useEffect(() => {
    const currentPillar = pillarRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const screenWidth = window.innerWidth;
            const delay = screenWidth > 1280 ? 400 * index : 0; // Apply delay only for horizontal layout

            setTimeout(() => {
              animationControlRef.current.startAnimation();
            }, delay); // delay for each consecutive component
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // relative to the viewport
        threshold: 1, // trigger when 100% of the component is visible
      },
    );

    if (pillarRef.current) {
      observer.observe(pillarRef.current);
    }

    return () => {
      if (currentPillar) {
        observer.unobserve(currentPillar);
      }
    };
  }, [index]);

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <div
        ref={pillarRef}
        className="group relative flex w-[80vw] max-w-[50rem] flex-col items-center justify-center rounded-lg transition-all duration-300 ease-out sm:flex-row sm:even:flex-row-reverse xl:w-80 xl:flex-col xl:even:flex-col"
      >
        <LottieIcon icon={icon} duration={duration} sizeInRem={10} />
        <div
          className="z-10 mb-8 flex flex-col justify-center gap-2 px-6 py-5 text-center transition-all duration-300 sm:mb-5 sm:max-w-[80%] sm:gap-0 sm:px-10 xl:max-w-full xl:gap-3 xl:bg-white xl:px-6 xl:pb-0"
          onMouseEnter={() => animationControlRef.current.startAnimation()}
        >
          <h2 className="h-max text-lg font-medium leading-tight">{title}</h2>
          <p className="py-2 text-base leading-snug sm:py-1 sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </AnimationControlContext.Provider>
  );
}
