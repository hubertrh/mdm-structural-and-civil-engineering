import GuidingPillar from "./GuidingPillar";

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
      <div className="flex items-start self-stretch">
        <GuidingPillar
          title={sectionContent.safety.title}
          description={sectionContent.safety.description}
        />
        <GuidingPillar
          title={sectionContent.integrity.title}
          description={sectionContent.integrity.description}
        />
        <GuidingPillar
          title={sectionContent.innovativeDesign.title}
          description={sectionContent.innovativeDesign.description}
        />
      </div>
    </div>
  );
}
