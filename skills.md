# skills.md
## Panduan Skill Implementasi: Website Portofolio Responsif & Interaktif (React.js)

Dokumen ini adalah **playbook teknis** untuk membangun website sesuai `design.md` dan `PRD.md`. Isinya kumpulan skill (pola kode) yang harus dikuasai/diikuti oleh developer atau AI coding agent agar hasilnya konsisten, responsif, dan interaktif.

**Cara memakai:** baca `PRD.md` (apa yang dibuat) → `design.md` (tampilan) → dokumen ini (cara membuatnya).

---

## 0. Aturan Utama

1. **Mobile-first.** Tulis gaya dasar untuk layar kecil, lalu tambahkan `md:`/`lg:`.
2. **Konten terpisah dari UI.** Semua teks, link, dan gambar dibaca dari `src/data/*.js`. Jangan menulis konten langsung di komponen.
3. **Komponen kecil & reusable.** Satu komponen, satu tanggung jawab.
4. **Animasi hanya `transform` dan `opacity`**, dan wajib menghormati `prefers-reduced-motion`.
5. **Semantik HTML dulu** (`header`, `nav`, `main`, `section`, `article`, `footer`, `button`, `a`) sebelum ARIA.
6. **Tidak ada scroll horizontal** pada lebar 320px.
7. **Semua elemen interaktif bisa dipakai dengan keyboard** dan punya fokus yang terlihat.
8. **Jangan pakai `localStorage` untuk konten.** Konten statis dari file data.

---

## 1. Setup Proyek

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install framer-motion react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`index.html` (font + meta responsif):

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
```

`src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; scroll-padding-top: 88px; } /* offset navbar */
  body { @apply bg-cream text-ink font-body antialiased; overflow-x: hidden; }
  h1, h2, h3 { text-wrap: balance; }
  :focus-visible { outline: 3px solid #F8D27C; outline-offset: 3px; }
  img { max-width: 100%; height: auto; display: block; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

---

## 2. Skill Responsif

### 2.1 Container & Section

```jsx
// components/layout/Container.jsx
export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 xs:px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

// components/layout/Section.jsx
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative py-12 md:py-20 lg:py-28 overflow-clip ${className}`}>
      {children}
    </section>
  );
}
```

> `overflow-clip` pada section memotong dekorasi absolut yang keluar layar sehingga tidak memicu scroll horizontal.

### 2.2 Tipografi Fluid

```jsx
<h1 className="font-display leading-none text-primary-dark
               text-[clamp(2.75rem,8vw,5.5rem)]">
  Nama<br />Lengkap
</h1>
<p className="font-script text-peach text-[clamp(1.5rem,3vw,2.25rem)] -rotate-2">
  Web Developer &amp; UI Designer
</p>
```

### 2.3 Pola Grid Responsif

```jsx
// Grid project: 1 → 2 → 3 kolom
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">…</div>

// Grid skill: 1 → 2 kolom
<div className="grid gap-6 sm:grid-cols-2">…</div>

// Hero: tumpuk → 2 kolom (visual di atas pada mobile)
<div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
  <HeroText className="order-2 lg:order-1" />
  <HeroVisual className="order-1 lg:order-2" />
</div>
```

### 2.3b Pola Auto-fit (tanpa breakpoint)
```css
.grid-auto { display:grid; gap:1.5rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); }
```

### 2.4 Gambar Responsif

```jsx
<img
  src="/images/projects/p1-800.webp"
  srcSet="/images/projects/p1-480.webp 480w, /images/projects/p1-800.webp 800w, /images/projects/p1-1200.webp 1200w"
  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
  width="800" height="600"
  loading="lazy" decoding="async"
  alt="Tampilan website Freshbite"
  className="aspect-[4/3] w-full object-cover"
/>
```

Gambar hero (di atas lipatan): **jangan** `loading="lazy"`, tambahkan `fetchpriority="high"`.

### 2.5 Menyembunyikan/Mengecilkan Dekorasi

```jsx
<Sparkle className="hidden md:block absolute -left-6 top-10 w-8" aria-hidden />
<Blob className="absolute -right-24 -top-24 w-56 md:w-80 lg:w-[28rem] pointer-events-none" aria-hidden />
```

### 2.4b Hook Ukuran Layar (jika perlu logika JS)

```jsx
// hooks/useMediaQuery.js
import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

// pemakaian
const isDesktop = useMediaQuery("(min-width: 1024px)");
const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

### 2.6 Filter Pills Scroll Horizontal di Mobile

```jsx
<div
  role="group" aria-label="Filter kategori project"
  className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 snap-x snap-proximity
             [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
             md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
>
  {/* FilterPill di sini; tiap pill: className="snap-start shrink-0" */}
</div>
```

---

## 3. Skill Interaktif

### 3.1 Scroll Reveal (Framer Motion)

```jsx
// components/ui/Reveal.jsx
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

Stagger untuk grid:

```jsx
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .5 } } };

<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {skills.map(s => <motion.li key={s.id} variants={item}>…</motion.li>)}
</motion.ul>
```

### 3.2 Filter Project dengan Animasi Layout

```jsx
// components/sections/Projects.jsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "../../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null); // untuk modal detail

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter(p => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="…">
      <div role="group" aria-label="Filter kategori project" className="…">
        {projectCategories.map(cat => (
          <button
            key={cat}
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-5 h-10 text-sm transition-colors
              ${active === cat
                ? "bg-peach text-primary-dark border-peach"
                : "border-cream/45 text-cream hover:bg-cream/10"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">{filtered.length} project ditampilkan</p>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map(p => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: .96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: .96 }}
              transition={{ duration: .3 }}
            >
              <ProjectCard project={p} onOpen={() => setSelected(p)} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
```

### 3.3 Kartu Project (Hover Interaktif)

```jsx
export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-[20px] bg-white text-left shadow-card
                 transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover
                 focus-visible:-translate-y-1.5"
    >
      <div className="overflow-hidden">
        <img src={project.thumbnail} alt="" loading="lazy"
             className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <h3 className="font-bold text-primary-dark">{project.title}</h3>
          <p className="text-sm text-ink/70">{project.category}</p>
        </div>
        <span aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-peach text-primary-dark
                         transition-transform duration-300 group-hover:rotate-45">
          ↗
        </span>
      </div>
    </button>
  );
}
```

### 3.4 Tombol dengan Ikon Panah

```jsx
// components/ui/Button.jsx
const variants = {
  primary: "bg-primary text-cream hover:bg-primary-dark",
  secondary: "bg-peach text-primary-dark hover:brightness-105",
  outline: "border border-cream/45 text-cream hover:bg-cream/10",
};

export default function Button({ as: Tag = "a", variant = "primary", children, className = "", ...props }) {
  return (
    <Tag
      {...props}
      className={`group inline-flex h-12 items-center gap-2 rounded-full px-6 font-medium
                  transition duration-200 active:scale-[.98] md:hover:-translate-y-0.5
                  ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
    </Tag>
  );
}
```

### 3.5 Navbar Sticky + Scroll-Spy + Menu Mobile

```jsx
// hooks/useScrollSpy.js
import { useEffect, useState } from "react";

export default function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 }
    );
    ids.forEach(id => { const el = document.getElementById(id); el && observer.observe(el); });
    return () => observer.disconnect();
  }, [ids, offset]);
  return active;
}
```

```jsx
// components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSpy from "../../hooks/useScrollSpy";

const links = [
  { id: "home", label: "Home" }, { id: "about", label: "About" },
  { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" },
  { id: "education", label: "Education" }, { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(links.map(l => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // kunci scroll body & tutup dengan Esc saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${scrolled ? "bg-cream/85 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-8 lg:px-12">
        <a href="#home" className="font-display text-primary text-xl">Logo</a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`}
                 aria-current={active === l.id ? "true" : undefined}
                 className={`text-sm transition-colors hover:text-primary
                   ${active === l.id ? "font-bold text-primary" : "text-ink/80"}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden grid h-11 w-11 place-items-center rounded-full bg-primary text-cream"
                aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-menu"
                onClick={() => setOpen(v => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: .3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 bg-primary text-cream md:hidden">
            <ul className="flex flex-col gap-2 p-6">
              {links.map(l => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)}
                     className="block rounded-xl px-4 py-4 font-display text-2xl hover:bg-cream/10">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

### 3.6 Hitung Naik Statistik (Count-Up)

```jsx
// hooks/useCountUp.js
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function useCountUp(target, duration = 1500) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setValue(target); return; }
    let raf, start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduce]);

  return [ref, value];
}

// StatItem.jsx
export function StatItem({ value, suffix = "", label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-primary-dark">{n}{suffix}</p>
      <p className="text-sm text-ink/80">{label}</p>
    </div>
  );
}
```

### 3.7 Badge "Available" Berputar (SVG textPath)

```jsx
export default function AvailabilityBadge() {
  return (
    <div className="absolute right-0 top-0 h-24 w-24 md:h-32 md:w-32 rounded-full bg-white shadow-card grid place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_20s_linear_infinite] motion-reduce:animate-none" aria-hidden>
        <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
        <text fontSize="9" letterSpacing="2" fill="#0B4A4A" fontFamily="DM Sans" fontWeight="700">
          <textPath href="#circ">TERSEDIA UNTUK PROJECT • TERSEDIA UNTUK PROJECT •</textPath>
        </text>
      </svg>
      <span aria-hidden className="text-2xl">☺</span>
      <span className="sr-only">Tersedia untuk project baru</span>
    </div>
  );
}
```

### 3.8 Parallax Ringan pada Foto Hero

```jsx
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

function ParallaxPhoto({ src, alt }) {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reduce ? 0 : -40]);
  return <motion.img style={{ y }} src={src} alt={alt} fetchpriority="high" className="relative z-10 w-full" />;
}
```

### 3.9 Modal Detail Project (Aksesibel)

```jsx
import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus(); // kembalikan fokus ke pemicu
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-end md:place-items-center bg-primary-dark/70 p-0 md:p-6"
         onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title"
           onClick={(e) => e.stopPropagation()}
           className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-[32px] md:rounded-[32px] bg-cream p-6 md:p-8">
        <button ref={closeRef} onClick={onClose} aria-label="Tutup" className="float-right h-11 w-11 rounded-full bg-primary text-cream">✕</button>
        <h3 id="modal-title" className="font-display text-3xl text-primary">{project.title}</h3>
        {/* gambar, deskripsi, peran, techStack, link demo & repo */}
      </div>
    </div>
  );
}
```

### 3.10 Tombol Kembali ke Atas

```jsx
const [show, setShow] = useState(false);
useEffect(() => {
  const f = () => setShow(window.scrollY > 600);
  window.addEventListener("scroll", f, { passive: true });
  return () => window.removeEventListener("scroll", f);
}, []);

{show && (
  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
          className="fixed bottom-5 right-5 z-40 h-12 w-12 rounded-full bg-peach text-primary-dark shadow-card">
    ↑
  </button>
)}
```

### 3.11 Linimasa Karir & Pendidikan

```jsx
<ol className="relative ml-3 border-l-2 border-secondary/40 space-y-6">
  {items.map(it => (
    <li key={it.id} className="pl-6">
      <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-peach" aria-hidden />
      <article className="rounded-[20px] bg-white p-5 shadow-card">
        <p className="text-xs font-bold text-secondary">{it.start} – {it.end}</p>
        <h3 className="font-bold text-primary-dark">{it.role ?? it.program}</h3>
        <p className="text-sm text-ink/70">{it.company ?? it.institution}</p>
      </article>
    </li>
  ))}
</ol>
```

---

## 4. Skill Aksesibilitas

| Skill | Cara |
|---|---|
| Fokus terlihat | `:focus-visible` global (lihat bagian 1) |
| Skip link | `<a href="#main" className="sr-only focus:not-sr-only …">Lewati ke konten</a>` |
| Landmark | `<header>`, `<nav aria-label>`, `<main id="main">`, `<footer>` |
| Heading | Satu `h1`, lalu `h2` per section, `h3` untuk kartu |
| Ikon tanpa teks | Beri `aria-label`; dekorasi `aria-hidden="true"` |
| Status dinamis | `aria-live="polite"` untuk hasil filter |
| Gerak | `useReducedMotion()` dan `motion-reduce:` |
| Target sentuh | Minimal 44×44px |
| Tautan eksternal | `target="_blank" rel="noopener noreferrer"` + teks/label "(membuka tab baru)" |

---

## 5. Skill Performa

1. **Code-splitting:** muat section berat dan modal dengan `React.lazy` + `Suspense`.
   ```jsx
   const ProjectModal = lazy(() => import("./ProjectModal"));
   ```
2. **Gambar:** WebP/AVIF, `srcSet`, `loading="lazy"` (kecuali hero), dimensi `width`/`height` atau `aspect-ratio`.
3. **Font:** `display=swap`, muat hanya weight yang dipakai, `preconnect`.
4. **Animasi:** hanya `transform`/`opacity`; hindari animasi `width/height/top/left`.
5. **Event scroll:** `{ passive: true }`; untuk deteksi elemen pakai `IntersectionObserver`.
6. **Re-render:** `useMemo` untuk daftar terfilter; `key` stabil (gunakan `id`, bukan indeks).
7. **Ikon:** impor per-ikon (`import { FiArrowUpRight } from "react-icons/fi"`), bukan seluruh paket.
8. **Target:** LCP < 2,5 dtk, CLS < 0,1, bundle awal < 250 KB gzip.

---

## 6. Skill SEO & Meta

```html
<title>Nama Lengkap | Web Developer & UI Designer</title>
<meta name="description" content="Portofolio Nama Lengkap: ringkasan karir, keterampilan, project, dan pendidikan." />
<meta property="og:title" content="Nama Lengkap | Portofolio" />
<meta property="og:description" content="Lihat project dan keahlian saya." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#0B4A4A" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

Tambahkan data terstruktur JSON-LD tipe `Person` (nama, pekerjaan, url, sameAs = link sosial).

---

## 7. Skill Pengujian

### 7.1 Matriks Responsif (cek manual / DevTools)

| Lebar | Yang dicek |
|---|---|
| 320 | Tidak ada scroll horizontal, tombol tidak terpotong |
| 360–390 | Hero bertumpuk, filter pills bisa digeser |
| 768 | Grid 2 kolom, menu hamburger → menu desktop |
| 1024 | Hero 2 kolom, grid project 3 kolom |
| 1280–1440 | Container berhenti di 1200px dan tetap di tengah |
| 1920 | Dekorasi tidak aneh/terlalu jauh |
| Landscape ponsel | Menu mobile bisa di-scroll |

### 7.2 Matriks Interaksi

- [ ] Klik menu → scroll mulus ke section dengan offset benar.
- [ ] Menu aktif berubah sesuai posisi scroll.
- [ ] Filter project bekerja; hasil diumumkan oleh `aria-live`.
- [ ] Modal terbuka, fokus masuk ke modal, `Esc` menutup, fokus kembali ke pemicu.
- [ ] Count-up berjalan sekali saat terlihat.
- [ ] Dengan "Reduce motion" aktif, tidak ada rotasi/parallax.
- [ ] Seluruh halaman bisa dinavigasi hanya dengan `Tab`/`Shift+Tab`/`Enter`/`Esc`.

### 7.3 Alat
Lighthouse (target ≥ 90), axe DevTools / WAVE, DevTools device toolbar, uji nyata pada satu perangkat Android dan satu iOS bila memungkinkan.

---

## 8. Pola yang Harus Dihindari

| Hindari | Gantikan dengan |
|---|---|
| Lebar/tinggi tetap dalam px untuk layout utama | `%`, `fr`, `clamp()`, `max-w-*` |
| `100vh` untuk hero di mobile | `min-h-[100svh]` atau `min-h-screen` dengan fallback |
| Konten ditulis langsung di JSX | Data di `src/data/` |
| `div` bisa diklik tanpa peran | `button` / `a` |
| Animasi berulang setiap scroll | `viewport={{ once: true }}` |
| Hover sebagai satu-satunya cara memunculkan info | Sediakan juga di fokus/sentuh |
| Gambar tanpa dimensi | Tambahkan `width`/`height`/`aspect-ratio` |
| Teks peach kecil di atas krem | Gunakan teal gelap untuk teks informatif |
| Dekorasi besar tanpa pemotongan | `overflow-clip` pada section |

---

## 9. Urutan Pengerjaan yang Disarankan

1. Setup Vite, Tailwind, font, token warna (bagian 1).
2. Buat `Container`, `Section`, `Button`, `Reveal`, `SectionTitle`, dan shape SVG.
3. Isi `src/data/*.js` dengan konten sementara.
4. Bangun **Navbar** (3.5) dan **Hero** (2.3, 3.7, 3.8).
5. Bangun **Projects** dengan filter dan modal (3.2, 3.3, 3.9).
6. Bangun **Skills**, **About/Career**, dan **Education** (3.1, 3.11).
7. Bangun **Testimonial + Stats** (3.6) dan **Footer/Contact**.
8. Tambahkan polish: scroll-to-top, skip link, meta SEO.
9. Jalankan pengujian (bagian 7) dan optimasi (bagian 5).
10. Deploy ke Vercel/Netlify.

---

## 10. Definisi Selesai (Definition of Done)

- [ ] Semua section sesuai `design.md` dan konten sesuai `PRD.md`.
- [ ] Responsif dari 320px sampai 1920px tanpa scroll horizontal.
- [ ] Semua interaksi pada bagian 3 berfungsi.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Lighthouse ≥ 90 di semua kategori.
- [ ] Tidak ada error/peringatan di console.
- [ ] Lolos pemeriksaan keyboard & pembaca layar dasar.
- [ ] Sudah dideploy dan dapat diakses publik.
