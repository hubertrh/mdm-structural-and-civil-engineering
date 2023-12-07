"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { scaleUp } from "@/utils/animationVariants";

const domains = [
  {
    title: "Residential Edifices",
    description: "From cozy homes to sprawling estates",
    src: "/images/services/domains/residential.png",
  },
  {
    title: "Commercial Spaces",
    description: "Crafting structural marvels for business endeavors",
    src: "/images/services/domains/commercial.png",
  },
  {
    title: "Industrial Facilities",
    description: "Engineering robustness at scale",
    src: "/images/services/domains/industrial.png",
  },
  {
    title: "Infrastructure Initiatives",
    description: "Building the backbone of modern life",
    src: "/images/services/domains/infrastructure.png",
  },
  {
    title: "Historic Preservation",
    description: "Honoring the past, fortifying for the future",
    src: "/images/services/domains/historic.png",
  },
];

export default function ProjectDomains() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="grid place-items-center gap-8">
      <h2 className="max-w-[80vw] text-center text-2xl sm:text-[1.6rem] md:w-full md:px-10">
        <span>Project&nbsp;Domains</span> <span>We&nbsp;Excel&nbsp;by</span>
      </h2>
      <div className="relative flex w-[85vw] max-w-4xl flex-col">
        {domains.map((domain, index) => {
          return (
            <div
              key={index}
              className={`grid-domains relative border-gray-400 py-5 ${
                index !== domains.length - 1 ? "border-b" : ""
              }`}
              onMouseEnter={() => setModal({ active: true, index: index })}
              onMouseLeave={() => setModal({ active: false, index: index })}
            >
              <div className="flex flex-col justify-center gap-2 py-5 text-sm sm:gap-2 sm:p-6 sm:text-sm md:flex md:gap-4 md:p-10 md:text-base">
                <p className="text-2xl">{domain.title}</p>
                <p className="h-auto sm:h-[2rem]">{domain.description}</p>
              </div>
              <div className="relative my-auto aspect-square w-full md:hidden">
                <Image
                  src={domain.src}
                  alt={domain.title}
                  fill
                  priority
                  sizes="40vw"
                  // TODO: Add blur after implementing Sanity CMS
                  // placeholder="blur"
                />
              </div>
            </div>
          );
        })}
        <motion.div
          variants={scaleUp}
          initial="initial"
          animate={modal.active ? "open" : "closed"}
          style={{ translate: `0 ${modal.index * 100}%` }}
          className="pointer-events-none absolute right-0 top-0 hidden aspect-square h-[20%] -translate-x-8 flex-col overflow-hidden shadow-xl duration-400 ease-out md:flex"
        >
          <div
            className="aspect-square w-full transition-all duration-400 ease-out"
            style={{ translate: `0 ${modal.index * -20}%` }}
          >
            {domains.map((domain, index) => {
              return (
                <div key={index} className="relative aspect-square w-full">
                  <Image
                    className="w-full"
                    src={domain.src}
                    alt={domain.title}
                    fill
                    priority
                    sizes="40vw"
                    // TODO: Add blur after implementing Sanity CMS
                    // placeholder="blur"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
