import { Link } from "react-router-dom";
import mermelada from "../../../images/imgProoducts/mermelada.jpg";
import cuadro from "../../../images/imgProoducts/panela_cuadro.jpg";
import pulverizada from "../../../images/imgProoducts/panela_pulverizada.jpg";
import redonda from "../../../images/imgProoducts/panela_redonda.jpg";

import PageHeader from "../pageHeader/PageHeader";

export default function Products() {
  const images = [
    {
      id: "mermelada",
      src: mermelada,
      title: "Mermelada con panela",
      description: "Frutas seleccionadas endulzadas con panela natural. Sin aditivos.",
    },
    {
      id: "panela_cuadro",
      src: cuadro,
      title: "Panela cuadrada",
      description: "Bloques clásicos ideales para bebidas y recetas tradicionales.",
    },
    {
      id: "panela_pulverizada",
      src: pulverizada,
      title: "Panela pulverizada",
      description: "Se disuelve fácil: perfecta para café, té y postres.",
    },
    {
      id: "panela_redonda",
      src: redonda,
      title: "Panela redonda",
      description: "La presentación del trapiche: aroma cálido y sabor profundo.",
    },
  ];

  return (
    <>
      <section>
        <PageHeader
          eyebrow="Tradición panelera"
          title="Planta Panelera Las Palmas"
          subtitle="En cada cristal de panela late el corazón del campo: manos sabias que transforman caña en dulzura auténtica."
          align="center"
        />
      </section>

      <section className="products">
        <div className="galeria">
          {images.map((img) => (
            <div key={img.id} className="galeria__item">
              <Link to={`/productos/${img.id}`} className="galeria__link" aria-label={`Ver ${img.title}`}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="galeria__img"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 92vw, 45vw"
                />
              </Link>
              <h3 className="galeria__titulo">{img.title}</h3>
              <p className="galeria__descripcion">{img.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
