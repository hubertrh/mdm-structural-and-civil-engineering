"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "@/utils/animationVariants";

type SlideUpH2Props = {
  headingText: String;
};

export default function SlideUpH2({ headingText }: SlideUpH2Props) {
  const container = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <h2 className="flex flex-wrap justify-end gap-x-1" ref={container}>
      {headingText.split(" ").map((word, wordIndex) => (
        <span className="relative overflow-hidden" key={wordIndex}>
          <motion.span
            className="block opacity-0"
            custom={wordIndex}
            variants={slideUp}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
