import Link from "next/link";
import LargeLogo from "../molecules/LargeLogo";
import Nav from "../molecules/Nav";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-white px-16 py-8">
      <Link href="/">
        <LargeLogo />
      </Link>
      <Nav />
    </header>
  );
}
