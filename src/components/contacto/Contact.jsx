export default function Contact() {
  const phone = "573203385899";
  const message = "Hola, estoy interesado en sus productos.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="contact-section">
      <h1 className="about__title">Bienvenidos Planta Panelera Las Palmas</h1>
      <p>¿Tienes preguntas o deseas más información? ¡Estamos aquí para ayudarte!</p>

      <ul className="contact-info">
        <li><strong>Teléfono:</strong> <a href={`tel:+${phone}`}>+57 320 338 5899</a></li>
        <li><strong>Correo:</strong> <a href="mailto:palmsd12am@gmail.com">palmas12am@gmail.com</a></li>
        <li><strong>Ubicación:</strong> Colombia</li>
      </ul>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="button__Whatsapp">📱 Contactar por WhatsApp</button>
      </a>
    </section>
  );
}
