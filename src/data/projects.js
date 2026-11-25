export const projectCategories = ["All", "Web Aplication"];

export const projects = [
  {
    id: "proj-2",
    slug: "Apotek Khadijah",
    title: "Apotek Khadijah",
    category: "Web Aplication",
    thumbnail: "/images/projects/proj-2.png",
    summary: "Identitas visual dan desain kemasan produk teh herbal ramah lingkungan.",
    description: "Pengembangan Aplikasi berbasis web untuk mengelola data stok obat,informasi lengkap obat seperti tanggal masuk, masa berlaku obat, informasi penjualan apotek,serta aplikasi kasir untuk penghitungan penjualan pada apotek",
    role: "Fullstack Developer",
    year: 2026,
    techStack: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    results: [
      "Ringkasan aktivitas apotek, statistik penjualan, dan informasi stok obat.",
      "Pengelolaan data obat, kategori, dan informasi persediaan.", 
      "Pemantauan stok obat dan notifikasi persediaan yang perlu diperhatikan.",
      "Pengelolaan transaksi penjualan dan aktivitas kasir.",
      "Penyajian laporan penjualan berdasarkan periode transaksi."
    ],
    links: {
      demo: "https://leafandco.example.com",
      repo: "https://github.com/wandaherzik/apotek-obat.git",
    },
    featured: true,
  },
  {
    id: "proj-3",
    slug: "wander",
    title: "Sistem Evaluasi Ketenagakerjaan",
    category: "Web Aplication",
    thumbnail: "/images/projects/proj-3.png",
    summary: "Website Kelola data evaluasi Perusahaan dan Tenaga Kerja.",
    description: "Website Kelola data evaluasi Perusahaan dan Tenaga Kerja.",
    role: "Fullstack Web Developer",
    year: 2025,
    techStack: ["PHP", "CSS", "MySQL", "JavaScript"],
    results: [
      "Pengelolaan Informasi perusahaan di Sumatera Barat",
      "Pengelolaan Informasi Tenaga Kerja di Sumatera Barat",
      "Pengelolaan Kuesioner untuk evaluasi Perusahaan dan Tenaga Kerja",
    ],
    links: {
      demo: "https://wander-journeys.example.com",
      repo: "https://github.com/wandaherzik/kuesioner.git",
    },
    featured: true,
  },
  {
    id: "proj-4",
    slug: "konsultasi-online-ai-agent",
    title: "Konsultasi AI Agent",
    category: "Web Aplication",
    thumbnail: "/images/projects/proj-1.png",
    summary: "Aplikasi web konsultasi kesehatan awal dengan asisten AI cerdas.",
    description: "Sistem aplikasi web untuk konsultasi kesehatan awal menggunakan AI Agent sebagai asisten penapisan gejala pasien sebelum terhubung dengan dokter spesialis.",
    role: "Fullstack Developer",
    year: 2026,
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap CSS","AI Agent API"],
    results: [
      "Mempercepat proses triase dan konsultasi awal pasien hingga 50%",
      "Database relasional MySQL terindeks dengan keamanan data medis terjamin",
    ],
    links: {
      demo: "https://sehatikuonline.my.id",
      repo: "https://github.com/wandaherzik/konsultasi-ai-agent.git",
    },
    featured: false,
  },
];
