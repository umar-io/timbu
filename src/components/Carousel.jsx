import { Arrow } from "..";
import { useState } from "react";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <Arrow previousSlide={previousSlide} nextSlide={nextSlide} className="controlContainer"/>
    </div>
  );
};
export default Carousel;
