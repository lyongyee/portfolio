import type { Metadata } from "next";
import { Geist, Geist_Mono,Lexend } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SmoothScroll from "./components/smoothscroll";
import Navbar from "./components/navbar";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YY Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased bg-background text-navText`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
