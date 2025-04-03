import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AzureChatbot from "@/components/AzureChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swyft",
  description: "Your trusted partner for Braze implementation and optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="pt-0">
            {children}
          </main>
          <Footer />
          <AzureChatbot />
        </div>
      </body>
    </html>
  );
}
