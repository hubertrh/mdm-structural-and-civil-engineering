import Logo from '../atoms/Logo';

export default function LargeLogo() {
  return (
    <div className="text-black pointer-events-none flex -skew-x-[10deg] scale-x-95 select-none flex-row items-baseline gap-1 font-agencyfb text-[2rem]">
      <Logo />
      <h1 className="lowercase">Structural and Civil Engineering</h1>
    </div>
  );
}
