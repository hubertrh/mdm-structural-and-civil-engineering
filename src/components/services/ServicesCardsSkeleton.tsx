import ServicesCardSkeleton from "./ServicesCardSkeleton";

export default function ServicesCardsSkeleton() {
  return (
    <section className="grid place-items-center gap-12 md:gap-6">
      <h2 className="max-w-[80vw] text-center text-2xl font-medium sm:text-[1.6rem] md:font-normal">
        <span>Our&nbsp;Role&nbsp;in&nbsp;Building</span>{" "}
        <span>Resilient&nbsp;Structures</span>
      </h2>
      <div className="relative flex w-[85vw] max-w-6xl items-center justify-center overflow-x-clip md:w-[90vw]">
        <div className="flex w-full flex-col gap-28 transition-all duration-500 ease-out md:w-max md:flex-row md:gap-0">
          <ServicesCardSkeleton />
        </div>
        <div className="absolute -bottom-4 left-1/2 z-10 hidden -translate-x-1/2 gap-4 md:flex">
          <div
            className={
              "grid h-3 w-5 cursor-pointer place-items-center outline outline-green transition-all duration-500 ease-out"
            }
          >
            <span className="h-1/4 w-2 bg-green-dark" />
          </div>
          <div
            className={
              "grid h-3 w-5 cursor-pointer place-items-center outline outline-transparent transition-all duration-500 ease-out"
            }
          >
            <span className="h-1/4 w-2 bg-green-dark" />
          </div>
          <div
            className={
              "grid h-3 w-5 cursor-pointer place-items-center outline outline-transparent transition-all duration-500 ease-out"
            }
          >
            <span className="h-1/4 w-2 bg-green-dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
