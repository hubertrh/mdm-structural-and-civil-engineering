"use client";

import { useRef } from "react";
import LottieIcon from "../common/LottieIcon";
import { AnimationControlContext } from "../contexts/AnimationControlContext";
import PhoneIcon from "@/assets/icons/animated-phone.min.json";
import EmailIcon from "@/assets/icons/animated-email.min.json";
import AddressIcon from "@/assets/icons/animated-address.min.json";

type ContactDetailsLinkProps = {
  variant: "phone" | "email" | "address";
};

const linkData = {
  phone: {
    href: "tel:+447817085585",
    icon: PhoneIcon,
    duration: 1000,
    contents: ["+44 07817 085585"],
  },
  email: {
    href: "mailto:info@mdmengineers.com",
    icon: EmailIcon,
    duration: 1000,
    contents: ["info@mdmengineers.com"],
  },
  address: {
    href: "https://maps.example.com",
    icon: AddressIcon,
    duration: 1000,
    contents: [
      <>
        MDM Structural
        <br />
        and Civil Engineering Ltd
      </>,
      <>
        4 Quilter Street
        <br />
        London SE18 1JG
      </>,
    ],
  },
};

export default function ContactDetailsLink({
  variant,
}: ContactDetailsLinkProps) {
  const animationControlRef = useRef({
    startAnimation: () => {},
  });

  const variantData = linkData[variant];

  return (
    <AnimationControlContext.Provider value={animationControlRef.current}>
      <a
        href={variantData.href}
        className="flex items-center gap-4 transition-all duration-300 hover:text-green-dark"
        onMouseEnter={() => animationControlRef.current.startAnimation()}
      >
        <LottieIcon
          icon={variantData.icon}
          duration={variantData.duration}
          sizeInRem={2}
        />
        <div className="flex flex-col gap-2">
          {variantData.contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </a>
    </AnimationControlContext.Provider>
  );
}
