export default function Squiggle({ className = "", color = "#F9A88B", size = 64, strokeWidth = 4, ...props }) {
  return (
    <svg
      viewBox="0 0 80 24"
      width={size}
      height={size ? size * 0.3 : 24}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <path d="M 4 12 Q 14 0, 24 12 T 44 12 T 64 12 T 76 12" />
    </svg>
  );
}
