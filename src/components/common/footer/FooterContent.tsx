import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import { CompanyDetails } from "@/types/groqGetters/companyDetails.type";

type FooterContentProps = {
  companyDetails: CompanyDetails;
};

export default function FooterContent({ companyDetails }: FooterContentProps) {
  return (
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
      <FooterLogo />
      <FooterContact companyDetails={companyDetails} />
      <FooterLinks />
    </div>
  );
}
