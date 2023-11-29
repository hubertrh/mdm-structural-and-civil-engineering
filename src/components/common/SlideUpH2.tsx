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

  // Split the heading text into words and add a <br> after each comma
  const words = headingText
    .split(/, /)
    .flatMap((segment, index, array) =>
      index < array.length - 1
        ? [segment + ",", <br key={"br" + index} />]
        : [segment],
    );

  return (
    <h2 className="flex flex-col justify-end gap-x-1" ref={container}>
      {words.map((wordOrBreak, wordIndex) =>
        //
        // If it's a string, wrap it in a span and animate it, otherwise it's a <br>
        //
        typeof wordOrBreak === "string" ? (
          <span className="relative overflow-hidden" key={wordIndex}>
            <motion.span
              className="block opacity-0"
              custom={wordIndex}
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
            >
              {wordOrBreak}
            </motion.span>
          </span>
        ) : null,
      )}
    </h2>
  );
}
