import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'
import Container from '../layout/Container'
import Button from '../ui/Button'
import AvailabilityBadge from '../ui/AvailabilityBadge'
import { Sparkle, Starburst } from '../ui/shapes'

export default function Hero() {
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const parallaxY = useTransform(
    scrollY,
    [0, 500],
    [0, shouldReduceMotion ? 0 : -25],
  )

  const nameParts = profile.name.split(' ')
  const firstName = nameParts.slice(0, Math.ceil(nameParts.length / 2)).join(' ')
  const lastName = nameParts.slice(Math.ceil(nameParts.length / 2)).join(' ')

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-clip"
    >
      {/* Bentuk Lengkung Teal Organik di Pojok Kanan Atas seperti pada Gambar Referensi */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 md:-top-20 md:-right-20 w-64 h-64 md:w-80 md:h-80 rounded-bl-[140px] bg-primary opacity-95 z-0"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Sisi Kiri: Teks & Tombol */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left z-10"
          >
            {/* Sapaan Serif: Hello, I'm */}
            <span className="font-display text-primary text-2xl md:text-3xl font-normal tracking-wide">
              {profile.greeting}
            </span>

            {/* Nama Besar Dua Baris + Sparkle Emas */}
            <div className="relative mt-2">
              <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-primary-dark">
                <span>{firstName}</span>
                <br />
                <span className="text-primary-dark">{lastName || firstName}</span>
              </h1>

              {/* Sparkle di samping nama atas seperti pada foto referensi */}
              <div className="absolute -top-3 right-0 sm:-right-8">
                <Sparkle size={32} color="#F8D27C" />
              </div>
            </div>

            {/* Title Profesi Script Peach + Rotasi Halus */}
            <p className="mt-3 font-script text-[clamp(1.75rem,3.2vw,2.5rem)] text-peach font-bold -rotate-2 select-none">
              {profile.title}
            </p>

            {/* Doodle Lingkaran Kecil (ō) seperti pada foto referensi */}
            <div className="mt-2 flex items-center justify-center lg:justify-start gap-1" aria-hidden="true">
              <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-primary" />
              <span className="inline-block h-0.5 w-3 bg-primary rounded-full" />
            </div>

            {/* Tagline Paragraf */}
            <p className="mt-4 max-w-[35ch] text-base md:text-lg text-ink/85 leading-relaxed font-body">
              {profile.tagline}
            </p>

            {/* Dua Tombol Aksi Pill: View Work & About Me */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button href="#projects" variant="primary">
                View Work
              </Button>
              <Button href="#about" variant="secondary">
                About Me
              </Button>
            </div>
          </motion.div>

          {/* Sisi Kanan: Panel Arch Kuning, Foto, Badge Berputar & Kartu Motto */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center items-center z-10"
          >
            {/* Starburst Garis Memancar di kiri atas panel arch */}
            <div className="absolute -left-2 -top-4 md:-left-6 md:-top-6 z-20">
              <Starburst size={54} color="#3E9C9A" />
            </div>

            {/* Arch Kuning Wadah Foto */}
            <div className="relative w-[82%] max-w-[320px] md:max-w-[360px] aspect-[3.8/5]">
              {/* Latar Belakang Arch Kuning Lengkung Sempurna */}
              <div className="absolute inset-0 rounded-t-full rounded-b-3xl bg-sunshine shadow-card overflow-hidden">
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-peach/25 pointer-events-none" />
              </div>

              {/* Foto Profil dengan Efek Overlap & Parallax */}
              <motion.div
                style={{ y: parallaxY }}
                className="relative z-10 h-full w-full flex items-end justify-center"
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  fetchPriority="high"
                  width="400"
                  height="500"
                  className="h-[108%] w-auto max-w-none object-contain drop-shadow-md select-none transform scale-105 origin-bottom"
                />
              </motion.div>

              {/* Badge Lingkaran "AVAILABLE FOR PROJECTS" Berputar */}
              {profile.availableForWork && <AvailabilityBadge />}

              {/* Kartu Motto Gelap Bergaya Script Persis Referensi */}
              {profile.motto && (
                <div className="absolute -left-6 md:-left-10 -bottom-6 md:-bottom-7 z-20 max-w-[210px] md:max-w-[240px] rounded-2xl md:rounded-3xl bg-primary text-cream px-4 py-3.5 shadow-xl border border-cream/15 -rotate-3 transition-transform hover:rotate-0 duration-300">
                  <p className="font-script text-base md:text-lg leading-tight text-cream">
                    {profile.motto}
                  </p>
                  {/* Garis lengkung flourish kecil di bawah teks */}
                  <svg
                    viewBox="0 0 100 12"
                    fill="none"
                    stroke="#F9A88B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="w-16 h-2 mt-1 opacity-80"
                    aria-hidden="true"
                  >
                    <path d="M 5 6 Q 50 12 95 4" />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
