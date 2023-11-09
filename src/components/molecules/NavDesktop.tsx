import Link from "next/link";
import { NavLinks } from "@/types/NavLinks";

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
      className={`nav hidden font-medium uppercase leading-none text-black-300 lg:flex lg:text-base ${
        variant === "header"
          ? "text-xs"
          : "text-normal -translate-y-2 translate-x-3"
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
