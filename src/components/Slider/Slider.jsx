// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../../images/slider/slide1.jpg";
import slide2 from "../../images/slider/slide2.jpg";
import slide3 from "../../images/slider/slide3.jpg";
import slide4 from "../../images/slider/slide4.jpg";
import slide6 from "../../images/slider/slide6.jpg";
import slide7 from "../../images/slider/slide7.jpg";
import slide8 from "../../images/slider/slide8.jpg";
import slide9 from "../../images/slider/slide9.jpg";
import slide10 from "../../images/slider/slide10.jpg";
import slide11 from "../../images/slider/slide11.jpg";
import slide12 from "../../images/slider/slide12.jpg";
function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    autoplay:true,

  };
  return (
    <div className=" my-3 container" >
      <Slider {...settings} autoplaySpeed={3000}>
        <img src={slide1} height={500} />
        <img src={slide2} height={500}/>
        <img src={slide3} height={500}/>
        <img src={slide4} height={500}/>
        <img src={slide6} height={500}/>
        <img src={slide7} height={500}/>
        <img src={slide8} height={500}/>
        <img src={slide9} height={500}/>
        <img src={slide10} height={500}/>
        <img src={slide11} height={500}/>
        <img src={slide12} height={500}/>
      </Slider>
    </div>
  );
}

export default LazyLoad;
