import Carrusel from "./carrusel/carrusel";
import Products from "./products/Products";

export default function About() {
  return (
    <div>
      <h1 className="about__title">Bienvenidos Planta Panelera Las Palmas</h1>
      <Carrusel />
      <div className="about__message">
        <p className="about__message-paragraph">
          Somos una empresa líder en la producción de panela de caña de azúcar,
          desde 2003.
        </p>
        <img
          src="../../../images/siembra_cana.png"
          alt="Imagen de una caña"
          className="about__message-img"
        />
      </div>
      <section className="products">
        <Products />
      </section>
    </div>
  );
}
