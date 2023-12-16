import AboutCard from "./aboutCard";
import teamIcon from "@/assets/icons/animated-team.min.json";
import visionIcon from "@/assets/icons/animated-vision.min.json";
import trackRecordIcon from "@/assets/icons/animated-track-record.min.json";
import { getAboutCards } from "@/sanity/utils/groqGetters";

export default async function aboutCards() {
  const cardsContent = await getAboutCards();

  const rowsContent = {
    team: {
      title: cardsContent.team.title,
      description: cardsContent.team.description,
      icon: teamIcon,
      duration: 1500,
    },
    vision: {
      title: cardsContent.vision.title,
      description: cardsContent.vision.description,
      icon: visionIcon,
      duration: 2050,
    },
    trackRecord: {
      title: cardsContent.trackRecord.title,
      description: cardsContent.trackRecord.description,
      icon: trackRecordIcon,
      duration: 1000,
    },
  };

  return (
    <div className="w-full gap-9 bg-background-blue py-12">
      <div className="mx-auto flex w-min flex-col items-center justify-between gap-0 sm:gap-8">
        {Object.entries(rowsContent).map(
          ([key, { title, description, icon, duration }], index) => (
            <AboutCard
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
