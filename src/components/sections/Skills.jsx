import { skillCategories } from '../../data/skills'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SkillCard from '../ui/SkillCard'
import Reveal from '../ui/Reveal'
import { Crown, Smiley, Sparkle } from '../ui/shapes'

export default function Skills() {
  return (
    <Section id="skills" className="relative py-12 md:py-20 lg:py-24 overflow-clip">
      {/* Bentuk Wavy Peach Organik di Latar Kanan seperti pada Foto Referensi */}
      <div
        className="pointer-events-none absolute -right-20 top-1/3 w-64 h-80 rounded-l-[120px] bg-peach/25 z-0"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          {/* Sisi Kiri: Ilustrasi Avatar 3D dalam Lingkaran Teal, Mahkota Emas & Smiley Peach */}
          <div className="relative flex justify-center items-center">
            <Reveal className="relative w-[75%] max-w-[280px] md:max-w-[320px]">
              {/* Mahkota Doodle Kuning Emas di Atas Kepala */}
              <div className="absolute -top-7 left-4 md:left-6 z-20">
                <Crown size={52} color="#F8D27C" strokeColor="#073535" />
              </div>

              {/* Latar Belakang Lingkaran Teal Medium Organik */}
              <div className="relative aspect-square w-full rounded-full bg-secondary/80 p-2 shadow-xl overflow-hidden flex items-end justify-center border-4 border-white">
                <img
                  src="/images/avatar-3d.png"
                  alt="Ilustrasi visual What I Do"
                  loading="lazy"
                  width="400"
                  height="400"
                  className="h-full w-full object-cover select-none scale-110 translate-y-2"
                />
              </div>

              {/* Badge Smiley Bulat Peach di Pojok Kiri Bawah seperti pada Gambar Referensi */}
              <div className="absolute -bottom-4 -left-4 z-20 drop-shadow-md">
                <Smiley size={48} color="#F9A88B" faceColor="#073535" />
              </div>

              {/* Sparkle di Sisi Kanan Atas */}
              <Sparkle
                size={28}
                color="#F8D27C"
                className="absolute -right-3 top-6 z-20 hidden xs:block"
              />
            </Reveal>
          </div>

          {/* Sisi Kanan: Judul "What I Do ✦" & Grid 2x2 Keterampilan */}
          <div>
            <Reveal>
              <h2 className="mb-8 inline-flex items-center gap-2.5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-primary-dark leading-none">
                <span>What I Do</span>
                <Sparkle color="#F9A88B" size={28} className="shrink-0 -mt-1" />
              </h2>
            </Reveal>

            {/* Grid 2x2 Item Keterampilan Persis Format Referensi */}
            <div className="grid gap-7 sm:grid-cols-2">
              {skillCategories.map((cat, idx) => (
                <Reveal key={cat.id} delay={0.08 * idx}>
                  <SkillCard category={cat} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
