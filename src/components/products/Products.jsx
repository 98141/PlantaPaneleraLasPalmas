import { Link } from "react-router-dom";
import mermelada from "../../../images/imgProoducts/mermelada.jpg";
import cuadro from "../../../images/imgProoducts/panela_cuadro.jpg";
import pulverizada from "../../../images/imgProoducts/panela_pulverizada.jpg";
import redonda from "../../../images/imgProoducts/panela_redonda.jpg";


export default function Products() {
  const images = [
    {
      id: "mermelada",
      src: mermelada,
      title: "Mermelada con panela",
      description:
        "Una gran variedad de sabores para todos los gustos.",
    },
    {
      id: "panela_cuadro",
      src: cuadro,
      title: "Panela Cuadrada ",
      description:
        "Extracción artesanal del jugo de la caña en un trapiche de madera.",
    },
    {
      id: "panela_pulverizada",
      src: pulverizada,
      title: "Panela Pulverizada",
      description:
        "Un día soleado en el cultivo de caña de azúcar en el Valle del Cauca.",
    },
    {
      id: "panela_redonda",
      src: redonda,
      title: "Panela redonda",
      description:
        "Extracción artesanal del jugo de la caña en un trapiche de madera.",
    },
  ];

  return (
    <>
      <section className="products">
        <div className="galeria">
          {images.map((img) => (
            <div key={img.id} className="galeria__item">
              <Link to={`/productos/${img.id}`}>
                <img src={img.src} alt={img.title} className="galeria__img" />
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
