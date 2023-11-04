"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
