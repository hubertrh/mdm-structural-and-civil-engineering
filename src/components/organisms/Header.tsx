"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import FullLogo from "../molecules/FullLogo";
import Nav from "../molecules/Nav";

interface ScrollTriggerConfig {
  trigger: string;
  start: string;
  endTrigger: string;
  end: string;
  scrub: boolean;
}

interface AnimationProperties {
  scrollTrigger?: ScrollTriggerConfig;
  [key: string]: string | ScrollTriggerConfig | undefined;
}

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
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
      animateElement(".logo-text", { fontSize: "2rem" });
      animateElement(".nav", { fontSize: "0.8rem" });
    }
  }, []);

  return (
    <header className="header fixed top-0 z-30 flex w-full items-center justify-between bg-background-blue px-4 py-4 shadow md:px-8 md:py-8 lg:px-16 lg:py-8">
      <Link href="/">
        <FullLogo />
      </Link>
      <Nav />
    </header>
  );
}
