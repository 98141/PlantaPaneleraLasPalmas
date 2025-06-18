function Main({ children }) {
  const phone = "573203385899";
  const message = "Hola, estoy interesado en sus productos.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <main>
      <a
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
        alt="WhatsApp"
      />
    </a>
      {children}
    </main>
  );
}

export default Main;
