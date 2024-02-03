export default function ProjectsGridSkeleton() {
  return (
    <div className="relative flex flex-col after:absolute after:bottom-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-transparent after:to-white">
      {/* 2 placeholders */}
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          className={`grid-projects relative border-gray-400 p-6 ${
            index !== 1 ? "border-b" : ""
          }`}
          key={index}
        >
          <div className="animate-pulse-fast relative my-auto aspect-square w-full bg-gray-300" />
          <div className="flex flex-col justify-center gap-5 md:p-10">
            <div className="animate-pulse-fast h-8 w-3/4 bg-gray-300" />
            <div className="animate-pulse-fast h-5 w-1/2 bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
