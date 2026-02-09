"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/components/Logo";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import GooeyNav from "@/components/component-react-bits/GooeyNav/GooeyNav";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Get the active index based on current pathname
  const getActiveIndex = () => {
    // Normalize paths for comparison (handle trailing slashes)
    const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const index = navItems.findIndex((item) => {
      const normalizedHref = item.href === '/' ? '/' : item.href.replace(/\/$/, '');
      return normalizedHref === normalizedPathname;
    });
    return index >= 0 ? index : 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle GooeyNav navigation
  const handleGooeyNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation with GooeyNav */}
          <nav className="hidden md:flex items-center">
            <GooeyNav
              items={navItems}
              particleCount={20}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={getActiveIndex()}
              animationTime={300}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              navigationDelay={200}
              onItemClick={(href) => router.push(href)}
            />
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity glow-hover"
          >
            Mulai Proyek
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-4 right-4 glass rounded-2xl p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                      (pathname === item.href || pathname === item.href + '/' || (item.href !== '/' && pathname === item.href.replace(/\/$/, '')))
                      ? "text-white bg-purple-600/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4 pt-4 border-t border-purple-500/20"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-semibold text-white"
                >
                  Mulai Proyek
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
