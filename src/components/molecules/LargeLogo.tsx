import Logo from '../atoms/Logo';

export default function LargeLogo() {
  return (
    <div className="text-black flex -skew-x-[10deg] scale-x-95 flex-row items-baseline gap-1 font-agencyfb text-[2rem]">
      <Logo />
      <div className="lowercase">Structural and Civil Engineering</div>
    </div>
  );
}
