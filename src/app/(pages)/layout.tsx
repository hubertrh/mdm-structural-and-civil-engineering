import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const agencyFB = localFont({
  src: [
    {
      path: "../../assets/fonts/agency-regular.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/agency-bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-agencyfb",
});

export const metadata: Metadata = {
  title: "MDM Structural and Civil Engineering",
  description:
    "MDM Engineering: London-based experts in structural design, committed to safety, innovation, and sustainable building solutions. Transforming the city's skyline since 2017.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-sm sm:text-base">
      <head>
        <Script
          src={`https://cdn-cookieyes.com/client_data/1ae7b2fef22d4cdd90ff9cc8/script.js`}
        />
      </head>
      <body
        className={`${montserrat.className} ${agencyFB.variable} mx-auto bg-background-white text-black-300`}
      >
        <NextTopLoader
          color="#70916C"
          height={5}
          initialPosition={0.2}
          easing="ease"
          showSpinner={false}
          speed={500}
        />
        <div className="min-h-dvh w-full">
          <Header />
          <main className="mx-auto min-h-dvh w-full max-w-screen-2xl bg-white">
            {children}
          </main>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
