import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import SessionProvider from "./SessionProviders";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOS",
  description: "Plataforma de estrategias digitales inmobiliarias",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(JSON.stringify(session));
  return (
    <html lang="en" className="dark">
      <body className={raleway.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
