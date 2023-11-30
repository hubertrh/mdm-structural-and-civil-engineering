"use client";

import { useEffect, useRef } from "react";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";
import LottieIcon from "@/components/common/LottieIcon";
import { LottieIconJson } from "@/types/LottieIconJson.type";

type AboutCardProps = {
  title: string;
  description: string;
  icon: LottieIconJson;
  duration: number;
  index: number;
};

export default function AboutCard({
  title,
  description,
  icon,
  duration,
  index,
}: AboutCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  useEffect(() => {
    const currentCard = cardRef.current; // Capture the current value of the ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationControlRef.current.startAnimation();

            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // relative to the viewport
        threshold: 1, // trigger when 100% of the component is visible
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [index]);

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <div
        ref={cardRef}
        className="group relative flex w-[80vw] max-w-[50rem] flex-col items-center justify-center rounded-lg transition-all duration-300 ease-out sm:flex-row sm:odd:flex-row-reverse"
      >
        <LottieIcon icon={icon} duration={duration} sizeInRem={10} />
        <div
          className="z-10 mb-8 flex flex-col justify-center gap-2 py-5 text-center transition-all duration-300 sm:mb-0 sm:max-w-[80%] sm:gap-0 sm:px-10"
          onMouseEnter={() => animationControlRef.current.startAnimation()}
        >
          <h2 className="mb-3 h-max text-lg font-medium leading-tight">
            {title}
          </h2>
          <p className=": text-justify text-base sm:py-1 sm:text-sm sm:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimationControlContext.Provider>
  );
}
