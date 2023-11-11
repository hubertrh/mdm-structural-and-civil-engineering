import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";

export default function FooterContent() {
  return (
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
      <FooterLogo />
      <FooterContact />
      <FooterLinks />
    </div>
  );
}
