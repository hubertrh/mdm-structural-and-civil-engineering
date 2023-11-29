import Logo from "./Logo";

export default function FullLogo() {
  return (
    <div className="group flex -skew-x-[10deg] scale-x-95 select-none items-baseline gap-1 font-agencyfb text-[1.3rem] text-black-200 transition-all duration-300 hover:gap-3 sm:text-[1.5rem] md:text-[2rem]">
      <Logo />
      <h1 className="logo-text-small lowercase leading-none">
        Structural and Civil Engineering
      </h1>
    </div>
  );
}
