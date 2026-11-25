/**
 * PANDUAN PENGGANTIAN FOTO:
 * -------------------------------------------------------------
 * 1. Simpan file foto Anda (format .jpg, .png, atau .webp) ke dalam folder:
 *    public/images/
 *    (misalnya: public/images/foto-wanda-1.jpg, public/images/proyek-ai.png, dsb)
 * 2. Ubah properti `src` di bawah ini agar merujuk ke nama file Anda:
 *    Contoh: src: "/images/foto-wanda-1.jpg"
 * 3. Anda juga dapat mengubah `src` foto profil utama pada file:
 *    src/data/profile.js (properti photo)
 * -------------------------------------------------------------
 */

export const photoCategories = ["All", "Profile", "Selected Works", "Visual & 3D"];

export const photoGallery = [
  {
    id: "photo-1",
    title: "Mariana / Wanda - Hero Portrait",
    category: "Profile",
    src: "/images/hero-reference.png", // Ganti dengan foto Anda di public/images/
    caption: "Foto profil visual bergaya editorial dengan turtleneck hijau di panel arch kuning.",
    year: "2026",
  },
  {
    id: "photo-2",
    title: "3D Animated Character & Crown",
    category: "Visual & 3D",
    src: "/images/avatar-3d.png", // Ganti dengan avatar kustom atau foto Anda
    caption: "Karakter 3D ilustrasi 'What I Do' dengan ekspresi mengedipkan mata, pose damai, dan mahkota emas.",
    year: "2026",
  },
  {
    id: "photo-3",
    title: "Freshbite - Healthy Food UI/UX",
    category: "Selected Works",
    src: "/images/projects/freshbite.png",
    caption: "Tampilan antarmuka website Freshbite: clean, playful, dan berfokus pada nutrisi seimbang.",
    year: "2026",
  },
  {
    id: "photo-4",
    title: "Leaf & Co. - Brand Identity & Packaging",
    category: "Selected Works",
    src: "/images/projects/leaf-co.png",
    caption: "Kemasan produk teh alami organik dengan dedaunan palem tropis berestetika ramah lingkungan.",
    year: "2025",
  },
  {
    id: "photo-5",
    title: "Wander - Journeys That Inspire",
    category: "Selected Works",
    src: "/images/projects/wander.png",
    caption: "Landing page eksplorasi perjalanan wisata dan petualangan camper van klasik bernuansa hangat.",
    year: "2025",
  },
  {
    id: "photo-6",
    title: "Konsultasi Online dengan AI Agent",
    category: "Selected Works",
    src: "/images/projects/proj-1.png",
    caption: "Platform web konsultasi awal kesehatan berbasis Laravel terintegrasi asisten AI interaktif.",
    year: "2026",
  },
];
