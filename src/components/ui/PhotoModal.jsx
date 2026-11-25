import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTag, FiCalendar } from 'react-icons/fi'

export default function PhotoModal({ photo, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!photo) return
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
  }, [photo, onClose])

  return (
    <AnimatePresence>
      {photo && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-primary-dark/85 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-photo-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-cream shadow-2xl border border-cream/20 text-ink flex flex-col"
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between p-5 border-b border-primary/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/25 text-primary-dark px-3 py-1 text-xs font-bold">
                  <FiTag className="h-3.5 w-3.5 text-secondary" />
                  <span>{photo.category}</span>
                </span>
                {photo.year && (
                  <span className="inline-flex items-center gap-1 text-xs text-ink/65 font-medium">
                    <FiCalendar className="h-3.5 w-3.5" />
                    <span>{photo.year}</span>
                  </span>
                )}
              </div>

              {/* Tombol Tutup */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup pratinjau foto"
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-cream hover:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* Gambar Foto */}
            <div className="relative max-h-[60vh] w-full overflow-hidden bg-primary/15 flex items-center justify-center p-2">
              <img
                src={photo.src}
                alt={photo.title}
                className="max-h-[58vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Footer Keterangan Foto */}
            <div className="p-5 bg-white">
              <h3
                id="modal-photo-title"
                className="font-display text-xl text-primary-dark font-bold leading-snug"
              >
                {photo.title}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
