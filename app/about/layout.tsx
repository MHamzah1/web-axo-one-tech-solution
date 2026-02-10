import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - AxoIndoSolution | Jasa Digital Profesional Indonesia",
  description:
    "Kenali AxoIndoSolution (AxoIndo), perusahaan teknologi terpercaya di Indonesia. Tim profesional dengan 5+ tahun pengalaman dalam pembuatan website & aplikasi. Melayani UMKM hingga perusahaan besar.",
  keywords: [
    "tentang AxoIndoSolution",
    "tentang AxoIndo",
    "AxoIndo Solution",
    "software house Indonesia",
    "perusahaan teknologi Indonesia",
    "jasa digital terpercaya",
    "tim developer Indonesia",
    "web developer profesional",
  ],
  openGraph: {
    title: "Tentang AxoIndoSolution - Jasa Pembuatan Website & Aplikasi",
    description:
      "Perusahaan teknologi profesional di Indonesia dengan tim ahli berpengalaman. Konsultasi GRATIS!",
    url: "https://axoindotechsolution.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
