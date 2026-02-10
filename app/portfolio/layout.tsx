import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Hasil Karya | AxoIndoSolution",
  description:
    "Lihat portfolio proyek AxoIndoSolution: Website company profile, e-commerce, aplikasi mobile, dan sistem custom. 150+ proyek sukses untuk klien di seluruh Indonesia.",
  keywords: [
    "portfolio AxoIndoSolution",
    "portfolio AxoIndo",
    "contoh website company profile",
    "contoh aplikasi mobile",
    "hasil kerja web developer",
    "proyek website Indonesia",
    "showcase jasa digital",
  ],
  openGraph: {
    title: "Portfolio Proyek AxoIndoSolution",
    description:
      "150+ proyek sukses. Website, aplikasi mobile, dan sistem custom untuk berbagai industri.",
    url: "https://axoindotechsolution.com/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
