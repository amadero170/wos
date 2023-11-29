import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({ subsets: ["latin"] });

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
      <body className={raleway.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
