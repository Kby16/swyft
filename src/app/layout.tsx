import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AzureChatbot from "@/components/AzureChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swyft - Customer Engagement & Digital Transformation Solutions",
  description: "Swyft helps businesses transform their customer engagement through innovative digital solutions, strategic consulting, and enterprise integration services.",
  keywords: [
    "customer engagement",
    "digital transformation",
    "enterprise integration",
    "strategic consulting",
    "Braze implementation",
    "Salesforce integration",
    "customer experience",
    "digital marketing",
    "business transformation",
    "technology consulting"
  ],
  authors: [{ name: "Swyft" }],
  creator: "Swyft",
  publisher: "Swyft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swyft.com",
    title: "Swyft - Customer Engagement & Digital Transformation Solutions",
    description: "Transform your customer engagement with Swyft's innovative digital solutions and strategic consulting services.",
    siteName: "Swyft",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swyft - Customer Engagement & Digital Transformation Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Swyft - Customer Engagement & Digital Transformation Solutions",
    description: "Transform your customer engagement with Swyft's innovative digital solutions and strategic consulting services.",
    images: ["/images/twitter-image.jpg"],
    creator: "@swyft",
    site: "@swyft"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  alternates: {
    canonical: "https://swyft.com"
  }
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
