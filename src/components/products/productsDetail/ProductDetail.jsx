// src/pages/products/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import PageHeader from "../../pageHeader/PageHeader"; 

import mermelada from "../../../../images/imgProoducts/mermelada.jpg";
import mermeladaFresa from "../../../../images/imgProoducts/fresa.jpg";
import mermeladaPiña from "../../../../images/imgProoducts/piña.jpg";
import cuadro from "../../../../images/imgProoducts/panela_cuadro.jpg";
import pulverizada from "../../../../images/imgProoducts/panela_pulverizada.jpg";
import redonda from "../../../../images/imgProoducts/panela_redonda.jpg";

// Datos mock (puedes reemplazar por tu API)
const products = [
  {
    id: "mermelada",
    title: "Mermelada con panela",
    description:
      "Elaborada con fruta seleccionada y panela natural: sabor auténtico, sin aditivos.",
    presentacion: ["250 g", "350 g"],
    images: [mermelada, mermeladaFresa, mermeladaPiña],
  },
  {
    id: "panela_cuadro",
    title: "Panela Cuadrada",
    description:
      "Clásico bloque de panela para bebidas, postres y recetas tradicionales.",
    presentacion: ["Panela x Unidad", "Caja x 24", " Caja 25Kg"],
    images: [cuadro],
  },
  {
    id: "panela_pulverizada",
    title: "Panela Pulverizada",
    description:
      "Se disuelve fácil: ideal para cafés, tés y preparación de salsas.",
    presentacion: ["500 g", "1 kg"],
    images: [pulverizada],
  },
  {
    id: "panela_redonda",
    title: "Panela Redonda",
    description:
      "Presentación tradicional del trapiche panelero, sabor profundo y aroma cálido.",
    presentacion: ["Unidad", "Paquete x 24", "Caja 15Kg", "Caja 18Kg", "Caja 20Kg", "Caja 24Kg"],
    images: [redonda],
  },
];

export default function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const startXRef = useRef(null);

  useEffect(() => {
    // Si cambia de producto, reinicia índice
    setIndex(0);
  }, [productId]);

  // Navegación por teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nextImage = useCallback(() => {
    if (!product?.images?.length) return;
    setIndex((prev) => (prev + 1) % product.images.length);
  }, [product]);

  const prevImage = useCallback(() => {
    if (!product?.images?.length) return;
    setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  }, [product]);

  const openLightbox = () => setLightbox(true);
  const closeLightbox = () => setLightbox(false);

  // Gestos táctiles (swipe)
  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startXRef.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startXRef.current;
    const threshold = 40; // px
    if (delta > threshold) prevImage();
    else if (delta < -threshold) nextImage();
    startXRef.current = null;
  };

  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Producto no encontrado</h2>
        <button className="btn btn--ghost" onClick={() => navigate("/productos")}>
          Volver al catálogo
        </button>
      </section>
    );
  }

  return (
    <main className="product-page">
      {/* Opcional: encabezado reutilizable */}
      <PageHeader
        eyebrow="Catálogo"
        title={product.title}
        subtitle="Calidad artesanal, sabor auténtico. Conoce todos los detalles."
        align="center"
      />

      <section className="product">
        {/* Galería */}
        <div
          className="product__gallery"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="gallery__stage">
            <button
              className="nav-arrow nav-arrow--left"
              aria-label="Imagen anterior"
              onClick={prevImage}
            >
              ‹
            </button>

            <img
              className="stage__img"
              src={product.images[index]}
              alt={`${product.title} – Vista ${index + 1}`}
              onClick={openLightbox}
              loading="eager"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <button
              className="nav-arrow nav-arrow--right"
              aria-label="Imagen siguiente"
              onClick={nextImage}
            >
              ›
            </button>
          </div>

          {product.images.length > 1 && (
            <div className="gallery__thumbs" role="list">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  className={`thumb ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${product.title} miniatura ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información */}
        <aside className="product__info">
          <h2 className="info__title">{product.title}</h2>
          <p className="info__desc">{product.description}</p>

          {product.presentacion?.length > 0 && (
            <div className="info__chips">
              {product.presentacion.map((p, idx) => (
                <span key={idx} className="chip">
                  {p}
                </span>
              ))}
            </div>
          )}

          <div className="info__cta">
            <button
              className="btn btn--primary"
              onClick={() => navigate("/productos")}
            >
              Ver más productos
            </button>
          </div>

          <ul className="info__bullets">
            <li>Sin aditivos ni conservantes</li>
            <li>Producción responsable</li>
            <li>Calidad constante</li>
          </ul>
        </aside>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <img
            className="lightbox__img"
            src={product.images[index]}
            alt={`${product.title} – Ampliada`}
          />
          <button className="lightbox__close" aria-label="Cerrar" onClick={closeLightbox}>
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
