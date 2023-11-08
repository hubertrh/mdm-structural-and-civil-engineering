import NavMobile from "../atoms/NavMobile";
import SidebarContact from "../atoms/SidebarContact";
import { NavLinks } from "@/types/NavLinks";

export default function MenuSidebar({
  navLinks,
  pathname,
  isHamburgerOpen,
}: {
  navLinks: NavLinks;
  pathname: string;
  isHamburgerOpen: boolean;
}) {
  return (
    <div
      className={`fixed right-0 top-0 grid h-dvh w-screen max-w-lg place-items-center bg-background-blue pt-12 transition-transform duration-300 ease-out ${
        isHamburgerOpen ? "" : "translate-x-full"
      }`}
    >
      <NavMobile
        navLinks={navLinks}
        pathname={pathname}
        isHamburgerOpen={isHamburgerOpen}
      />
      <SidebarContact />
    </div>
  );
}
