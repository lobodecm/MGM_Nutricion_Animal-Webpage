'use client';

import React from 'react';
import { Carousel } from 'antd';

export default function Carrucel() {
  return (
    <div>
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      <div>
        <h3 className="h-[160px] text-white leading-[160px] text-center bg-[#364d79]">1</h3>
      </div>
      <div>
        <h3 className="h-[160px] text-white leading-[160px] text-center bg-[#364d79]">2</h3>
      </div>
      <div>
        <h3 className="h-[160px] text-white leading-[160px] text-center bg-[#364d79]">3</h3>
      </div>
      <div>
        <h3 className="h-[160px] text-white leading-[160px] text-center bg-[#364d79]">4</h3>
      </div>
    </Carousel>
    </div>
  );
}