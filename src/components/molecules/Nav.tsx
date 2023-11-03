"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", name: "services" },
    { href: "/about", name: "about" },
    { href: "/projects", name: "projects" },
    { href: "/contact", name: "contact" },
  ];

  return (
    <div>
      <nav className="nav flex font-medium uppercase leading-none text-black-300">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${isActive ? "text-green-dark" : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
