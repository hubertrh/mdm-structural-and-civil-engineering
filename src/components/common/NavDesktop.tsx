import Link from "next/link";
import { NavLinks } from "@/types/NavLinks.type";

export default function NavDesktop({
  navLinks,
  pathname,
  variant = "header",
}: {
  navLinks: NavLinks;
  pathname: string;
  variant?: "header" | "footer";
}) {
  return (
    <nav
      className={`nav hidden font-medium uppercase leading-none text-black-300 lg:flex ${
        variant === "header"
          ? "text-base"
          : "-translate-y-2 translate-x-3 text-sm"
      }`}
    >
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
