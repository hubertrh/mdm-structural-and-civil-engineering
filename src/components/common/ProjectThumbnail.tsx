import Image from "next/image";

type ProjectThumbnailProps = {
  imgURL: string;
  imgLQIP: string;
  projectTitle: string;
};

export default function ProjectThumbnail({
  imgURL,
  imgLQIP,
  projectTitle,
}: ProjectThumbnailProps) {
  return (
    <>
      <Image
        className="w-full object-cover"
        src={imgURL}
        alt={`${projectTitle} project thumbnail`}
        fill={true}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={imgLQIP}
      />
      <div className="group absolute top-[102%] grid h-20 w-full place-items-center bg-blue-dark/0 transition-all duration-300 hover:bg-blue-dark/40 md:inset-0 md:h-auto">
        <div className="home-projects-text grid h-20 w-full place-items-center bg-blue-dark/100 px-4 text-center text-white opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-1 md:opacity-0">
          {projectTitle}
        </div>
      </div>
    </>
  );
}
