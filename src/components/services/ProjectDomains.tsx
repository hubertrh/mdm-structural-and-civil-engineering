"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { scaleUp } from "@/utils/animationVariants";
import { DomainsCards } from "@/types/groqGetters/servicesPage.type";

type DomainsCardsProps = {
  cards: DomainsCards;
};

export default function ProjectDomains({ cards }: DomainsCardsProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="grid w-[85vw] max-w-4xl place-items-center gap-8">
      <h2 className="w-full text-center text-2xl sm:text-[1.6rem] md:px-10 md:text-left">
        <span>Project&nbsp;Domains</span> <span>We&nbsp;Excel&nbsp;by</span>
      </h2>
      <div className="relative flex w-full flex-col">
        {cards.map((domain, index) => {
          return (
            <div
              key={index}
              className={`grid-domains relative border-gray-400 py-5 ${
                index !== cards.length - 1 ? "border-b" : ""
              }`}
              onMouseEnter={() => setModal({ active: true, index: index })}
              onMouseLeave={() => setModal({ active: false, index: index })}
            >
              <div className="flex flex-col justify-center gap-2 py-5 text-sm sm:gap-2 sm:p-6 sm:text-sm md:flex md:gap-4 md:p-10 md:text-base">
                <p className="text-2xl">{domain.name}</p>
                <p className="h-auto sm:h-[2rem]">{domain.shortDescription}</p>
              </div>
              <div className="relative my-auto aspect-square w-full md:hidden">
                <Image
                  src={domain.image.url}
                  alt={domain.name}
                  fill
                  priority
                  sizes="40vw"
                  placeholder="blur"
                  blurDataURL={domain.image.metadata.lqip}
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
            {cards.map((domain, index) => {
              return (
                <div key={index} className="relative aspect-square w-full">
                  <Image
                    className="w-full"
                    src={domain.image.url}
                    alt={domain.name}
                    fill
                    priority
                    sizes="40vw"
                    placeholder="blur"
                    blurDataURL={domain.image.metadata.lqip}
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
