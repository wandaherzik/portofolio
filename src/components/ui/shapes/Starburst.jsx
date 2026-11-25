export default function Starburst({ className = "", color = "#0B4A4A", size = 48, ...props }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <line x1="24" y1="4" x2="24" y2="12" />
      <line x1="24" y1="36" x2="24" y2="44" />
      <line x1="4" y1="24" x2="12" y2="24" />
      <line x1="36" y1="24" x2="44" y2="24" />
      <line x1="10" y1="10" x2="16" y2="16" />
      <line x1="32" y1="32" x2="38" y2="38" />
      <line x1="10" y1="38" x2="16" y2="32" />
      <line x1="32" y1="16" x2="38" y2="10" />
    </svg>
  );
}
