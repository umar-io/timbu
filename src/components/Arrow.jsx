import { leftCtrl, rightCtrl } from "..";
const Arrow = ({ className, previousSlide, nextSlide, showNext, showPrev }) => {
  return (
    <div className={`${className}`}>
      <div className="holder">
       
        <img
          className={`carouselController prev ${showPrev ? 'show' : ''}`}
          onClick={previousSlide}
          src={leftCtrl}
          alt="Previous slide"
          role="button"
          aria-label="Previous slide"
        />
      </div>
      <div className="holder">
        <img
          className={`carouselController next ${showNext ? 'show': ''}`}
          onClick={nextSlide}
          src={rightCtrl}
          alt="Next slide"
          role="button"
          aria-label="Next slide"
        />
      </div>
    </div>
  );
};

export default Arrow;
