export default function Logo() {
  return (
    <div className="relative w-min">
      <p className="logo-text text-4xl font-bold leading-[1.15] lg:text-[4rem]">
        MDM
      </p>
      <div className="absolute left-[30%] top-0 -z-10 h-full w-[29%] skew-x-[10deg] bg-green transition-all duration-300 ease-out group-hover:left-[-5%] group-hover:w-[110%] group-hover:skew-x-0" />
    </div>
  );
}
