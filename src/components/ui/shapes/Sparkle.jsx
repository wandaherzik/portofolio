export default function Sparkle({ className = "", color = "#F9A88B", size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <path d="M12 0 C12 7, 17 12, 24 12 C17 12, 12 17, 12 24 C12 17, 7 12, 0 12 C7 12, 12 7, 12 0 Z" />
    </svg>
  );
}
