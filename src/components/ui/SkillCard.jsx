import {
  FiMonitor,
  FiFeather,
  FiSmile,
  FiEdit2,
  FiLayout,
  FiServer,
  FiTool,
} from 'react-icons/fi'

const iconMap = {
  monitor: FiMonitor,
  pen: FiFeather,
  smiley: FiSmile,
  pencil: FiEdit2,
  FiMonitor,
  FiFeather,
  FiSmile,
  FiEdit2,
  FiLayout,
  FiServer,
  FiTool,
}

export default function SkillCard({ category }) {
  const IconComponent = iconMap[category.icon] || FiMonitor

  return (
    <div className="group flex items-start gap-4">
      {/* Kotak Ikon Teal Gelap 56px Radius Membulat seperti pada Gambar Referensi */}
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-cream shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 border border-primary/10">
        <IconComponent className="h-6 w-6 stroke-[2]" aria-hidden="true" />
      </div>

      {/* Judul & Deskripsi Teks */}
      <div className="flex-1">
        <h3 className="font-bold text-base md:text-lg text-primary-dark leading-snug">
          {category.title}
        </h3>
        <p className="mt-1 text-xs md:text-sm text-ink/75 leading-relaxed">
          {category.description}
        </p>

        {/* Tag Keterampilan Spesifik Minimalis */}
        {category.skills && category.skills.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-block rounded-full bg-white/80 border border-ink/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary shadow-xs"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
