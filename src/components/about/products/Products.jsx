// src/pages/about/products/Products.jsx
import { Link } from "react-router-dom";
import mermelada from "../../../../images/imgProoducts/mermelada.jpg";
import cuadro from "../../../../images/imgProoducts/panela_cuadro.jpg";
import pulverizada from "../../../../images/imgProoducts/panela_pulverizada.jpg";
import redonda from "../../../../images/imgProoducts/panela_redonda.jpg";
// Opcional: import "./products.css";

export default function Products() {
  const images = [
    {
      src: mermelada,
      title: "Mermelada con panela",
      description: "Elaboración artesana con panela natural de Sandoná, Nariño.",
    },
    {
      src: cuadro,
      title: "Panela Cuadrada",
      description: "Panela en bloque, ideal para bebidas y recetas tradicionales.",
    },
    {
      src: pulverizada,
      title: "Panela Pulverizada",
      description: "Perfecta para endulzar y mezclar, disolución rápida.",
    },
    {
      src: redonda,
      title: "Panela Redonda",
      description: "Presentación clásica del trapiche panelero.",
    },
  ];

  return (
    <div className="galeria">
      {images.map((img, index) => (
        <article key={index} className="galeria__item">
          <Link to="/productos/" className="galeria__link" aria-label={`Ver ${img.title}`}>
            <img
              src={img.src}
              alt={img.title}
              className="galeria__img"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 92vw, 48vw"
            />
          </Link>
          <h3 className="galeria__titulo">{img.title}</h3>
          <p className="galeria__descripcion">{img.description}</p>
        </article>
      ))}
    </div>
  );
}
