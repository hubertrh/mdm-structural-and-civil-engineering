type SidebarContactProps = {
  isHamburgerOpen: boolean;
};

export default function SidebarContact({
  isHamburgerOpen,
}: SidebarContactProps) {
  return (
    <div className="flex w-[70%] flex-col gap-3">
      <p className="text-sm uppercase text-gray-500">Contact</p>
      <a
        className={`underline underline-offset-4 ${isHamburgerOpen ? "" : "hidden"}`}
        href="mailto:info@mdmengineers.com"
      >
        info@mdmengineers.com
      </a>
      <a
        className={`underline underline-offset-4 ${isHamburgerOpen ? "" : "hidden"}`}
        href="tel:+4407817085585"
      >
        +44 07817 085585
      </a>
    </div>
  );
}
