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
      "Customised Architectural Synergy: At MDM, each project is an opportunity to harmonise the client's vision with our engineering innovation. We excel in creating unique structural designs that resonate with London's diverse architectural landscape, from quaint Notting Hill residences to soaring Canary Wharf skyscrapers.",
      "Precision-Driven Analysis: Leveraging cutting-edge technology and London's rich engineering heritage, our team conducts meticulous structural analyses. We ensure that each design not only meets but surpasses the stringent safety and performance standards of the UK's building regulations.",
    ],
    imgURL: "/images/services/structural-design-analysis.png",
  },
  {
    title: "Structural Assessments & Inspections",
    summary:
      "Beyond mere observation, our in-depth inspections unearth potential structural concerns. We not only pinpoint issues but also guide you through repair and reinforcement solutions.",
    description: [
      "Beyond Surface-Level Inspection: London's rich tapestry of old and new structures demands more than just a cursory glance. Our in-depth inspections delve into the very bones of buildings, from Victorian townhouses to modern glass-and-steel constructions, identifying both overt and latent structural challenges.",
      "Heritage Preservation Meets Modern Engineering: Specialising in the delicate balance of modernising while preserving London's historical buildings, we offer tailored solutions that respect the past while securing the future.",
    ],
    imgURL: "/images/services/structural-assessments-inspections.png",
  },
  {
    title: "Construction Supervision & Monitoring",
    summary:
      "Bring your vision to life with confidence. Our vigilant on-site supervision ensures your project mirrors its blueprints, adhering rigorously to the approved design and specifications.",
    description: [
      "Ensuring London's Skyline Integrity: Our on-site supervision is the guardian of your project's fidelity to its blueprint. We navigate the complexities of London's urban construction landscape, ensuring that every rivet and beam reflects the approved design.",
      "Collaborative Approach with Local Insight: With our deep understanding of London's construction ecosystem, we seamlessly integrate with contractors and local authorities. Our proactive problem-solving ensures that projects not only progress smoothly but also contribute positively to the community fabric.",
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
    <section className="relative flex w-[80vw] max-w-6xl items-center justify-center overflow-x-clip md:w-[90vw]">
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
        className="absolute left-0 top-0 hidden h-full w-[8%] place-items-center bg-gradient-to-l from-transparent to-white md:grid lg:w-[15%]"
        onClick={prevPosition}
      >
        {position < 1 ? (
          <>
            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            <button className="rotate-90 rounded-full">
              <LottieIcon icon={SliderNavIcon} duration={1000} sizeInRem={3} />
            </button>
          </>
        ) : null}
      </div>
      <div
        className="absolute right-0 top-0 hidden h-full w-[8%] place-items-center bg-gradient-to-r from-transparent to-white md:grid lg:w-[15%]"
        onClick={nextPosition}
      >
        {position > -1 ? (
          <>
            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            <button className="-rotate-90 rounded-full">
              <LottieIcon icon={SliderNavIcon} duration={1000} sizeInRem={3} />
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
    </section>
  );
}
