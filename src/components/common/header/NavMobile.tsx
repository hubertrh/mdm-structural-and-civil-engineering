import Link from "next/link";
import { motion } from "framer-motion";
import { NavLinks } from "@/types/NavLinks.type";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

type NavMobileProps = {
  navLinks: NavLinks;
  pathname: string;
  isHamburgerOpen: boolean;
  closeMenu: () => void;
};

export default function NavMobile({
  navLinks,
  pathname,
  isHamburgerOpen,
  closeMenu,
}: NavMobileProps) {
  return (
    <div className="flex w-[70%] flex-col gap-6 text-2xl">
      <p className="text-sm uppercase text-gray-500">Navigation</p>
      <div className="mb-2 h-[1px] w-full bg-gray-400"></div>
      <motion.nav
        className="nav-mobile flex flex-col gap-1 capitalize"
        variants={containerVariants}
        animate={isHamburgerOpen ? "open" : "closed"}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <motion.div
              key={link.name}
              variants={itemVariants}
              custom={isActive}
              onClick={closeMenu}
              className={`${
                isActive
                  ? "before:absolute before:left-0 before:top-1/2 before:h-1/2 before:w-[2px] before:-translate-x-3 before:-translate-y-1/2 before:bg-green-light before:content-[''] hover:text-green-dark hover:before:translate-x-0"
                  : ""
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          );
        })}
      </motion.nav>
    </div>
  );
}
