import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AxoIndoTechSolution - Solusi Digital Terdepan",
  description:
    "AxoIndoTechSolution adalah perusahaan teknologi yang bergerak di bidang pengembangan website, aplikasi mobile, dan sistem digital terintegrasi. Wujudkan ide digitalmu bersama kami.",
  keywords: [
    "web development",
    "aplikasi mobile",
    "sistem digital",
    "software house",
    "tech solution",
    "Indonesia",
  ],
  authors: [{ name: "AxoIndoTechSolution" }],
  openGraph: {
    title: "AxoIndoTechSolution - Solusi Digital Terdepan",
    description: "Wujudkan ide digitalmu bersama AxoIndoTechSolution",
    type: "website",
  },
  icons: {
    icon: "/logo/logo-axo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
