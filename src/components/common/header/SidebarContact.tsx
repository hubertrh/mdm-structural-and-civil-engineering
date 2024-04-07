import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

type SidebarContactProps = {
  isHamburgerOpen: boolean;
  companyDetails: CompanyDetails;
};

export default function SidebarContact({
  isHamburgerOpen,
  companyDetails,
}: SidebarContactProps) {
  return (
    <div className="flex w-[70%] flex-col gap-3">
      <p className="text-sm uppercase text-gray-500">Contact</p>
      <a
        className={`underline underline-offset-4 ${isHamburgerOpen ? "" : "hidden"}`}
        href={`mailto:${companyDetails.email}`}
      >
        {companyDetails.email}
      </a>
      <a
        className={`underline underline-offset-4 ${isHamburgerOpen ? "" : "hidden"}`}
        href={`tel:${companyDetails.phone.replace(/\s/g, "")}`}
      >
        {companyDetails.phone}
      </a>
    </div>
  );
}
