import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer className="w-screen bg-blue px-6 py-9 text-sm sm:px-12 sm:py-12 sm:text-base xl:px-24">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <FooterContent />
        <div className="mb-6 mt-6 h-[1px] w-full bg-black-300 sm:mt-12"></div>
        <p className="h-fit w-full text-right">
          &copy;&nbsp;2023&nbsp;MDM
          Structural&nbsp;and&nbsp;Civil&nbsp;Engineering&nbsp;Ltd.
          All&nbsp;rights&nbsp;Reserved.
        </p>
      </div>
    </footer>
  );
}
