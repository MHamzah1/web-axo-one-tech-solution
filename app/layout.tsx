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
      "AxoIndoTechSolution - Jasa Pembuatan Website & Aplikasi Profesional",
    template: "%s | AxoIndoTechSolution",
  },
  description:
    "AxoIndoTechSolution adalah perusahaan teknologi terpercaya di Indonesia yang bergerak di bidang pengembangan website, aplikasi mobile, cloud solutions, dan sistem digital terintegrasi. Wujudkan transformasi digital bisnis Anda bersama kami.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "web development Indonesia",
    "aplikasi mobile",
    "software house Indonesia",
    "jasa website profesional",
    "jasa aplikasi android ios",
    "cloud solutions",
    "UI/UX design",
    "custom software development",
    "digital transformation",
    "tech solution Indonesia",
    "web developer Jakarta",
    "company profile website",
    "e-commerce development",
  ],
  authors: [
    { name: "AxoIndoTechSolution", url: "https://axoindotechsolution.com" },
  ],
  creator: "AxoIndoTechSolution",
  publisher: "AxoIndoTechSolution",
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
    siteName: "AxoIndoTechSolution",
    title:
      "AxoIndoTechSolution - Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Perusahaan teknologi terpercaya yang menghadirkan solusi digital end-to-end untuk transformasi bisnis Anda. Web Development, Mobile App, Cloud Solutions.",
    images: [
      {
        url: "/logo/logo-axo.png",
        width: 1200,
        height: 630,
        alt: "AxoIndoTechSolution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoIndoTechSolution - Jasa Pembuatan Website & Aplikasi",
    description: "Solusi digital terpercaya untuk transformasi bisnis Anda",
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
    name: "AxoIndoTechSolution",
    url: "https://axoindotechsolution.com",
    logo: "https://axoindotechsolution.com/logo/logo-axo.png",
    description:
      "Perusahaan teknologi terpercaya di Indonesia yang bergerak di bidang pengembangan website, aplikasi mobile, cloud solutions, dan sistem digital terintegrasi.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Indonesia",
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
          name: "Web Development",
          description: "Jasa pembuatan website profesional dan modern",
        },
        {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Jasa pembuatan aplikasi mobile iOS dan Android",
        },
        {
          "@type": "Service",
          name: "Cloud Solutions",
          description: "Layanan cloud infrastructure dan deployment",
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
