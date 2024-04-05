import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh w-full">
      <main className="mx-auto grid min-h-dvh w-full max-w-screen-2xl place-items-center bg-blue">
        <div className="grid place-items-center gap-20">
          <div className="scale-150">
            <div className="group flex skew-x-[-10deg] scale-x-95 select-none items-baseline gap-1 font-agencyfb text-[1.3rem] text-black-200 transition-all duration-300 hover:gap-3 sm:text-[1.5rem] md:text-[2rem]">
              <div className="relative w-min">
                <p className="logo-text text-4xl font-bold leading-[1.15] lg:text-[4rem]">
                  404
                </p>
                <div className="absolute left-[30%] top-0 -z-10 h-full w-[29%] skew-x-[10deg] bg-green transition-all duration-300 ease-out group-hover:left-[-5%] group-hover:w-[110%] group-hover:skew-x-0" />
              </div>
              <h1 className="logo-text-small lowercase leading-none">
                Page not found
              </h1>
            </div>
          </div>
          <Link
            href="/"
            className="text-xl underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          >
            <p>Take me home</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
