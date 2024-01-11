import Link from "next/link";
import Card from "./Card";
import { getHomepageServicesCards } from "@/sanity/groqGetters/pages/home";

export default async function Cards() {
  const cards = await getHomepageServicesCards();

  return (
    <div className="flex w-min flex-col items-center justify-between gap-10 p-4 xl:flex-row">
      {cards.map((card, index) => (
        <Link key={index} href={"/services"}>
          <Card
            imgURL={card.image.url}
            blurDataURL={card.image.metadata.lqip}
            title={card.title}
            description={card.description}
          />
        </Link>
      ))}
    </div>
  );
}
