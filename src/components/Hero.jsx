'use client';

import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';

const Hero = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    '/images/header1.jpg',
    '/images/header2.jpg',
    '/images/header3.jpg',
    '/images/header4.jpg',
    '/images/header5.jpg',
   
  ]
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={2000}
              height={2000}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Hero
