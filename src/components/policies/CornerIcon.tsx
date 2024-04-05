"use client";

import { useEffect, useRef } from "react";
import LottieIcon from "../common/LottieIcon";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import { LottieIconJson } from "@/types/LottieIconJson.type";

type CornerIconProps = {
  icon: LottieIconJson;
  duration: number;
};

export default function CornerIcon({ icon, duration }: CornerIconProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  useEffect(() => {
    animationControlRef.current.startAnimation();
  }, []);

  return (
    <div className="absolute right-0 top-20 ">
      <AnimationControlContext.Provider value={animationControlRef.current}>
        <LottieIcon icon={icon} duration={duration} sizeInRem={8} />
      </AnimationControlContext.Provider>
    </div>
  );
}
