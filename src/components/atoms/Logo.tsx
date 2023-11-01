export default function Logo() {
  return (
    <div className="relative">
      <p className="text-[4rem] font-bold leading-[1.15]">MDN</p>
      <div className="absolute left-0 top-0 -z-10 h-full w-7 translate-x-[110%] skew-x-[10deg] bg-green"></div>
    </div>
  );
}
