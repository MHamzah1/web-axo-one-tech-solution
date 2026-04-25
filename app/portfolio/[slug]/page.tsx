"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  HiArrowLeft,
  HiArrowRight,
  HiCalendar,
  HiCheck,
  HiOfficeBuilding,
  HiUser,
  HiClock,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";
import {
  getPortfolioBySlug,
  getRelatedProjects,
} from "../data";

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) ?? "";
  const project = getPortfolioBySlug(slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="pt-40 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Proyek Tidak Ditemukan</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Maaf, proyek yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
            >
              <HiArrowLeft />
              Kembali ke Portfolio
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const relatedProjects = getRelatedProjects(project.id, project.category);

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? project.gallery.length - 1 : lightboxIndex - 1,
    );
  };

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === project.gallery.length - 1 ? 0 : lightboxIndex + 1,
    );
  };

  const waMessage = encodeURIComponent(
    `Halo AxoIndoSolution! Saya tertarik dengan proyek serupa seperti *${project.title}* (${project.category}). Mohon informasi lebih lanjut. Terima kasih!`,
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-900/10 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full" />

        <div className="container mx-auto px-4 relative">
          {/* Breadcrumb / Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <HiArrowLeft />
              Kembali
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">{project.title.split(" ")[0]} </span>
                <span className="gradient-text">
                  {project.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full glass text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/6289531887799?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
                >
                  Buat Proyek Serupa
                  <HiArrowRight />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-purple-600/10 transition-all"
                >
                  Lihat Proyek Lain
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 group bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-950">
                <div className="aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      project.category === "Mobile App"
                        ? "h-full w-auto object-contain"
                        : "w-full h-full object-cover"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: HiOfficeBuilding, label: "Klien", value: project.client },
              { icon: HiCalendar, label: "Tahun", value: project.year },
              { icon: HiClock, label: "Durasi", value: project.duration },
              { icon: HiUser, label: "Peran", value: project.role },
            ].map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
                    <info.icon className="text-white text-lg" />
                  </div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-white font-semibold text-sm">
                    {info.value}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview, Challenge, Solution */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Overview Proyek",
                content: project.overview,
                color: "from-purple-500 to-violet-600",
                badge: "01",
              },
              {
                title: "Tantangan",
                content: project.challenge,
                color: "from-pink-500 to-rose-600",
                badge: "02",
              },
              {
                title: "Solusi",
                content: project.solution,
                color: "from-cyan-500 to-blue-600",
                badge: "03",
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                    >
                      {section.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {section.content}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
              Gallery Proyek
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Tampilan </span>
              <span className="gradient-text">Lengkap Proyek</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Klik gambar untuk melihat dalam ukuran lebih besar.
            </p>
          </motion.div>

          <div
            className={`grid gap-6 ${
              project.category === "Mobile App"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {project.gallery.map((image, index) => {
              const isMobile = project.category === "Mobile App";
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setLightboxIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-purple-500/20 ${
                  !isMobile && index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`overflow-hidden bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-950 flex items-center justify-center ${
                    isMobile
                      ? "aspect-[9/16]"
                      : index === 0
                      ? "aspect-[21/9]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    className={`transition-transform duration-700 group-hover:scale-110 ${
                      isMobile
                        ? "h-full w-auto object-contain"
                        : "w-full h-full object-cover"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                      Klik untuk perbesar
                    </span>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Apa Saja yang </span>
              <span className="gradient-text">Kami Bangun</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl glass hover:border-purple-500/40 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HiCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
              Hasil & Dampak
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Pencapaian </span>
              <span className="gradient-text">Proyek</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="text-center h-full"
                  spotlightColor="rgba(236, 72, 153, 0.15)"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-400 text-sm">{result.label}</div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-600/20 blur-3xl rounded-full" />
              <div className="relative">
                <div className="text-6xl gradient-text mb-4">&ldquo;</div>
                <p className="text-lg md:text-xl text-gray-300 italic mb-6 leading-relaxed">
                  {project.testimonial.quote}
                </p>
                <div>
                  <p className="text-white font-semibold">
                    {project.testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {project.testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Proyek </span>
                <span className="gradient-text">Serupa</span>
              </h2>
              <p className="text-gray-400">
                Lihat proyek lain dalam kategori {project.category}.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${item.slug}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group cursor-pointer hover:border-purple-500/50 transition-all">
                      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-950 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`transition-transform duration-500 group-hover:scale-110 ${
                            item.category === "Mobile App"
                              ? "h-full w-auto object-contain"
                              : "w-full h-full object-cover"
                          }`}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <span className="text-purple-400 text-sm font-medium mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Lihat Detail <HiArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Tertarik Membuat </span>
                <span className="gradient-text">Proyek Serupa?</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Konsultasikan kebutuhan digital Anda dengan tim ahli kami. Kami
                siap membantu mewujudkan ide Anda menjadi kenyataan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/6289531887799?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
                >
                  Chat WhatsApp
                  <HiArrowRight />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-purple-600/10 transition-all"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Close"
            >
              <HiX size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Previous"
            >
              <HiChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Next"
            >
              <HiChevronRight size={28} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative inline-flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.gallery[lightboxIndex]}
                alt={`${project.title} - ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm">
                {lightboxIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
