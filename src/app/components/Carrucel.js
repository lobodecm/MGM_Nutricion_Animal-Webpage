'use client';

import React from 'react';
import { Carousel } from 'antd';

export default function Carrucel() {
  return (
    <div>
      <br></br>
    <Carousel autoplay autoplaySpeed={1000} pauseOnHover={false} className="w-[95%] h-[400px] mx-auto">
      <div>
        <img
          src="/images/carrucel/logo.png"
          alt="Carousel Image 1"
          className="object-fill w-full h-[400px] bg-[#364d79] mx-auto"
        />
      </div>
      <div>
        <h3 className="h-[400px] text-white leading-[400px] text-center bg-[#364d79]">2</h3>
      </div>
      <div>
        <h3 className="h-[400px] text-white leading-[400px] text-center bg-[#364d79]">3</h3>
      </div>
      <div>
        <h3 className="h-[400px] text-white leading-[400px] text-center bg-[#364d79]">4</h3>
      </div>
    </Carousel>
    </div>
  );
}