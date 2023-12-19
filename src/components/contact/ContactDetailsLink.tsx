"use client";

import { useRef } from "react";
import LottieIcon from "../common/LottieIcon";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import PhoneIcon from "@/assets/icons/animated-phone.min.json";
import EmailIcon from "@/assets/icons/animated-email.min.json";
import AddressIcon from "@/assets/icons/animated-address.min.json";
import { companyDetails } from "@/types/groqGetters/companyDetails.type";

type ContactDetailsLinkProps = {
  variant: "phone" | "email" | "address";
  companyDetails: companyDetails;
};

export default function ContactDetailsLink({
  variant,
  companyDetails,
}: ContactDetailsLinkProps) {
  const linkData = {
    phone: {
      href: `tel:${companyDetails.phone.replace(/\s/g, "")}`,
      icon: PhoneIcon,
      duration: 1000,
      contents: [`${companyDetails.phone}`],
    },
    email: {
      href: `mailto:${companyDetails.email}`,
      icon: EmailIcon,
      duration: 1000,
      contents: [`${companyDetails.email}`],
    },
    address: {
      href: `${companyDetails.googleMapsLink}`,
      icon: AddressIcon,
      duration: 1000,
      contents: [
        <>
          {companyDetails.nameNarrow.firstLine}
          <br />
          {companyDetails.nameNarrow.secondLine}
        </>,
        <>
          {companyDetails.addressNarrow.firstLine}
          <br />
          {companyDetails.addressNarrow.secondLine}
        </>,
      ],
    },
  };

  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  const variantData = linkData[variant];

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <a
        href={variantData.href}
        className="flex items-center gap-6 transition-all duration-300 hover:text-green-dark"
        onMouseEnter={() => animationControlRef.current.startAnimation()}
      >
        <LottieIcon
          icon={variantData.icon}
          duration={variantData.duration}
          sizeInRem={2}
        />
        <div className="flex flex-col gap-2">
          {variantData.contents.map((content, index) => (
            <p className="leading-snug lg:text-lg" key={index}>
              {content}
            </p>
          ))}
        </div>
      </a>
    </AnimationControlContext.Provider>
  );
}
