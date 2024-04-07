import NavMobile from "./NavMobile";
import SidebarContact from "./SidebarContact";
import { NavLinks } from "@/types/NavLinks.type";
import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

export default function MenuSidebar({
  navLinks,
  pathname,
  isHamburgerOpen,
  setIsHamburgerOpen,
  companyDetails,
}: {
  navLinks: NavLinks;
  pathname: string;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  companyDetails: CompanyDetails;
}) {
  const closeMenu = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-blue-dark/80 brightness-75 transition-opacity duration-300 ease-out ${
          isHamburgerOpen ? "" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu */}
      <div
        id="sidebar-menu"
        className={`fixed right-0 top-0 grid h-dvh w-screen max-w-lg place-items-center bg-background-blue pt-12 transition-transform duration-300 ease-out ${
          isHamburgerOpen ? "" : "translate-x-full"
        }`}
      >
        <NavMobile
          navLinks={navLinks}
          pathname={pathname}
          isHamburgerOpen={isHamburgerOpen}
          closeMenu={closeMenu}
        />
        <SidebarContact
          isHamburgerOpen={isHamburgerOpen}
          companyDetails={companyDetails}
        />
      </div>
    </>
  );
}
