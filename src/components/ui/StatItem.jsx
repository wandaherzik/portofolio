import useCountUp from '../../hooks/useCountUp'

export default function StatItem({
  value,
  suffix = '',
  label,
  className = '',
  textColor = 'text-primary-dark',
}) {
  const [ref, count] = useCountUp(value)

  return (
    <div ref={ref} className={`text-center px-4 ${className}`}>
      <p
        className={`font-display text-[clamp(2rem,4vw,2.75rem)] leading-none ${textColor}`}
      >
        {count}
        <span className="text-peach">{suffix}</span>
      </p>
      <p className="mt-2 text-xs md:text-sm font-medium text-ink/80">{label}</p>
    </div>
  )
}
