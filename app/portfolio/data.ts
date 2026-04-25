export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  link: string;
  // Extended fields used in the detail page
  duration: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  results: { label: string; value: string }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const categories = [
  "Semua",
  "Web Development",
  "Mobile App",
  "Custom System",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "mediator-marketplace-inspeksi-mobil",
    title: "Mediator.com Marketplace & Inspeksi Mobil",
    category: "Web Development",
    description:
      "Platform web marketplace mobil bekas terintegrasi dengan layanan inspeksi profesional, kalkulator harga, dan sistem master data kendaraan.",
    image: "/PorfolioProjek/Mediator/2.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    client: "Mediator.com",
    year: "2026",
    link: "#",
    duration: "4 Bulan",
    role: "Full-Stack Web Development",
    overview:
      "Mediator.com adalah platform web yang menjadi jembatan antara penjual dan pembeli mobil bekas dengan dukungan layanan inspeksi mobil profesional. Kami membangun website mulai dari halaman beranda yang menonjolkan jasa inspeksi mobil terpercaya, halaman marketplace dengan filter pencarian, kalkulator estimasi harga mobil bekas, hingga modul inspeksi mobil sebelum membeli.",
    challenge:
      "Klien membutuhkan sistem yang dapat menggabungkan tiga fungsi utama dalam satu platform: jual beli mobil, kalkulator harga otomatis berdasarkan merek/tipe/tahun/kondisi, dan booking inspeksi mobil. Tampilan harus modern, ramah pengguna, dan mudah dikelola oleh admin melalui menu Master Data.",
    solution:
      "Kami merancang arsitektur modular dengan komponen reusable, filter dinamis untuk marketplace, form bertingkat untuk kalkulator harga, serta dashboard admin untuk mengelola merek, model, dan paket inspeksi. UI dibuat dengan tema biru bersih agar memberi kesan profesional dan terpercaya.",
    features: [
      "Marketplace mobil dengan filter merek, harga, tahun, dan transmisi",
      "Halaman detail mobil dengan tag kondisi (Bekas/Tangan Pertama)",
      "Kalkulator harga mobil bekas berdasarkan kondisi & kepemilikan",
      "Modul Inspeksi Mobil dengan 150+ poin pemeriksaan",
      "Statistik live: jumlah inspeksi, rating teknisi, sertifikat digital",
      "Master Data untuk admin (merek, model, paket inspeksi)",
      "Dark/Light mode untuk kenyamanan pengguna",
      "Responsive design untuk desktop dan mobile",
    ],
    results: [
      { label: "Mobil Tersedia", value: "4+" },
      { label: "Brand Mitra", value: "8+" },
      { label: "Inspeksi Selesai", value: "1000+" },
      { label: "Rating Teknisi", value: "4.9/5" },
    ],
    gallery: [
      "/PorfolioProjek/Mediator/1.png",
      "/PorfolioProjek/Mediator/2.png",
      "/PorfolioProjek/Mediator/3.png",
      "/PorfolioProjek/Mediator/4.png",
      "/PorfolioProjek/Mediator/5.png",
    ],
    testimonial: {
      quote:
        "Tim AxoIndoSolution sangat memahami kebutuhan kami. Website Mediator.com sekarang menjadi pusat seluruh aktivitas marketplace dan inspeksi mobil kami dalam satu platform.",
      author: "Tim Mediator.com",
      position: "Founder, Mediator.com",
    },
  },
  {
    id: 2,
    slug: "aplikasi-mediator-mobil-bekas",
    title: "Aplikasi Mediator Mobil Bekas",
    category: "Mobile App",
    description:
      "Aplikasi mobile untuk mediator jual beli mobil bekas dengan fitur marketplace per merek, kalkulator harga, dan booking jasa inspeksi.",
    image: "/PorfolioProjek/AplikasiMarketplace/1.jpeg",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind",
      "REST API",
      "Firebase",
    ],
    client: "Mediator.com",
    year: "2026",
    link: "#",
    duration: "3 Bulan",
    role: "Mobile App Development",
    overview:
      "Aplikasi mobile pendamping platform Mediator.com yang memudahkan pengguna menemukan mobil bekas, mengecek estimasi harga, dan memesan jasa inspeksi langsung dari smartphone. Aplikasi memiliki bottom navigation dengan 4 menu utama: Home, Kalkulator, Inspeksi, dan Profil.",
    challenge:
      "Tantangan utama adalah membuat experience mobile yang ringan namun tetap memuat fitur lengkap: pencarian mobil per merek dengan logo (Ford, Daihatsu, Honda, Mazda, Mitsubishi, Nissan, Suzuki, Toyota), banner penawaran spesial, kalkulator harga interaktif, dan paket inspeksi dengan harga transparan.",
    solution:
      "Kami menggunakan React Native dengan Expo untuk pengembangan lintas platform yang cepat. Layout dibuat clean dengan card-based UI, gambar mobil diproses dengan lazy loading, serta personalisasi sapaan (\"Halo Hamzah\") untuk meningkatkan engagement. Bottom navigation memastikan navigasi cepat antar fitur.",
    features: [
      "Beranda dengan sapaan personal & notifikasi",
      "Pencarian mobil dengan filter merek (8 brand utama)",
      "Banner Penawaran Spesial \"Pilihan Mediator\"",
      "Rekomendasi mobil dengan tab kategori per brand",
      "Wishlist/favorit mobil dengan ikon hati",
      "Kalkulator Harga: pilih merk, model, varian, tahun, kondisi",
      "Jasa Inspeksi: paket Basic Rp 350rb dengan 75 titik pengecekan",
      "Profil pengguna dengan riwayat aktivitas",
    ],
    results: [
      { label: "Inspeksi Tersedia", value: "500+" },
      { label: "Inspektor Mitra", value: "50+" },
      { label: "Tingkat Kepuasan", value: "98%" },
      { label: "Brand Terdaftar", value: "8+" },
    ],
    gallery: [
      "/PorfolioProjek/AplikasiMarketplace/1.jpeg",
      "/PorfolioProjek/AplikasiMarketplace/2.jpeg",
      "/PorfolioProjek/AplikasiMarketplace/3.jpeg",
      "/PorfolioProjek/AplikasiMarketplace/4.jpeg",
    ],
    testimonial: {
      quote:
        "Aplikasi mobile ini benar-benar memudahkan pengguna kami. Fitur kalkulator dan inspeksi langsung di genggaman membuat proses jual beli mobil jadi jauh lebih cepat.",
      author: "Tim Mediator.com",
      position: "Product Owner, Mediator.com",
    },
  },
  {
    id: 3,
    slug: "rs-kartika-husada-sistem-absensi",
    title: "Sistem Absensi RS Kartika Husada Setu",
    category: "Custom System",
    description:
      "Sistem informasi karyawan rumah sakit dengan absensi berbasis foto, manajemen lembur, pengajuan cuti, dan slip gaji digital.",
    image: "/PorfolioProjek/ProjekAbsensiRS/2.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "WebRTC Camera API",
    ],
    client: "RS Kartika Husada Setu",
    year: "2026",
    link: "#",
    duration: "5 Bulan",
    role: "Full-Stack Development & UI/UX",
    overview:
      "RSKHS Attendance adalah sistem informasi karyawan internal RS Kartika Husada Setu yang menggantikan absensi manual menjadi digital. Sistem mendukung absensi clock-in/clock-out berbasis foto, pengajuan cuti, pengajuan lembur dengan multi-level approval, hingga generate slip gaji bulanan secara otomatis.",
    challenge:
      "Rumah sakit membutuhkan solusi absensi yang akurat untuk shift pagi, siang, dan malam dengan bukti foto real-time, perhitungan keterlambatan otomatis, serta workflow approval lembur yang melibatkan koordinator. Selain itu, slip gaji harus mencakup komponen pendapatan & potongan sesuai standar penggajian RS (gaji pokok, tunjangan, BPJS, PPh 21, dll).",
    solution:
      "Kami membangun sistem dengan tema dark-green khas rumah sakit, modul absensi menggunakan Camera API untuk capture foto saat clock-in, perhitungan otomatis status (Hadir/Terlambat) dengan selisih menit, dan generator slip gaji PDF lengkap dengan QR code verifikasi. Workflow approval lembur dirancang multi-tahap dari Koordinator.",
    features: [
      "Dashboard karyawan: kehadiran, cuti, lembur, perkiraan pensiun",
      "Clock In/Out dengan foto absensi real-time",
      "Riwayat absensi lengkap dengan foto bukti & status",
      "Filter absensi berdasarkan rentang tanggal",
      "Pengajuan cuti dengan tracking sisa cuti tahunan",
      "Pengajuan lembur dengan approval Koordinator",
      "Modul Penggajian: slip gaji digital dengan komponen lengkap",
      "Sistem login multi-role (Staff, Koordinator, HRD/Admin SDM)",
    ],
    results: [
      { label: "Karyawan Aktif", value: "100+" },
      { label: "Akurasi Absensi", value: "100%" },
      { label: "Hemat Waktu HRD", value: "75%" },
      { label: "Komplain Slip Gaji", value: "-90%" },
    ],
    gallery: [
      "/PorfolioProjek/ProjekAbsensiRS/1.png",
      "/PorfolioProjek/ProjekAbsensiRS/2.png",
      "/PorfolioProjek/ProjekAbsensiRS/3.png",
      "/PorfolioProjek/ProjekAbsensiRS/4.png",
      "/PorfolioProjek/ProjekAbsensiRS/5.png",
      "/PorfolioProjek/ProjekAbsensiRS/6.png",
    ],
    testimonial: {
      quote:
        "Sistem absensi ini sangat membantu kami dalam mengelola kehadiran ratusan karyawan dengan shift yang berbeda-beda. Slip gaji digital juga mempermudah proses penggajian setiap bulannya.",
      author: "Yanuwar Syawaludin, S.A.P",
      position: "HRD / Admin SDM, RS Kartika Husada Setu",
    },
  },
  {
    id: 4,
    slug: "pln-postpaid-sistem-pembayaran-listrik",
    title: "PLN Postpaid - Sistem Pembayaran Listrik",
    category: "Custom System",
    description:
      "Sistem manajemen pembayaran listrik pasca bayar modern dengan dashboard transaksi, manajemen pelanggan, dan cetak struk otomatis.",
    image: "/PorfolioProjek/PLN/1.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "MySQL",
      "Express.js",
    ],
    client: "Loket Pembayaran PLN Postpaid",
    year: "2026",
    link: "#",
    duration: "4 Bulan",
    role: "Full-Stack Development",
    overview:
      "PLN Postpaid adalah platform pembayaran listrik pasca bayar yang dirancang khusus untuk mitra/agen loket pembayaran. Sistem ini mempermudah pengelolaan transaksi, pencatatan data pelanggan PLN, hingga monitoring pendapatan harian secara real-time dalam satu dashboard terintegrasi.",
    challenge:
      "Mitra membutuhkan sistem yang efisien untuk memproses pembayaran tagihan listrik pasca bayar, mencetak struk pembayaran instan, mendukung multi-user dengan role berbeda (kasir, admin, owner), serta memberikan laporan harian otomatis untuk rekonsiliasi pendapatan.",
    solution:
      "Kami membangun dashboard modern dengan tampilan kartu transaksi (Total Transaksi, Pendapatan), modul pembayaran cepat dengan validasi ID Pelanggan PLN, generator struk PDF instan, sistem multi-user dengan role-based access control, serta laporan transaksi harian otomatis yang dapat diunduh.",
    features: [
      "Landing page dengan dashboard preview transaksi & pendapatan",
      "Pembayaran tagihan PLN pasca bayar real-time",
      "Cetak struk pembayaran instan (PDF/printer thermal)",
      "Manajemen data pelanggan PLN (ID, nama, periode tagihan)",
      "Multi-user dengan role berbeda (kasir, admin, owner)",
      "Laporan transaksi harian otomatis",
      "Dashboard monitoring pendapatan & jumlah transaksi",
      "Sistem keamanan berlapis untuk perlindungan data",
    ],
    results: [
      { label: "Pelanggan Terlayani", value: "10K+" },
      { label: "Uptime Sistem", value: "99.9%" },
      { label: "Support", value: "24/7" },
      { label: "Pendapatan Tercatat", value: "Rp 45M+" },
    ],
    gallery: [
      "/PorfolioProjek/PLN/1.png",
      "/PorfolioProjek/PLN/2.png",
      "/PorfolioProjek/PLN/3.png",
      "/PorfolioProjek/PLN/4.png",
      "/PorfolioProjek/PLN/5.png",
    ],
    testimonial: {
      quote:
        "Sistem ini sangat membantu operasional loket kami. Pembayaran jadi lebih cepat, pencatatan otomatis, dan laporan harian tinggal cetak. Sangat efisien!",
      author: "Owner Loket PLN Postpaid",
      position: "Mitra Pembayaran PLN",
    },
  },
  {
    id: 5,
    slug: "cv-mediator-landing-page-dealer",
    title: "CV Mediator Landing Page Dealer Mobil",
    category: "Web Development",
    description:
      "Landing page premium untuk dealer & mediator mobil dengan tema dark elegant, menampilkan layanan jual beli, inspeksi, dan konsultasi pembelian mobil.",
    image: "/PorfolioProjek/SellerCarLandingPage/1.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    client: "CV Mediator",
    year: "2026",
    link: "#",
    duration: "1.5 Bulan",
    role: "Frontend Development & UI/UX Design",
    overview:
      "CV Mediator adalah landing page premium untuk dealer mobil yang berfokus pada citra elegan dan profesional. Landing page menampilkan koleksi mobil terbaru, profil perusahaan, tiga layanan utama (Jual Beli, Jasa Inspeksi, Konsultasi Pembelian), serta informasi kontak lengkap dengan tombol WhatsApp langsung.",
    challenge:
      "Klien menginginkan tampilan yang berbeda dari dealer mobil pada umumnya: dark theme dengan aksen orange yang berkelas, animasi halus, dan layout yang langsung mengarahkan calon pembeli untuk menghubungi via WhatsApp. Konten harus menonjolkan kepercayaan: 500+ mobil terjual, 1000+ mitra, 98% tingkat kepuasan.",
    solution:
      "Kami merancang landing page dengan palet warna gelap (hitam-coklat) dan aksen orange, menggunakan Framer Motion untuk animasi mobil 3D di hero section, layout 3-kolom untuk layanan, serta tombol floating WhatsApp yang selalu terlihat di setiap section. Struktur halaman dioptimasi untuk konversi langsung ke chat WhatsApp.",
    features: [
      "Hero section dengan ilustrasi mobil & koleksi terbaru",
      "Profil perusahaan: Terpercaya, Profesional, Transparan",
      "3 Layanan utama: Jual Beli, Jasa Inspeksi, Konsultasi Pembelian",
      "Modul Inspeksi Mobil Profesional dengan 5 area pemeriksaan",
      "Laporan inspeksi lengkap (mulai Rp 350.000 - 1-2 jam)",
      "Section kontak: alamat, WhatsApp, email, jam operasional",
      "Tombol floating WhatsApp di setiap section",
      "Animasi smooth dengan Framer Motion",
    ],
    results: [
      { label: "Mobil Terjual", value: "500+" },
      { label: "Mitra Inspeksi", value: "1000+" },
      { label: "Tingkat Kepuasan", value: "98%" },
      { label: "Konversi WA Chat", value: "+220%" },
    ],
    gallery: [
      "/PorfolioProjek/SellerCarLandingPage/1.png",
      "/PorfolioProjek/SellerCarLandingPage/2.png",
      "/PorfolioProjek/SellerCarLandingPage/3.png",
      "/PorfolioProjek/SellerCarLandingPage/4.png",
      "/PorfolioProjek/SellerCarLandingPage/5.png",
    ],
    testimonial: {
      quote:
        "Landing page yang dibuat AxoIndoSolution benar-benar mencerminkan brand kami. Tampilan elegan dan dark theme membuat CV Mediator terlihat lebih profesional dibanding kompetitor.",
      author: "Tim CV Mediator",
      position: "Owner, CV Mediator",
    },
  },
  {
    id: 6,
    slug: "stepstyle-ecommerce-sepatu",
    title: "StepStyle - E-Commerce Sepatu",
    category: "Web Development",
    description:
      "Website e-commerce sepatu modern dengan koleksi unggulan, profil brand, testimoni pelanggan, dan integrasi newsletter.",
    image: "/PorfolioProjek/EcommerceSepatu/1.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Stripe",
      "Mailchimp API",
    ],
    client: "StepStyle",
    year: "2026",
    link: "#",
    duration: "2 Bulan",
    role: "Full-Stack Web Development",
    overview:
      "StepStyle adalah e-commerce sepatu yang fokus pada kualitas, kenyamanan, dan style. Kami membangun website mulai dari hero section yang menarik (\"Step Into Style, Walk With Confidence\"), katalog Featured Collection dengan 4+ produk pilihan, halaman Our Story, testimoni pelanggan, hingga form newsletter untuk customer retention.",
    challenge:
      "Klien menginginkan tampilan minimalis namun premium dengan warna ungu sebagai aksen brand. Website harus menampilkan produk sepatu dengan jelas (gambar besar, harga, badge kategori seperti \"sepatu keren\", \"bagus\", \"nike\"), serta menghadirkan storytelling brand yang kuat untuk membangun loyalitas pelanggan.",
    solution:
      "Kami menggunakan Next.js dengan Tailwind CSS untuk performa cepat dan tampilan responsif. Hero menggunakan gradient ungu, katalog produk dibuat dengan card hover effect, section Our Story dilengkapi statistik (500+ Products, 10k+ Happy Customers, 15+ Brand Partners), dan testimoni dengan rating bintang untuk meningkatkan trust.",
    features: [
      "Hero section dengan CTA \"Shop Now\"",
      "Featured Collection dengan badge kategori (sepatu keren, bagus, nike, casual)",
      "Card produk: gambar, nama, kategori, harga, keranjang",
      "Halaman Our Story dengan brand journey sejak 2020",
      "Statistik brand: 500+ produk, 10k+ pelanggan, 15+ brand partners",
      "Section testimoni pelanggan dengan rating 5 bintang",
      "Form berlangganan newsletter di bagian footer",
      "Sistem login & register pelanggan",
    ],
    results: [
      { label: "Produk Terdaftar", value: "500+" },
      { label: "Pelanggan Puas", value: "10K+" },
      { label: "Brand Partners", value: "15+" },
      { label: "Rating Pelanggan", value: "5/5" },
    ],
    gallery: [
      "/PorfolioProjek/EcommerceSepatu/1.png",
      "/PorfolioProjek/EcommerceSepatu/2.png",
      "/PorfolioProjek/EcommerceSepatu/3.png",
      "/PorfolioProjek/EcommerceSepatu/4.png",
    ],
    testimonial: {
      quote:
        "Website StepStyle yang dibangun benar-benar merepresentasikan brand kami. Tampilan bersih, navigasi mudah, dan section testimoni meningkatkan kepercayaan pelanggan baru.",
      author: "Sarah Johnson",
      position: "Founder, StepStyle",
    },
  },
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined =>
  portfolioItems.find((item) => item.slug === slug);

export const getRelatedProjects = (
  currentId: number,
  category: string,
  limit = 3,
): PortfolioItem[] =>
  portfolioItems
    .filter((item) => item.id !== currentId && item.category === category)
    .slice(0, limit);
