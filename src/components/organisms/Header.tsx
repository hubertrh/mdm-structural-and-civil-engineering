"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LargeLogo from "../molecules/LargeLogo";
import Nav from "../molecules/Nav";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    gsap.to(".header", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: ".hero-text",
        end: "top top",
        scrub: true,
      },
      padding: "0.8rem 2rem",
    });

    gsap.to(".logo-text", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: ".hero-text",
        end: "top top",
        scrub: true,
      },
      fontSize: "2rem",
    });
  }, []);

  return (
    <header className="header fixed top-0 z-30 flex w-full items-center justify-between bg-white px-16 py-8">
      <Link href="/">
        <LargeLogo />
      </Link>
      <Nav />
    </header>
  );
}
