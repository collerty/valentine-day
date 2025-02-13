import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import clsx from 'clsx';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Be my valentine",
  description: "Will you be my valentine?",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <body className={clsx(inter.className, "h-full w-full")}>
    <main className="flex justify-center items-center h-screen w-full bg-pink-700 shadow-vignette md:px-16">
      {children}
    </main>
    </body>
    </html>
  );
}
