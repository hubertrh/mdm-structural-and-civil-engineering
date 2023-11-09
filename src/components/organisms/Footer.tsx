import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <div className="flex w-screen flex-col bg-blue px-6 py-9 text-base sm:px-12 sm:py-12 xl:px-24">
      <FooterContent />
      <div className="mb-6 mt-6 h-[1px] w-full bg-black-300 sm:mt-12"></div>
      <p className="h-fit w-full text-right">
        &copy;&nbsp;2023&nbsp;MDM
        Structural&nbsp;and&nbsp;Civil&nbsp;Engineering&nbsp;Ltd.
        All&nbsp;rights&nbsp;Reserved.
      </p>
    </div>
  );
}
