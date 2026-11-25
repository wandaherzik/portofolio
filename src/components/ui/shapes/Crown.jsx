export default function Crown({ className = "", color = "#F8D27C", strokeColor = "#073535", size = 48, ...props }) {
  return (
    <svg
      viewBox="0 0 48 36"
      width={size}
      height={size ? size * 0.75 : 36}
      fill={color}
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <path d="M4 30 L8 10 L18 20 L24 6 L30 20 L40 10 L44 30 Z" />
      <circle cx="24" cy="5" r="2" fill={strokeColor} stroke="none" />
      <circle cx="8" cy="9" r="2" fill={strokeColor} stroke="none" />
      <circle cx="40" cy="9" r="2" fill={strokeColor} stroke="none" />
    </svg>
  );
}
