# Personal Portfolio Website — Wanda Herlia Zikra

Website portofolio pribadi modern, responsif, interaktif, dan berkinerja tinggi untuk **Wanda Herlia Zikra** (Web Developer) yang dibangun dengan **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, dan **React Icons**.

Mengadopsi identitas visual *playful-premium* dengan palet warna hangat (teal gelap, peach, sunshine yellow, dan krem) yang mengacu pada panduan desain di `design.md`, `PRD.md`, dan aturan `prompts.md`.

---

## 📸 Panduan Menambahkan & Memodifikasi Foto Sendiri

Seluruh foto di website ini telah dirancang agar **sangat mudah diganti** dengan foto asli yang Anda inginkan (format `.jpg`, `.png`, atau `.webp`):

### 1. Foto Profil Utama (Hero Section)
1. Letakkan foto Anda di folder: `public/images/` (contoh: `public/images/wanda-profile.jpg` atau `.png`).
2. Buka file [src/data/profile.js](file:///c:/Users/USER/project/portofolio-web/src/data/profile.js).
3. Ubah baris `photo`:
   ```javascript
   photo: "/images/wanda-profile.jpg", // atau .png / .webp
   ```
   *Tips: Foto portrait tanpa latar belakang (transparan) atau latar bersih akan sangat menyatu dengan panel lengkung kuning (arch).*

### 2. Bagian Galeri Foto & Dokumentasi Kegiatan
Website telah dilengkapi dengan section **Galeri & Dokumentasi** (`#gallery`):
1. Masukkan foto-foto kegiatan, coding, kampus, atau wisuda ke dalam folder `public/images/`.
2. Buka file [src/data/photos.js](file:///c:/Users/USER/project/portofolio-web/src/data/photos.js).
3. Anda dapat menambah, menghapus, atau mengubah daftar foto:
   ```javascript
   {
     id: "photo-1",
     title: "Foto Profil Profesional",
     category: "Profil",
     src: "/images/nama-foto-anda.jpg", // Jalur file foto Anda
     caption: "Keterangan foto Anda...",
     year: "2026",
   }
   ```

### 3. Foto Thumbnail Proyek
1. Simpan screenshot/tampilan proyek ke dalam folder `public/images/projects/`.
2. Buka file [src/data/projects.js](file:///c:/Users/USER/project/portofolio-web/src/data/projects.js).
3. Ubah baris `thumbnail`:
   ```javascript
   thumbnail: "/images/projects/screenshot-proyek-1.png",
   ```

---

## 🚀 Fitur Utama Website

- **Identitas & Hero:** Menampilkan Wanda Herlia Zikra (Web Developer, Padang), panel arch foto profil kuning, badge status ketersediaan kerja yang berputar, kartu motto, dan tombol CTA.
- **Ringkasan Karir & Linimasa:** Fokus pada pengembangan aplikasi web PHP, Laravel, MySQL, dan JavaScript, tombol unduh CV PDF, tautan LinkedIn, serta statistik pengalaman.
- **Keahlian Teknis (Skills):** Dikelompokkan ke dalam Backend (PHP & Laravel), Basis Data (MySQL), Frontend (JavaScript & Tailwind), serta Produktivitas & Tools (Microsoft Office, Git).
- **Karya Pilihan (Projects):** Menampilkan proyek unggulan *"Aplikasi Konsultasi Online dengan AI Agent sebagai Asisten"*, Sistem Informasi Akademik, dan POS Inventaris Toko, lengkap dengan filter kategori interaktif dan modal dialog detail.
- **Riwayat Pendidikan:** Fakultas Teknik Universitas Negeri Padang (Lulusan Tahun 2026) dan sertifikasi kompetensi terkait.
- **Galeri Foto & Dokumentasi Interaktif:** Tampilan foto berbingkai rapi dengan filter kategori, tooltip kustomisasi, dan modal pratinjau perbesar (lightbox).
- **Testimoni & Statistik:** Band kuning interaktif kutipan testimoni dengan count-up animasi.
- **Kontak & Footer:** Formulir pesan responsif dengan feedback `aria-live`, tautan email langsung, alamat lokasi Padang, dan ikon sosial media.

---

## 🛠️ Cara Menjalankan Proyek

1. **Pasang Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Server Pengembangan (Dev):**
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173`.

3. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

4. **Pratinjau Hasil Build:**
   ```bash
   npm run preview
   ```

---

## 📁 Struktur Data Konten (`src/data/`)

| File | Konten yang Disesuaikan |
|---|---|
| [src/data/profile.js](file:///c:/Users/USER/project/portofolio-web/src/data/profile.js) | Profil Wanda Herlia Zikra, title, email, lokasi Padang, foto profil, dan CV |
| [src/data/photos.js](file:///c:/Users/USER/project/portofolio-web/src/data/photos.js) | Daftar foto galeri, kategori, judul, caption, dan sumber gambar |
| [src/data/skills.js](file:///c:/Users/USER/project/portofolio-web/src/data/skills.js) | PHP, Laravel, MySQL, JavaScript, Microsoft Office, Git |
| [src/data/projects.js](file:///c:/Users/USER/project/portofolio-web/src/data/projects.js) | Aplikasi Konsultasi AI Agent, SIM Akademik, POS Web Kasir |
| [src/data/education.js](file:///c:/Users/USER/project/portofolio-web/src/data/education.js) | Universitas Negeri Padang, Fakultas Teknik (2026) & Sertifikasi |
| [src/data/career.js](file:///c:/Users/USER/project/portofolio-web/src/data/career.js) | Ringkasan karir & linimasa pengalaman web development |
