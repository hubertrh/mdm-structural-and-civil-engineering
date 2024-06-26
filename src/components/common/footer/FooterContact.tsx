"use client";

import { useRef } from "react";
import LottieIcon from "../LottieIcon";
import { AnimationControlContext } from "@/components/contexts/AnimationControlContext";
import NewCardIcon from "@/assets/icons/animated-new-card.min.json";
import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

type footerContactProps = {
  companyDetails: CompanyDetails;
};

export default function FooterContact({ companyDetails }: footerContactProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="mb-1 font-medium">CONTACT US</p>
      <div className="flex flex-col leading-loose">
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href={`mailto:${companyDetails.email}`}
        >
          {companyDetails.email}
        </a>
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href={`tel:${companyDetails.phone.replace(/\s/g, "")}`}
        >
          {companyDetails.phone}
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
              href={companyDetails.googleMapsLink}
            >
              {`${companyDetails.name.replace(/ /g, "\u00A0")}\u00A0Ltd.`}
            </a>
            <a
              className="decoration-transparent transition-all duration-300 group-hover:text-green-dark group-hover:underline group-hover:decoration-green-dark group-hover:underline-offset-4"
              href={companyDetails.googleMapsLink}
            >
              {companyDetails.address.replace(/ /g, "\u00A0")}
            </a>
          </div>
          <a
            className="mt-1"
            href={companyDetails.googleMapsLink}
            aria-label="View our location on Google Maps. Opens in a new tab."
          >
            <LottieIcon icon={NewCardIcon} duration={1000} sizeInRem={1} />
          </a>
        </div>
      </AnimationControlContext.Provider>
    </div>
  );
}
