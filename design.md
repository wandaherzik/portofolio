# design.md
## Spesifikasi Desain Website Portofolio (React.js)

Dokumen ini menerjemahkan gambar referensi `Creative_Portfolio_Website_Design_Inspiration` menjadi spesifikasi desain yang bisa langsung diimplementasikan: design tokens, layout per section, komponen, serta aturan **responsif** dan **interaktif**.

> Nilai warna, ukuran, dan jarak diperkirakan dari gambar. Finalisasi dengan color picker dan pengukuran saat implementasi.

---

## 1. Karakter Visual

| Aspek | Deskripsi |
|---|---|
| **Mood** | Playful, hangat, premium, dan bersahabat |
| **Bentuk** | Organik: arch (lengkung atas), blob, lingkaran, sudut membulat besar |
| **Kontras** | Blok teal gelap berpadu dengan latar krem dan aksen peach/kuning |
| **Tipografi** | Serif tebal untuk judul, script tangan untuk aksen, sans-serif bersih untuk isi |
| **Dekorasi** | Sparkle (bintang 4 sisi), starburst garis, cincin kecil, smiley, squiggle, mahkota doodle |
| **Prinsip** | Banyak ruang kosong, hierarki jelas, setiap section punya satu titik fokus |

---

## 2. Design Tokens

### 2.1 Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | `#0B4A4A` | Blok gelap (Selected Works, Footer), judul, tombol utama, ikon kotak |
| `--color-primary-dark` | `#073535` | Teks utama, hover tombol utama |
| `--color-secondary` | `#3E9C9A` | Latar ilustrasi, blob dekoratif |
| `--color-accent-peach` | `#F9A88B` | Tombol sekunder, filter aktif, tombol panah kartu, script text |
| `--color-accent-yellow` | `#F8D27C` | Panel foto (arch), band testimoni |
| `--color-bg` | `#FDF1EA` | Latar halaman |
| `--color-surface` | `#FFFFFF` | Footer kartu project |
| `--color-text` | `#0B3B3B` | Teks isi |
| `--color-text-on-dark` | `#FDF1EA` | Teks di atas blok teal |
| `--color-border-on-dark` | `rgba(253,241,234,.45)` | Pill outline & ikon sosial di blok gelap |

### 2.2 CSS Variables (siap pakai)

```css
:root {
  /* Warna */
  --color-primary: #0B4A4A;
  --color-primary-dark: #073535;
  --color-secondary: #3E9C9A;
  --color-accent-peach: #F9A88B;
  --color-accent-yellow: #F8D27C;
  --color-bg: #FDF1EA;
  --color-surface: #FFFFFF;
  --color-text: #0B3B3B;
  --color-text-on-dark: #FDF1EA;

  /* Font */
  --font-display: "DM Serif Display", "Playfair Display", Georgia, serif;
  --font-script: "Caveat", "Dancing Script", cursive;
  --font-body: "DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif;

  /* Radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-xl: 48px;
  --radius-pill: 999px;
  --radius-arch: 999px 999px 24px 24px; /* panel foto hero */

  /* Shadow */
  --shadow-card: 0 10px 30px rgba(7, 53, 53, .12);
  --shadow-card-hover: 0 18px 40px rgba(7, 53, 53, .20);

  /* Spacing (skala 4px) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px;

  /* Layout */
  --container-max: 1200px;
  --container-pad: clamp(16px, 5vw, 48px);
  --section-gap: clamp(48px, 8vw, 112px);

  /* Motion */
  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --dur-fast: 150ms;
  --dur-base: 300ms;
  --dur-slow: 600ms;
}
```

### 2.3 Konfigurasi Tailwind (jika memakai Tailwind)

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0B4A4A", dark: "#073535" },
        secondary: "#3E9C9A",
        peach: "#F9A88B",
        sunshine: "#F8D27C",
        cream: "#FDF1EA",
        ink: "#0B3B3B",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        script: ["Caveat", "cursive"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "32px", xl3: "48px" },
      boxShadow: {
        card: "0 10px 30px rgba(7,53,53,.12)",
        "card-hover": "0 18px 40px rgba(7,53,53,.20)",
      },
      screens: { xs: "480px" }, // sm 640, md 768, lg 1024, xl 1280 bawaan
    },
  },
};
```

### 2.4 Tipografi

| Peran | Font | Ukuran fluid | Weight | Catatan |
|---|---|---|---|---|
| Sapaan ("Hello, I'm") | Display | `clamp(1.5rem, 3vw, 2.5rem)` | 400 | Warna `primary` |
| Nama (H1) | Display | `clamp(2.75rem, 8vw, 5.5rem)` | 400 | `line-height: 1`, dua baris |
| Title profesi | Script | `clamp(1.5rem, 3vw, 2.25rem)` | 400 | Warna `peach` |
| H2 section | Display | `clamp(1.5rem, 3vw, 2rem)` | 400 | Diikuti ikon sparkle |
| H3 (judul kartu) | Body | `1rem–1.125rem` | 600–700 | |
| Body | Body | `1rem–1.125rem` | 400 | `line-height: 1.6` |
| Caption/kategori | Body | `.875rem` | 400 | Warna teks 70% |
| Angka statistik | Display | `clamp(1.75rem, 4vw, 2.5rem)` | 400 | |
| Tagline di kartu | Script | `clamp(1.25rem, 2.5vw, 1.75rem)` | 400 | Warna `text-on-dark` |

---

## 3. Layout Global

- **Container:** `max-width: 1200px`, tengah, padding horizontal fluid `--container-pad`.
- **Grid:** 12 kolom pada desktop, gap `24–32px`; 1 kolom pada mobile.
- **Jarak antar-section:** `--section-gap` (48px mobile → 112px desktop).
- **Latar halaman:** `--color-bg` dengan bentuk dekoratif absolut (blob teal kanan atas, blob peach kanan tengah, blob teal/peach pojok bawah). Dekorasi `pointer-events: none` dan `aria-hidden="true"`.

### Breakpoint

| Nama | Lebar | Target |
|---|---|---|
| base | 0–479px | Ponsel kecil |
| `xs` | ≥ 480px | Ponsel besar |
| `md` | ≥ 768px | Tablet |
| `lg` | ≥ 1024px | Laptop |
| `xl` | ≥ 1280px | Desktop |

Pendekatan: **mobile-first** (gaya dasar untuk mobile, ditimpa dengan `min-width`).

---

## 4. Spesifikasi Section (Atas ke Bawah)

### 4.1 Navbar
**Referensi gambar:** logo "Creative Studio" pada pojok kiri atas.

| Elemen | Spesifikasi |
|---|---|
| Logo | Ikon geometris teal + teks dua baris ("Creative / Studio") atau inisial pemilik |
| Menu | Home, About, Skills, Projects, Education, Contact |
| CTA | Tombol pill peach "Hubungi Saya" (desktop) |
| Perilaku | Sticky; setelah scroll > 24px latar menjadi krem blur + bayangan tipis |
| Mobile | Hamburger → panel full-screen/drawer dari kanan dengan menu bertumpuk |

### 4.2 Hero (Identitas Diri)

**Desktop (≥ 1024px):** 2 kolom (±55% teks, ±45% visual).

**Kolom teks (kiri):**
1. Sapaan "Halo, saya" (display, teal).
2. Nama besar dua baris (display, teal sangat gelap).
3. Title profesi (script, peach), miring ringan (`rotate(-2deg)`).
4. Paragraf tagline (maks 40 karakter per baris ±, lebar maks `32ch`–`40ch`).
5. Dua tombol pill: **Lihat Project** (solid teal, ikon ↗) dan **Tentang Saya** (solid peach, ikon ↗).

**Kolom visual (kanan):**
- Foto profil dalam **panel arch kuning** (`border-radius: var(--radius-arch)`), foto memotong keluar sedikit dari bingkai pada bagian bawah.
- **Badge melingkar** "Tersedia untuk Project" di kanan atas foto: lingkaran putih, teks melingkar (SVG `textPath`) dengan smiley di tengah; berputar pelan (20s, linear, infinite).
- **Kartu motto** teal gelap di kiri bawah foto, sudut membulat besar, teks script "Mengubah ide menjadi pengalaman yang menyenangkan ♡".
- **Dekorasi:** starburst teal (kiri atas panel), sparkle peach di dekat nama, cincin teal kecil di bawah title, blob teal di pojok kanan atas halaman.

**Tablet/Mobile:** satu kolom. Urutan: foto (arch lebih kecil, lebar ±70%) → sapaan → nama → title → tagline → tombol. Tombol berdampingan jika muat, jika tidak bertumpuk lebar penuh. Badge dan kartu motto mengecil (±70%) dan tetap menempel di foto.

### 4.3 Selected Works (Project)

**Referensi gambar:** panel teal gelap besar bersudut membulat dengan 3 kartu.

| Elemen | Spesifikasi |
|---|---|
| Wadah | Latar `primary`, `border-radius: var(--radius-lg)`, padding `clamp(20px, 4vw, 40px)` |
| Header | Judul "Karya Pilihan" + sparkle peach (kiri); filter pills (kanan) |
| Filter pills | `All` (aktif: latar peach, teks teal gelap), lainnya outline krem, teks krem; tinggi 36–40px |
| Grid kartu | 3 kolom (≥1024) · 2 kolom (≥768) · 1 kolom (<768) · gap 20–24px |
| Kartu | Radius `--radius-md`; bagian atas = gambar/mockup (rasio ±4:3), bagian bawah = putih berisi judul (bold), kategori (caption), dan tombol bulat peach berikon panah ↗ di kanan |
| Dekorasi | Squiggle peach menyembul di luar tepi kanan panel |

**Mobile:** filter pills menjadi baris yang bisa di-scroll horizontal (`overflow-x: auto`, `scroll-snap-type: x proximity`, scrollbar disembunyikan). Kartu bertumpuk 1 kolom; alternatif: carousel snap horizontal dengan indikator titik.

### 4.4 What I Do (Keterampilan)

**Referensi gambar:** ilustrasi avatar di kiri, grid 2×2 ikon + teks di kanan.

| Elemen | Spesifikasi |
|---|---|
| Ilustrasi | Avatar/foto dalam blob teal (`secondary`), mahkota doodle kuning di atas, smiley bulat peach di pojok bawah |
| Judul | "Yang Saya Kerjakan" + sparkle peach |
| Grid | 2 kolom × 2 baris pada ≥ 768px; 1 kolom pada < 480px |
| Item | Kotak ikon teal gelap 56–64px (radius 16px, ikon krem) di kiri; judul bold + deskripsi 2–3 baris di kanan |
| Dekorasi | Squiggle peach di sisi kanan, blob teal pojok kanan bawah |

**Skill detail (tambahan untuk portofolio):** di bawah grid, tampilkan chip/tag untuk skill spesifik per kategori (mis. React, Tailwind, Figma) dengan latar putih, border tipis, radius pill.

**Mobile:** ilustrasi di atas (lebar ±60%, tengah), grid item di bawahnya.

### 4.4b Ringkasan Karir & Pendidikan (tambahan di luar gambar)
Gaya disamakan dengan section lain agar konsisten.

- **Ringkasan Karir:** kolom kiri paragraf ringkasan + tombol Unduh CV; kolom kanan **linimasa vertikal**: garis tipis teal, titik bulat peach per item, kartu putih (radius 20px) berisi posisi, perusahaan, periode, dan poin pencapaian.
- **Pendidikan:** kartu serupa dengan ikon topi wisuda dalam kotak teal; urut dari terbaru. Desktop: 2 kolom berdampingan dengan Karir (Karir kiri, Pendidikan kanan) atau bertumpuk bila kontennya panjang.

### 4.5 Testimoni & Statistik (Opsional)

**Referensi gambar:** band kuning lebar bersudut membulat.

| Elemen | Spesifikasi |
|---|---|
| Wadah | Latar `accent-yellow`, radius `--radius-lg`, padding fluid, sparkle putih kecil sebagai dekorasi |
| Kiri | Kutipan (display/serif, ±1.125rem) + avatar bulat + nama (bold, garis bawah) + jabatan |
| Kanan | 3 statistik: angka besar + label; dipisah garis vertikal tipis |

**Mobile:** kutipan di atas, statistik di bawah dalam 3 kolom kecil (angka `1.75rem`); pemisah vertikal tetap bila muat.

### 4.6 Footer / Kontak

**Referensi gambar:** blok teal gelap bersudut atas membulat.

| Kolom | Isi |
|---|---|
| 1 | Headline "Mari buat sesuatu yang *luar biasa!*" (kata "luar biasa" memakai font script peach + sparkle) |
| 2 | "Hubungi Kami": email, lokasi, website dengan ikon outline kecil |
| 3 | "Ikuti Saya": 4 ikon sosial dalam lingkaran outline krem (Behance, Dribbble, Instagram, LinkedIn, atau GitHub) |

Dekorasi blob peach di pojok kanan bawah. **Mobile:** 3 kolom menjadi tumpukan, dipisah garis tipis; ikon sosial tetap satu baris.

---

## 5. Komponen UI

### 5.1 Button

| Varian | Latar | Teks | Hover |
|---|---|---|---|
| `primary` | `--color-primary` | krem | Latar `primary-dark`, naik 2px, panah bergeser 3px ke kanan-atas |
| `secondary` | `--color-accent-peach` | teal gelap | Naik 2px, kecerahan +4% |
| `outline-light` | transparan, border krem | krem | Latar krem 12% |

- Tinggi 48–52px, padding horizontal 24–28px, `border-radius: pill`, ikon ↗ 18px di kanan.
- Fokus: `outline: 3px solid var(--color-accent-yellow); outline-offset: 3px`.
- Area sentuh minimum **44×44px**.

### 5.2 FilterPill
Tinggi 36–40px, padding 16–20px, radius pill. State: default (outline), hover (latar krem 12%), aktif (latar peach, teks teal gelap, `aria-pressed="true"`).

### 5.3 ProjectCard
Struktur: `<article>` → gambar → footer (judul, kategori, tombol panah). Seluruh kartu dapat diklik (link overlay) dan membuka detail.

### 5.4 SkillCard
Kotak ikon 56px + judul + deskripsi. Hover: kotak ikon berputar ±6° dan sedikit membesar (1.05).

### 5.5 TimelineItem
Titik peach 12px, garis 2px `secondary` 40%, kartu putih shadow ringan. Tahun dalam chip kecil.

### 5.6 StatItem
Angka (display) + suffix "+" + label caption. Animasi hitung naik saat terlihat.

### 5.7 SocialIconLink
Lingkaran 44px, border 1.5px krem 45%, ikon 20px. Hover: latar peach, ikon teal gelap, naik 2px.

### 5.8 SectionTitle
Teks display + ikon sparkle peach kecil di akhir; opsional subjudul.

### 5.9 DecorativeShape
Komponen SVG ringan: `Blob`, `Sparkle`, `Starburst`, `Ring`, `Squiggle`, `Smiley`, `Crown`. Posisi absolut, `aria-hidden`, warna dari token, dapat disembunyikan pada mobile bila mengganggu (`hidden md:block`).

---

## 6. Interaksi & Animasi

### 6.1 Ringkasan

| Elemen | Interaksi | Durasi / Easing |
|---|---|---|
| Section | Reveal: fade + naik 24px saat masuk viewport (sekali) | 600ms, `ease-out` |
| Anak dalam grid | Stagger 80–100ms antar item | |
| Teks hero | Nama muncul per baris (slide-up bertingkat) | 700ms |
| Foto hero | Fade + scale 0.96 → 1; sedikit parallax saat scroll | |
| Badge "Available" | Rotasi tak berhenti | 20s linear |
| Sparkle/starburst | Berkedip/berputar halus | 3–6s |
| Tombol | Hover angkat 2px + panah bergeser; klik: scale .98 | 150–200ms |
| Kartu project | Hover: naik 6px, shadow membesar, gambar zoom 1.05 | 300ms |
| Filter project | Kartu keluar/masuk dengan animasi layout (fade + reposisi mulus) | 300ms |
| Angka statistik | Count-up 0 → target | 1500ms |
| Navbar | Berubah gaya saat scroll; menu aktif mengikuti scroll-spy | 200ms |
| Menu mobile | Drawer slide-in + overlay fade, fokus terkunci dalam menu | 300ms |
| Scroll antar-anchor | Smooth scroll dengan offset tinggi navbar | |
| Tombol ke atas | Muncul setelah scroll > 600px | 200ms |

### 6.2 Aturan Interaksi
1. **Hormati `prefers-reduced-motion`**: matikan rotasi, parallax, dan reveal berat; ganti dengan fade sederhana atau tanpa animasi.
2. Animasi hanya memakai properti `transform` dan `opacity` (ramah GPU).
3. Reveal berjalan **sekali** (jangan berulang setiap scroll).
4. Efek hover hanya untuk perangkat yang mendukung: bungkus dengan `@media (hover: hover)`.
5. Semua elemen interaktif punya state: default, hover, focus-visible, active, disabled.
6. Umpan balik klik harus segera (< 100ms).

---

## 7. Aturan Responsif

| Area | < 480 | 480–767 | 768–1023 | ≥ 1024 |
|---|---|---|---|---|
| Container padding | 16px | 20px | 32px | 48px |
| Hero | 1 kolom, foto di atas | 1 kolom | 2 kolom (50/50) | 2 kolom (55/45) |
| Ukuran H1 | ±44px | ±52px | ±64px | ±88px |
| Project grid | 1 kolom | 1–2 kolom | 2 kolom | 3 kolom |
| Filter pills | Scroll horizontal | Scroll horizontal | Wrap | Sebaris dengan judul |
| Skill grid | 1 kolom | 2 kolom | 2 kolom | 2 kolom + ilustrasi |
| Statistik | 3 kolom kecil | 3 kolom | 3 kolom | 3 kolom + pemisah |
| Footer | Bertumpuk | Bertumpuk | 2 kolom | 3 kolom |
| Dekorasi | Sebagian disembunyikan | Dikecilkan | Penuh | Penuh |

**Aturan umum:**
- Gunakan unit relatif (`rem`, `%`, `clamp()`, `fr`); hindari lebar tetap dalam px untuk layout.
- Gambar: `max-width: 100%`, `height: auto`, `aspect-ratio` ditentukan untuk mencegah layout shift; gunakan `srcset`/`sizes` dan format WebP/AVIF.
- Tidak boleh ada scroll horizontal pada `body` di lebar 320px. Dekorasi absolut harus dipotong dengan `overflow: clip` pada wrapper section.
- Teks tidak boleh terpotong; gunakan `text-wrap: balance` untuk judul.
- Uji pada lebar 320, 360, 390, 768, 1024, 1280, 1440, dan 1920px, serta orientasi landscape ponsel.

---

## 8. Aksesibilitas Desain

- Kontras teks normal ≥ **4.5:1** (teks krem di atas teal `#0B4A4A` ±10:1, aman; **teks peach di atas krem kurang kontras**, gunakan hanya untuk teks dekoratif besar seperti script title, bukan teks informatif kecil).
- Teks di atas kuning `#F8D27C` memakai teal gelap (≥ 7:1).
- Fokus keyboard terlihat jelas di semua elemen interaktif.
- Urutan fokus mengikuti urutan visual; menu mobile menjebak fokus saat terbuka dan menutup dengan `Esc`.
- Gambar bermakna memiliki `alt`; dekorasi memakai `alt=""` atau `aria-hidden`.
- Filter project: `role="group"` dengan `aria-label`, tombol memakai `aria-pressed`; hasil filter diumumkan lewat `aria-live="polite"`.
- Satu `h1` (nama), hierarki heading berurutan.
- Ikon-saja (sosial, panah) wajib punya `aria-label`.

---

## 9. Aset yang Dibutuhkan

| Aset | Format | Catatan |
|---|---|---|
| Foto profil (hero) | WebP/PNG transparan | Rasio ±4:5, latar dipotong agar menyatu dengan arch |
| Ilustrasi avatar (What I Do) | SVG/PNG | Opsional; bisa foto kedua atau ilustrasi |
| Thumbnail project | WebP | Rasio 4:3, lebar 800–1200px |
| Ikon skill | SVG (outline, 24px) | Lucide / React Icons |
| Ikon sosial | SVG | Behance, Dribbble, Instagram, LinkedIn, GitHub |
| Bentuk dekoratif | SVG inline | Blob, sparkle, starburst, ring, squiggle, smiley, crown |
| Font | Google Fonts (`display=swap`) | DM Serif Display, Caveat, DM Sans |
| CV | PDF | Untuk tombol unduh |

---

## 10. Pemetaan Komponen React

```
App
├── Navbar
├── Hero
│   ├── HeroText (greeting, name, title, tagline, ButtonGroup)
│   └── HeroVisual (ArchPhoto, AvailabilityBadge, QuoteCard, shapes)
├── About (Career summary + Timeline + CV button)
├── Skills (SkillCard × n + SkillChips + illustration)
├── Projects
│   ├── FilterPills
│   └── ProjectCard × n (+ ProjectModal)
├── Education (TimelineItem × n)
├── Testimonial (TestimonialCard + StatItem × 3)  // opsional
├── Contact / Footer (ContactInfo, SocialLinks)
└── ScrollToTop
```

---

## 11. Checklist Kesesuaian Desain

- [ ] Palet warna dan font sesuai token di bagian 2.
- [ ] Hero memiliki arch kuning, badge berputar, dan kartu motto.
- [ ] Panel Selected Works berlatar teal dengan filter pill dan kartu berfooter putih + tombol panah peach.
- [ ] Section skill berformat grid 2×2 dengan kotak ikon teal gelap.
- [ ] Band testimoni kuning dengan 3 statistik.
- [ ] Footer teal dengan headline script, info kontak, dan ikon sosial.
- [ ] Semua breakpoint pada bagian 7 lolos tanpa scroll horizontal.
- [ ] Semua interaksi pada bagian 6 berfungsi dan mematuhi `prefers-reduced-motion`.
- [ ] Skor aksesibilitas Lighthouse ≥ 90.
