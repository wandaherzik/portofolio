import { profile } from '../../data/profile'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import { Sparkle } from '../ui/shapes'
import { FiMail, FiMapPin, FiGlobe, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative rounded-t-[40px] md:rounded-t-[52px] bg-primary pt-16 pb-12 text-cream shadow-2xl overflow-hidden mt-12 md:mt-18"
    >
      <Container>
        {/* Konten Utama 3 Kolom Persis Susunan Footer Gambar Referensi */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 pb-12 border-b border-cream/15 items-start">
          {/* Kolom 1: Headline "Let's create something amazing! ✦" */}
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.25rem)] leading-[1.1] text-cream">
                <span>Let's create</span>
                <br />
                <span>something </span>
                <span className="font-script text-peach inline-flex items-center gap-1 text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold">
                  amazing!
                  <Sparkle size={26} color="#F8D27C" className="inline-block -mt-1" />
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-xs md:text-sm text-cream/75 leading-relaxed max-w-[32ch]">
                Terbuka untuk kolaborasi proyek web development, desain antarmuka, dan peluang profesional.
              </p>
            </Reveal>
          </div>

          {/* Kolom 2: "Get in touch" */}
          <div className="space-y-4">
            <Reveal delay={0.15}>
              <h3 className="font-display text-xl text-cream font-bold">
                Get in touch
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="space-y-3.5 text-xs sm:text-sm text-cream/90">
                {profile.email && (
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="group flex items-center gap-3 hover:text-peach transition-colors"
                    >
                      <FiMail className="h-4 w-4 text-peach shrink-0" />
                      <span className="underline decoration-cream/30 underline-offset-4">
                        {profile.email}
                      </span>
                    </a>
                  </li>
                )}

                {profile.location && (
                  <li className="flex items-center gap-3">
                    <FiMapPin className="h-4 w-4 text-peach shrink-0" />
                    <span>{profile.location}</span>
                  </li>
                )}

                {profile.website && (
                  <li>
                    <a
                      href={`https://${profile.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 hover:text-peach transition-colors"
                    >
                      <FiGlobe className="h-4 w-4 text-peach shrink-0" />
                      <span>{profile.website}</span>
                    </a>
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          {/* Kolom 3: "Follow along" */}
          <div className="space-y-4">
            <Reveal delay={0.25}>
              <h3 className="font-display text-xl text-cream font-bold">
                Follow along
              </h3>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3">
                {/* Behance Button */}
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance (membuka tab baru)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream font-bold text-sm hover:border-peach hover:bg-peach hover:text-primary-dark transition-all duration-200"
                >
                  Bē
                </a>

                {/* Dribbble Button */}
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble (membuka tab baru)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream text-sm hover:border-peach hover:bg-peach hover:text-primary-dark transition-all duration-200"
                >
                  {/* Basketball icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9.07c-2.48-.48-4.83-.34-6.86.34-.14-.32-.29-.63-.45-.94 2.87-1.39 4.88-3.5 5.92-6.08 1.14 1.83 1.77 4.07 1.39 6.68zm-3.23-8.23c-.94 2.37-2.76 4.31-5.38 5.61-1.32-2.3-2.37-4.75-3.08-7.23 1.8-.78 3.8-1.22 5.91-1.22 1.09 0 2.14.12 3.14.34l-.59 2.5zm-10.42.94c.73 2.41 1.76 4.81 3.05 7.07-2.39 1.13-4.88 1.73-7.21 1.82C2.7 9.87 3.99 6.47 6.28 3.78zM3.48 14.7c2.2-.08 4.62-.64 6.94-1.73.4.78.78 1.57 1.12 2.37-3.69 1.36-6.42 3.96-7.85 7.42-1.35-2.22-1.92-4.97-.21-8.06zm9.89 6.74c1.3-3.2 3.86-5.63 7.37-6.95.42 2.7-.42 5.37-2.23 7.31-1.5 1.05-3.29 1.71-5.14 1.71-.58 0-1.15-.06-1.7-.17l1.7-1.9zm-3.15-5.23c-.32-.77-.67-1.52-1.05-2.27 1.95-.65 4.19-.78 6.56-.32.06.18.12.36.17.54-.34.13-.67.28-1 .44-1.74.83-3.32 1.95-4.68 3.32z" />
                  </svg>
                </a>

                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/wanwanda17_?avpt=MTh3ODlsazAwam0ycg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (membuka tab baru)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream hover:border-peach hover:bg-peach hover:text-primary-dark transition-all duration-200"
                >
                  <FiInstagram className="h-5 w-5" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href="www.linkedin.com/in/wanda-herlia-zikra-171802307"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (membuka tab baru)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream font-bold text-sm hover:border-peach hover:bg-peach hover:text-primary-dark transition-all duration-200"
                >
                  in
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-medium">
            Creative Portfolio • Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  )
}
