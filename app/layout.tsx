import type { Metadata } from "next";
import { Geist_Mono, Delius_Swash_Caps, Nixie_One } from "next/font/google";
import "./globals.css";

const delius = Delius_Swash_Caps({
  variable: "--font-delius",
  weight: "400",
  subsets: ["latin"],
  display: "swap"}
);

const nixie = Nixie_One({
  variable: "--font-nixie",
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday!",
  description: "Birthday App ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${delius.variable} ${geistMono.variable} ${nixie.variable} antialiased bg-[url('/background_1.png')] bg-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
