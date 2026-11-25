export default function Smiley({ className = "", color = "#F9A88B", faceColor = "#0B3B3B", size = 40, ...props }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <circle cx="20" cy="20" r="18" fill={color} />
      <circle cx="14" cy="16" r="2.5" fill={faceColor} />
      <circle cx="26" cy="16" r="2.5" fill={faceColor} />
      <path d="M13 24 Q20 31 27 24" stroke={faceColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
