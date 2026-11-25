import { FiArrowUpRight } from 'react-icons/fi'

const variants = {
  primary: 'bg-primary text-cream hover:bg-primary-dark shadow-sm',
  secondary: 'bg-peach text-primary-dark hover:brightness-105 shadow-sm',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  'outline-light': 'border border-cream/45 text-cream hover:bg-cream/10',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  children,
  className = '',
  showArrow = true,
  ...props
}) {
  return (
    <Tag
      className={`group inline-flex h-12 min-w-[44px] items-center justify-center gap-2 rounded-full px-6 font-medium text-base transition-all duration-200 active:scale-[.98] md:hover:-translate-y-0.5 ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <FiArrowUpRight className="h-5 w-5" />
        </span>
      )}
    </Tag>
  )
}
