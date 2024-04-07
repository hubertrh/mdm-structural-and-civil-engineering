import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import "../globals.css";
import { getCompanyDetails } from "@/sanity/groqGetters/getCompanyDetails";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const companyDetails = await getCompanyDetails();

  return (
    <>
      <NextTopLoader
        color="#70916C"
        height={5}
        initialPosition={0.2}
        easing="ease"
        showSpinner={false}
        speed={500}
      />
      <div className="min-h-dvh w-full">
        <Header companyDetails={companyDetails} />
        <main className="mx-auto min-h-dvh w-full max-w-screen-2xl bg-white">
          {children}
        </main>
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
