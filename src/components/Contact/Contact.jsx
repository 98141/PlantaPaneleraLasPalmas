export default function Contact() {
  const phone = "573203385899";
  const message = "Hola, estoy interesado en sus productos.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="button__Whatsapp">📱 WhatsApp</button>
    </a>
  );
}
