import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const agencyFB = localFont({
  src: [
    {
      path: "../assets/fonts/agency-regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/agency-bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-agencyfb",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MDM",
    default: "MDM Structural and Civil Engineering",
  },
  description:
    "MDM Engineering: London experts in structural design, committed to safety, innovation, and sustainable building. Transforming the city's skyline since 2017.",
  metadataBase: new URL(
    "https://mdm-structural-and-civil-engineering.vercel.app/",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
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
        {children}
      </body>
    </html>
  );
}
