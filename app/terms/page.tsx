"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Navbar from "@/components/view/Navbar";
import Footer from "@/components/view/Footer";

const sections = [
    {
        title: "1. Penerimaan Syarat",
        content: [
            "Dengan mengakses atau menggunakan layanan AxoIndoTechSolution, Anda menyetujui untuk terikat dengan Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan syarat-syarat ini, mohon untuk tidak menggunakan layanan kami.",
            "Syarat ini berlaku untuk semua pengunjung, pengguna, dan klien yang mengakses layanan kami.",
        ],
    },
    {
        title: "2. Deskripsi Layanan",
        content: [
            "AxoIndoTechSolution menyediakan layanan pengembangan software dan solusi digital, termasuk namun tidak terbatas pada:",
            "• Pengembangan Website dan Aplikasi Web",
            "• Pengembangan Aplikasi Mobile (iOS & Android)",
            "• Desain UI/UX",
            "• Solusi Cloud dan Infrastruktur",
            "• Konsultasi IT dan Transformasi Digital",
            "Detail spesifik layanan akan didefinisikan dalam perjanjian terpisah untuk setiap proyek.",
        ],
    },
    {
        title: "3. Kewajiban Klien",
        content: [
            "Sebagai klien, Anda bertanggung jawab untuk:",
            "• Menyediakan informasi yang akurat dan lengkap untuk keperluan proyek",
            "• Memberikan feedback dan persetujuan tepat waktu sesuai timeline yang disepakati",
            "• Menyediakan konten, materi, dan aset yang diperlukan",
            "• Memastikan bahwa materi yang disediakan tidak melanggar hak kekayaan intelektual pihak ketiga",
            "• Melakukan pembayaran sesuai dengan jadwal yang telah disepakati",
        ],
    },
    {
        title: "4. Hak Kekayaan Intelektual",
        content: [
            "Kecuali ditentukan lain dalam perjanjian tertulis:",
            "• Kami mempertahankan hak atas metodologi, kerangka kerja, dan tool yang kami kembangkan",
            "• Kode sumber dan deliverable proyek menjadi milik klien setelah pembayaran penuh",
            "• Klien memberikan kami izin untuk menampilkan proyek dalam portfolio (kecuali ada kesepakatan kerahasiaan)",
            "• Komponen pihak ketiga tetap tunduk pada lisensi masing-masing",
        ],
    },
    {
        title: "5. Pembayaran dan Penagihan",
        content: [
            "Ketentuan pembayaran untuk layanan kami:",
            "• Struktur pembayaran akan didefinisikan dalam proposal/kontrak proyek",
            "• Pembayaran harus dilakukan sesuai jadwal yang disepakati",
            "• Keterlambatan pembayaran dapat mengakibatkan penundaan proyek",
            "• Semua harga belum termasuk pajak yang berlaku, kecuali dinyatakan lain",
            "• Permintaan perubahan signifikan dapat mempengaruhi biaya dan timeline proyek",
        ],
    },
    {
        title: "6. Jaminan dan Batasan",
        content: [
            "Kami menjamin bahwa:",
            "• Layanan akan dilakukan secara profesional sesuai standar industri",
            "• Deliverable akan sesuai dengan spesifikasi yang disepakati",
            "• Kami akan menyediakan dukungan teknis sesuai perjanjian",
            "",
            "Batasan tanggung jawab:",
            "• Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial",
            "• Total kewajiban kami tidak melebihi jumlah yang dibayarkan untuk layanan terkait",
            "• Kami tidak menjamin bahwa layanan akan bebas dari gangguan atau error",
        ],
    },
    {
        title: "7. Kerahasiaan",
        content: [
            "Kedua belah pihak setuju untuk:",
            "• Menjaga kerahasiaan informasi sensitif yang dibagikan selama proyek",
            "• Tidak mengungkapkan informasi rahasia kepada pihak ketiga tanpa persetujuan tertulis",
            "• Mengembalikan atau menghapus informasi rahasia setelah proyek selesai (jika diminta)",
            "Kewajiban kerahasiaan berlanjut selama 2 tahun setelah berakhirnya proyek.",
        ],
    },
    {
        title: "8. Penghentian Layanan",
        content: [
            "Layanan dapat dihentikan dalam kondisi berikut:",
            "• Oleh salah satu pihak dengan pemberitahuan tertulis 30 hari sebelumnya",
            "• Segera, jika terjadi pelanggaran material yang tidak diperbaiki dalam 15 hari",
            "• Atas kesepakatan bersama kedua belah pihak",
            "Dalam hal penghentian, klien wajib membayar untuk pekerjaan yang telah diselesaikan.",
        ],
    },
    {
        title: "9. Penyelesaian Sengketa",
        content: [
            "Sengketa yang timbul dari layanan kami akan diselesaikan melalui:",
            "• Negosiasi itikad baik antara kedua belah pihak",
            "• Mediasi oleh pihak ketiga yang netral jika negosiasi gagal",
            "• Arbitrasi atau pengadilan di wilayah hukum Indonesia sebagai upaya terakhir",
            "Syarat dan Ketentuan ini diatur oleh hukum yang berlaku di Republik Indonesia.",
        ],
    },
    {
        title: "10. Perubahan Syarat",
        content: [
            "Kami berhak memperbarui Syarat dan Ketentuan ini kapan saja. Perubahan akan diumumkan melalui:",
            "• Pembaruan di halaman ini dengan tanggal efektif baru",
            "• Notifikasi email untuk klien aktif (untuk perubahan signifikan)",
            "Penggunaan berkelanjutan atas layanan kami setelah perubahan merupakan penerimaan atas syarat yang diperbarui.",
        ],
    },
    {
        title: "11. Hubungi Kami",
        content: [
            "Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:",
            "• Email: axoindotechsolution@gmail.com",
            "• Telepon: +62 895 3188 7799",
            "• Alamat: Bekasi, Jawa Barat, Indonesia",
        ],
    },
];

export default function TermsPage() {
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
                            <span className="text-white">Syarat & </span>
                            <span className="gradient-text">Ketentuan</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Syarat dan ketentuan yang mengatur penggunaan layanan
                            AxoIndoTechSolution. Mohon baca dengan seksama sebelum menggunakan
                            layanan kami.
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
                                                    } ${paragraph === "" ? "h-2" : ""}`}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass rounded-2xl p-8 text-center"
                        >
                            <p className="text-gray-400 mb-4">
                                Dengan menggunakan layanan kami, Anda menyatakan telah membaca,
                                memahami, dan menyetujui Syarat dan Ketentuan ini serta{" "}
                                <Link
                                    href="/privacy"
                                    className="text-purple-400 hover:text-purple-300 underline"
                                >
                                    Kebijakan Privasi
                                </Link>{" "}
                                kami.
                            </p>
                            <p className="text-gray-500 text-sm">
                                Dokumen ini merupakan perjanjian yang mengikat secara hukum antara
                                Anda dan AxoIndoTechSolution.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
