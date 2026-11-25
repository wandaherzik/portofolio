import { education, certifications } from '../../data/education'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionTitle from '../ui/SectionTitle'
import TimelineItem from '../ui/TimelineItem'
import Reveal from '../ui/Reveal'
import { FiAward, FiExternalLink, FiBookOpen } from 'react-icons/fi'
import { Sparkle } from '../ui/shapes'

export default function Education() {
  return (
    <Section id="education" className="bg-cream">
      <Container>
        <Reveal>
          <SectionTitle
            title="Riwayat Pendidikan"
            subtitle="Kualifikasi & Pembelajaran"
            sparkleColor="#F9A88B"
            className="mb-10"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-start">
          {/* Kolom Kiri: Pendidikan Formal (Linimasa) */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-cream shadow-sm">
                <FiBookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-primary-dark">
                Pendidikan Akademik
              </h3>
            </div>

            <ol className="relative ml-2 border-l-2 border-secondary/35">
              {education.map((edu, idx) => (
                <Reveal key={edu.id} delay={0.1 * idx}>
                  <TimelineItem
                    start={edu.start}
                    end={edu.end}
                    title={edu.program}
                    subtitle={edu.institution}
                    badge={edu.gpa ? `IPK: ${edu.gpa}` : null}
                    description={edu.description}
                  />
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Kolom Kanan: Sertifikasi & Pelatihan */}
          {certifications && certifications.length > 0 && (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-primary-dark shadow-sm">
                  <FiAward className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-primary-dark">
                  Sertifikasi 
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <Reveal key={cert.id} delay={0.1 * idx}>
                    <article className="group rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:shadow-card-hover border border-primary/5 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                            {cert.year}
                          </span>
                          <span className="text-ink/30">•</span>
                          <span className="text-xs font-semibold text-ink/70">
                            {cert.issuer}
                          </span>
                        </div>
                        <h4 className="mt-1 font-bold text-base text-primary-dark group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                      </div>

                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Verifikasi sertifikat ${cert.name} (membuka tab baru)`}
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-primary transition-all duration-200 group-hover:bg-peach group-hover:text-primary-dark"
                        >
                          <FiExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Decorative Card Note */}
              <div className="mt-6 rounded-2xl bg-sunshine/25 p-5 border border-sunshine/50 flex items-start gap-3">
                <Sparkle size={24} color="#0B4A4A" className="shrink-0 mt-0.5" />
                <p className="text-xs text-ink/85 leading-relaxed">
                  Berkomitmen untuk terus memperbarui keterampilan melalui sertifikasi industri dan kontribusi aktif di komunitas open source.
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
