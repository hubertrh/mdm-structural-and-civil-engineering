import { Metadata } from "next";
import SubHero from "@/components/common/SubHero";
import CookieIcon from "@/assets/icons/animated-cookies.min.json";
import CornerIcon from "@/components/policies/CornerIcon";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function page() {
  return (
    <>
      <SubHero variant="cookie policy" />
      <section className="relative mx-auto w-[85vw] max-w-4xl py-24 md:w-[90vw]">
        <CornerIcon icon={CookieIcon} duration={1950} />
        <h1 className="cookie-policy-h1 mb-4 text-lg text-black-200 sm:text-2xl">
          Cookie Policy
        </h1>
        <p>
          Effective Date: <br className="block xs:hidden" /> 05-Apr-2024
        </p>
        <br className="block xs:hidden" />
        <p>
          Last Updated: <br className="block xs:hidden" /> 05-Apr-2024
        </p>
        <h5 className="mt-8 text-lg">What are cookies?</h5>
        <div className="cookie-policy-p my-2.5 flex flex-col gap-1.5">
          <p>
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when a website is loaded
            on your browser.
          </p>
        </div>
        <h5 className="mt-6 text-lg">How do we use cookies?</h5>
        <div className="cookie-policy-p my-2.5 flex flex-col gap-1.5">
          <p>
            We do not use any cookies on our website. Our website does not
            collect or store any information using cookies.
          </p>
        </div>
      </section>
    </>
  );
}
