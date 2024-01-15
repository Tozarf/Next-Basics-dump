import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const space_mono = Space_Mono({ weight: "400" });

export const metadata: Metadata = {
  title: "Fausto's Home page",
  description: "powered by the good ol' Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_mono.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
