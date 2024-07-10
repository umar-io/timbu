import { leftCtrl, rightCtrl } from "..";
const Arrow = ({ className, previousSlide, nextSlide }) => {
  return (
    <div className={`${className}`}>
      <div className="holder">
        <img
          className="carouselController prev"
          onClick={previousSlide}
          src={leftCtrl}
          alt=""
        />
      </div>
      <div className="holder">
        <img
          className="carouselController next"
          onClick={nextSlide}
          src={rightCtrl}
          alt=""
        />
      </div>
    </div>
  );
};
export default Arrow;
