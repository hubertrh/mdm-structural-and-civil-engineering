import Logo from "../atoms/Logo";

export default function FooterLogo() {
  return (
    <div className="flex flex-col font-agencyfb leading-snug text-black-200 transition-all duration-300">
      <div className="group mb-3 -skew-x-[10deg] scale-x-95 select-none text-[1.5rem] md:text-[2rem]">
        <Logo />
      </div>
      <p className="font-bold tracking-wide">Shaping London&apos;s Skyline</p>
      <p className="font-bold tracking-wide">with Safety and Innovation</p>
    </div>
  );
}
