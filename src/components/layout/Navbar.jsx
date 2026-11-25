import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../../data/profile'
import useScrollSpy from '../../hooks/useScrollSpy'
import Button from '../ui/Button'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'What I Do' },
  { id: 'projects', label: 'Works' },
  { id: 'education', label: 'Education' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useScrollSpy(navLinks.map((link) => link.id), 100)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sunshine focus:text-primary-dark focus:font-bold focus:rounded-full focus:shadow-card focus:outline-none"
      >
        Lewati ke konten utama
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3 border-b border-ink/5'
            : 'bg-transparent py-5'
        }`}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-[1200px] items-center justify-between px-4 xs:px-6 md:px-8 lg:px-12"
        >
          {/* Logo sesuai Desain Referensi: Creative Studio */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine"
          >
            {/* Logo Geometric Mark */}
            <div className="flex flex-col gap-1 w-6 h-6 justify-center">
              <span className="h-2.5 w-6 rounded-full bg-primary transform -rotate-12 group-hover:rotate-0 transition-transform duration-200" />
              <span className="h-2.5 w-6 rounded-full bg-primary transform -rotate-12 translate-x-1 group-hover:rotate-0 group-hover:translate-x-0 transition-transform duration-200" />
            </div>
            <div className="flex flex-col text-left leading-none font-bold text-primary-dark text-xs sm:text-sm tracking-tight">
              <span>Portofolio</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary py-1 ${
                      isActive ? 'font-bold text-primary' : 'text-ink/75'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-peach" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              className="!h-10 !px-5 text-sm"
              showArrow={false}
            >
              Hubungi Saya
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-cream shadow-sm md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine active:scale-95 transition-transform"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 top-[60px] z-40 md:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-label="Menu navigasi mobile"
                aria-modal="true"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-primary text-cream p-6 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-cream/15 mb-6">
                    <span className="font-display text-xl text-cream font-bold">
                      Menu
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Tutup menu"
                      className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
                    >
                      ✕
                    </button>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {navLinks.map((item) => {
                      const isActive = activeSection === item.id
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-display transition-colors ${
                              isActive
                                ? 'bg-cream/15 text-sunshine font-bold'
                                : 'text-cream/80 hover:bg-cream/10 hover:text-cream'
                            }`}
                          >
                            <span>{item.label}</span>
                            <span className="text-peach text-sm" aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="pt-6 border-t border-cream/15">
                  <Button
                    as="a"
                    href="#contact"
                    variant="secondary"
                    className="w-full justify-center !h-12 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Hubungi Saya
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
