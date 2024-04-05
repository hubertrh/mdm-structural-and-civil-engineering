import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MDM Sanity Studio",
  description: "MDM Sanity Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
