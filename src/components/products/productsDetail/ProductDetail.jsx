import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "mermelada",
    src: "../../../../images/imgProoducts/mermelada.jpg",
    title: "Mermelada con panela",
    description:
      "Un día soleado en el cultivo de caña de azúcar en el Valle del Cauca.",
  },
  {
    id: "panela_cuadro",
    src: "../../../../images/imgProoducts/panela_cuadro.jpg",
    title: "Panela Cuadrada ",
    description:
      "Extracción artesanal del jugo de la caña en un trapiche de madera.",
  },
  {
    id: "panela_pulverizada",
    src: "../../../../images/imgProoducts/panela_pulverizada.jpg",
    title: "Panela Pulverizada",
    description:
      "Un día soleado en el cultivo de caña de azúcar en el Valle del Cauca.",
  },
  {
    id: "panela_redonda",
    src: "../../../../images/imgProoducts/panela_redonda.jpg",
    title: "Panela redonda",
    description:
      "Extracción artesanal del jugo de la caña en un trapiche de madera.",
  },
];

export default function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="producto__detalle">
      <h1 className="detalle__titulo">{product.title}</h1>
      <div className="detalle__contenido">
        <img src={product.src} alt={product.title} className="detalle__img" />
        <p className="detalle__descripcion">{product.description}</p>
        <button className="detalle__botton" onClick={() => navigate(`/productos`)}>
          Ver más
        </button>
      </div>
    </div>
  );
}
