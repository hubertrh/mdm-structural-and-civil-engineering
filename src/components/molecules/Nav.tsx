"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import HamburgerBtn from "../atoms/HamburgerBtn";
import NavDesktop from "./NavDesktop";
import MenuSidebar from "./MenuSidebar";

export default function Nav() {
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
      />
    </div>
  );
}
