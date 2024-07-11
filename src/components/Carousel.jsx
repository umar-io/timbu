import { Arrow } from "..";
import { useState, useEffect } from "react";

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setShowPrev(true);
    if (newIndex === images.length - 1) {
      setShowNext(false);
    }
  };

  // Auto-play logic
  useEffect(() => {
    let intervalId = null;

    if (autoPlayInterval > 0) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => clearInterval(intervalId);
  }, [autoPlayInterval, nextSlide]); // Add nextSlide as a dependency

  const previousSlide = () => {
    if (currentIndex === 0) {
      setShowPrev(false);
    } else {
      setShowPrev(true);
    }

    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setShowNext(true);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

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
