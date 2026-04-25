import type { Metadata } from "next";
import { getPortfolioBySlug, portfolioItems } from "../data";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
      description: "Proyek yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: `${project.title} - ${project.category}`,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      project.client,
      ...project.technologies,
      "portfolio AxoIndoSolution",
      "case study",
      "project showcase",
    ],
    openGraph: {
      title: `${project.title} | AxoIndoSolution Portfolio`,
      description: project.description,
      url: `https://axoindotechsolution.com/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1600,
          height: 900,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `https://axoindotechsolution.com/portfolio/${project.slug}`,
    },
  };
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
