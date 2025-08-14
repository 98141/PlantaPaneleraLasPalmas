export default function PageHeader({
  title,
  subtitle,
  eyebrow,          // opcional: pequeña etiqueta arriba del título
  align = "center", // "start" | "center" | "end"
  className = "",
}) {
  return (
    <section
      className={`page-header is-${align} ${className}`}
      role="region"
      aria-labelledby="page-header-title"
    >
      <div className="page-header__inner">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}

        <h1 id="page-header-title" className="page-header__title">
          {title}
          <span className="page-header__underline" aria-hidden="true" />
        </h1>

        {subtitle && (
          <p className="page-header__subtitle">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
