import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan - Jasa Pembuatan Website & Aplikasi | AxoIndoSolution",
  description:
    "Layanan lengkap AxoIndoSolution: Jasa pembuatan website profesional, aplikasi mobile Android & iOS, UI/UX design, cloud solutions, dan custom software. Harga terjangkau, kualitas premium!",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "jasa buat website murah",
    "jasa pembuatan aplikasi",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi ios",
    "jasa pembuatan aplikasi mobile",
    "jasa UI UX design",
    "jasa cloud solutions",
    "jasa web development",
    "harga jasa website",
    "paket pembuatan website",
    "AxoIndoSolution services",
    "AxoIndo layanan",
  ],
  openGraph: {
    title: "Layanan Jasa Digital AxoIndoSolution",
    description:
      "Web Development, Mobile App, UI/UX Design, Cloud Solutions. Konsultasi GRATIS! Harga mulai dari 3 juta.",
    url: "https://axoindotechsolution.com/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
