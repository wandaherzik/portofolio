export default function Ring({ className = "", color = "#0B4A4A", size = 32, strokeWidth = 3, ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <circle cx="16" cy="16" r="13" />
    </svg>
  );
}
