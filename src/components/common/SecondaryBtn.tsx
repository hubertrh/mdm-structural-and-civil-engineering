"use client";

import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import animatedArrowRight from "@/src/assets/icons/animated-arrow-right.json";

type SecondaryBtnProps = {
  text: string;
  pageURL?: string;
  position: "inside" | "outside";
};

export default function SecondaryBtn({
  text,
  pageURL,
  position,
}: SecondaryBtnProps) {
  const buttonClassList = pageURL
    ? "flex w-max items-center justify-center gap-2 opacity-100 transition-all duration-300 group-hover:opacity-100"
    : "absolute right-0 flex w-max items-center justify-center gap-2 opacity-100 transition-all duration-300 group-hover:opacity-100";

  const container = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const animationControl = useContext(AnimationControlContext);

  useEffect(() => {
    if (container.current) {
      animationInstance.current = lottie.loadAnimation({
        container: container.current,
        animationData: animatedArrowRight,
        loop: true,
        autoplay: false,
      });

      animationControl.startAnimation = () => handleMouseEnter();

      return () => {
        animationInstance.current?.destroy(); // Clean up the animation instance
      };
    }
  }, [animationControl]);

  const handleMouseEnter = () => {
    animationInstance.current?.play();

    setTimeout(() => {
      animationInstance.current?.stop();
    }, 1000);
  };

  const ButtonContent = () => {
    return (
      <button
        className={`${
          position === "inside"
            ? "bottom-0 px-6 py-4"
            : "top-full px-2 py-6 sm:py-3"
        } ${buttonClassList}
      }`}
        onMouseEnter={handleMouseEnter}
      >
        <p className="text-lg text-blue-dark sm:text-base">{text}</p>
        <div ref={container} className="relative h-[20px] w-[20px]" />
      </button>
    );
  };

  return pageURL ? (
    <Link
      href={pageURL}
      className={`${
        position === "inside"
          ? "absolute bottom-0 right-0"
          : "absolute right-0 top-full"
      }
  }`}
    >
      <ButtonContent />
    </Link>
  ) : (
    <ButtonContent />
  );
}
