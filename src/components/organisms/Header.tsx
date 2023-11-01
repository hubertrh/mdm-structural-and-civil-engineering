import LargeLogo from '../molecules/LargeLogo';

export default function Header() {
  return (
    <div className="flex max-w-full items-center justify-between bg-white px-16 py-8">
      <LargeLogo />
      <div>NAV</div>
    </div>
  );
}
