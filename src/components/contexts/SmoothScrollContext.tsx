"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import LenisContext from "./LenisContext";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({
  children,
}: SmoothScrollProps): JSX.Element {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis();
    setLenis(newLenis);

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
