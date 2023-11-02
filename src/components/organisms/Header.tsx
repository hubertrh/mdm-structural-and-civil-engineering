import Link from "next/link";
import LargeLogo from "../molecules/LargeLogo";
import Nav from "../molecules/Nav";

export default function Header() {
  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-white px-16 py-8">
      <Link href="/">
        <LargeLogo />
      </Link>
      <Nav />
    </div>
  );
}
