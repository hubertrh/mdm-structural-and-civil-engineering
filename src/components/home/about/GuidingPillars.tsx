import GuidingPillar from "./GuidingPillar";
import safetyIcon from "@/assets/icons/animated-safety.min.json";
import integrityIcon from "@/assets/icons/animated-integrity.min.json";
import innovativeDesignIcon from "@/assets/icons/animated-innovative-design.min.json";

const sectionContent = {
  safety: {
    title: "Safety",
    description:
      "Our unwavering commitment to safety is non-negotiable. Because a structure is only as strong as the trust people place in it.",
    icon: safetyIcon,
    duration: 900,
  },
  integrity: {
    title: "Integrity",
    description:
      "We build more than structures; we build relationships. Long-lasting partnerships are our true north.",
    icon: integrityIcon,
    duration: 850,
  },
  innovativeDesign: {
    title: "Innovative Design",
    description:
      "Innovation is in our DNA. We see each project as a canvas for sustainable and aesthetic creativity.",
    icon: innovativeDesignIcon,
    duration: 850,
  },
};

export default function GuidingPillars() {
  return (
    <div className="flex flex-col gap-9">
      <h3 className="text-center text-xl font-medium sm:text-2xl sm:font-normal">
        Our Guiding Pillars
      </h3>
      <div className="flex w-min flex-col items-center justify-between p-4 xl:flex-row">
        {Object.entries(sectionContent).map(
          ([key, { title, description, icon, duration }], index) => (
            <GuidingPillar
              key={key}
              title={title}
              description={description}
              icon={icon}
              duration={duration}
              index={index}
            />
          ),
        )}
      </div>
    </div>
  );
}
