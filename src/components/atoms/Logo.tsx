export default function Logo() {
  return (
    <div className="relative">
      <p className="logo-text text-4xl font-bold leading-[1.15] lg:text-[4rem]">
        MDN
      </p>
      <div className="absolute left-[30%] top-0 -z-10 h-full w-[31%] skew-x-[10deg] bg-green transition-all duration-300 ease-out group-hover:left-[-5%] group-hover:w-[110%] group-hover:skew-x-0"></div>
    </div>
  );
}
