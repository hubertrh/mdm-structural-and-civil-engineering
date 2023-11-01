import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
