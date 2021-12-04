import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./images";

import "./Slider.css";

const HomePageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
    className: "slides",
  };

  return (
    <div className="slider-img">
      <Slider {...settings}>
        {images.map((item, key) => (
          <div className="slider-img-parent">
            <img className="slider-img-content" src={item} alt={key} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageSlider;
