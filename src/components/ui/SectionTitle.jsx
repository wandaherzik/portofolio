import Sparkle from './shapes/Sparkle'

export default function SectionTitle({
  title,
  subtitle,
  sparkleColor = '#F9A88B',
  align = 'left',
  onDark = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center justify-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-2 ${alignment} ${className}`}>
      {subtitle && (
        <span
          className={`font-script text-xl md:text-2xl -rotate-1 ${
            onDark ? 'text-peach' : 'text-peach font-semibold'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`inline-flex items-center gap-2 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight ${
          onDark ? 'text-cream' : 'text-primary-dark'
        }`}
      >
        <span>{title}</span>
        <Sparkle color={sparkleColor} size={28} className="shrink-0 -mt-1" />
      </h2>
    </div>
  )
}
