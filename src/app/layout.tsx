import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Saugat Bhandari",
  description: "Saugat Bhandari's Portfolio Site",
};

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
