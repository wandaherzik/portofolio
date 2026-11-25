import { testimonials } from '../../data/testimonials'
import { stats } from '../../data/career'
import Container from '../layout/Container'
import Section from '../layout/Section'
import StatItem from '../ui/StatItem'
import Reveal from '../ui/Reveal'
import { Sparkle } from '../ui/shapes'

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null

  const current = testimonials[0]

  return (
    <Section id="testimonials" className="py-6 md:py-12">
      <Container>
        <Reveal>
          {/* Band Kuning Lebar Bersudut Membulat Besar Persis Referensi */}
          <div className="relative rounded-[32px] md:rounded-[40px] bg-sunshine p-7 xs:p-8 md:p-12 lg:p-14 shadow-card text-primary-dark overflow-hidden border border-sunshine/50">
            {/* White Decorative Sparkles */}
            <Sparkle
              size={32}
              color="#FFFFFF"
              className="absolute right-1/2 top-6 opacity-90 hidden lg:block"
            />
            <Sparkle
              size={24}
              color="#FFFFFF"
              className="absolute left-6 bottom-6 opacity-75 hidden sm:block"
            />

            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 items-center">
              {/* Kolom Kiri: Kutipan Testimoni & Identitas Penulis */}
              <div className="flex flex-col justify-between gap-6">
                <p className="font-display text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-dark">
                  "{current.quote}"
                </p>

                <div className="flex items-center gap-3.5">
                  {current.photo && (
                    <img
                      src={current.photo}
                      alt={`Foto ${current.name}`}
                      width="48"
                      height="48"
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                    />
                  )}
                  <div>
                    <h4 className="font-bold text-base text-primary-dark underline decoration-primary decoration-2 underline-offset-4">
                      {current.name}
                    </h4>
                    <p className="text-xs md:text-sm text-primary-dark/80 font-medium">
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: 3 Blok Statistik Dipisah Garis Vertikal Tipis */}
              <div className="pt-8 border-t border-primary/20 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
                <div className="grid grid-cols-3 divide-x divide-primary/25">
                  {stats.map((item, idx) => (
                    <StatItem
                      key={idx}
                      value={item.value}
                      suffix={item.suffix}
                      label={item.label}
                      textColor="text-primary-dark font-bold"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
