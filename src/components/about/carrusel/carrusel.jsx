import { useRef, useEffect, useState } from "react";

const images = [
  "../../../../images/imgCarrusel/imagen_1.jpg",
  "../../../../images/imgCarrusel/imagen_2.jpg",
  "../../../../images/imgCarrusel/imagen_3.jpg",
  "../../../../images/imgCarrusel/imagen_4.jpg",
  "../../../../images/imgCarrusel/imagen_5.jpg",
  "../../../../images/imgCarrusel/imagen_6.jpg",
  "../../../../images/imgCarrusel/imagen_6.jpg",
];

function Carrusel() {
  const carouselRef = useRef(null);
  const angleStep = 360 / images.length;
  const [angle, setAngle] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  useEffect(() => {
    const enableTransition = setTimeout(() => {
      setTransitionEnabled(true);
    }, 100); // evita que el primer render tenga transición

    const interval = setInterval(() => {
      setAngle((prev) => prev + angleStep);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(enableTransition);
    };
  });

  return (
    <div className="carousel-container">
      <div
        className={`carousel ${transitionEnabled ? "active" : ""}`}
        ref={carouselRef}
        style={{
          transform: `translate(-50%, -50%) translateZ(-500px) rotateY(-${angle}deg)`,
        }}
      >
        {images.map((src, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{
              transform: `rotateY(${index * angleStep}deg) translateZ(500px)`,
            }}
          >
            <img src={src} alt={`carousel-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
