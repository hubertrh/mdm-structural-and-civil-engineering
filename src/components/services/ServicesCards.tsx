"use client";

import { useState } from "react";
import LottieIcon from "../common/LottieIcon";
import ServicesCard from "./ServicesCard";
import SliderNavIcon from "@/assets/icons/animated-button-right-arrow-green-dark.json";

const services = [
  {
    title: "Structural Design & Analysis",
    summary:
      "Whether you're building a new, renovating, or extending, our expert touch ensures your structures stand tall, meeting and exceeding all safety and performance benchmarks.",
    description: [
      "Tailored Structural Solutions: We specialize in custom structural designs for a variety of London's architectural styles, ensuring both aesthetic appeal and functional strength.",
      "Rigorous Analysis for Compliance: Our team employs advanced technology to perform detailed structural analyses, ensuring every design complies with UK building standards for safety and efficiency.",
    ],
    imgURL: "/images/services/structural-design-analysis.png",
  },
  {
    title: "Structural Assessments & Inspections",
    summary:
      "Beyond mere observation, our in-depth inspections unearth potential structural concerns. We not only pinpoint issues but also guide you through repair and reinforcement solutions.",
    description: [
      "Comprehensive Building Inspections: We thoroughly inspect buildings, from historic to modern, identifying structural issues to ensure safety and durability.",
      "Heritage and Modernity: Expertly balancing historical preservation with modern engineering, we upgrade London's heritage buildings for future resilience.",
    ],
    imgURL: "/images/services/structural-assessments-inspections.png",
  },
  {
    title: "Construction Supervision & Monitoring",
    summary:
      "Bring your vision to life with confidence. Our vigilant on-site supervision ensures your project mirrors its blueprints, adhering rigorously to the approved design and specifications.",
    description: [
      "Guarding Project Integrity: Our vigilant on-site supervision ensures your project strictly adheres to its blueprint, navigating London's urban construction challenges effectively.",
      "Collaborative and Efficient: We work closely with contractors and authorities, applying our local construction knowledge for smooth project execution and community enhancement.",
    ],
    imgURL: "/images/services/construction-supervision-monitoring.png",
  },
];

export default function ServicesCards() {
  const [position, setPosition] = useState(1);
  const nextPosition = () =>
    position !== -1 ? setPosition(position - 1) : null;
  const prevPosition = () =>
    position !== 1 ? setPosition(position + 1) : null;

  return (
    <section className="grid place-items-center gap-14">
      <h2 className="max-w-[80vw] text-center text-2xl sm:text-[1.6rem]">
        <span>Our&nbsp;Role&nbsp;in&nbsp;Building</span>{" "}
        <span>Resilient&nbsp;Structures</span>
      </h2>
      <div className="relative flex w-[85vw] max-w-6xl items-center justify-center overflow-x-clip md:w-[90vw]">
        <div
          className="translate-reset flex w-max flex-col gap-20 transition-all duration-500 ease-in-out-quint md:flex-row md:gap-0"
          style={{ translate: `${position * 33.33}%` }}
        >
          {services.map((service, index) => {
            return (
              <ServicesCard
                key={index}
                title={service.title}
                summary={service.summary}
                description={service.description}
                imgURL={service.imgURL}
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
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
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
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
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
          {services.map((_, index) => {
            return (
              <div
                key={index}
                className={`grid h-3 w-5 cursor-pointer place-items-center transition-all duration-500 ease-in-out-quint ${
                  position * -1 + 1 === index
                    ? "outline outline-green"
                    : "outline outline-transparent"
                }`}
                onClick={() => {
                  setPosition((index - 1) * -1);
                }}
              >
                <span className="h-1 w-3 bg-green-dark" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
