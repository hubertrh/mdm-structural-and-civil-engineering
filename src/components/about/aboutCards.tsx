import AboutCard from "./aboutCard";
import teamIcon from "@/assets/icons/animated-team.min.json";
import visionIcon from "@/assets/icons/animated-vision.min.json";
import trackRecordIcon from "@/assets/icons/animated-track-record.min.json";

const rowsContent = {
  team: {
    title: "Our Expert Team",
    description:
      "Central to our accomplishments is a talented team of seasoned structural engineers. Their technical skill blends seamlessly with an unending passion for innovation. Together, they ensure all our projects meet and often surpass stringent safety, performance, and sustainability benchmarks.",
    icon: teamIcon,
    duration: 1500,
  },
  vision: {
    title: "Our Vision: A Resilient London",
    description:
      "We aim to be a constructive part of London's architectural landscape. We envision a London where every building is a testament to resilience, integrity, and sustainable design. With each project, we aim to align our solutions with the ever-changing needs of our clients and the city.",
    icon: visionIcon,
    duration: 2050,
  },
  trackRecord: {
    title: "Our Track Record Speaks for Itself",
    description:
      "From our early days to the present, we've built a reputation on delivering innovative and practical solutions that stand the test of time. As we forge ahead, our guiding values are continual learning, embracing change, and nurturing collaboration.",
    icon: trackRecordIcon,
    duration: 1000,
  },
};

export default function aboutCards() {
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
