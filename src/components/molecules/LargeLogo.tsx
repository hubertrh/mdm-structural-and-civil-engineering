import Logo from "../atoms/Logo";

export default function LargeLogo() {
  return (
    <div className="group flex -skew-x-[10deg] scale-x-95 select-none items-baseline gap-1 font-agencyfb text-[2rem] text-black-200 transition-all duration-300 hover:gap-3">
      <Logo />
      <h1 className="lowercase leading-none">
        Structural and Civil Engineering
      </h1>
    </div>
  );
}
