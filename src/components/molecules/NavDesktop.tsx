import Link from "next/link";
import { NavLinks } from "@/types/NavLinks";

export default function NavDesktop({
  navLinks,
  pathname,
}: {
  navLinks: NavLinks;
  pathname: string;
}) {
  return (
    <nav className="nav hidden text-xs font-medium uppercase leading-none text-black-300 lg:flex lg:text-base">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${isActive ? "active text-green-dark" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
