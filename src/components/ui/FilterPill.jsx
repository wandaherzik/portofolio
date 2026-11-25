export default function FilterPill({
  active = false,
  onClick,
  children,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`snap-start shrink-0 h-10 px-5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine ${
        active
          ? 'bg-peach text-primary-dark border border-peach shadow-sm font-semibold'
          : 'border border-cream/45 text-cream hover:bg-cream/10'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
