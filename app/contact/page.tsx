"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiChat,
  HiCheck,
  HiArrowRight,
} from "react-icons/hi";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";

// Contact info
const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    value: "hello@axoindotechsolution.com",
    link: "mailto:hello@axoindotechsolution.com",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: HiPhone,
    title: "Telepon",
    value: "+62 815 7486 5632",
    link: "tel:+6281574865632",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: HiLocationMarker,
    title: "Alamat",
    value: "Bekasi, Jawa Barat, Indonesia",
    link: "https://www.google.com/maps?q=-6.2365131,107.0694957&z=17&hl=en",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: HiClock,
    title: "Jam Operasional",
    value: "Senin - Jumat, 09:00 - 18:00",
    link: null,
    color: "from-orange-500 to-amber-600",
  },
];

// Services for dropdown
const serviceOptions = [
  "Web Development",
  "Mobile Application",
  "UI/UX Design",
  "Cloud Solutions",
  "Custom System",
  "API Development",
  "IT Consulting",
  "Lainnya",
];

// Budget ranges
const budgetRanges = [
  "Dibawah 10 Juta",
  "10 - 25 Juta",
  "25 - 50 Juta",
  "50 - 100 Juta",
  "Diatas 100 Juta",
  "Belum Ditentukan",
];

// FAQs
const faqs = [
  {
    question: "Berapa lama waktu pengerjaan proyek?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website sederhana bisa selesai dalam 2-4 minggu, sedangkan aplikasi kompleks bisa memakan waktu 2-6 bulan. Kami akan memberikan timeline detail setelah analisis requirement.",
  },
  {
    question: "Apakah ada garansi setelah proyek selesai?",
    answer:
      "Ya, kami memberikan garansi maintenance gratis selama 1-3 bulan (tergantung paket) setelah proyek selesai. Selama periode ini, kami akan memperbaiki bug dan melakukan adjustment minor tanpa biaya tambahan.",
  },
  {
    question: "Bagaimana sistem pembayaran proyeknya?",
    answer:
      "Kami menggunakan sistem milestone payment. Umumnya 30% di awal sebagai DP, 40% setelah development phase, dan 30% setelah project selesai dan disetujui. Detail pembayaran dapat disesuaikan dengan kebutuhan.",
  },
  {
    question: "Apakah bisa request revisi?",
    answer:
      "Tentu! Kami menyediakan 3-5 kali revisi (tergantung paket) selama fase development. Revisi minor tambahan setelah launch juga masih covered dalam periode garansi.",
  },
  {
    question: "Teknologi apa saja yang digunakan?",
    answer:
      "Kami menggunakan teknologi modern seperti React, Next.js, Flutter, Node.js, dan berbagai framework lainnya. Teknologi yang digunakan akan disesuaikan dengan kebutuhan dan requirement proyek Anda.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Halo AxoIndoTechSolution, saya ingin berkonsultasi.

Berikut detail saya:
Nama: ${formData.name}
Email: ${formData.email}
No. Telepon: ${formData.phone}
Perusahaan: ${formData.company}
Layanan: ${formData.service}
Budget: ${formData.budget}

Detail Proyek:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281574865632?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

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
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Mari </span>
              <span className="gradient-text">Berdiskusi</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Punya ide proyek atau butuh konsultasi teknologi? Tim kami siap
              membantu mewujudkan visi digital Anda. Konsultasi pertama gratis!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <SpotlightCard
                      className="text-center hover:border-purple-500/50 transition-colors"
                      spotlightColor="rgba(139, 92, 246, 0.15)"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 mx-auto`}
                      >
                        <info.icon className="text-white text-xl" />
                      </div>
                      <h3 className="text-white font-semibold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </SpotlightCard>
                  </a>
                ) : (
                  <SpotlightCard
                    className="text-center"
                    spotlightColor="rgba(139, 92, 246, 0.15)"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 mx-auto`}
                    >
                      <info.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </SpotlightCard>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-white">Kirim </span>
                <span className="gradient-text">Pesan</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                dalam waktu 1x24 jam kerja.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="+62 812 xxxx xxxx"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="PT. Example"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Layanan yang Dibutuhkan *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Pilih layanan
                      </option>
                      {serviceOptions.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-neutral-900"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Estimasi Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Pilih range budget
                      </option>
                      {budgetRanges.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                          className="bg-neutral-900"
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Detail Proyek *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Ceritakan tentang proyek yang ingin Anda bangun..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${isSubmitted
                    ? "bg-green-600"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 glow-hover"
                    }`}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Mengirim...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <HiCheck size={20} />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <HiArrowRight />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Quick Contact & Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HiChat className="text-purple-500" />
                  Respon Cepat
                </h3>
                <p className="text-gray-400 mb-6">
                  Butuh respon lebih cepat? Hubungi kami langsung melalui
                  channel berikut:
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6281574865632?text=Halo%20AxoIndoTechSolution!%20Saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20digital%20saya.%20Bisa%20dibantu%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-600/10 border border-green-600/20 hover:border-green-600/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-gray-400 text-sm">
                        Chat langsung dengan tim kami
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-600/10 border border-blue-600/20 hover:border-blue-600/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <FaLinkedinIn className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-gray-400 text-sm">
                        Connect untuk diskusi bisnis
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-pink-600/10 border border-pink-600/20 hover:border-pink-600/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <FaInstagram className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                        Instagram
                      </p>
                      <p className="text-gray-400 text-sm">
                        Lihat update terbaru kami
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <a
                href="https://www.google.com/maps?q=-6.2365131,107.0694957&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-2xl overflow-hidden group relative"
              >
                <div className="aspect-[4/3] bg-neutral-800 relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                    alt="Map location"
                    className="w-full h-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <HiLocationMarker className="text-white text-2xl" />
                      </div>
                      <p className="text-white font-semibold">
                        Bekasi, Jawa Barat, Indonesia
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        Remote-First Company
                      </p>
                      <span className="text-purple-400 text-sm font-medium hover:underline">
                        Buka di Google Maps
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Pertanyaan </span>
              <span className="gradient-text">Umum</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering ditanyakan klien kami.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full glass rounded-xl p-6 text-left hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-purple-400 font-light">+</span>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                      marginTop: openFaq === index ? 16 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
