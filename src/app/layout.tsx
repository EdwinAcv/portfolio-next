import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NabBar } from "@/components/NabBar";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codevedo",
  description: "Portfolio de Edwin Acevedo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
            rel="icon"
            href="/logo.svg"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NabBar/>
        </Suspense>
        
          <div className="grid items-center justify-items-center mx-auto ">
              {children}
          </div>
      </body>
    </html>
  );
}
