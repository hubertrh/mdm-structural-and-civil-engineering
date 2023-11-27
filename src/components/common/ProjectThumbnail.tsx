import Image from "next/image";

type ProjectThumbnailProps = {
  imgURL: string;
  projectTitle: string;
};

export default function ProjectThumbnail({
  imgURL,
  projectTitle,
}: ProjectThumbnailProps) {
  return (
    <>
      <Image
        className="w-full object-cover"
        src={imgURL}
        alt={projectTitle}
        fill={true}
        sizes="100vw"
      />
      <div className="group absolute top-[102%] grid h-20 w-full place-items-center bg-blue-dark bg-opacity-0 transition-all duration-300 hover:bg-opacity-40 sm:inset-0 sm:h-auto">
        <div className="home-projects-text grid h-20 w-full place-items-center bg-blue-dark bg-opacity-100 px-4 text-center text-white opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1 sm:opacity-0">
          {projectTitle}
        </div>
      </div>
    </>
  );
}
