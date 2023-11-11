"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import FullLogo from "../FullLogo";
import Nav from "./Nav";

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
      animateElement(".header .logo-text", { fontSize: "2rem" });
      animateElement(".header .logo-text-small", { fontSize: "1.5rem" });
      animateElement(".header .nav", { fontSize: "0.8rem" });
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