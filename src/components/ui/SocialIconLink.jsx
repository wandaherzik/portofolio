import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiDribbble,
  FiTwitter,
  FiMail,
  FiGlobe,
} from 'react-icons/fi'

const iconMap = {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiDribbble,
  FiTwitter,
  FiMail,
  FiGlobe,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Instagram: FiInstagram,
  Dribbble: FiDribbble,
}

export default function SocialIconLink({
  name,
  url,
  icon,
  className = '',
  onLight = false,
}) {
  const IconComponent = (icon && iconMap[icon]) || iconMap[name] || FiGlobe

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (membuka tab baru)`}
      className={`grid h-11 w-11 place-items-center rounded-full transition-all duration-200 active:scale-95 md:hover:-translate-y-1 ${
        onLight
          ? 'border border-primary/20 text-primary hover:border-peach hover:bg-peach hover:text-primary-dark'
          : 'border border-cream/45 text-cream hover:border-peach hover:bg-peach hover:text-primary-dark'
      } ${className}`}
    >
      <IconComponent className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
