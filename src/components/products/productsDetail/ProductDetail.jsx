import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const products = [
  {
    id: "mermelada",
    title: "Mermelada con panela",
    description: "Hoy es un gran dia para.",
    presentacion: ["Presentación: 250g", "Presentación: 250g"],
    images: [
      "../../../../images/imgProoducts/mermelada.jpg",
      "../../../../images/imgProoducts/fresa.jpg",
      "../../../../images/imgProoducts/piña.jpg",
    ],
  },
  {
    id: "panela_cuadro",
    title: "Panela Cuadrada ",
    description:
      "Extracción artesanal del jugo de la caña en un trapiche de madera.",
    images: ["../../../../images/imgProoducts/panela_cuadro.jpg"],
  },
  {
    id: "panela_pulverizada",
    title: "Panela Pulverizada",
    description:
      "Un día soleado en el cultivo de caña de azúcar en el Valle del Cauca.",
    images: ["../../../../images/imgProoducts/panela_pulverizada.jpg"],
  },
  {
    id: "panela_redonda",
    title: "Panela redonda",
    description:
      "Extracción artesanal del jugo de la caña en un trapiche de madera.",
    images: ["../../../../images/imgProoducts/panela_redonda.jpg"],
  },
];

export default function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [index, setIndex] = useState(0);

  if (!product) return <h2>Producto no encontrado</h2>;

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="producto__detalle">
      <h1 className="detalle__titulo">{product.title}</h1>
      <div className="detalle__contenido">
        <div className="detalle__carousel">
          <button className="carousel__btn" onClick={prevImage}>
            ⟨
          </button>
          <img
            src={product.images[index]}
            alt={`Vista ${index + 1}`}
            className="detalle__img"
          />
          <button className="carousel__btn" onClick={nextImage}>
            ⟩
          </button>
        </div>
        <div className="producto__detalle-information">
          <p className="detalle__descripcion">{product.description}</p>
          <ul className="detalle__presentacion">
            {product.presentacion &&
              product.presentacion.map((item, idx) => (
                <li key={idx} className="detalle__presentacion-item">
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <button
          className="detalle__botton"
          onClick={() => navigate(`/productos`)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
