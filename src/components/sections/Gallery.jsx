import { useState, useMemo, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { photoGallery, photoCategories } from '../../data/photos'
import Container from '../layout/Container'
import Section from '../layout/Section'
import Reveal from '../ui/Reveal'
import { Sparkle, Squiggle } from '../ui/shapes'
import { FiMaximize2, FiImage, FiInfo } from 'react-icons/fi'

const PhotoModal = lazy(() => import('../ui/PhotoModal'))

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photoGallery
    return photoGallery.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <Section id="gallery" className="relative py-10 md:py-16 lg:py-20 overflow-clip">
      {/* Decorative Squiggle & Sparkle */}
      <Squiggle
        size={80}
        color="#F8D27C"
        className="absolute left-6 top-16 hidden lg:block opacity-60"
      />
      <Sparkle
        size={32}
        color="#F9A88B"
        className="absolute right-10 top-20 hidden md:block"
      />

      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <Reveal>
            <h2 className="inline-flex items-center gap-2.5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-primary-dark leading-none">
              <span>Photo Gallery</span>
              <Sparkle color="#F9A88B" size={26} className="shrink-0 -mt-1" />
            </h2>
          </Reveal>

          {/* Filter Kategori Foto */}
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-label="Filter kategori galeri foto"
              className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 snap-x snap-proximity [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
            >
              {photoCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`snap-start shrink-0 h-10 px-5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine ${
                    activeCategory === category
                      ? 'bg-peach text-primary-dark border border-peach shadow-sm font-semibold'
                      : 'border border-primary/20 text-ink/80 hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Kotak Petunjuk Modifikasi Foto (Ramah Pengguna) */}
        <Reveal delay={0.15}>
          <div className="mb-8 rounded-2xl bg-sunshine/30 p-4 md:p-5 border border-sunshine flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start sm:items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-sunshine">
                <FiImage className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-sm md:text-base text-primary-dark">
                  Kustomisasi Foto dengan Foto Pilihan Anda
                </h3>
                <p className="text-xs md:text-sm text-ink/80 leading-relaxed">
                  Semua gambar di portofolio ini dapat diganti kapan saja. Simpan file foto Anda di folder{' '}
                  <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-primary font-bold text-xs">
                    public/images/
                  </code>{' '}
                  lalu perbarui jalurnya di{' '}
                  <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-primary font-bold text-xs">
                    src/data/photos.js
                  </code>.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-dark shrink-0 bg-white/70 px-3 py-1.5 rounded-full border border-primary/10 self-start sm:self-auto">
              <FiInfo className="h-3.5 w-3.5 text-secondary" />
              <span>Mudah Diganti</span>
            </span>
          </div>
        </Reveal>

        {/* Status Jumlah Foto */}
        <p className="sr-only" aria-live="polite">
          Menampilkan {filteredPhotos.length} foto dalam kategori {activeCategory}
        </p>

        {/* Grid Kartu Foto */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[22px] bg-white shadow-card border border-primary/5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Gambar Foto dengan trigger klik modal */}
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(item)}
                  aria-label={`Perbesar foto: ${item.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-primary/10 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine block"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    width="600"
                    height="450"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Hover Ikon Perbesar */}
                  <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-peach text-primary-dark shadow-card transform scale-90 group-hover:scale-100 transition-transform">
                      <FiMaximize2 className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Tag Kategori di pojok gambar */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary-dark shadow-sm">
                    {item.category}
                  </span>
                </button>

                {/* Info & Caption Foto */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-base text-primary-dark group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      {item.year && (
                        <span className="text-xs font-bold text-secondary">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Modal Lightbox Foto */}
      <Suspense fallback={null}>
        {selectedPhoto && (
          <PhotoModal
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </Suspense>
    </Section>
  )
}
