import { profile } from '../../data/profile'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import { Sparkle } from '../ui/shapes'
import { FiMail, FiMapPin, FiGlobe, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'

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
                {profile.socials?.map((social) => {
                  const icon =
                    social.name === 'GitHub' ? (
                      <FiGithub className="h-5 w-5" aria-hidden="true" />
                    ) : social.name === 'Instagram' ? (
                      <FiInstagram className="h-5 w-5" aria-hidden="true" />
                    ) : social.short ? (
                      <span aria-hidden="true">{social.short}</span>
                    ) : (
                      <FiLinkedin className="h-5 w-5" aria-hidden="true" />
                    )

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} (membuka tab baru)`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream font-bold text-sm hover:border-peach hover:bg-peach hover:text-primary-dark transition-all duration-200"
                    >
                      {icon}
                    </a>
                  )
                })}
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
