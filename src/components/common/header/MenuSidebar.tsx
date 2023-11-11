import NavMobile from "./NavMobile";
import SidebarContact from "./SidebarContact";
import { NavLinks } from "@/types/NavLinks";

export default function MenuSidebar({
  navLinks,
  pathname,
  isHamburgerOpen,
  setIsHamburgerOpen,
}: {
  navLinks: NavLinks;
  pathname: string;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closeMenu = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-blue-dark bg-opacity-80 brightness-75 transition-opacity duration-300 ease-out ${
          isHamburgerOpen ? "" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu */}
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
    </>
  );
}
