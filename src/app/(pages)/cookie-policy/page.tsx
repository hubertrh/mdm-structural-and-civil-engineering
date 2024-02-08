import SubHero from "@/components/common/SubHero";
import LottieIcon from "@/components/common/LottieIcon";
import CookieIcon from "@/assets/icons/animated-cookies.min.json";

export default function page() {
  return (
    <>
      <SubHero variant="cookie policy" />
      <section className="relative mx-auto w-[85vw] max-w-4xl py-12 text-justify md:w-[90vw]">
        <div className="absolute right-0 top-8 ">
          <LottieIcon icon={CookieIcon} duration={1950} sizeInRem={8} />
        </div>
        <h1 className="cookie-policy-h1 mb-4 text-lg text-black-200 sm:text-2xl">
          Cookie Policy
        </h1>
        <p>
          Effective Date: <br className="block xs:hidden" />
          05-Feb-2024
        </p>
        <br className="block xs:hidden" />
        <p>
          Last Updated: <br className="block xs:hidden" />
          05-Feb-2024
        </p>
        <h5 className="mt-8 text-lg">What are cookies?</h5>
        <div className="cookie-policy-p my-2.5 flex flex-col gap-1.5">
          <p>
            This Cookie Policy explains what cookies are and how we use them,
            the types of cookies we use i.e, the information we collect using
            cookies and how that information is used, and how to manage the
            cookie settings.
          </p>
          <p>
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when the website is
            loaded on your browser. These cookies help us make the website
            function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </p>
        </div>
        <h5 className="mt-4 text-lg">How do we use cookies?</h5>
        <div className="cookie-policy-p my-2.5 flex flex-col gap-1.5">
          <p>
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data.
          </p>
          <p>
            The third-party cookies used on our website are mainly for
            understanding how the website performs, how you interact with our
            website, keeping our services secure, providing advertisements that
            are relevant to you, and all in all providing you with a better and
            improved user experience and help speed up your future interactions
            with our website.
          </p>
        </div>
        <h5 className="mt-8 text-lg">Types of Cookies we use</h5>
        <div className="cky-audit-table-element"></div>
        <button className="cky-banner-element my-8 flex w-max items-center justify-center gap-5 rounded-md bg-green px-6 py-3 text-xl capitalize text-white transition-all duration-200 hover:bg-green-dark hover:shadow sm:px-8 sm:text-lg">
          Manage your consent
        </button>
        <div className="mt-8 flex flex-col gap-4">
          <p>
            You can change your cookie preferences any time by clicking the
            above button. This will let you revisit the cookie consent banner
            and change your preferences or withdraw your consent right away.
          </p>
          <p>
            In addition to this, different browsers provide different methods to
            block and delete cookies used by websites. You can change the
            settings of your browser to block/delete the cookies. Listed below
            are the links to the support documents on how to manage and delete
            cookies from the major web browsers.
          </p>
          <div className="flex gap-4">
            <a
              href="https://support.google.com/accounts/answer/32050"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
            >
              Chrome
            </a>
            <a
              href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
            >
              Safari
            </a>
            <a
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
            >
              Firefox
            </a>
            <a
              href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
            >
              Internet Explorer
            </a>
          </div>
          <p>
            If you are using any other web browser, please visit your
            browser&apos;s official support documents.
          </p>
        </div>
      </section>
    </>
  );
}
