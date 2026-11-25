import { useState, useMemo, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../../data/projects'
import Container from '../layout/Container'
import Section from '../layout/Section'
import FilterPill from '../ui/FilterPill'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import { Squiggle, Sparkle } from '../ui/shapes'

const ProjectModal = lazy(() => import('../ui/ProjectModal'))

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <Section id="projects" className="py-8 md:py-14 lg:py-18">
      <Container>
        {/* Wadah Teal Gelap Besar dengan Sudut Membulat 36px-40px */}
        <div className="relative rounded-[32px] md:rounded-[40px] bg-primary px-5 py-8 sm:px-8 sm:py-10 md:p-12 lg:p-14 text-cream shadow-2xl overflow-visible">
          {/* Dekorasi Squiggle Peach menyembul di luar tepi kanan persis pada foto referensi */}
          <div className="absolute -right-6 md:-right-10 top-10 md:top-14 z-20 pointer-events-none">
            <Squiggle size={88} color="#F9A88B" strokeWidth={5} />
          </div>

          {/* Header: Judul "Selected Works ✦" & Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-cream/15">
            <Reveal>
              <h2 className="inline-flex items-center gap-2.5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-cream leading-none">
                <span>Selected Works</span>
                <Sparkle color="#F8D27C" size={28} className="shrink-0 -mt-1" />
              </h2>
            </Reveal>

            {/* Filter Pills */}
            <Reveal delay={0.1}>
              <div
                role="group"
                aria-label="Filter kategori project"
                className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 snap-x snap-proximity [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
              >
                {projectCategories.map((category) => (
                  <FilterPill
                    key={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </FilterPill>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Aksesibilitas: Status Jumlah Item Terlihat */}
          <p className="sr-only" aria-live="polite">
            Menampilkan {filteredProjects.length} proyek dalam kategori {activeCategory}
          </p>

          {/* Grid Kartu Proyek: 3 Kolom pada Desktop */}
          <motion.div
            layout
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>

      {/* Modal Detail Proyek (Lazy-loaded) */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Suspense>
    </Section>
  )
}
