"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  HiCode,
  HiDeviceMobile,
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiChartBar,
  HiArrowRight,
  HiCheck,
  HiSupport,
  HiColorSwatch,
} from "react-icons/hi";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";
import SpotlightCard from "@/components/component-react-bits/SpotlightCard/SpotlightCard";
import ElectricBorder from "@/components/features/Animations/ElectricBorder/ElectricBorder";

// All services
const services = [
  {
    id: "web",
    icon: HiCode,
    title: "Web Development",
    shortDesc: "Website modern dan responsif dengan teknologi terkini.",
    description:
      "Kami membangun website yang tidak hanya indah secara visual, tetapi juga cepat, SEO-friendly, dan mudah dikelola. Dari landing page hingga web application kompleks.",
    features: [
      "Website Company Profile",
      "E-Commerce Platform",
      "Web Application (SaaS)",
      "Progressive Web Apps (PWA)",
      "Content Management System",
      "SEO Optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    color: "from-purple-500 to-violet-600",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "mobile",
    icon: HiDeviceMobile,
    title: "Mobile Application",
    shortDesc: "Aplikasi mobile cross-platform untuk iOS dan Android.",
    description:
      "Kembangkan aplikasi mobile yang powerful dan user-friendly untuk menjangkau pelanggan di mana saja. Kami menggunakan teknologi cross-platform untuk efisiensi development.",
    features: [
      "Native iOS & Android",
      "Cross-Platform (Flutter/React Native)",
      "UI/UX Mobile-First",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    color: "from-pink-500 to-rose-600",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: "cloud",
    icon: HiCloud,
    title: "Cloud Solutions",
    shortDesc: "Infrastruktur cloud yang scalable dan aman.",
    description:
      "Optimalkan infrastruktur IT Anda dengan solusi cloud yang aman, scalable, dan cost-effective. Kami membantu migrasi dan pengelolaan cloud infrastructure.",
    features: [
      "Cloud Migration",
      "Server Management",
      "Auto-Scaling Setup",
      "Backup & Disaster Recovery",
      "Security Configuration",
      "Cost Optimization",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    color: "from-cyan-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: "design",
    icon: HiColorSwatch,
    title: "UI/UX Design",
    shortDesc: "Desain interface yang intuitif dan menarik.",
    description:
      "Ciptakan pengalaman pengguna yang luar biasa dengan desain yang tidak hanya cantik, tetapi juga intuitif dan meningkatkan konversi.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "UI Design System",
      "Interaction Design",
      "Usability Testing",
      "Design Handoff",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"],
    color: "from-orange-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: "custom",
    icon: HiCog,
    title: "Custom Systems",
    shortDesc: "Sistem kustom terintegrasi untuk bisnis Anda.",
    description:
      "Solusi software kustom yang dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Dari ERP hingga sistem automasi.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Inventory Management",
      "Human Resource System",
      "Workflow Automation",
      "System Integration",
    ],
    technologies: ["Java", "Python", ".NET", "PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "api",
    icon: HiLightningBolt,
    title: "API Development",
    shortDesc: "RESTful API dan GraphQL yang robust.",
    description:
      "Bangun backbone digital bisnis Anda dengan API yang robust, well-documented, dan scalable untuk integrasi seamless antar sistem.",
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "API Documentation",
      "Third-Party Integration",
      "Webhook Systems",
      "API Security & Authentication",
    ],
    technologies: ["Node.js", "Express", "FastAPI", "GraphQL", "Swagger"],
    color: "from-yellow-500 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: "analytics",
    icon: HiChartBar,
    title: "Analytics & BI",
    shortDesc: "Dashboard analitik untuk insight data.",
    description:
      "Transform data menjadi insight yang actionable dengan dashboard analitik dan business intelligence yang powerful.",
    features: [
      "Data Visualization",
      "Real-time Dashboard",
      "Custom Reports",
      "Predictive Analytics",
      "Data Warehouse",
      "KPI Tracking",
    ],
    technologies: ["Power BI", "Tableau", "Metabase", "Python", "BigQuery"],
    color: "from-indigo-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "consulting",
    icon: HiSupport,
    title: "IT Consulting",
    shortDesc: "Konsultasi teknologi untuk strategi digital.",
    description:
      "Dapatkan panduan dari expert untuk membuat keputusan teknologi yang tepat. Kami membantu Anda merencanakan roadmap digital yang efektif.",
    features: [
      "Technology Assessment",
      "Digital Strategy",
      "Architecture Planning",
      "Vendor Selection",
      "Project Management",
      "Team Training",
    ],
    technologies: ["Agile", "Scrum", "JIRA", "Confluence"],
    color: "from-teal-500 to-cyan-600",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

// Pricing plans
const pricingPlans = [
  {
    name: "Starter",
    description: "Cocok untuk startup dan UMKM",
    price: "Mulai 2 Juta",
    features: [
      "Landing Page / Company Profile",
      "Responsive Design",
      "Basic SEO Setup",
      "1 Bulan Support",
      "Hosting 1 Tahun",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Untuk bisnis yang berkembang",
    price: "Mulai 7 Juta",
    features: [
      "Website Dinamis + CMS",
      "Custom UI/UX Design",
      "Advanced SEO",
      "3 Bulan Support",
      "Analytics Dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Solusi lengkap untuk perusahaan",
    price: "Custom",
    features: [
      "Custom Web Application",
      "Mobile App Development",
      "API Integration",
      "12 Bulan Support",
      "Priority Response",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

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
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Solusi Digital </span>
              <span className="gradient-text">Lengkap</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dari pengembangan website hingga sistem enterprise, kami
              menyediakan layanan teknologi end-to-end untuk transformasi
              digital bisnis Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  className={`h-full transition-all ${
                    selectedService.id === service.id
                      ? "border-purple-500/50 ring-2 ring-purple-500/20"
                      : "hover:border-purple-500/30"
                  }`}
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.shortDesc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section
        className="py-20 relative overflow-hidden"
        id={selectedService.id}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-6`}
                >
                  <selectedService.icon className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-white">{selectedService.title}</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  {selectedService.description}
                </p>

                <h4 className="text-white font-semibold mb-4">
                  Fitur Layanan:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <HiCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-white font-semibold mb-4">Teknologi:</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full glass text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
                >
                  Konsultasi Gratis
                  <HiArrowRight />
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-3xl" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="text-white">Proses </span>
              <span className="gradient-text">Kerja Kami</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Metodologi yang terstruktur untuk memastikan hasil yang optimal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Memahami kebutuhan dan tujuan bisnis Anda",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Merancang solusi dan roadmap development",
              },
              {
                step: "03",
                title: "Development",
                desc: "Membangun dengan best practices dan teknologi terkini",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Testing, deployment, dan ongoing support",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="text-center h-full"
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                >
                  <div className="text-5xl font-bold gradient-text mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              <span className="text-white">Paket </span>
              <span className="gradient-text">Harga</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Investasi yang tepat untuk pertumbuhan bisnis digital Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold text-white z-10">
                    Populer
                  </div>
                )}
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.12}
                  // thickness={2}
                  style={{ borderRadius: 16 }}
                >
                  <SpotlightCard
                    className={`h-full ${plan.popular ? "border-purple-500/50" : ""}`}
                    spotlightColor={
                      plan.popular
                        ? "rgba(236, 72, 153, 0.15)"
                        : "rgba(139, 92, 246, 0.15)"
                    }
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-center mb-8">
                      <div className="text-3xl font-bold gradient-text">
                        {plan.price}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                            <HiCheck className="text-white text-xs" />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-full font-semibold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                          : "border border-purple-500/30 text-white hover:bg-purple-600/10"
                      }`}
                    >
                      Pilih Paket
                    </Link>
                  </SpotlightCard>
                </ElectricBorder>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm mt-8"
          >
            * Harga dapat bervariasi tergantung kompleksitas dan fitur yang
            dibutuhkan.
          </motion.p>
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
              <span className="text-white">Butuh Solusi </span>
              <span className="gradient-text">Custom?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Konsultasikan kebutuhan spesifik Anda dengan tim ahli kami. Kami
              siap memberikan solusi yang tepat untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all glow-hover"
              >
                Konsultasi Gratis
                <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/6281574865632?text=Halo%20AxoIndoTechSolution!%20Saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20digital%20saya.%20Bisa%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-purple-600/10 transition-all"
              >
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
