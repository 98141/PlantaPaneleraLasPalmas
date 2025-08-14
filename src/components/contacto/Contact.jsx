// src/pages/contact/Contact.jsx
import PageHeader from "../pageHeader/PageHeader";

export default function Contact() {
  const phone = "573203385899";
  const displayPhone = "+57 320 338 5899";
  const email = "palmas12am@gmail.com";
  const message =
    "Hola, estoy interesado en sus productos. ¿Podemos conversar por aquí?";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <section>
        <PageHeader
          eyebrow="Tradición panelera"
          title="Contáctenos"
          subtitle={
            <>
              ¿Buscas panela que cuente una historia? Que huela a tierra mojada
              y te lleve al trapiche panelero.
              <strong style={{ fontSize: "1.1em" }}>
                {" "}
                <br />
                Estamos aquí para endulzar tu vida con autenticidad.
              </strong>
            </>
          }
          align="center"
        />
      </section>

      <section className="contact">
        {/* Columna izquierda: info */}
        <div className="contact__left">
          <h2 className="contact__title">Información de contacto</h2>

          <ul className="contact-list" role="list">
            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <IconPhone />
              </span>
              <div>
                <strong>Teléfono</strong>
                <div>
                  <a href={`tel:+${phone}`} className="link">
                    {displayPhone}
                  </a>
                </div>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <IconMail />
              </span>
              <div>
                <strong>Correo</strong>
                <div>
                  <a href={`mailto:${email}`} className="link">
                    {email}
                  </a>
                </div>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <IconLocation />
              </span>
              <div>
                <strong>Ubicación</strong>
                <div>Sandoná, Barrio Por Venir</div>
              </div>
            </li>

            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <IconClock />
              </span>
              <div>
                <strong>Horario</strong>
                <div>Lun–Sáb: 8:00–18:00</div>
              </div>
            </li>
          </ul>

          <div className="contact__badges">
            <span className="chip">Respuesta &lt; 24h</span>
            <span className="chip">Envíos nacionales</span>
            <span className="chip">Pedidos al por mayor</span>
          </div>

          {/* “Mapa” placeholder (puedes reemplazar por iframe más adelante) */}
          <div className="map-skeleton" aria-label="Mapa de referencia" />
        </div>

        {/* Columna derecha: CTA WhatsApp */}
        <aside className="contact__cta" aria-labelledby="cta-title">
          <h2 id="cta-title" className="cta__title">
            ¿Conversamos ahora?
          </h2>
          <p className="cta__text">Escríbenos por WhatsApp y te asesoramos:</p>

          <div className="cta__buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <IconWhatsApp />
              Contactar por WhatsApp
            </a>

            <a href={`tel:+${phone}`} className="btn btn--ghost">
              Llamar ahora
            </a>
          </div>

          <p className="cta__note">
            Tiempo de respuesta promedio: <strong>1–3 horas</strong>.
          </p>
        </aside>
      </section>
    </>
  );
}

/* ======== Icons (inline SVG) ======== */
function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 4.15l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V8.15z" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm1 12H7V11h4V6h2z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
      <path d="M19.11 17.3c-.27-.13-1.6-.79-1.84-.88s-.43-.13-.62.13-.71.88-.87 1.06-.32.2-.59.07a7.64 7.64 0 01-2.24-1.38 8.4 8.4 0 01-1.56-1.94c-.16-.27 0-.42.12-.59s.28-.34.41-.53a2 2 0 00.27-.49.52.52 0 000-.5c0-.13-.62-1.49-.85-2s-.45-.46-.62-.47h-.53a1 1 0 00-.72.34 3 3 0 00-.93 2.24 5.22 5.22 0 001.09 2.78 12 12 0 004.6 4.49 15.88 15.88 0 001.56.73 3.76 3.76 0 001.72.27 2.86 2.86 0 001.87-1.31 2.37 2.37 0 00.16-1.31c-.04-.08-.24-.13-.51-.26zM27.94 4.06A15.94 15.94 0 1010.1 29.15L4 30.93l1.84-5.94A15.9 15.9 0 1132 16 15.84 15.84 0 0027.94 4.06z" />
    </svg>
  );
}
