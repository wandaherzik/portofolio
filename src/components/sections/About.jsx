import { careerSummary, stats, experiences } from '../../data/career'
import { profile } from '../../data/profile'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import StatItem from '../ui/StatItem'
import TimelineItem from '../ui/TimelineItem'
import Reveal from '../ui/Reveal'
import { FiDownload } from 'react-icons/fi'

export default function About() {
  const linkedIn = profile.socials?.find((s) => s.name === 'LinkedIn')?.url || 'https://linkedin.com'

  return (
    <Section id="about" className="bg-cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">
          {/* Kolom Kiri: Ringkasan & Aksi (Sticky di Desktop) */}
          <div className="lg:sticky lg:top-28 space-y-8">
            <Reveal>
              <SectionTitle
                title="Ringkasan Karir"
                subtitle="Tentang Saya"
                sparkleColor="#F9A88B"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-ink/85 leading-relaxed">
                {careerSummary}
              </p>
            </Reveal>

            {/* Tombol Aksi: Unduh CV & LinkedIn */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={profile.cvUrl}
                  download={`CV-${profile.name.replace(/\s+/g, '-')}.pdf`}
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-cream shadow-sm transition-all duration-200 active:scale-[.98] hover:bg-primary-dark md:hover:-translate-y-0.5"
                >
                  <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  <span>Unduh CV</span>
                </a>

                <Button
                  as="a"
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  aria-label="Profil LinkedIn (membuka tab baru)"
                >
                  LinkedIn
                </Button>
              </div>
            </Reveal>

            {/* Statistik Ringkas */}
            <Reveal delay={0.3}>
              <div className="rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-card border border-primary/5">
                <div className="grid grid-cols-3 divide-x divide-primary/10">
                  {stats.map((item, idx) => (
                    <StatItem
                      key={idx}
                      value={item.value}
                      suffix={item.suffix}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Kolom Kanan: Linimasa Pengalaman */}
          <div>
            <Reveal delay={0.15}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-2xl text-primary-dark">
                  Pengalaman Project
                </h3>
              </div>
            </Reveal>

            <ol className="relative ml-2 border-l-2 border-secondary/35">
              {experiences.map((exp, index) => (
                <Reveal key={exp.id} delay={0.1 * index}>
                  <TimelineItem
                    start={exp.start}
                    end={exp.end}
                    title={exp.role}
                    subtitle={exp.company}
                    location={exp.location}
                    details={exp.achievements}
                  />
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}
