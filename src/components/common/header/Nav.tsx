"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavDesktop from "../NavDesktop";
import MenuSidebar from "./MenuSidebar";
import HamburgerBtn from "./HamburgerBtn";
import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

type NavProps = {
  companyDetails: CompanyDetails;
};

export default function Nav({ companyDetails }: NavProps) {
  const pathname = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const navLinks = [
    { href: "/services", name: "services" },
    { href: "/about", name: "about" },
    { href: "/projects", name: "projects" },
    { href: "/contact", name: "contact" },
  ];

  const onHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div>
      <NavDesktop navLinks={navLinks} pathname={pathname} />
      <HamburgerBtn
        isHamburgerOpen={isHamburgerOpen}
        onHamburgerClick={onHamburgerClick}
      />
      <MenuSidebar
        navLinks={navLinks}
        pathname={pathname}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        companyDetails={companyDetails}
      />
    </div>
  );
}
