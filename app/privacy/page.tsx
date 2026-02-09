"use client";

import React from "react";
import { motion } from "motion/react";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";

const sections = [
    {
        title: "1. Informasi yang Kami Kumpulkan",
        content: [
            "Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk:",
            "• Nama lengkap dan informasi kontak (email, nomor telepon)",
            "• Informasi perusahaan atau bisnis Anda",
            "• Detail proyek dan kebutuhan layanan",
            "• Komunikasi yang Anda kirimkan kepada kami",
            "• Informasi pembayaran untuk transaksi",
        ],
    },
    {
        title: "2. Penggunaan Informasi",
        content: [
            "Kami menggunakan informasi yang dikumpulkan untuk:",
            "• Menyediakan, memelihara, dan meningkatkan layanan kami",
            "• Memproses transaksi dan mengirim konfirmasi terkait",
            "• Mengirimkan informasi teknis, update, dan pesan dukungan",
            "• Merespons pertanyaan, komentar, dan permintaan Anda",
            "• Menganalisis penggunaan layanan untuk peningkatan kualitas",
            "• Mengirimkan komunikasi pemasaran (dengan persetujuan Anda)",
        ],
    },
    {
        title: "3. Pembagian Informasi",
        content: [
            "Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi dalam situasi berikut:",
            "• Dengan persetujuan eksplisit dari Anda",
            "• Kepada vendor dan penyedia layanan yang membantu operasional kami",
            "• Untuk mematuhi kewajiban hukum atau permintaan resmi dari pihak berwenang",
            "• Untuk melindungi hak, properti, atau keamanan kami dan pengguna lain",
        ],
    },
    {
        title: "4. Keamanan Data",
        content: [
            "Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, pengubahan, pengungkapan, atau penghancuran yang tidak sah. Langkah-langkah ini meliputi:",
            "• Enkripsi data sensitif",
            "• Akses terbatas ke informasi pribadi",
            "• Pemantauan sistem secara berkala",
            "• Protokol keamanan standar industri",
        ],
    },
    {
        title: "5. Cookie dan Teknologi Pelacakan",
        content: [
            "Website kami menggunakan cookie dan teknologi serupa untuk:",
            "• Meningkatkan pengalaman pengguna",
            "• Menganalisis lalu lintas dan penggunaan website",
            "• Mengingat preferensi Anda",
            "Anda dapat mengatur browser untuk menolak cookie, namun beberapa fitur website mungkin tidak berfungsi dengan optimal.",
        ],
    },
    {
        title: "6. Hak Anda",
        content: [
            "Anda memiliki hak untuk:",
            "• Mengakses informasi pribadi yang kami simpan tentang Anda",
            "• Meminta koreksi atas informasi yang tidak akurat",
            "• Meminta penghapusan informasi pribadi Anda",
            "• Menolak pemrosesan informasi untuk tujuan pemasaran",
            "• Menarik persetujuan yang telah diberikan sebelumnya",
        ],
    },
    {
        title: "7. Perubahan Kebijakan",
        content: [
            "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal efektif yang diperbarui. Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala.",
        ],
    },
    {
        title: "8. Hubungi Kami",
        content: [
            "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:",
            "• Email: axoindotechsolution@gmail.com",
            "• Telepon: +62 895 3188 7799",
            "• Alamat: Bekasi, Jawa Barat, Indonesia",
        ],
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-white">Kebijakan </span>
                            <span className="gradient-text">Privasi</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Kami berkomitmen untuk melindungi privasi dan keamanan data Anda.
                            Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
                            dan melindungi informasi Anda.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Terakhir diperbarui: Februari 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="mb-10"
                            >
                                <div className="glass rounded-2xl p-8">
                                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-2">
                                        {section.content.map((paragraph, pIndex) => (
                                            <p
                                                key={pIndex}
                                                className={`text-gray-400 ${paragraph.startsWith("•") ? "pl-4" : ""
                                                    }`}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
