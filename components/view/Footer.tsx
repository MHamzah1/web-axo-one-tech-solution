"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Logo from "@/components/Logo";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const footerLinks = {
  layanan: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Cloud Solutions", href: "/services#cloud" },
    { label: "Konsultasi IT", href: "/services#consulting" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog & Artikel", href: "/blog" },
    { label: "Karir", href: "/contact" },
    { label: "Kontak", href: "/contact" },
  ],
  resources: [
    { label: "Dokumentasi", href: "/docs" },
    { label: "Panduan Integrasi", href: "/guides" },
    { label: "API Reference", href: "/api" },
    { label: "Status Sistem", href: "/status" },
  ],
};

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 bg-[#030014] border-t border-purple-500/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-6" />
            <p className="text-gray-400 mb-6 max-w-sm">
              Mitra teknologi terpercaya untuk transformasi digital bisnis Anda.
              Kami menghadirkan solusi inovatif dengan teknologi terkini.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@axoonetechsolution.com"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaEnvelope className="text-purple-500" />
                hello@axoonetechsolution.com
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaPhone className="text-purple-500" />
                +62 812 3456 7890
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Dapatkan Update Terbaru
              </h3>
              <p className="text-gray-400">
                Berlangganan newsletter kami untuk tips teknologi dan promo
                eksklusif.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 md:w-64 px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Berlangganan
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-purple-500/10">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} AxoOneTechSolution. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
