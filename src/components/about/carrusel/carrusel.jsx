import { useRef, useEffect, useState } from "react";

const images = [
  "../../../../images/imgCarrusel/imagen_1.jpg",
  "../../../../images/imgCarrusel/imagen_2.jpg",
  "../../../../images/imgCarrusel/imagen_3.jpg",
  "../../../../images/imgCarrusel/imagen_4.jpg",
  "../../../../images/imgCarrusel/imagen_5.jpg",
  "../../../../images/imgCarrusel/imagen_6.jpg",
];

function Carrusel() {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cellCount = images.length;
  const theta = 360 / cellCount;
  const radius = 500 / (2 * Math.tan(Math.PI / cellCount)); // ajusta según tamaño

  // Posicionamiento inicial las imagenes en circulo
  useEffect(() => {
    const carousel = carouselRef.current;
    const cells = carousel.children;
    for (let i = 0; i < cellCount; i++) {
      const angle = theta * i;
      cells[i].style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    }
  }, [cellCount, theta, radius]);

  const rotateCarousel = (direction) => {
    const newIndex = selectedIndex + direction;
    setSelectedIndex(newIndex);
    const angle = theta * newIndex * -1;
    carouselRef.current.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
  };

  // Rotar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        const angle = theta * newIndex * -1;
        carouselRef.current.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
        return newIndex;
      });
    }, 5000); // cada 5 segundos

    return () => clearInterval(interval); // limpieza al desmontar
  }, [theta, radius]);

  return (
    <div className="carousel__wrapper">
      <div className="scene">
        <div className="carousel" ref={carouselRef}>
          {images.map((src, index) => (
            <img
              className="carousel__cell"
              key={index}
              src={src}
              alt={`img-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => rotateCarousel(-1)}>◀</button>
        <button onClick={() => rotateCarousel(1)}>▶</button>
      </div>
    </div>
  );
}

export default Carrusel;
