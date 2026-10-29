import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-display",
  weight: ["500", "600", "700", "800"],
});

const wixText = Wix_Madefor_Text({
  subsets: ["latin"],
  variable: "--font-wix-text",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Astil Shednov | Motion Graphics Designer",
  description:
    "Motion graphics designer who translates bold ideas into vibrant visual stories, memorable identities, and digital campaigns.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${wixDisplay.variable} ${wixText.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
