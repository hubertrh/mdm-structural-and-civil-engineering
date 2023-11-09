"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import NavDesktop from "./NavDesktop";

export default function FooterLinks() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/services", name: "services" },
    { href: "/about", name: "about" },
    { href: "/projects", name: "projects" },
    { href: "/contact", name: "contact" },
  ];

  return (
    <div className="flex flex-col items-end justify-between self-stretch">
      <NavDesktop navLinks={navLinks} pathname={pathname} variant="footer" />
      <div className="flex flex-col text-right leading-loose">
        <Link
          href={"/cookie-policy"}
          className="decoration-transparent transition-all duration-300 hover:text-green-dark hover:underline hover:decoration-green-dark hover:underline-offset-8"
        >
          Cookie Policy
        </Link>
        <Link
          href={"/privacy-policy"}
          className="decoration-transparent transition-all duration-300 hover:text-green-dark hover:underline hover:decoration-green-dark hover:underline-offset-8"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
