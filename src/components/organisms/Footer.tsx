import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <div className="flex w-screen flex-col bg-blue px-24 py-12">
      <FooterContent />
      <div className="mb-6 mt-12 h-[1px] w-full bg-black-300"></div>
      <p className="w-full text-right">
        &copy; 2023 MDM Structural and Civil Engineering Ltd. All rights
        Reserved.
      </p>
    </div>
  );
}
