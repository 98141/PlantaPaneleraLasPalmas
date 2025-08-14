import Carrusel from "./carrusel/Carrusel";
import Products from "./products/Products";
import siembra from "../../../images/siembra_cana.png";
import PageHeader from "../pageHeader/PageHeader";

export default function About() {
  return (
    <main className="about">
      <section>
        <PageHeader
          eyebrow="Tradición panelera"
          title="Bienvenidos a Planta Panelera Las Palmas"
          subtitle="Dulce sabor desde 2003 — panela natural elaborada con prácticas artesanales y calidad consistente."
          align="center"
        />
      </section>

      <section aria-label="Galería principal" className="about__carousel">
        <Carrusel />
      </section>

      <section className="about__message" aria-labelledby="about-msg-title">
        <h2 id="about-msg-title" className="sr-only">
          Quiénes somos
        </h2>
        <p className="about__message-paragraph">
          Somos una empresa líder en la producción de panela de caña de azúcar,
          desde 2003.
        </p>
        <img
          src={siembra}
          alt="Siembra de caña de azúcar"
          className="about__message-img"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>

      <section className="products" aria-labelledby="products-title">
        <h2 id="products-title" className="sr-only">
          Nuestros productos
        </h2>
        <Products />
      </section>
    </main>
  );
}
