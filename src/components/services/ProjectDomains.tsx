"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { scaleTransition } from "@/utils/animationVariants";

const domains = [
  {
    title: "Residential Edifices",
    description: "From cozy homes to sprawling estates",
    src: "/images/services/residential.png",
  },
  {
    title: "Commercial Spaces",
    description: "Crafting structural marvels for business endeavors",
    src: "/images/services/commercial.png",
  },
  {
    title: "Industrial Facilities",
    description: "Engineering robustness at scale",
    src: "/images/services/industrial.png",
  },
  {
    title: "Infrastructure Initiatives",
    description: "Building the backbone of modern life",
    src: "/images/services/infrastructure.png",
  },
  {
    title: "Historic Preservation",
    description: "Honoring the past, fortifying for the future",
    src: "/images/services/historic.png",
  },
];

export default function ProjectDomains() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="relative flex w-[85vw] max-w-4xl flex-col">
      {domains.map((domain, index) => {
        return (
          <div
            key={index}
            className={`grid-domains relative border-gray-300 py-5 ${
              index !== domains.length - 1 ? "border-b" : ""
            }`}
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
          >
            <div className="flex-col justify-center gap-4 py-5 text-xs sm:gap-2 sm:p-6 sm:text-sm md:flex md:gap-4 md:p-10 md:text-base">
              <p className="text-2xl">{domain.title}</p>
              <p className="h-auto sm:h-[2rem]">{domain.description}</p>
            </div>
            <div className="relative my-auto aspect-square w-full md:hidden">
              <Image
                src={domain.src}
                alt={domain.title}
                fill
                priority
                // TODO: Check after implementing responsive design
                sizes="(max-width: 768px) 100vw, 30vw"
                // TODO: Add blur after implementing Sanity CMS
                // placeholder="blur"
              />
            </div>
          </div>
        );
      })}
      <motion.div
        variants={scaleTransition}
        initial="initial"
        animate={modal.active ? "open" : "closed"}
        style={{ translate: `0 ${modal.index * 100}%` }}
        className="pointer-events-none absolute right-0 top-0 hidden aspect-square h-[20%] -translate-x-8 flex-col overflow-hidden duration-400"
      >
        <div
          className="aspect-square w-full transition-all duration-400 ease-out"
          style={{ translate: `0 ${modal.index * -20}%` }}
        >
          {domains.map((domain, index) => {
            return (
              <div key={index} className="relative z-20 aspect-square w-full">
                <Image
                  className="w-full"
                  src={domain.src}
                  alt={domain.title}
                  fill
                  priority
                  // TODO: Check after implementing responsive design
                  sizes="(max-width: 768px) 100vw, 30vw"
                  // TODO: Add blur after implementing Sanity CMS
                  // placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
