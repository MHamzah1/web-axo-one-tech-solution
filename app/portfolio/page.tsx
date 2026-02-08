"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { HiArrowRight, HiExternalLink, HiX } from "react-icons/hi";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";

// Portfolio categories
const categories = [
  "Semua",
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Custom System",
];

// Portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Tokopedia-Style E-Commerce",
    category: "Web Development",
    description:
      "Platform e-commerce full-featured dengan sistem multi-vendor, payment gateway terintegrasi, dan dashboard admin yang komprehensif.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    client: "PT. Digital Commerce Indonesia",
    year: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "HealthCare Mobile App",
    category: "Mobile App",
    description:
      "Aplikasi kesehatan dengan fitur telemedicine, booking dokter, medical records, dan integrasi dengan wearable devices.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    client: "HealthApp Indonesia",
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description:
      "Redesign dashboard untuk platform fintech dengan fokus pada user experience dan data visualization yang intuitif.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Figma", "React", "D3.js", "Tailwind"],
    client: "FinanceHub",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "IoT Management Platform",
    category: "Custom System",
    description:
      "Platform monitoring dan management untuk perangkat IoT industri dengan real-time analytics dan predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "MQTT", "TimescaleDB"],
    client: "Smart Factory Co.",
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile App",
    description:
      "Aplikasi food delivery dengan fitur real-time tracking, payment integration, dan restaurant management system.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "Redis", "Google Maps"],
    client: "FoodExpress",
    year: "2023",
    link: "#",
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Web Development",
    description:
      "Website company profile modern dengan animasi interaktif, multilingual support, dan CMS yang mudah digunakan.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Strapi", "Tailwind", "GSAP"],
    client: "Global Corporation",
    year: "2024",
    link: "#",
  },
  {
    id: 7,
    title: "HR Management System",
    category: "Custom System",
    description:
      "Sistem HRIS lengkap dengan fitur payroll, attendance, leave management, dan performance tracking.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    client: "PT. Maju Bersama",
    year: "2023",
    link: "#",
  },
  {
    id: 8,
    title: "Travel Booking Platform",
    category: "Web Development",
    description:
      "Platform booking travel all-in-one untuk hotel, flight, dan experiences dengan recommendation engine.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    client: "TravelEase",
    year: "2024",
    link: "#",
  },
  {
    id: 9,
    title: "Banking App Redesign",
    category: "UI/UX Design",
    description:
      "Complete redesign mobile banking app dengan fokus pada accessibility dan user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    technologies: ["Figma", "Principle", "User Research"],
    client: "Bank Digital Indonesia",
    year: "2024",
    link: "#",
  },
];

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  link: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );

  const filteredItems =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Karya </span>
              <span className="gradient-text">Terbaik Kami</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Lihat berbagai proyek yang telah kami kerjakan untuk klien dari
              berbagai industri. Setiap proyek adalah hasil dedikasi dan
              keahlian tim kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "glass text-gray-400 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(item)}
                  className="cursor-pointer group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-purple-400 text-sm font-medium mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <HiX size={20} />
              </button>

              {/* Image */}
              <div className="aspect-video w-full overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Klien</h4>
                    <p className="text-gray-400">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Teknologi</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full glass text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* <a
                    href={selectedProject.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all"
                  >
                    Lihat Website
                    <HiExternalLink />
                  </a> */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-purple-600/10 transition-all"
                  >
                    Proyek Serupa
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Proyek Selesai" },
              { value: "50+", label: "Klien Puas" },
              { value: "15+", label: "Industri" },
              { value: "99%", label: "Tingkat Kepuasan" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Siap Membangun </span>
              <span className="gradient-text">Proyek Bersama?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Mari wujudkan ide Anda menjadi kenyataan. Tim kami siap membantu
              mengembangkan solusi digital terbaik untuk bisnis Anda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
            >
              Mulai Proyek
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
