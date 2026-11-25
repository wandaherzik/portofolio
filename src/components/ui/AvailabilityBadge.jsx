export default function AvailabilityBadge({ className = '' }) {
  return (
    <div
      className={`absolute -right-3 -top-3 md:-right-5 md:-top-5 z-20 h-24 w-24 md:h-28 md:w-28 rounded-full bg-white shadow-card grid place-items-center select-none border border-primary/10 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circ"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text
          fontSize="8.8"
          letterSpacing="1.8"
          fill="#0B4A4A"
          fontFamily="DM Sans, sans-serif"
          fontWeight="700"
        >
          <textPath href="#circ">
            AVAILABLE FOR PROJECTS • AVAILABLE FOR PROJECTS •
          </textPath>
        </text>
      </svg>
      <span aria-hidden="true" className="text-xl md:text-2xl text-primary-dark">
        ☺
      </span>
      <span className="sr-only">Available for projects</span>
    </div>
  )
}
