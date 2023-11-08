import Logo from "../atoms/Logo";

export default function LargeLogo() {
  return (
    <div className="group flex -skew-x-[10deg] scale-x-95 select-none items-baseline gap-1 font-agencyfb text-[1.5rem] text-black-200 transition-all duration-300 hover:gap-3 md:text-[2rem]">
      <Logo />
      <h1 className="lowercase leading-none">
        Structural and Civil Engineering
      </h1>
    </div>
  );
}
