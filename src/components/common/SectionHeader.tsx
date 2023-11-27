"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "@/utils/animationVariants";

type SectionHeaderProps = {
  title: string;
  description?: string[];
  variant?: "light";
};

export default function SectionHeader({
  title,
  description,
  variant,
}: SectionHeaderProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <section className="flex w-[80vw] max-w-4xl flex-col gap-2 text-justify sm:text-center">
      <h2
        className={`pb-4 text-center text-black-200
      ${
        variant === "light"
          ? "text-lg font-normal sm:text-2xl"
          : "text-xl font-medium sm:text-3xl"
      }
      `}
      >
        {title}
      </h2>
      {description?.map((paragraph, index) => (
        <p
          ref={container}
          className="flex flex-wrap justify-center gap-x-1 text-base leading-7"
          key={index}
        >
          {paragraph.split(" ").map((word, wordIndex) => (
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
        </p>
      ))}
    </section>
  );
}
