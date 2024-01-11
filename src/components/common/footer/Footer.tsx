import FooterContent from "./FooterContent";
import { getCompanyDetails } from "@/sanity/groqGetters/getCompanyDetails";

export default async function Footer() {
  const companyDetails = await getCompanyDetails();

  return (
    <footer className="w-screen bg-blue px-6 py-9 text-sm sm:p-12 sm:text-base xl:px-24">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <FooterContent companyDetails={companyDetails} />
        <div className="my-6 h-[1px] w-full bg-black-300 sm:mt-12"></div>
        <p className="h-fit w-full text-right">
          &copy;&nbsp;2023 {companyDetails.name.replace(/ /g, "\u00A0")} Ltd.
          All&nbsp;rights&nbsp;Reserved.
        </p>
      </div>
    </footer>
  );
}
