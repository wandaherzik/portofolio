import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX, FiCheckCircle } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const previouslyFocusedElement = document.activeElement
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
        previouslyFocusedElement.focus()
      }
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[70] grid place-items-end md:place-items-center bg-primary-dark/75 backdrop-blur-sm p-0 md:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[32px] md:rounded-[32px] bg-cream p-6 md:p-8 shadow-2xl border border-cream/20 text-ink"
          >
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-primary/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {project.category} • {project.year}
                </span>
                <h3
                  id="modal-project-title"
                  className="mt-1 font-display text-2xl md:text-3xl text-primary-dark"
                >
                  {project.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-ink/70">
                  Peran: {project.role}
                </p>
              </div>

              {/* Tombol Tutup */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup jendela detail"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-cream hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine transition-colors"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* Gambar Preview */}
            <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-primary/10 shadow-inner">
              <img
                src={project.thumbnail}
                alt={`Preview tampilan ${project.title}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Deskripsi Lengkap */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-base text-primary-dark">
                  Tentang Proyek
                </h4>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-ink/85">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Chips */}
              {project.techStack && (
                <div>
                  <h4 className="font-bold text-sm text-primary-dark mb-2">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-primary shadow-sm border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Hasil & Dampak */}
              {project.results && project.results.length > 0 && (
                <div className="rounded-2xl bg-white/80 p-5 border border-primary/10">
                  <h4 className="font-bold text-sm text-primary-dark mb-2">
                    Hasil &amp; Pencapaian Utama:
                  </h4>
                  <ul className="space-y-2 text-sm text-ink/80">
                    {project.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <FiCheckCircle className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Link CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-primary/10">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-cream hover:bg-primary-dark transition-all"
                  >
                    <span>Lihat Live Demo</span>
                    <FiExternalLink className="h-4 w-4" />
                    <span className="sr-only">(membuka tab baru)</span>
                  </a>
                )}

                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-medium text-primary hover:bg-primary/10 transition-all"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>Repositori Kode</span>
                    <span className="sr-only">(membuka tab baru)</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
