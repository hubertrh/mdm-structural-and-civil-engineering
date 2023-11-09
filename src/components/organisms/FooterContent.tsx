import FooterContact from "../molecules/FooterContact";
import FooterLinks from "../molecules/FooterLinks";
import FooterLogo from "../molecules/FooterLogo";

export default function FooterContent() {
  return (
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
      <FooterLogo />
      <FooterContact />
      <FooterLinks />
    </div>
  );
}
