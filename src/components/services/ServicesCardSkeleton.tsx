export default function ServicesCardSkeleton() {
  return (
    <div className="flex w-full max-w-3xl flex-col justify-between bg-background-blue/50 sm:w-[30rem] md:mx-4 md:w-[45rem] md:scale-[85%] lg:scale-90">
      <div className="grid-services-cards relative w-full border-y-[1.5px] border-blue bg-white/70">
        <div className="relative aspect-square h-full max-w-full">
          <div className="animate-pulse-fast aspect-square h-full w-full bg-gray-300" />
        </div>
        <div className="mb-5 flex h-auto flex-col justify-center gap-3 p-5 md:mb-2 md:p-6">
          <div className="animate-pulse-fast mb-4 h-7 w-[80%] bg-gray-300" />
          <div className="animate-pulse-fast h-3 w-[75%] bg-gray-300" />
          <div className="animate-pulse-fast h-3 w-[90%] bg-gray-300" />
          <div className="animate-pulse-fast h-3 w-[80%] bg-gray-300" />
          <div className="animate-pulse-fast h-3 w-[85%] bg-gray-300" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 border-b-[1.18px] border-blue p-4 py-7 text-justify leading-relaxed text-black-300 md:h-full md:px-10 md:py-9 md:text-center">
        <div className="animate-pulse-fast h-3 w-[70%] bg-gray-300" />
        <div className="animate-pulse-fast h-3 w-[85%] bg-gray-300" />
        <div className="animate-pulse-fast mb-4 h-3 w-[75%] bg-gray-300" />
        <div className="animate-pulse-fast h-3 w-[70%] bg-gray-300" />
        <div className="animate-pulse-fast h-3 w-[85%] bg-gray-300" />
        <div className="animate-pulse-fast h-3 w-[75%] bg-gray-300" />
      </div>
    </div>
  );
}
