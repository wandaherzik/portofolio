import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import ScrollToTop from './components/ui/ScrollToTop'
import { Blob } from './components/ui/shapes'

// Lazy load heavy sections
const Projects = lazy(() => import('./components/sections/Projects'))
const Education = lazy(() => import('./components/sections/Education'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))

function SectionLoadingFallback() {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-peach border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink overflow-x-clip selection:bg-peach selection:text-primary-dark">
      {/* Dekorasi Latar Global (Dipasang aman agar tidak memicu scroll horizontal) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Blob Peach Kanan Tengah */}
        <Blob
          size={500}
          color="#F9A88B"
          className="absolute -right-48 top-1/3 opacity-15"
        />
        {/* Blob Teal Kiri Bawah */}
        <Blob
          size={450}
          color="#3E9C9A"
          className="absolute -left-48 bottom-1/4 opacity-10"
        />
      </div>

      {/* Navigasi Utama Sticky */}
      <Navbar />

      {/* Konten Utama Landmark <main id="main"> */}
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionLoadingFallback />}>
          <Projects />
          <Education />
          <Gallery />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      {/* Tombol Melayang Kembali ke Atas */}
      <ScrollToTop />
    </div>
  )
}
