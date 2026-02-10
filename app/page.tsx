"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { color, motion } from "motion/react";
import {
  HiCode,
  HiDeviceMobile,
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiChartBar,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiFlutter,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";
import GlitchText from "@/components/features/TextAnimations/GlitchText/GlitchText";
import LogoLoop from "@/components/features/Animations/LogoLoop/LogoLoop";
import TextType from "@/components/features/TextAnimations/TextType/TextType";

// Dynamic imports for heavy components
const FloatingLines = dynamic(
  () => import("@/components/Backgrounds/FloatingLines/FloatingLines"),
  { ssr: false },
);

// Service data
const services = [
  {
    icon: HiCode,
    title: "Web Development",
    description:
      "Website modern, responsif, dan SEO-friendly dengan teknologi terkini seperti React, Next.js, dan Node.js.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Apps",
    description:
      "Aplikasi mobile cross-platform yang powerful dengan Flutter dan React Native untuk iOS dan Android.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: HiCloud,
    title: "Cloud Solutions",
    description:
      "Infrastruktur cloud yang scalable dan aman dengan AWS, Google Cloud, dan Azure.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: HiCog,
    title: "Custom Systems",
    description:
      "Sistem kustom terintegrasi untuk ERP, CRM, dan automasi bisnis sesuai kebutuhan Anda.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: HiLightningBolt,
    title: "API Development",
    description:
      "RESTful API dan GraphQL yang robust untuk integrasi seamless antar sistem.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: HiChartBar,
    title: "Analytics & BI",
    description:
      "Dashboard analitik dan business intelligence untuk insight data yang actionable.",
    color: "from-indigo-500 to-purple-600",
  },
];

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    color: "#61DAFB",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
    color: "#FFFFFF",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    color: "#3178C6",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    color: "#06B6D4",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
    color: "#339933",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
    color: "#47A248",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    color: "#4169E1",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
    color: "#2496ED",
  },
  {
    node: <SiAmazon />,
    title: "AWS",
    href: "https://aws.amazon.com",
    color: "#FF9900",
  },
  {
    node: <SiFlutter />,
    title: "Flutter",
    href: "https://flutter.dev",
    color: "#02569B",
  },
  {
    node: <SiFirebase />,
    title: "Firebase",
    href: "https://firebase.google.com",
    color: "#FFCA28",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
    color: "#F24E1E",
  },
];

// Portfolio items
const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare App",
    category: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "IoT Management System",
    category: "Custom System",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Ahmad Rizky",
    role: "CEO, TechStart Indonesia",
    content:
      "AxoIndoSolution (AxoIndo) membantu kami membangun platform e-commerce yang luar biasa. Tim yang profesional dan hasil yang memuaskan! Sangat direkomendasikan untuk jasa pembuatan website di Indonesia.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Sarah Putri",
    role: "Product Manager, HealthApp",
    content:
      "Pengembangan aplikasi mobile kami berjalan lancar berkat tim yang kompeten dan komunikatif. Sangat direkomendasikan!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Budi Santoso",
    role: "CTO, Fintech Solutions",
    content:
      "Infrastruktur cloud yang dibangun sangat scalable dan aman. Kami sangat puas dengan hasilnya.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

// Stats
const stats = [
  { value: "150+", label: "Proyek Selesai" },
  { value: "50+", label: "Klien Puas" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "99%", label: "Tingkat Kepuasan" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={8}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Solusi Digital Inovatif
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Wujudkan Ide </span>
              <span className="gradient-text">Digital</span>
              <br />
              <span className="text-white">Menjadi </span>
              <span className="gradient-text">Kenyataan</span>
            </h1>
          </motion.div>

          {/* Marketing Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <TextType
              text={[
                " Transformasi Digital Bisnis Anda Dimulai Di Sini!",
                " Solusi Teknologi Inovatif untuk Kesuksesan Anda",
                " Website Modern & Aplikasi Mobile Berkualitas Tinggi",
                " Partner Terpercaya untuk Pertumbuhan Bisnis Digital",
                " Wujudkan Visi Digital Anda Bersama Kami!",
              ]}
              typingSpeed={60}
              pauseDuration={2500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={35}
              loop={true}
              cursorBlinkDuration={0.6}
              className="text-lg md:text-xl lg:text-2xl font-medium"
              textColors={["#67E8F9"]}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover flex items-center gap-2"
            >
              Mulai Proyek Sekarang
              <HiArrowRight />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Lihat Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-purple-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Layanan </span>
              <span className="gradient-text">Unggulan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Solusi teknologi lengkap untuk mengakselerasi transformasi digital
              bisnis Anda dengan standar kualitas internasional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full hover:border-purple-500/50 transition-colors cursor-pointer"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                  >
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Lihat Semua Layanan
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Teknologi </span>
              <span className="gradient-text">Andalan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami menggunakan stack teknologi modern untuk membangun solusi
              yang scalable, performant, dan mudah dimaintain.
            </p>
          </motion.div>
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Basic horizontal loop */}
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Mengapa </span>
                <span className="gradient-text">Memilih Kami?</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Dengan pengalaman bertahun-tahun di industri teknologi, kami
                berkomitmen untuk memberikan solusi terbaik yang sesuai dengan
                kebutuhan bisnis Anda.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Tim Ahli Berpengalaman",
                    desc: "Developer dan designer senior dengan portfolio internasional",
                  },
                  {
                    title: "Teknologi Terkini",
                    desc: "Selalu update dengan perkembangan teknologi terbaru",
                  },
                  {
                    title: "Support 24/7",
                    desc: "Tim support yang siap membantu kapanpun Anda butuhkan",
                  },
                  {
                    title: "Garansi Kualitas",
                    desc: "Jaminan kepuasan dengan revisi tanpa batas selama masa garansi",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <HiCheck className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl" />
                <div className="relative">
                  <GlitchText
                    className="!text-4xl md:!text-5xl !mx-0 mb-6"
                    speed={0.8}
                    enableShadows={true}
                    enableOnHover={true}
                  >
                    AxoIndo Solution
                  </GlitchText>
                  <p className="text-gray-400 mb-8">
                    Bergabunglah dengan 50+ perusahaan di Indonesia yang telah
                    mempercayakan transformasi digital mereka kepada
                    AxoIndoSolution.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white"
                  >
                    Konsultasi Gratis
                    <HiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Portfolio </span>
              <span className="gradient-text">Terbaru</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beberapa proyek yang telah kami kerjakan untuk klien dari berbagai
              industri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[16/10]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-purple-400 text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all"
            >
              Lihat Semua Portfolio
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Apa Kata </span>
              <span className="gradient-text">Klien Kami</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Testimoni dari klien yang telah bekerja sama dengan kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(236, 72, 153, 0.15)"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/30"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-cyan-900/30" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Siap Memulai </span>
              <span className="gradient-text">Proyek Anda?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Konsultasikan ide Anda dengan tim ahli kami secara gratis. Kami
              siap membantu mewujudkan visi digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover flex items-center gap-2"
              >
                Hubungi Kami
                <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/6289531887799?text=Halo%20AxoIndoSolution!%20Saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20digital%20saya.%20Bisa%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-purple-600/10 transition-all flex items-center gap-2"
              >
                Chat via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section - Keywords for Indonesia Market */}
      <section className="py-16 relative bg-[#030014]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="text-white">
                Jasa Pembuatan Website & Aplikasi{" "}
              </span>
              <span className="gradient-text">Terbaik di Indonesia</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  AxoIndoSolution - Solusi Digital Terpercaya
                </h3>
                <p>
                  <strong className="text-purple-400">AxoIndoSolution</strong>{" "}
                  (juga dikenal sebagai{" "}
                  <strong className="text-purple-400">AxoIndo</strong>, Axo Indo
                  Solution, atau AxoIndoTechSolution) adalah perusahaan
                  teknologi profesional yang melayani jasa pembuatan website dan
                  aplikasi mobile untuk bisnis di seluruh Indonesia.
                </p>
                <p>
                  Kami menyediakan layanan{" "}
                  <strong>jasa pembuatan website murah</strong> namun
                  berkualitas tinggi, cocok untuk UMKM, startup, hingga
                  perusahaan besar. Dengan pengalaman bertahun-tahun, AxoIndo
                  telah membantu ratusan klien mewujudkan website impian mereka.
                </p>
                <p>
                  Layanan kami meliputi: <strong>jasa bikin website</strong>,
                  jasa buat website profesional, website company profile, toko
                  online, landing page, e-commerce, dan berbagai jenis website
                  lainnya.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  Jasa Pembuatan Aplikasi Mobile
                </h3>
                <p>
                  Selain website,{" "}
                  <strong className="text-purple-400">AxoIndo Solution</strong>{" "}
                  juga melayani
                  <strong> jasa pembuatan aplikasi Android</strong> dan{" "}
                  <strong>iOS</strong> untuk bisnis Anda. Aplikasi mobile custom
                  yang kami kembangkan dirancang khusus sesuai kebutuhan bisnis
                  Anda.
                </p>
                <p>
                  Sebagai <strong>software house Indonesia</strong> yang
                  terpercaya, kami menggunakan teknologi terbaru seperti React
                  Native, Flutter, dan framework modern lainnya untuk memastikan
                  aplikasi Anda cepat, aman, dan user-friendly.
                </p>
                <p>
                  Hubungi <strong>AxoIndoSolution</strong> sekarang untuk
                  konsultasi GRATIS! Kami melayani klien dari Jakarta, Bekasi,
                  Bandung, Surabaya, dan seluruh kota di Indonesia.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="px-3 py-1 glass rounded-full">
                ✓ Konsultasi Gratis
              </span>
              <span className="px-3 py-1 glass rounded-full">
                ✓ Harga Terjangkau
              </span>
              <span className="px-3 py-1 glass rounded-full">
                ✓ Garansi Kepuasan
              </span>
              <span className="px-3 py-1 glass rounded-full">
                ✓ Support 24/7
              </span>
              <span className="px-3 py-1 glass rounded-full">
                ✓ Tim Profesional
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
