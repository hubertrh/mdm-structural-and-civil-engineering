import Logo from "../Logo";

export default function FooterLogo() {
  return (
    <div className="group mr-4 hidden flex-col font-agencyfb leading-snug text-black-200 transition-all duration-300 lg:flex">
      <div className="mb-3 skew-x-[-10deg] scale-x-95 select-none text-[1.5rem] lg:text-[2rem]">
        <Logo />
      </div>
      <p className="mr-8 min-w-max font-bold tracking-wide">
        Shaping London&apos;s Skyline
      </p>
      <p className="font-bold tracking-wide">with Safety and Innovation</p>
    </div>
  );
}
