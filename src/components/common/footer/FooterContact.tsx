"use client";

import Link from "next/link";
import { useRef } from "react";
import LottieIcon from "../LottieIcon";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";
import NewCardIcon from "@/assets/icons/animated-new-card.min.json";

export default function FooterContact() {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="mb-1 font-medium">CONTACT US</p>
      <div className="flex flex-col leading-loose">
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href="mailto:info@mdmengineers.com"
        >
          info@mdmengineers.com
        </a>
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href="tel:+4407817085585"
        >
          +44 07817 085585
        </a>
      </div>
      <AnimationControlContext.Provider value={animationControlRef.current}>
        <div className="flex gap-2">
          <div
            className="group flex flex-col"
            onMouseEnter={() => animationControlRef.current.startAnimation()}
          >
            <a
              className="decoration-transparent transition-all duration-300 group-hover:text-green-dark group-hover:underline group-hover:decoration-green-dark group-hover:underline-offset-4"
              href={"https://maps.app.goo.gl/znVy7jwCRkzEbVVo9"}
            >
              MDM&nbsp;Structural&nbsp;and&nbsp;Civil&nbsp;Engineering&nbsp;Ltd
            </a>
            <a
              className="decoration-transparent transition-all duration-300 group-hover:text-green-dark group-hover:underline group-hover:decoration-green-dark group-hover:underline-offset-4"
              href={"https://maps.app.goo.gl/znVy7jwCRkzEbVVo9"}
            >
              4&nbsp;Quilter&nbsp;Street,&nbsp;London,&nbsp;SE18&nbsp;1JG
            </a>
          </div>
          <div className="mt-1">
            <LottieIcon icon={NewCardIcon} duration={1000} sizeInRem={1} />
          </div>
        </div>
      </AnimationControlContext.Provider>
    </div>
  );
}
