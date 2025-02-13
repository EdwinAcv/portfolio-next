import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NabBar } from "@/components/NabBar";

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
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/simple-icons@latest/dist/simple-icons.min.css"
          />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030403]`}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <NabBar/>
        {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
        {/* <div className="special-background "> */}
          <div className="grid items-center justify-items-center mx-auto ">
            {children}
          </div>
        {/* </div> */}
      </body>
    </html>
  );
}
