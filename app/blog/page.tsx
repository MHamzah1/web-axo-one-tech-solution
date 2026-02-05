"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { HiArrowRight, HiClock, HiUser, HiTag } from "react-icons/hi";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";

// Blog categories
const categories = [
  "Semua",
  "Web Development",
  "Mobile",
  "UI/UX",
  "Teknologi",
  "Tips & Tricks",
];

// Blog posts
const blogPosts = [
  {
    id: 1,
    title: "Mengapa Next.js 15 Adalah Game-Changer untuk Web Development",
    excerpt:
      "Pelajari fitur-fitur terbaru Next.js 15 dan bagaimana framework ini terus mengevolusi cara kita membangun aplikasi web modern.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "Web Development",
    author: "Ahmad Faisal",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "28 Jan 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Flutter vs React Native: Mana yang Lebih Baik untuk 2026?",
    excerpt:
      "Perbandingan mendalam antara Flutter dan React Native untuk development mobile cross-platform di tahun 2026.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Mobile",
    author: "Sarah Amelia",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "25 Jan 2026",
    readTime: "10 min",
    featured: true,
  },
  {
    id: 3,
    title: "10 Prinsip UI/UX yang Wajib Diketahui Setiap Designer",
    excerpt:
      "Panduan lengkap prinsip-prinsip UI/UX fundamental yang akan meningkatkan kualitas desain Anda.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "UI/UX",
    author: "Diana Putri",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "22 Jan 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "AI dalam Software Development: Trend yang Tidak Bisa Diabaikan",
    excerpt:
      "Bagaimana artificial intelligence mengubah landscape software development dan apa yang harus disiapkan developer.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "Teknologi",
    author: "Budi Prasetyo",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "20 Jan 2026",
    readTime: "12 min",
    featured: false,
  },
  {
    id: 5,
    title: "Optimasi Performa Website: Dari Slow ke Blazing Fast",
    excerpt:
      "Strategi praktis untuk meningkatkan performa website Anda dan memberikan pengalaman terbaik untuk user.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Tips & Tricks",
    author: "Ahmad Faisal",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "18 Jan 2026",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 6,
    title: "Tailwind CSS 4.0: Apa yang Baru dan Exciting?",
    excerpt:
      "Eksplorasi fitur-fitur baru di Tailwind CSS 4.0 yang membuat styling menjadi lebih powerful dan efisien.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
    category: "Web Development",
    author: "Sarah Amelia",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "15 Jan 2026",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 7,
    title: "Membangun Design System yang Scalable",
    excerpt:
      "Panduan step-by-step untuk membangun design system yang konsisten dan mudah di-maintain.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    category: "UI/UX",
    author: "Diana Putri",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "12 Jan 2026",
    readTime: "9 min",
    featured: false,
  },
  {
    id: 8,
    title: "Cloud Native: Arsitektur Masa Depan",
    excerpt:
      "Memahami konsep cloud native dan mengapa ini menjadi standar dalam modern software development.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    category: "Teknologi",
    author: "Budi Prasetyo",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "10 Jan 2026",
    readTime: "11 min",
    featured: false,
  },
  {
    id: 9,
    title: "5 Kesalahan Umum dalam API Development",
    excerpt:
      "Hindari kesalahan-kesalahan ini saat membangun API agar sistem Anda lebih robust dan maintainable.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Tips & Tricks",
    author: "Ahmad Faisal",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "8 Jan 2026",
    readTime: "6 min",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts =
    activeCategory === "Semua"
      ? blogPosts.filter((post) => !post.featured)
      : blogPosts.filter(
          (post) => post.category === activeCategory && !post.featured,
        );

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
              Blog & Artikel
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Insight </span>
              <span className="gradient-text">Teknologi</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tips, tutorial, dan insight terbaru seputar web development,
              mobile apps, UI/UX design, dan teknologi digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Artikel Pilihan
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-colors">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <HiClock className="text-purple-400" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
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

      {/* Blog Grid */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <SpotlightCard
                    className="h-full p-0 overflow-hidden"
                    spotlightColor="rgba(139, 92, 246, 0.15)"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-gray-400 text-sm">
                            {post.author}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                          <HiClock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all">
              Muat Lebih Banyak
              <HiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Jangan Ketinggalan </span>
              <span className="gradient-text">Update</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru,
              tips development, dan insight teknologi langsung di inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-5 py-3 bg-black/30 border border-purple-500/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Berlangganan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
