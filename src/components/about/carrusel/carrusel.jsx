// src/pages/about/carrusel/Carrusel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import IMG1 from "../../../assets/panela.JPG";
import IMG2 from "../../../assets/cultivo.JPG";
import IMG3 from "../../../assets/miel.JPG";
import IMG4 from "../../../../images/imgCarrusel/imagen_4.jpg";
import IMG5 from "../../../../images/imgCarrusel/imagen_5.jpeg";
import IMG6 from "../../../../images/imgCarrusel/imagen_6.jpg";
// Opcional: import "./carrusel.css";

const IMAGES = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

function calcZByWidth(w) {
  if (w < 480) return 280;
  if (w < 768) return 360;
  if (w < 1280) return 480;
  return 560;
}

export default function Carrusel() {
  const containerRef = useRef(null);
  const angleStep = useMemo(() => 360 / IMAGES.length, []);
  const [angle, setAngle] = useState(0);
  const [z, setZ] = useState(() => calcZByWidth(typeof window !== "undefined" ? window.innerWidth : 1024));
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduceMotion(!!mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // resize → recalcula Z
  useEffect(() => {
    const onResize = () => setZ(calcZByWidth(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // autoplay estable
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setAngle((prev) => prev + angleStep), 3000);
    return () => clearInterval(id);
  }, [paused, reduceMotion, angleStep]);

  // pausa cuando pestaña no visible
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // pausa fuera de viewport (IntersectionObserver)
  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        setPaused((p) => (visible ? false : true));
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const prev = () => setAngle((a) => a - angleStep);
  const next = () => setAngle((a) => a + angleStep);

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      style={{ ["--z"]: `${z}px` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel"
        style={{ transform: `translateZ(calc(var(--z) * -1)) rotateY(-${angle}deg)` }}
        aria-roledescription="carrusel"
        aria-label="Imágenes de la planta panelera"
      >
        {IMAGES.map((src, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ transform: `rotateY(${index * angleStep}deg) translateZ(var(--z))` }}
          >
            <img
              src={src}
              alt={`Vista ${index + 1} de la planta y entorno`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              fetchpriority={index === 0 ? "high" : "auto"}
              sizes="(max-width: 480px) 88vw, (max-width: 1024px) 70vw, 50vw"
            />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel__btn" onClick={prev} aria-label="Imagen anterior">‹</button>
        <button type="button" className="carousel__btn" onClick={next} aria-label="Imagen siguiente">›</button>
      </div>
    </div>
  );
}
