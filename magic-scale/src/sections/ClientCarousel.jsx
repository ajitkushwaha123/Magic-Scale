import React, { useState } from 'react';
import Slider from 'react-slick'; // Assuming React Slick is installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BRAND_IMAGES = [
   'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-9.png',
  'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-1.png',
  'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-7.png',
  'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-4.png',
  // ... add other image paths here
];

const BRAND_IMAGE = [
    'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-2.png',
   'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-3.png',
   'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-6.png',
   'https://template.wphix.com/printx-prv/printx/assets/img/brand/brand-1-3.png',
   // ... add other image paths here
 ];

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite looping
    speed: 2000, // Transition speed (milliseconds)
    slidesToShow: 5, 
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Number of slides visible at once
    slidesToScroll: 1,
    cssEase: "linear", // Number of slides to scroll per swipe
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  
  const setting = {
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite looping
    speed: 1500, // Transition speed (milliseconds)
    slidesToShow: 5, 
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Number of slides visible at once
    slidesToScroll: 1,
    cssEase: "linear", // Number of slides to scroll per swipe
    beforeChange: (current, previous) => setCurrentIndex(previous),
  };

  return (
    <div className="tp-brand-4__area fix py-[70px] h-auto justify-enter items-center flex-row cursor-pinter outline-none border-none">

        <h1 className='text-center justify-center flex items-center text-[60px] text-btn font-poppins font-semibold pb-10'>Our Clients</h1>
      <div className="container-fluid gx-0">
        <div className="tp-brand-4-active">
          <Slider {...settings}>
            {BRAND_IMAGES.map((image, index) => (
              <div key={index} className="tp-brand-4__item h-[124px]">
                <img className='w-[100%] h-[100%]' src={image} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container-fluid gx-0">
        <div className="tp-brand-4-active">
          <Slider {...setting}>
            {BRAND_IMAGE.map((image, index) => (
              <div key={index} className="tp-brand-4__item h-[124px] w-[315px]">
                <img className='w-[100%] h-[100%]' src={image} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
