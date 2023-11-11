"use client";

import Image from "next/image";
import { useRef } from "react";
import SecondaryBtn from "../../common/SecondaryBtn";
import { AnimationControlContext } from "../../contexts/AnimationControlContext";

interface CardProps {
  imgURL: string;
  title: string;
  description: string;
}

export default function Card({ imgURL, title, description }: CardProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <div
        className="group relative flex w-[80vw] max-w-[50rem] flex-col items-center justify-center rounded-lg bg-white shadow-lg transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-2xl sm:flex-row xl:w-80 xl:flex-col"
        onMouseEnter={() => animationControlRef.current.startAnimation()}
      >
        <div className="relative h-52 w-full">
          <Image
            className="rounded-lg object-cover"
            src={imgURL}
            alt={title}
            fill={true}
            sizes="25vw"
          />
        </div>

        <div className="z-10 mb-8 flex flex-col justify-center gap-2 px-6 pb-5 pt-5 transition-all duration-300 sm:mb-5 sm:gap-0 sm:px-10 xl:gap-3 xl:bg-white xl:px-6 xl:pb-0 xl:group-hover:-translate-y-9">
          <h2 className="h-max w-10/12 text-lg font-medium leading-tight">
            {title}
          </h2>
          <p className="py-2 text-base leading-snug sm:py-1 sm:text-sm">
            {description}
          </p>
        </div>

        <SecondaryBtn text="Learn more" position="inside" />
      </div>
    </AnimationControlContext.Provider>
  );
}
