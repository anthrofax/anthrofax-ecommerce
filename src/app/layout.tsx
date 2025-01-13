import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { WixClientConectProvider } from "@/contexts/wix-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthrofax E-Commerce Application",
  description: "Menyediakan Segala Kebutuhan Matamu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientConectProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientConectProvider>
      </body>
    </html>
  );
}
