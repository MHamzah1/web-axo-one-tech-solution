import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - Konsultasi GRATIS | AxoIndoSolution",
  description:
    "Hubungi AxoIndoSolution untuk konsultasi GRATIS pembuatan website & aplikasi. WhatsApp: +62 895 3188 7799. Email: axoindotechsolution@gmail.com. Respon cepat & profesional!",
  keywords: [
    "kontak AxoIndoSolution",
    "hubungi AxoIndo",
    "konsultasi pembuatan website gratis",
    "konsultasi jasa digital",
    "WhatsApp AxoIndo",
    "email AxoIndoSolution",
    "jasa website Bekasi",
    "jasa website Jakarta",
    "jasa website Indonesia",
  ],
  openGraph: {
    title: "Hubungi AxoIndoSolution - Konsultasi GRATIS",
    description:
      "Konsultasikan proyek digital Anda dengan tim ahli kami. Respon dalam 24 jam!",
    url: "https://axoindotechsolution.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
