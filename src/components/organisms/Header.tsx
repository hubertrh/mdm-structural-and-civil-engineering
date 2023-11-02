import Link from 'next/link';
import LargeLogo from '../molecules/LargeLogo';

export default function Header() {
  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-white px-16 py-8">
      <Link href="/">
        <LargeLogo />
      </Link>
      <div className="flex gap-6 font-medium uppercase">
        <p>services</p>
        <p>about us</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </div>
  );
}
