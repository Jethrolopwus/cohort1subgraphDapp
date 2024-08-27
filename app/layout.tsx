import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Cohort2Dapps</title>
      </head>
      <body className={`${inter.className}relative w-full bg-gradient-to-br from-primary-50 from-116% via-primary-200 via-60% to-primary-100 t0-90%`}>
        {children}
      </body>
    </html>
  );
}
  