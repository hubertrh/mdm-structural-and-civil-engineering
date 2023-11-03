import Link from "next/link";
import Card from "./Card";

export default function Cards() {
  const cards = [
    {
      imgURL: "/images/card-1.png",
      title: "Structural\u00A0Design &\u00A0Analysis",
      description:
        "Crafting structures that stand tall, meeting all safety and performance benchmarks. Ideal for new builds, renovations, and extensions.",
    },
    {
      imgURL: "/images/card-2.png",
      title: "Structural\u00A0Assessments &\u00A0Inspections",
      description:
        "Go beyond surface-level observations. Our in-depth inspections identify potential structural concerns and provide actionable solutions.",
    },
    {
      imgURL: "/images/card-3.png",
      title: "Construction\u00A0Supervision &\u00A0Monitoring",
      description:
        "Bring your blueprints to life with meticulous on-site supervision, ensuring your project adheres to approved design and specifications.",
    },
  ];

  return (
    <div className="flex w-full items-center justify-between p-4">
      {cards.map((card, index) => (
        <Link key={index} href={"#"}>
          <Card
            imgURL={card.imgURL}
            title={card.title}
            description={card.description}
          />
        </Link>
      ))}
    </div>
  );
}
