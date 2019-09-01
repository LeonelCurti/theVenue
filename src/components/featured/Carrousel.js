import React from "react";
import Slider from "react-slick";
import img1 from "../../resources/images/1.jpg";
import img2 from "../../resources/images/2.jpg";
import img3 from "../../resources/images/3.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${img1})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${img2})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${img3})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

      </Slider>
    </div>
  );
};

export default Carrousel;
