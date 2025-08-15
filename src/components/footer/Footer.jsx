export default function Footer() {
  const year = new Date().getFullYear();

  const PHONE_E164 = "+573203385899";
  const PHONE_READABLE = "(57) 320 338 5899";
  const EMAIL = "palmas12am@gmail.com";
  const FACEBOOK = "https://www.facebook.com/trapichelaspalmas/";

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Información del pie de página
      </h2>

      {/* Hero con imagen de fondo + overlay */}
      <div
        className="footer__hero"
        role="img"
        aria-label="Siembra de caña de azúcar al atardecer"
      >
        <div className="footer__overlay" />
        <p className="footer__quote">
          De la caña de azúcar nace la esencia de la panela, que endulza nuestras vidas.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="footer__content container">
        <section className="footer__col">
          <a href="/" className="footer__brand" aria-label="Ir al inicio">
            <span className="footer__brand-logo" aria-hidden="true">🍃</span>
            <span className="footer__brand-name">Planta Panelera Las Palmas</span>
          </a>
          <p className="footer__tagline">Calidad, tradición y sostenibilidad.</p>
        </section>

        <address className="footer__col footer__contact" translate="no">
          <p className="footer__title">Contacto</p>
          <ul className="footer__list">
            <li>
              <a href={`tel:${PHONE_E164}`} className="footer__link">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>{PHONE_READABLE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="footer__link">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>{EMAIL}</span>
              </a>
            </li>
            <li className="footer__text">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Dirección: Sandoná, Colombia</span>
            </li>
          </ul>
        </address>

        <section className="footer__col footer__social">
          <p className="footer__title">Síguenos</p>
          <div className="footer__social-list">
            <a
              className="footer__social-btn"
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Planta Panelera Las Palmas"
              title="Facebook"
            >
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            {/* Si agregas más redes, copia el botón y cambia el ícono/enlace */}
          </div>
        </section>
      </div>

      {/* Franja inferior legal/autor */}
      <div className="footer__bottom">
        <p className="footer__bottom-text">
          © {year} Planta Panelera Las Palmas — Todos los derechos reservados.
        </p>
        <p className="footer__bottom-text">
          Diseño y desarrollo{" "}
          <a
            href="https://portafolio-sigma-smoky.vercel.app/"
            className="footer__bottom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Armando Mora
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
