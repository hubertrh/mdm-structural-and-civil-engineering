import Link from "next/link";
import { NavLinks } from "@/types/NavLinks";

export default function NavMobile({
  navLinks,
  pathname,
}: {
  navLinks: NavLinks;
  pathname: string;
}) {
  return (
    <div className="flex w-[70%] flex-col gap-6 text-2xl">
      <p className="text-sm uppercase text-gray-500">Navigation</p>
      <div className="mb-2 h-[1px] w-full bg-gray-400"></div>
      <nav className="nav-mobile flex flex-col gap-1 capitalize">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive
                  ? "translate-x-3 before:absolute before:left-0 before:top-1/2 before:h-1/2 before:w-[2px] before:-translate-x-3 before:-translate-y-1/2 before:bg-green-light before:content-['']"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
