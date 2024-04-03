"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import LottieIcon from "../common/LottieIcon";
import ServicesCard from "./ServicesCard";
import SliderNavIcon from "@/assets/icons/animated-button-right-arrow-green-dark.json";
import { ServicesCards } from "@/types/groqGetters/servicesPage.type";

type ServicesCardsProps = {
  cards: ServicesCards;
};

export default function ServicesCards({ cards }: ServicesCardsProps) {
  const [position, setPosition] = useState(1);
  const searchParams = useSearchParams();
  const cardsRef = useRef<HTMLElement | null>(null);

  const nextPosition = () =>
    position !== -1 ? setPosition(position - 1) : null;
  const prevPosition = () =>
    position !== 1 ? setPosition(position + 1) : null;

  useEffect(() => {
    const cardIndex = searchParams.get("card");
    if (cardIndex && cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
      const index = parseInt(cardIndex, 10);
      setPosition((index - 1) * -1);
    }
  }, [searchParams]);

  return (
    <section ref={cardsRef} className="grid place-items-center gap-12 md:gap-6">
      <h2 className="max-w-[80vw] text-center text-2xl font-medium sm:text-[1.6rem] md:font-normal">
        <span>Our&nbsp;Role&nbsp;in&nbsp;Building</span>{" "}
        <span>Resilient&nbsp;Structures</span>
      </h2>
      <div className="relative flex w-[85vw] max-w-6xl items-center justify-center overflow-x-clip md:w-[90vw]">
        <div
          className="translate-reset flex w-max flex-col gap-28 transition-all duration-500 ease-out md:flex-row md:gap-0"
          style={{ translate: `${position * 33.33}%` }}
        >
          {cards.map((service, index) => {
            return (
              <ServicesCard
                key={index}
                title={service.title}
                shortDescription={service.shortDescription}
                description={service.paragraphs}
                imgURL={service.image.url}
                blurDataURL={service.image.metadata.lqip}
              />
            );
          })}
        </div>
        <div
          className="absolute left-0 top-0 hidden h-full w-[8%] place-items-center bg-gradient-to-l from-transparent to-white md:grid lg:w-[18%]"
          onClick={prevPosition}
        >
          {position < 1 ? (
            <>
              <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <button className="rotate-90 rounded-full">
                <LottieIcon
                  icon={SliderNavIcon}
                  duration={1000}
                  sizeInRem={3}
                />
              </button>
            </>
          ) : null}
        </div>
        <div
          className="absolute right-0 top-0 hidden h-full w-[8%] place-items-center bg-gradient-to-r from-transparent to-white md:grid lg:w-[18%]"
          onClick={nextPosition}
        >
          {position > -1 ? (
            <>
              <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <button className="-rotate-90 rounded-full">
                <LottieIcon
                  icon={SliderNavIcon}
                  duration={1000}
                  sizeInRem={3}
                />
              </button>
            </>
          ) : null}
        </div>
        <div className="absolute -bottom-4 left-1/2 z-10 hidden -translate-x-1/2 gap-4 md:flex">
          {cards.map((_, index) => {
            return (
              <div
                key={index}
                className={`grid h-3 w-5 cursor-pointer place-items-center transition-all duration-500 ease-out ${
                  position * -1 + 1 === index
                    ? "outline outline-green"
                    : "outline outline-transparent"
                }`}
                onClick={() => {
                  setPosition((index - 1) * -1);
                }}
              >
                <span className="h-1/4 w-2 bg-green-dark" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
