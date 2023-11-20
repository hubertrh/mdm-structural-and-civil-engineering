"use client";

import lottie, { AnimationItem } from "lottie-web";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import { LottieIconJson } from "@/types/LottieIconJson.type";

type LottieIconProps = {
  icon: LottieIconJson;
  duration: number;
  sizeInRem: number;
};

export default function LottieIcon({
  icon,
  duration,
  sizeInRem,
}: LottieIconProps) {
  const container = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const animationControl = useContext(AnimationControlContext);

  const handleMouseEnter = useCallback(() => {
    animationInstance.current?.play();

    setTimeout(() => {
      animationInstance.current?.stop();
    }, duration);
  }, [duration]);

  useEffect(() => {
    if (container.current) {
      animationInstance.current = lottie.loadAnimation({
        container: container.current,
        animationData: icon,
        loop: true,
        autoplay: false,
      });

      animationControl.startAnimation = () => handleMouseEnter();

      return () => {
        animationInstance.current?.destroy(); // Clean up the animation instance
      };
    }
  }, [animationControl, icon, handleMouseEnter]);

  return (
    <div
      ref={container}
      className="relative"
      style={{ height: `${sizeInRem}rem`, width: `${sizeInRem}rem` }}
      onMouseEnter={handleMouseEnter}
    />
  );
}
