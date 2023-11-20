import GuidingPillar from "./GuidingPillar";
import safetyIcon from "@/assets/icons/animated-safety.min.json";
import integrityIcon from "@/assets/icons/animated-integrity.min.json";
import innovativeDesignIcon from "@/assets/icons/animated-innovative-design.min.json";

const sectionContent = {
  safety: {
    title: "Safety",
    description:
      "Our unwavering commitment to safety is non-negotiable. Because a structure is only as strong as the trust people place in it.",
  },
  integrity: {
    title: "Integrity",
    description:
      "We build more than structures; we build relationships. Long-lasting partnerships are our true north.",
  },
  innovativeDesign: {
    title: "Innovative Design",
    description:
      "Innovation is in our DNA. We see each project as a canvas for sustainable and aesthetic creativity.",
  },
};

export default function GuidingPillars() {
  return (
    <div className="flex flex-col gap-9">
      <h3 className="text-center text-lg sm:text-2xl">Our Guiding Pillars</h3>
      <div className="flex w-min flex-col items-center justify-between p-4 xl:flex-row">
        <GuidingPillar
          title={sectionContent.safety.title}
          description={sectionContent.safety.description}
          icon={safetyIcon}
          duration={900}
        />
        <GuidingPillar
          title={sectionContent.integrity.title}
          description={sectionContent.integrity.description}
          icon={integrityIcon}
          duration={850}
        />
        <GuidingPillar
          title={sectionContent.innovativeDesign.title}
          description={sectionContent.innovativeDesign.description}
          icon={innovativeDesignIcon}
          duration={850}
        />
      </div>
    </div>
  );
}
