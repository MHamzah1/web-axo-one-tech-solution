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
  "UI/UX Design",
  "Custom System",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "tokopedia-style-ecommerce",
    title: "Tokopedia-Style E-Commerce",
    category: "Web Development",
    description:
      "Platform e-commerce full-featured dengan sistem multi-vendor, payment gateway terintegrasi, dan dashboard admin yang komprehensif.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    client: "PT. Digital Commerce Indonesia",
    year: "2024",
    link: "#",
    duration: "6 Bulan",
    role: "Full-Stack Development & Deployment",
    overview:
      "Klien kami membutuhkan platform marketplace yang dapat menampung ribuan vendor dan jutaan produk. Kami membangun platform e-commerce modern dengan arsitektur microservices, fitur multi-vendor, sistem pembayaran multi-channel, dan dashboard analytics real-time untuk mendukung operasional skala besar.",
    challenge:
      "Tantangan utama adalah membangun sistem yang dapat menangani trafik tinggi saat flash sale, sinkronisasi inventory antar vendor, serta integrasi dengan berbagai payment gateway lokal Indonesia (GoPay, OVO, DANA, ShopeePay, Virtual Account, dan QRIS).",
    solution:
      "Kami mengimplementasikan arsitektur scalable berbasis microservices dengan caching layer Redis, queue system untuk transaksi, serta CDN untuk distribusi konten. Sistem dirancang dengan pattern event-driven untuk memastikan konsistensi data antar service.",
    features: [
      "Multi-vendor marketplace dengan dashboard terpisah",
      "Payment gateway terintegrasi (8+ metode pembayaran)",
      "Real-time chat antara pembeli dan penjual",
      "Sistem rating dan review produk",
      "Flash sale & voucher management",
      "Logistic integration (JNE, J&T, SiCepat, AnterAja)",
      "Advanced search dengan filter dinamis",
      "Admin dashboard dengan analytics real-time",
    ],
    results: [
      { label: "Vendor Aktif", value: "1,200+" },
      { label: "Produk Terdaftar", value: "50K+" },
      { label: "Transaksi/Bulan", value: "15K+" },
      { label: "Page Load Speed", value: "1.2s" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    ],
    testimonial: {
      quote:
        "Tim AxoIndoSolution sangat profesional dan responsif. Platform yang dibangun melebihi ekspektasi kami, terutama dari sisi performa dan stabilitas saat flash sale.",
      author: "Budi Santoso",
      position: "CTO, PT. Digital Commerce Indonesia",
    },
  },
  {
    id: 2,
    slug: "healthcare-mobile-app",
    title: "HealthCare Mobile App",
    category: "Mobile App",
    description:
      "Aplikasi kesehatan dengan fitur telemedicine, booking dokter, medical records, dan integrasi dengan wearable devices.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=900&fit=crop",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "WebRTC"],
    client: "HealthApp Indonesia",
    year: "2024",
    link: "#",
    duration: "8 Bulan",
    role: "Mobile Development & Backend",
    overview:
      "Aplikasi kesehatan all-in-one yang menghubungkan pasien dengan dokter melalui konsultasi online, booking janji temu, serta manajemen rekam medis digital. Mendukung integrasi dengan smartwatch untuk monitoring kesehatan harian.",
    challenge:
      "Memastikan keamanan data medis sesuai regulasi, video call yang stabil dengan kualitas HD pada koneksi terbatas, serta UX yang ramah untuk semua kalangan termasuk lansia.",
    solution:
      "Implementasi end-to-end encryption untuk semua komunikasi, adaptive bitrate streaming untuk video call, serta UI yang dirancang dengan font besar dan kontras tinggi untuk aksesibilitas optimal.",
    features: [
      "Konsultasi dokter via video call HD",
      "Booking janji temu di klinik mitra",
      "Rekam medis digital terintegrasi",
      "Resep obat & pengiriman ke apotek",
      "Integrasi wearable (Apple Watch, Fitbit, Garmin)",
      "Reminder minum obat & jadwal kontrol",
      "Artikel kesehatan dari dokter spesialis",
      "Asuransi kesehatan terintegrasi",
    ],
    results: [
      { label: "Active Users", value: "85K+" },
      { label: "Konsultasi/Bulan", value: "12K+" },
      { label: "Dokter Terdaftar", value: "500+" },
      { label: "App Store Rating", value: "4.8/5" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop",
    ],
    testimonial: {
      quote:
        "Aplikasi yang dibuat sangat membantu kami menjangkau pasien di seluruh Indonesia. Performa stabil dan feedback user sangat positif.",
      author: "dr. Sarah Wijaya",
      position: "Founder, HealthApp Indonesia",
    },
  },
  {
    id: 3,
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description:
      "Redesign dashboard untuk platform fintech dengan fokus pada user experience dan data visualization yang intuitif.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    technologies: ["Figma", "React", "D3.js", "Tailwind", "Framer Motion"],
    client: "FinanceHub",
    year: "2023",
    link: "#",
    duration: "3 Bulan",
    role: "UI/UX Design & Frontend",
    overview:
      "Redesign menyeluruh dashboard fintech yang sebelumnya kompleks dan sulit dipahami pengguna. Kami melakukan user research mendalam dan menghasilkan design system yang konsisten serta data visualization yang mudah dimengerti.",
    challenge:
      "Menyajikan data finansial yang kompleks (portfolio, saham, crypto, reksadana) dalam tampilan yang clean dan mudah dipahami investor pemula maupun profesional.",
    solution:
      "Mengembangkan design system modular dengan komponen yang reusable, dashboard customizable berdasarkan preferensi user, serta interactive charts dengan tooltips kontekstual.",
    features: [
      "Dashboard customizable dengan drag & drop widget",
      "Real-time data visualization dengan D3.js",
      "Dark/Light mode support",
      "Multi-currency portfolio tracking",
      "AI-powered investment insights",
      "Export laporan (PDF, Excel, CSV)",
      "Mobile responsive design",
      "Accessibility compliant (WCAG 2.1 AA)",
    ],
    results: [
      { label: "Task Completion", value: "+47%" },
      { label: "User Satisfaction", value: "9.2/10" },
      { label: "Time on Dashboard", value: "+62%" },
      { label: "Support Ticket", value: "-38%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=900&fit=crop",
    ],
  },
  {
    id: 4,
    slug: "iot-management-platform",
    title: "IoT Management Platform",
    category: "Custom System",
    description:
      "Platform monitoring dan management untuk perangkat IoT industri dengan real-time analytics dan predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
    technologies: [
      "React",
      "Python",
      "MQTT",
      "TimescaleDB",
      "Docker",
      "Kubernetes",
    ],
    client: "Smart Factory Co.",
    year: "2023",
    link: "#",
    duration: "10 Bulan",
    role: "Full-Stack Development & DevOps",
    overview:
      "Sistem pengelolaan ribuan sensor IoT di pabrik manufaktur dengan analitik real-time, alerting otomatis, dan algoritma predictive maintenance untuk mencegah kerusakan mesin.",
    challenge:
      "Menangani jutaan event sensor per detik, memberikan insight prediktif untuk maintenance, dan menyediakan dashboard yang dapat diakses dari berbagai lokasi pabrik.",
    solution:
      "Arsitektur event-driven dengan MQTT broker dan TimescaleDB untuk time-series data, machine learning model untuk anomaly detection, dan PWA dashboard yang dapat diakses offline.",
    features: [
      "Real-time monitoring 5,000+ sensor",
      "Predictive maintenance dengan ML",
      "Custom alert rules engine",
      "Multi-tenant architecture",
      "Historical data analytics",
      "Mobile app untuk teknisi lapangan",
      "Integration dengan SAP & ERP existing",
      "Role-based access control",
    ],
    results: [
      { label: "Downtime Reduction", value: "-65%" },
      { label: "Sensor Connected", value: "5,200+" },
      { label: "Cost Savings/Year", value: "$2.3M" },
      { label: "Uptime SLA", value: "99.95%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=900&fit=crop",
    ],
    testimonial: {
      quote:
        "Platform IoT ini menyelamatkan kami dari downtime yang merugikan. ROI tercapai dalam 8 bulan pertama.",
      author: "Hendra Wijaya",
      position: "Operations Director, Smart Factory Co.",
    },
  },
  {
    id: 5,
    slug: "food-delivery-app",
    title: "Food Delivery App",
    category: "Mobile App",
    description:
      "Aplikasi food delivery dengan fitur real-time tracking, payment integration, dan restaurant management system.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&h=900&fit=crop",
    technologies: [
      "React Native",
      "Node.js",
      "Redis",
      "Google Maps",
      "Socket.IO",
    ],
    client: "FoodExpress",
    year: "2023",
    link: "#",
    duration: "5 Bulan",
    role: "Mobile & Backend Development",
    overview:
      "Aplikasi food delivery dengan tiga sisi: pelanggan, driver, dan restoran. Mendukung tracking real-time, sistem pembayaran multi-channel, dan dashboard manajemen restoran yang komprehensif.",
    challenge:
      "Sinkronisasi real-time antara order, driver, dan restoran dengan latensi minimal, serta optimasi rute pengiriman untuk efisiensi waktu dan biaya.",
    solution:
      "Implementasi WebSocket untuk komunikasi real-time, algoritma routing menggunakan Google Maps API, dan caching cerdas untuk data restoran yang sering diakses.",
    features: [
      "Real-time order tracking dengan peta",
      "Sistem rating untuk driver dan restoran",
      "Multi-payment (e-wallet, kartu, COD)",
      "Promo & voucher otomatis",
      "Live chat customer service",
      "Reorder favorite menu",
      "Restaurant dashboard dengan analytics",
      "Driver app dengan navigasi turn-by-turn",
    ],
    results: [
      { label: "Active Users", value: "120K+" },
      { label: "Order/Hari", value: "5K+" },
      { label: "Driver Aktif", value: "800+" },
      { label: "Rating App Store", value: "4.7/5" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop",
    ],
  },
  {
    id: 6,
    slug: "corporate-website-redesign",
    title: "Corporate Website Redesign",
    category: "Web Development",
    description:
      "Website company profile modern dengan animasi interaktif, multilingual support, dan CMS yang mudah digunakan.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    technologies: ["Next.js", "Strapi", "Tailwind", "GSAP", "Vercel"],
    client: "Global Corporation",
    year: "2024",
    link: "#",
    duration: "3 Bulan",
    role: "Frontend Development & CMS Setup",
    overview:
      "Redesign website korporat dengan pendekatan modern, performance-first, dan SEO optimal. Mendukung 5 bahasa dan dilengkapi headless CMS sehingga tim marketing dapat update konten secara mandiri.",
    challenge:
      "Menggantikan website lama yang lambat dan sulit dikelola, menampilkan brand identity baru, serta optimasi untuk SEO global di 5 negara berbeda.",
    solution:
      "Build dengan Next.js untuk static generation dan ISR, headless CMS Strapi untuk fleksibilitas konten, animasi GSAP yang performant, dan struktur SEO multilingual yang optimal.",
    features: [
      "Multi-language support (EN, ID, ZH, JA, KO)",
      "Headless CMS untuk konten dinamis",
      "Animasi interaktif dengan GSAP",
      "SEO optimization per region",
      "Blog system terintegrasi",
      "Career page dengan ATS",
      "Newsletter integration",
      "Lighthouse score 98+",
    ],
    results: [
      { label: "Page Speed", value: "0.8s" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Organic Traffic", value: "+215%" },
      { label: "Bounce Rate", value: "-42%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop",
    ],
  },
  {
    id: 7,
    slug: "hr-management-system",
    title: "HR Management System",
    category: "Custom System",
    description:
      "Sistem HRIS lengkap dengan fitur payroll, attendance, leave management, dan performance tracking.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
    client: "PT. Maju Bersama",
    year: "2023",
    link: "#",
    duration: "7 Bulan",
    role: "Full-Stack Development",
    overview:
      "Sistem HRIS terintegrasi untuk perusahaan dengan 500+ karyawan. Mengelola seluruh aspek HR mulai dari rekrutmen, onboarding, payroll, hingga performance review dalam satu platform.",
    challenge:
      "Mengkonsolidasikan berbagai sistem HR yang terpisah menjadi satu platform, otomasi perhitungan payroll dengan komponen pajak Indonesia (PPh 21, BPJS), serta workflow approval yang fleksibel.",
    solution:
      "Modular architecture yang memungkinkan klien aktifkan/nonaktifkan modul sesuai kebutuhan, engine perhitungan payroll yang configurable, dan workflow builder untuk approval flow.",
    features: [
      "Employee self-service portal",
      "Attendance dengan face recognition",
      "Payroll otomatis (PPh 21, BPJS, THR)",
      "Leave management & cuti tahunan",
      "Performance review 360°",
      "Recruitment & ATS terintegrasi",
      "E-learning module",
      "Reimbursement & expense management",
    ],
    results: [
      { label: "Karyawan Terkelola", value: "520+" },
      { label: "Time Saved/Bulan", value: "180 jam" },
      { label: "Error Payroll", value: "-95%" },
      { label: "User Adoption", value: "98%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop",
    ],
  },
  {
    id: 8,
    slug: "travel-booking-platform",
    title: "Travel Booking Platform",
    category: "Web Development",
    description:
      "Platform booking travel all-in-one untuk hotel, flight, dan experiences dengan recommendation engine.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS", "Elasticsearch"],
    client: "TravelEase",
    year: "2024",
    link: "#",
    duration: "9 Bulan",
    role: "Full-Stack Development & Cloud Architecture",
    overview:
      "Platform booking travel komprehensif yang mengintegrasikan inventaris hotel, penerbangan, dan aktivitas wisata. Dilengkapi recommendation engine berbasis AI untuk personalisasi experience.",
    challenge:
      "Integrasi dengan multiple supplier API (GDS, hotel chains, OTA), pencarian cepat di jutaan inventory, serta personalisasi rekomendasi berdasarkan preferensi user.",
    solution:
      "Arsitektur GraphQL untuk fleksibilitas query, Elasticsearch untuk pencarian instan, machine learning untuk recommendation engine, dan caching multi-layer untuk respons cepat.",
    features: [
      "Search engine multi-kategori (hotel, flight, activity)",
      "AI-powered recommendation",
      "Bundle package builder",
      "Loyalty program & reward points",
      "Multi-currency & multi-language",
      "Mobile-first responsive design",
      "Itinerary planner",
      "Review & rating system",
    ],
    results: [
      { label: "Booking/Bulan", value: "8K+" },
      { label: "Search Response", value: "<200ms" },
      { label: "Conversion Rate", value: "+34%" },
      { label: "User Retention", value: "67%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop",
    ],
  },
  {
    id: 9,
    slug: "banking-app-redesign",
    title: "Banking App Redesign",
    category: "UI/UX Design",
    description:
      "Complete redesign mobile banking app dengan fokus pada accessibility dan user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop",
    technologies: ["Figma", "Principle", "User Research", "Lottie"],
    client: "Bank Digital Indonesia",
    year: "2024",
    link: "#",
    duration: "4 Bulan",
    role: "UX Research & UI Design",
    overview:
      "Redesign aplikasi mobile banking yang berfokus pada kemudahan penggunaan untuk seluruh segmen pengguna, termasuk lansia dan pengguna dengan disabilitas. Hasil riset mendalam menghasilkan design yang intuitif dan inklusif.",
    challenge:
      "Aplikasi sebelumnya memiliki tingkat completion rate yang rendah pada transaksi penting. Banyak fitur tersembunyi dan navigasi yang membingungkan untuk segmen pengguna tertentu.",
    solution:
      "Information architecture baru berdasarkan user journey mapping, design system yang accessibility-first, serta micro-interactions yang membantu user memahami feedback sistem.",
    features: [
      "Bottom navigation yang intuitif",
      "Quick actions untuk transaksi sering",
      "Voice command support",
      "Large text mode untuk lansia",
      "Biometric authentication",
      "In-app onboarding interaktif",
      "Smart notification center",
      "Visual transaction history",
    ],
    results: [
      { label: "Task Success Rate", value: "+58%" },
      { label: "Time to Transfer", value: "-43%" },
      { label: "User Satisfaction", value: "9.4/10" },
      { label: "App Store Rating", value: "4.8/5" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=900&fit=crop",
    ],
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
