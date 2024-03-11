import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Work_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({ subsets: ["latin"] });
const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOS",
  description: "Plataforma de estrategias digitales inmobiliarias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
