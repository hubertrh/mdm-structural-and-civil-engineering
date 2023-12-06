"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "@/utils/animationVariants";

type SlideUpH2Props = {
  headingText: string | string[];
};

// Component to animate each word
const AnimatedWord = ({
  word,
  index,
  isInView,
}: {
  word: string;
  index: number;
  isInView: boolean;
}) => {
  return (
    <span className="relative overflow-hidden" key={index}>
      <motion.span
        className="block opacity-0"
        custom={index}
        variants={slideUp}
        initial="initial"
        animate={isInView ? "open" : "closed"}
      >
        {word}
      </motion.span>
    </span>
  );
};

export default function SlideUpH2({ headingText }: SlideUpH2Props) {
  const container = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(container, { once: true });

  // Function to render animated line of text
  const renderAnimatedLine = (line: string, lineIndex: number) => {
    return line
      .split(" ")
      .map((word, wordIndex) => (
        <AnimatedWord
          word={word}
          index={wordIndex}
          isInView={isInView}
          key={`${lineIndex}-${wordIndex}`}
        />
      ));
  };

  // Ensuring headingText is always an array
  const textLines = Array.isArray(headingText) ? headingText : [headingText];

  return (
    <h2 className="flex flex-col gap-y-1" ref={container}>
      {textLines.map((line, lineIndex) => (
        <span className="flex flex-wrap justify-end gap-x-1" key={lineIndex}>
          {renderAnimatedLine(line, lineIndex)}
        </span>
      ))}
    </h2>
  );
}
