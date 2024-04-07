"use client";

type HamburgerProps = {
  isHamburgerOpen: boolean;
  onHamburgerClick: () => void;
};

export default function HamburgerBtn({
  isHamburgerOpen,
  onHamburgerClick,
}: HamburgerProps) {
  const beforeClasses = `before:absolute before:left-1/2 before:top-0 before:h-[1.5px] before:w-full before:-translate-x-1/2 before:bg-black-200 before:transition-all before:duration-300 before:ease-out before:content-[''] ${
    isHamburgerOpen
      ? "before:translate-y-2 before:rotate-45"
      : "before:translate-y-1"
  }`;
  const afterClasses = `after:absolute after:left-1/2 after:top-0 after:h-[1.5px] after:w-full after:-translate-x-1/2 after:bg-black-200 after:transition-all after:duration-300 after:ease-out after:content-[''] ${
    isHamburgerOpen
      ? "after:translate-y-2 after:-rotate-45"
      : "after:translate-y-4"
  }`;

  return (
    <button
      id="hamburger-btn"
      className={`z-50 mx-3 p-2 lg:hidden`}
      onClick={onHamburgerClick}
      aria-expanded={isHamburgerOpen}
      aria-controls="sidebar-menu" // Ensure this ID matches the ID of the sidebar menu
      aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
    >
      <div
        className={`relative z-50 size-6 ${beforeClasses} ${afterClasses}`}
        aria-hidden="true"
      />
    </button>
  );
}
