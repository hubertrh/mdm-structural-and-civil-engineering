import FooterContact from "../molecules/FooterContact";
import FooterLinks from "../molecules/FooterLinks";
import FooterLogo from "../molecules/FooterLogo";

export default function FooterContent() {
  return (
    <div className="flex items-center justify-between">
      <FooterLogo />
      <FooterContact />
      <FooterLinks />
    </div>
  );
}
