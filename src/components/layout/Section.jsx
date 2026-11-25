export default function Section({ id, className = "", children, ...props }) {
  return (
    <section
      id={id}
      className={`relative py-12 md:py-20 lg:py-28 overflow-clip ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
