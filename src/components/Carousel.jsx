import { Arrow } from "..";
import { useState } from "react";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const previousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    if (newIndex === 0) {
      setShowPrev(!showPrev); // Hide the previous button if at the first slide
    }
  };

  const nextSlide = () => {
    setShowPrev(!showPrev); // Show the previous button when next is clicked
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    if (newIndex === images.length - 1) {
      setShowNext(!showNext);
    }
  };
  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <Arrow
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        showNext={showNext}
        showPrev={showPrev}
        className="controlContainer"
      />
    </div>
  );
};
export default Carousel;
