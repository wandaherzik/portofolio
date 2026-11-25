# Product Requirements Document (PRD)
## Website Portofolio Pribadi — React.js

| Item | Detail |
|---|---|
| **Nama Produk** | Personal Portfolio Website |
| **Versi Dokumen** | 1.0 |
| **Tanggal** | 15 November 2026 |
| **Platform** | Web (responsive: mobile, tablet, desktop) |
| **Teknologi Utama** | React.js |
| **Referensi Desain** | Gambar `Creative_Portfolio_Website_Design_Inspiration` (gaya playful, premium, warna teal–peach–kuning) |
| **Status** | Draft |

---

## 1. Ringkasan Produk

Website portofolio satu halaman (single-page) yang memperkenalkan pemilik secara profesional. Website menampilkan **identitas diri, ringkasan karir, daftar keterampilan, contoh project, dan riwayat pendidikan**. Tujuannya membuat pengunjung (rekruter, klien, kolaborator) cepat memahami siapa pemilik, apa keahliannya, dan bukti hasil kerjanya, lalu menghubungi pemilik.

### 1.1 Latar Belakang
Portofolio yang rapi dan menarik meningkatkan kepercayaan calon klien atau perekrut. Referensi desain menunjukkan pendekatan visual yang hangat, modern, dan berkarakter, sehingga website bukan sekadar CV online tetapi juga representasi personal brand.

### 1.2 Tujuan (Goals)
1. Menampilkan profil dan personal branding secara jelas dalam < 5 detik pertama.
2. Menyajikan ringkasan karir, keterampilan, dan pendidikan secara terstruktur.
3. Memamerkan project terpilih dengan detail yang meyakinkan.
4. Memudahkan pengunjung menghubungi pemilik (CTA jelas).
5. Konten mudah diperbarui tanpa mengubah komponen UI (data terpisah dari tampilan).

### 1.3 Non-Goals (Di Luar Cakupan v1.0)
- Sistem login / dashboard admin.
- Blog atau CMS penuh.
- Backend khusus dan database.
- Fitur e-commerce atau pembayaran.

### 1.4 Target Pengguna
| Persona | Kebutuhan |
|---|---|
| **Rekruter / HR** | Melihat ringkasan karir, skill, dan pendidikan dengan cepat; mengunduh CV. |
| **Calon klien** | Melihat kualitas project dan cara menghubungi pemilik. |
| **Kolaborator / sesama profesional** | Memahami spesialisasi dan melihat link karya (GitHub, Behance, dll). |

### 1.5 Indikator Keberhasilan
- Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO).
- Waktu muat halaman awal (LCP) < 2,5 detik pada koneksi 4G.
- Seluruh 5 bagian konten wajib tampil dan responsif di lebar 360px hingga 1440px.
- Tombol kontak dan unduh CV berfungsi 100%.

---

## 2. Ruang Lingkup Konten

Informasi yang wajib ada pada website:

1. **Identitas Diri**
2. **Ringkasan Karir**
3. **Daftar Keterampilan**
4. **Contoh Project**
5. **Riwayat Pendidikan**

Bagian pendukung: Navigasi, Kontak/Footer, dan (opsional) Testimoni & Statistik.

---

## 3. Arsitektur Informasi

Single-page dengan navigasi anchor (smooth scroll).

```
Navbar (sticky)
│
├── 1. Hero / Identitas Diri         #home
├── 2. Ringkasan Karir               #about
├── 3. Keterampilan                  #skills
├── 4. Project Terpilih              #projects
├── 5. Riwayat Pendidikan            #education
├── 6. (Opsional) Testimoni & Statistik
└── 7. Kontak / Footer               #contact
```

Opsional (fase 2): halaman detail project di rute `/projects/:slug` menggunakan React Router.

---

## 4. Kebutuhan Fungsional

### 4.1 Navbar
| ID | Kebutuhan | Prioritas |
|---|---|---|
| NAV-01 | Logo/inisial di kiri dan menu anchor ke setiap bagian. | Must |
| NAV-02 | Navbar sticky dengan latar blur/solid saat di-scroll. | Should |
| NAV-03 | Menu hamburger pada layar < 768px. | Must |
| NAV-04 | Menu aktif ter-highlight sesuai bagian yang sedang terlihat (scroll-spy). | Should |

### 4.2 Hero / Identitas Diri
Mengacu pada bagian atas desain referensi.

| ID | Kebutuhan | Prioritas |
|---|---|---|
| HERO-01 | Menampilkan sapaan ("Halo, saya"), **nama lengkap**, dan **profesi/title** (gaya tulisan script pada title). | Must |
| HERO-02 | Tagline/deskripsi singkat 1–2 kalimat. | Must |
| HERO-03 | Foto profil dengan bingkai berbentuk organik (arch/blob) dan dekorasi bentuk geometris. | Must |
| HERO-04 | Dua tombol CTA: **Lihat Project** (scroll ke #projects) dan **Tentang Saya** (scroll ke #about). | Must |
| HERO-05 | Badge status ketersediaan, mis. "Tersedia untuk Project" (dapat diaktifkan/dinonaktifkan lewat data). | Should |
| HERO-06 | Kartu kutipan/motto pendek di dekat foto. | Could |
| HERO-07 | Informasi identitas tambahan: domisili, email, dan link media sosial. | Must |

### 4.3 Ringkasan Karir
| ID | Kebutuhan | Prioritas |
|---|---|---|
| ABOUT-01 | Paragraf ringkasan profesional (2–4 kalimat) tentang latar belakang, fokus, dan nilai yang dibawa. | Must |
| ABOUT-02 | Linimasa pengalaman kerja (vertikal): posisi, perusahaan, periode, dan 2–4 poin pencapaian. | Must |
| ABOUT-03 | Statistik singkat, mis. jumlah project, jumlah klien, tahun pengalaman (animasi angka naik saat terlihat). | Should |
| ABOUT-04 | Tombol **Unduh CV** (file PDF) dan tautan LinkedIn. | Must |

### 4.4 Keterampilan
Mengacu pada bagian "What I Do" pada desain referensi.

| ID | Kebutuhan | Prioritas |
|---|---|---|
| SKILL-01 | Skill dikelompokkan per kategori (mis. Frontend, Backend, Desain, Tools, Soft Skills). | Must |
| SKILL-02 | Setiap kategori ditampilkan sebagai kartu dengan ikon, judul, dan deskripsi singkat. | Must |
| SKILL-03 | Daftar skill spesifik ditampilkan sebagai tag/chip atau indikator level (mis. Dasar / Menengah / Mahir). | Must |
| SKILL-04 | Animasi masuk ringan saat kartu terlihat di viewport. | Could |

### 4.5 Project Terpilih
Mengacu pada bagian "Selected Works" pada desain referensi.

| ID | Kebutuhan | Prioritas |
|---|---|---|
| PROJ-01 | Menampilkan kartu project dalam grid (3 kolom desktop, 2 tablet, 1 mobile). | Must |
| PROJ-02 | Setiap kartu memuat: gambar/thumbnail, judul, kategori, dan tombol panah menuju detail/link. | Must |
| PROJ-03 | Filter kategori berbentuk pill: **All**, serta kategori lain (mis. Web, Mobile, UI/UX). | Must |
| PROJ-04 | Detail project (modal atau halaman): deskripsi, peran, tech stack, hasil/dampak, link demo dan repositori. | Must |
| PROJ-05 | Efek hover pada kartu (angkat/zoom tipis). | Should |
| PROJ-06 | Lazy-loading gambar project. | Should |

### 4.6 Riwayat Pendidikan
| ID | Kebutuhan | Prioritas |
|---|---|---|
| EDU-01 | Daftar pendidikan berurutan dari terbaru: institusi, jurusan/program, jenjang, periode, dan IPK/nilai (opsional). | Must |
| EDU-02 | Tampilan linimasa atau kartu dengan ikon topi wisuda. | Must |
| EDU-03 | Seksi tambahan untuk sertifikasi / pelatihan / kursus (opsional). | Could |

### 4.7 Testimoni & Statistik (Opsional)
| ID | Kebutuhan | Prioritas |
|---|---|---|
| TEST-01 | Satu atau beberapa kutipan testimoni: isi, nama, jabatan, dan foto. | Could |
| TEST-02 | Blok statistik (mis. 30+ Project, 12+ Klien, 5+ Tahun). | Could |

### 4.8 Kontak & Footer
| ID | Kebutuhan | Prioritas |
|---|---|---|
| CONT-01 | Headline ajakan, mis. "Mari buat sesuatu yang luar biasa". | Must |
| CONT-02 | Informasi kontak: email (mailto), domisili, dan website. | Must |
| CONT-03 | Ikon media sosial (LinkedIn, GitHub, Instagram, Behance, dll) yang terbuka di tab baru. | Must |
| CONT-04 | (Opsional) Formulir kontak dengan validasi dan pengiriman via layanan pihak ketiga (Formspree/EmailJS). | Could |
| CONT-05 | Tombol "Kembali ke atas" dan teks hak cipta. | Should |

---

## 5. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan |
|---|---|
| **Responsif** | Mobile-first; breakpoint 480 / 768 / 1024 / 1280 px. |
| **Performa** | Gambar format WebP/AVIF, lazy-load, code-splitting, bundle awal < 250 KB (gzip). |
| **Aksesibilitas** | Standar WCAG 2.1 AA: kontras warna, navigasi keyboard, atribut `alt`, label ARIA, `prefers-reduced-motion`. |
| **SEO** | Meta title/description, Open Graph, favicon, struktur heading semantik (satu `h1`), `sitemap.xml`, `robots.txt`. |
| **Kompatibilitas** | Dua versi terbaru Chrome, Edge, Firefox, Safari (desktop & mobile). |
| **Keamanan** | Tautan eksternal memakai `rel="noopener noreferrer"`; tidak menyimpan data sensitif di repositori. |
| **Maintainability** | Konten terpisah dari komponen; komponen reusable; ESLint + Prettier. |
| **Bahasa** | Bahasa Indonesia sebagai default; struktur siap untuk i18n (EN) pada fase berikutnya. |

---

## 6. Rekomendasi Teknologi

| Kebutuhan | Pilihan |
|---|---|
| Framework UI | **React.js 18+** (functional components + Hooks) |
| Build tool | **Vite** |
| Styling | **Tailwind CSS** (atau CSS Modules) |
| Animasi | **Framer Motion** |
| Ikon | **React Icons** / Lucide React |
| Routing (opsional) | **React Router v6** |
| Scroll-spy / smooth scroll | `react-scroll` atau Intersection Observer API |
| Formulir (opsional) | EmailJS / Formspree |
| Font | Serif display (mis. *DM Serif Display* / *Playfair Display*), script (mis. *Caveat* / *Dancing Script*), sans-serif body (mis. *DM Sans*) |
| Kualitas kode | ESLint, Prettier |
| Deployment | Vercel / Netlify / GitHub Pages |
| Versi kontrol | Git + GitHub |

---

## 7. Desain & Gaya Visual

Diturunkan dari gambar referensi.

### 7.1 Karakter Desain
Playful namun premium; bentuk organik (arch, blob, lingkaran), sudut membulat besar, dekorasi kecil (bintang, sparkle, smiley), dan kontras antara blok gelap teal dengan latar krem hangat.

### 7.2 Palet Warna (perkiraan dari gambar)

| Peran | Warna | Hex |
|---|---|---|
| Primary (teal gelap) | Blok gelap, judul, tombol utama | `#0B4A4A` |
| Secondary (teal medium) | Latar ilustrasi/aksen | `#3E9C9A` |
| Accent 1 (peach) | Tombol sekunder, ikon, filter aktif | `#F9A88B` |
| Accent 2 (kuning) | Panel foto, blok testimoni | `#F8D27C` |
| Background | Krem hangat | `#FDF1EA` |
| Teks utama | Teal sangat gelap | `#0B3B3B` |

> Nilai hex bersifat perkiraan; finalisasi dilakukan saat implementasi dengan color picker pada gambar referensi.

### 7.3 Tipografi
- **Heading besar (nama):** serif tebal, ukuran fluid (`clamp`) sekitar 40–88 px.
- **Subjudul/title profesi:** font script berwarna peach.
- **Body:** sans-serif, 16–18 px, line-height 1.6.

### 7.4 Komponen UI Utama
`Button` (solid & outline, dengan ikon panah), `Pill/FilterTab`, `ProjectCard`, `SkillCard`, `TimelineItem`, `StatItem`, `TestimonialCard`, `SocialIconLink`, `SectionTitle` (dengan ikon sparkle), `ShapeDecoration`.

### 7.5 Interaksi & Animasi
- Fade/slide-in saat elemen masuk viewport.
- Hover: tombol dan kartu naik sedikit, panah bergeser.
- Hormati `prefers-reduced-motion`.

---

## 8. Model Data Konten

Seluruh konten disimpan di folder `src/data/` agar mudah diubah.

### 8.1 `profile.js` — Identitas Diri
```js
export const profile = {
  name: "Nama Lengkap",
  greeting: "Halo, saya",
  title: "Web Developer & UI Designer",
  tagline: "Saya membuat pengalaman digital yang menarik dan bermanfaat.",
  photo: "/images/profile.webp",
  location: "Padang, Sumatera Barat, Indonesia",
  email: "email@domain.com",
  phone: "+62 8xx-xxxx-xxxx",       // opsional
  website: "domain.com",
  availableForWork: true,
  cvUrl: "/files/CV-Nama-Lengkap.pdf",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/..." },
    { name: "GitHub",   url: "https://github.com/..." },
    { name: "Instagram", url: "https://instagram.com/..." }
  ]
};
```

### 8.2 `career.js` — Ringkasan Karir
```js
export const careerSummary =
  "Ringkasan profesional 2–4 kalimat tentang latar belakang, fokus keahlian, dan nilai yang dibawa.";

export const stats = [
  { label: "Project Selesai", value: 30, suffix: "+" },
  { label: "Klien Puas",      value: 12, suffix: "+" },
  { label: "Tahun Pengalaman", value: 5, suffix: "+" }
];

export const experiences = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Nama Perusahaan",
    location: "Kota / Remote",
    start: "2023-01",
    end: "Sekarang",
    achievements: [
      "Poin pencapaian terukur 1",
      "Poin pencapaian terukur 2"
    ]
  }
];
```

### 8.3 `skills.js` — Keterampilan
```js
export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Membangun antarmuka web yang responsif dan cepat.",
    icon: "monitor",
    skills: [
      { name: "React.js", level: 4 },       // skala 1–5
      { name: "JavaScript (ES6+)", level: 4 },
      { name: "Tailwind CSS", level: 4 }
    ]
  }
  // Tambahkan: Backend, UI/UX Design, Tools, Soft Skills
];
```

### 8.4 `projects.js` — Contoh Project
```js
export const projectCategories = ["All", "Web", "Mobile", "UI/UX"];

export const projects = [
  {
    id: "proj-1",
    slug: "nama-project",
    title: "Nama Project",
    category: "Web",
    thumbnail: "/images/projects/proj-1.webp",
    summary: "Deskripsi singkat 1 kalimat.",
    description: "Deskripsi lengkap: latar belakang, masalah, solusi.",
    role: "Frontend Developer",
    year: 2026,
    techStack: ["React", "Tailwind CSS", "Firebase"],
    results: ["Dampak/hasil terukur"],
    links: { demo: "https://...", repo: "https://github.com/..." },
    featured: true
  }
];
```

### 8.5 `education.js` — Riwayat Pendidikan
```js
export const education = [
  {
    id: "edu-1",
    institution: "Nama Universitas",
    program: "S1 Teknik Informatika",
    start: "2018",
    end: "2022",
    gpa: "3.80 / 4.00",            // opsional
    description: "Fokus studi, organisasi, atau pencapaian (opsional)."
  }
];

export const certifications = [   // opsional
  { id: "cert-1", name: "Nama Sertifikasi", issuer: "Penerbit", year: 2025, url: "https://..." }
];
```

### 8.6 `testimonials.js` — Opsional
```js
export const testimonials = [
  { id: "t-1", quote: "Isi testimoni...", name: "Nama", role: "Jabatan, Perusahaan", photo: "/images/t-1.webp" }
];
```

---

## 9. Struktur Proyek

```
portfolio/
├── public/
│   ├── files/            # CV (PDF)
│   ├── images/           # foto profil, thumbnail project
│   └── favicon.svg
├── src/
│   ├── assets/           # SVG dekorasi, font lokal
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, Section
│   │   ├── ui/           # Button, Pill, Card, SectionTitle
│   │   └── sections/     # Hero, About, Skills, Projects,
│   │                     # Education, Testimonials, Contact
│   ├── data/             # profile, career, skills, projects, education
│   ├── hooks/            # useScrollSpy, useInView, useCountUp
│   ├── pages/            # (opsional) ProjectDetail
│   ├── styles/           # global.css, variabel tema
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 10. Alur Pengguna Utama

1. Pengunjung membuka website → melihat nama, profesi, dan foto pada Hero.
2. Klik **Lihat Project** → halaman scroll ke daftar project → memfilter kategori → membuka detail project.
3. Menelusuri ringkasan karir, keterampilan, dan pendidikan melalui menu atau scroll.
4. Klik **Unduh CV** atau menghubungi via email / media sosial / formulir.

---

## 11. Responsivitas (Panduan Layout)

| Bagian | Mobile (< 768) | Tablet (768–1023) | Desktop (≥ 1024) |
|---|---|---|---|
| Hero | Satu kolom: foto di atas, teks di bawah | Dua kolom proporsional | Dua kolom: teks kiri, foto kanan |
| Project | 1 kolom | 2 kolom | 3 kolom |
| Skills | 1 kolom | 2 kolom | 2–4 kolom |
| Experience & Education | Linimasa satu sisi | Linimasa satu sisi | Linimasa/kartu dua kolom |
| Footer | Bertumpuk | Dua kolom | Tiga kolom |

---

## 12. Rencana Pengerjaan (Milestone)

| Fase | Aktivitas | Estimasi |
|---|---|---|
| **1. Persiapan** | Kumpulkan konten (teks, foto, CV, gambar project); finalisasi palet & font; setup Vite + Tailwind. | 1–2 hari |
| **2. Fondasi UI** | Layout, Navbar, Footer, design tokens, komponen UI dasar. | 2 hari |
| **3. Bagian Konten** | Hero, Ringkasan Karir, Skills, Project (+filter & detail), Pendidikan, Kontak. | 4–6 hari |
| **4. Polishing** | Animasi, scroll-spy, responsif, aksesibilitas. | 2 hari |
| **5. Optimasi & QA** | SEO, performa, uji lintas browser/perangkat, perbaikan bug. | 2 hari |
| **6. Rilis** | Deploy, domain, analitik dasar (opsional). | 1 hari |

Total estimasi: **± 2–3 minggu** (pengerjaan individu paruh waktu).

---

## 13. Kriteria Penerimaan (Acceptance Criteria)

- [ ] Seluruh bagian wajib (Identitas, Ringkasan Karir, Keterampilan, Project, Pendidikan, Kontak) tampil dan sesuai data.
- [ ] Konten dapat diubah hanya dengan mengedit file di `src/data/`.
- [ ] Filter kategori project bekerja dan menampilkan hasil yang benar.
- [ ] Tombol **Unduh CV** mengunduh file PDF yang benar.
- [ ] Navigasi anchor dan menu mobile berfungsi tanpa error.
- [ ] Tampilan rapi pada 360px, 768px, 1024px, dan 1440px.
- [ ] Skor Lighthouse ≥ 90 pada keempat kategori.
- [ ] Dapat dioperasikan penuh dengan keyboard; kontras warna memenuhi WCAG AA.
- [ ] Tidak ada error pada console browser saat build produksi.
- [ ] Website berhasil dideploy dan dapat diakses publik.

---

## 14. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Aset (foto/gambar project) belum siap | Jadwal mundur | Gunakan placeholder; siapkan checklist aset di Fase 1. |
| Gambar berukuran besar | Website lambat | Kompres ke WebP, gunakan lazy-loading dan ukuran responsif. |
| Animasi berlebihan | Performa & aksesibilitas turun | Batasi animasi; dukung `prefers-reduced-motion`. |
| Kontras warna palet pastel kurang | Teks sulit dibaca | Uji kontras; gunakan teal gelap untuk teks. |
| Lingkup melebar (blog, CMS) | Rilis tertunda | Tetapkan non-goals; pindahkan ke fase 2. |

---

## 15. Pengembangan Lanjutan (Fase 2)

- Halaman detail project dengan React Router.
- Dukungan dua bahasa (ID/EN) dan toggle tema gelap/terang.
- Blog/artikel (MDX atau headless CMS).
- Analitik pengunjung dan formulir kontak dengan notifikasi email.
- Animasi lanjutan dan ilustrasi/maskot kustom.

---

## 16. Pertanyaan Terbuka

1. Siapa nama lengkap, profesi/title, dan tagline yang akan digunakan?
2. Apakah website akan bahasa Indonesia saja atau dwibahasa?
3. Berapa jumlah project yang akan ditampilkan, dan apakah setiap project butuh halaman detail sendiri?
4. Apakah testimoni dan statistik akan disertakan?
5. Apakah memakai formulir kontak atau cukup tautan email/media sosial?
6. Apakah sudah memiliki domain dan platform hosting yang diinginkan?

---

*Dokumen ini adalah draft awal dan dapat disesuaikan seiring kebutuhan konten dan masukan pemangku kepentingan.*
