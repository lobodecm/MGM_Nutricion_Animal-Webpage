'use client';

import React from 'react';
import { Carousel } from 'antd';
import { useState, useEffect } from "react";

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isSmall;
}

function useIsMedioumScreen() {
  const [isMedioum, setIsMedioum] = useState(false);
  useEffect(() => {
    const check = () => setIsMedioum(window.innerWidth >= 640 && window.innerWidth < 800);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMedioum;
}


export default function Carrucel() {
  const isSmall = useIsSmallScreen();
  return (
    <div>
      <br></br>
    <Carousel
      autoplay
      autoplaySpeed={500}
      pauseOnHover={false}
      className="w-[98%] h-[160px] sm:h-[400px] mx-auto"
    >
      <div>
        <img
          src={isSmall ? "/images/carrucel/logo.png" : "/images/carrucel/logo.png"}
          alt="Carousel Image 1 responsive"
          className={isSmall ? "object-fill w-full h-[160px] bg-[#364d79] mx-auto" : "object-fill w-full h-[400px] bg-[#364d79] mx-auto"}
        />
      </div>
      <div>
        <img
          src={isSmall ? "/images/carrucel/Equipo.jpg" : "/images/carrucel/Equipo.jpg"}
          alt="Carousel Image 1 responsive"
          className={isSmall ? "object-fill w-full h-[160px] bg-[#364d79] mx-auto" : "object-fill w-full h-[400px] bg-[#364d79] mx-auto"}
        />
      </div>
      <div>
        <h3 className={isSmall ? "object-fill w-full h-[160px] bg-[#364d79] mx-auto text-white text-center leading-[160px]" : "object-fill w-full h-[400px] bg-[#364d79] mx-auto text-white text-center leading-[400px]"}>3</h3>
      </div>
      <div>
        <h3 className={isSmall ? "object-fill w-full h-[160px] bg-[#364d79] mx-auto text-white text-center leading-[160px]" : "object-fill w-full h-[400px] bg-[#364d79] mx-auto text-white text-center leading-[400px]"}>4</h3>
      </div>
    </Carousel>
    </div>
  );
}