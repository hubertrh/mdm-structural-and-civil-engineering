"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import FullLogo from "../FullLogo";
import Nav from "./Nav";
import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

type ScrollTriggerConfig = {
  trigger: string;
  start: string;
  endTrigger: string;
  end: string;
  scrub: boolean;
};

type AnimationProperties = {
  scrollTrigger?: ScrollTriggerConfig;
  [key: string]: string | ScrollTriggerConfig | undefined;
};

gsap.registerPlugin(ScrollTrigger);

type HeaderProps = {
  companyDetails: CompanyDetails;
};

export default function Header({ companyDetails }: HeaderProps) {
  useEffect(() => {
    function animateElement<T extends AnimationProperties>(
      selector: string,
      animationProperties: T,
    ): void {
      gsap.to(selector, {
        scrollTrigger: {
          start: "top top",
          end: "+=300",
          scrub: true,
        },
        ...animationProperties,
      });
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      animateElement(".header", { padding: "0.8rem 2rem" });
      animateElement(".header", { background: "white" });
      animateElement(".header .logo-text", { fontSize: "2rem" });
      animateElement(".header .logo-text-small", { fontSize: "1.5rem" });
      animateElement(".header .nav", { fontSize: "0.8rem" });
    }
  }, []);

  return (
    <header className="header fixed top-0 z-30 w-full bg-background-blue p-4 shadow md:p-8 lg:px-16 lg:py-8">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <FullLogo />
        </Link>
        <Nav companyDetails={companyDetails} />
      </div>
    </header>
  );
}
