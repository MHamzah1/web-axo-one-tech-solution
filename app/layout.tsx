import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  metadataBase: new URL("https://axoindotechsolution.com"),
  title: {
    default:
      "AxoIndoSolution | Jasa Pembuatan Website & Aplikasi Profesional Indonesia",
    template: "%s | AxoIndoSolution - Jasa Digital Terpercaya",
  },
  description:
    "AxoIndoSolution (AxoIndo Solution, Axo Indo Solution) adalah perusahaan teknologi terpercaya di Indonesia. Jasa pembuatan website, aplikasi mobile, cloud solutions, dan sistem digital terintegrasi. Konsultasi GRATIS! Harga terjangkau, kualitas premium.",
  keywords: [
    // Brand keywords - all variations
    "AxoIndo",
    "Axo Indo",
    "axoindo",
    "AxoIndoSolution",
    "Axo Indo Solution",
    "axoindosolution",
    "AxoIndoTechSolution",
    "Axo Indo Tech Solution",
    "axoindotechsolution",
    // Service keywords Indonesia
    "jasa pembuatan website",
    "jasa pembuatan website murah",
    "jasa pembuatan website profesional",
    "jasa bikin website",
    "jasa buat website",
    "jasa pembuatan aplikasi",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi ios",
    "jasa pembuatan aplikasi mobile",
    "jasa bikin aplikasi",
    "web development Indonesia",
    "web developer Indonesia",
    "aplikasi mobile Indonesia",
    "software house Indonesia",
    "software house Jakarta",
    "software house Bekasi",
    "jasa website profesional",
    "jasa aplikasi android ios",
    "cloud solutions Indonesia",
    "UI/UX design Indonesia",
    "custom software development",
    "digital transformation Indonesia",
    "tech solution Indonesia",
    "web developer Jakarta",
    "web developer Bekasi",
    "company profile website",
    "e-commerce development",
    "toko online",
    "website UMKM",
    "website perusahaan",
    "landing page",
    "website murah berkualitas",
  ],
  authors: [
    { name: "AxoIndoSolution", url: "https://axoindotechsolution.com" },
  ],
  creator: "AxoIndoSolution",
  publisher: "AxoIndoSolution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://axoindotechsolution.com",
    siteName: "AxoIndoSolution",
    title:
      "AxoIndoSolution | Jasa Pembuatan Website & Aplikasi Profesional Indonesia",
    description:
      "AxoIndoSolution - Jasa pembuatan website dan aplikasi profesional di Indonesia. Harga terjangkau, kualitas premium. Konsultasi GRATIS! Web Development, Mobile App, Cloud Solutions.",
    images: [
      {
        url: "/logo/logo-axo.png",
        width: 1200,
        height: 630,
        alt: "AxoIndoSolution - Jasa Pembuatan Website dan Aplikasi Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoIndoSolution | Jasa Pembuatan Website & Aplikasi Indonesia",
    description:
      "Jasa digital terpercaya untuk UMKM & perusahaan Indonesia. Website & Aplikasi berkualitas dengan harga terjangkau!",
    images: ["/logo/logo-axo.png"],
  },
  icons: {
    icon: "/logo/logo-axo.png",
    apple: "/logo/logo-axo.png",
  },
  alternates: {
    canonical: "https://axoindotechsolution.com",
  },
  verification: {
    google: "MLKfI-x_w2KzGdLFaE7O2h1JSgTqJgl1ZvK3VRIT7IM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data untuk SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AxoIndoSolution",
    alternateName: [
      "AxoIndo",
      "Axo Indo Solution",
      "AxoIndoTechSolution",
      "Axo Indo Tech Solution",
    ],
    url: "https://axoindotechsolution.com",
    logo: "https://axoindotechsolution.com/logo/logo-axo.png",
    description:
      "AxoIndoSolution adalah perusahaan teknologi terpercaya di Indonesia. Jasa pembuatan website profesional, aplikasi mobile, cloud solutions, dan sistem digital terintegrasi. Melayani UMKM hingga perusahaan besar di seluruh Indonesia.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-895-3188-7799",
      contactType: "Customer Service",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://www.facebook.com/axoindotechsolution",
      "https://www.instagram.com/axoindotechsolution",
      "https://www.linkedin.com/company/axoindotechsolution",
    ],
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Jasa Pembuatan Website",
          description:
            "Jasa pembuatan website profesional, modern, dan SEO-friendly untuk UMKM dan perusahaan Indonesia",
        },
        {
          "@type": "Service",
          name: "Jasa Pembuatan Aplikasi Mobile",
          description:
            "Jasa pembuatan aplikasi mobile iOS dan Android berkualitas tinggi dengan harga terjangkau",
        },
        {
          "@type": "Service",
          name: "Cloud Solutions",
          description:
            "Layanan cloud infrastructure dan deployment untuk bisnis Indonesia",
        },
        {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "Jasa desain UI/UX profesional untuk website dan aplikasi mobile",
        },
      ],
    },
  };

  return (
    <html lang="id" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white`}
      >
        <GoogleAnalytics gaId="G-EP5F7NS2S5" />
        {children}
      </body>
    </html>
  );
}
