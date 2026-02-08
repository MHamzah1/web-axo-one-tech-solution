"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  HiArrowRight,
  HiLightBulb,
  HiHeart,
  HiSparkles,
  HiUserGroup,
} from "react-icons/hi";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";

// Team members
const teamMembers = [
  {
    name: "Ahmad Faisal",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Visioner dengan 10+ tahun pengalaman di industri teknologi.",
  },
  {
    name: "Sarah Amelia",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Expert dalam arsitektur sistem dan cloud infrastructure.",
  },
  {
    name: "Budi Prasetyo",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Full-stack developer dengan passion di React dan Node.js.",
  },
  {
    name: "Diana Putri",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Designer kreatif dengan fokus pada user experience.",
  },
];

// Company values
const values = [
  {
    icon: HiLightBulb,
    title: "Inovasi",
    description:
      "Selalu menghadirkan solusi kreatif dan teknologi terdepan untuk setiap tantangan.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: HiHeart,
    title: "Dedikasi",
    description:
      "Berkomitmen penuh terhadap kualitas dan kepuasan setiap klien kami.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: HiSparkles,
    title: "Kualitas",
    description:
      "Standar tinggi dalam setiap baris kode dan desain yang kami hasilkan.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: HiUserGroup,
    title: "Kolaborasi",
    description:
      "Bekerja sama dengan klien sebagai mitra untuk mencapai kesuksesan bersama.",
    color: "from-cyan-500 to-blue-500",
  },
];

// Timeline / Milestones
const milestones = [
  {
    year: "2019",
    title: "Didirikan",
    description: "AxoIndoTechSolusindo lahir dengan visi transformasi digital.",
  },
  {
    year: "2020",
    title: "50 Proyek",
    description: "Berhasil menyelesaikan 50 proyek pertama.",
  },
  {
    year: "2021",
    title: "Tim Berkembang",
    description: "Ekspansi tim hingga 25 profesional.",
  },
  {
    year: "2022",
    title: "Klien Enterprise",
    description: "Dipercaya oleh perusahaan besar dan multinasional.",
  },
  {
    year: "2023",
    title: "Ekspansi Regional",
    description: "Memperluas jangkauan ke Asia Tenggara.",
  },
  {
    year: "2024",
    title: "150+ Proyek",
    description: "Milestone 150 proyek dengan tingkat kepuasan 99%.",
  },
];

export default function AboutPage() {
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
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Mitra Teknologi </span>
              <span className="gradient-text">Terpercaya Anda</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              AxoIndoTechSolusindo adalah perusahaan pengembangan software yang
              berdedikasi untuk membantu bisnis bertransformasi melalui solusi
              digital inovatif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Cerita </span>
                <span className="gradient-text">Kami</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Didirikan pada tahun 2019, AxoIndoTechSolusindo lahir dari
                  passion untuk menghadirkan solusi teknologi yang tidak hanya
                  canggih, tetapi juga berdampak nyata bagi bisnis klien kami.
                </p>
                <p>
                  Berawal dari tim kecil yang terdiri dari developer dan
                  designer berpengalaman, kami kini telah berkembang menjadi
                  perusahaan teknologi yang dipercaya oleh puluhan perusahaan
                  dari berbagai industri.
                </p>
                <p>
                  Kami percaya bahwa setiap bisnis, baik startup maupun
                  enterprise, layak mendapatkan solusi teknologi berkualitas
                  tinggi yang dapat mendorong pertumbuhan dan efisiensi
                  operasional.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Tim AxoIndoTechSolusindo"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 text-sm">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(139, 92, 246, 0.15)"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-5">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Misi Kami
                </h3>
                <p className="text-gray-400">
                  Membantu bisnis dari berbagai skala untuk bertransformasi
                  secara digital melalui pengembangan software berkualitas
                  tinggi, dengan fokus pada inovasi, efisiensi, dan dampak
                  bisnis yang nyata.
                </p>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(236, 72, 153, 0.15)"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-5">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Visi Kami
                </h3>
                <p className="text-gray-400">
                  Menjadi mitra teknologi terdepan di Asia Tenggara yang dikenal
                  karena kualitas, inovasi, dan kemampuan menghadirkan solusi
                  digital yang mengubah cara bisnis beroperasi.
                </p>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Nilai-Nilai </span>
              <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap langkah dan keputusan
              kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full text-center"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 mx-auto`}
                  >
                    <value.icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Perjalanan </span>
              <span className="gradient-text">Kami</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-6 mb-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-1 ${index % 2 === 1 ? "text-right" : ""}`}
                >
                  <div className="glass rounded-xl p-6">
                    <div className="text-purple-400 font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Tim </span>
              <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profesional berdedikasi yang siap mewujudkan visi digital Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="text-center"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-purple-500/20"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </SpotlightCard>
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
              <span className="text-white">Tertarik Bekerja </span>
              <span className="gradient-text">Bersama Kami?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan visi
              digital bisnis Anda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
            >
              Hubungi Kami
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
