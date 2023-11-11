import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import SmoothScroll from "@/src/components/contexts/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const agencyFB = localFont({
  src: [
    {
      path: "./fonts/agency-regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/agency-bold.ttf",
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
      <body
        className={`${montserrat.className} ${agencyFB.variable} mx-auto bg-background-white text-black-300`}
      >
        <SmoothScroll>
          <div className="min-h-dvh w-full">
            <Header />
            <main className="mx-auto max-w-screen-2xl bg-white">
              {children}
            </main>
          </div>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
