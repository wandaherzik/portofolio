export default function TimelineItem({
  start,
  end,
  title,
  subtitle,
  location,
  details = [],
  description,
  badge,
  icon: Icon,
}) {
  return (
    <li className="relative pl-7 md:pl-9 pb-8 last:pb-2">
      {/* Bullet Point */}
      <span
        aria-hidden="true"
        className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-peach border-2 border-cream ring-4 ring-peach/20"
      />

      <article className="rounded-2xl md:rounded-[20px] bg-white p-5 md:p-6 shadow-card transition-all duration-300 hover:shadow-card-hover border border-primary/5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-bold text-secondary">
            {start} – {end}
          </span>
          {badge && (
            <span className="text-xs font-semibold text-peach">{badge}</span>
          )}
        </div>

        <div className="mt-3 flex items-start gap-3">
          {Icon && (
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-cream">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div>
            <h3 className="font-bold text-lg text-primary-dark leading-snug">
              {title}
            </h3>
            <p className="text-sm font-medium text-ink/70">
              {subtitle} {location ? `• ${location}` : ''}
            </p>
          </div>
        </div>

        {description && (
          <p className="mt-3 text-sm text-ink/80 leading-relaxed">
            {description}
          </p>
        )}

        {details && details.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
            {details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-peach font-bold leading-tight" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}
