import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Buka detail project ${project.title}`}
      className="group w-full overflow-hidden rounded-[22px] bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine focus-visible:-translate-y-2 flex flex-col cursor-pointer border border-primary/5"
    >
      {/* Gambar Thumbnail 4:3 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/10">
        <img
          src={project.thumbnail}
          alt={`Thumbnail ${project.title}`}
          loading="lazy"
          width="800"
          height="600"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Footer Kartu Berlatar Putih Bersih Persis Referensi Desain */}
      <div className="flex items-center justify-between gap-3 p-5 flex-1 w-full bg-white">
        <div>
          <h3 className="font-bold text-lg md:text-xl text-primary-dark group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-ink/70">
            {project.category === 'UI/UX' ? 'UI/UX Design' : project.category}
          </p>
        </div>

        {/* Tombol Bulat Peach dengan Ikon ↗ yang Berputar 45 Derajat saat Hover */}
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-peach text-primary-dark transition-transform duration-300 group-hover:rotate-45 shadow-sm"
        >
          <FiArrowUpRight className="h-5 w-5 stroke-[2.5]" />
        </span>
      </div>
    </button>
  )
}
