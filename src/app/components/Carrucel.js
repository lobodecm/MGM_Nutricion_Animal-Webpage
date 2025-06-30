'use client';

import React from 'react';
import { Carousel } from 'antd';
import { useState, useEffect } from "react";

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 550);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isSmall;
}

function useIsMedioumScreen() {
  const [isMedioum, setIsMedioum] = useState(false);
  useEffect(() => {
    const check = () => setIsMedioum(window.innerWidth >= 550 && window.innerWidth < 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMedioum;
}

function useIsBigScreen() {
  const [isBig, setIsBig] = useState(false);
  useEffect(() => {
    const check = () => setIsBig(window.innerWidth >= 1000 && window.innerWidth < 1500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isBig;
}

export default function Carrucel() {
  const isSmall = useIsSmallScreen();
  const isMedioum = useIsMedioumScreen();
  const isBig = useIsBigScreen();

  return (
    <div>
      <br />
      <Carousel
        autoplay
        autoplaySpeed={10000}
        pauseOnHover={false}
        dots={false}
        arrows={true}
        className={
          isSmall
            ? "w-[98%] h-[200px] mx-auto rounded-2xl"
          : isMedioum
            ? "w-[98%] h-[300px] mx-auto rounded-2xl"
          : isBig
            ? "w-[98%] h-[400px] mx-auto rounded-2xl"
            : "w-[98%] h-[500px] mx-auto rounded-2xl"
        }
      >
        <div>
          <img
            src={isSmall ? "/images/carrucel/logo.png" : isMedioum ? "/images/carrucel/logo.png" : isBig ? "/images/carrucel/logo.png" : "/images/carrucel/logo.png"}
            alt="Carousel Image 1 responsive"
            className={isSmall ? "relative object-fill w-full h-[200px] bg-[#364d79] mx-auto rounded-2xl" : isMedioum ? "relative object-fill w-full h-[300px] bg-[#364d79] mx-auto rounded-2xl" : isBig ? "relative object-fill w-full h-[400px] bg-[#364d79] mx-auto rounded-2xl" : "relative object-fill w-full h-[500px] bg-[#364d79] mx-auto rounded-2xl"}
          />
        </div>
        <div>
          <img
            src={isSmall ? "/images/carrucel/CEquipo_854_480.jpg" : isMedioum ? "/images/carrucel/MEquipo_1280_720.jpg" : "/images/carrucel/GEquipo_1920_1080.jpg"}
            alt="Carousel Image 1 responsive"
            className={isSmall ? "relative object-fill w-full h-[200px] bg-[#364d79] mx-auto rounded-2xl" : isMedioum ? "relative object-fill w-full h-[300px] bg-[#364d79] mx-auto rounded-2xl" : isBig ? "relative object-fill w-full h-[400px] bg-[#364d79] mx-auto rounded-2xl" : "relative object-fill w-full h-[500px] bg-[#364d79] mx-auto rounded-2xl"}
          />
        </div>
        <div>
          <h3 className={isSmall ? "relative object-fill w-full h-[200px] bg-[#364d79] mx-auto text-white text-center leading-[200px] rounded-2xl" : isMedioum ? "relative object-fill w-full h-[300px] bg-[#008f39] mx-auto text-white text-center leading-[300px] rounded-2xl" : isBig ? "relative object-fill w-full h-[400px] bg-[#572364] mx-auto text-white text-center leading-[400px] rounded-2xl" : "relative object-fill w-full h-[500px] bg-[#645823] mx-auto text-white text-center leading-[500px] rounded-2xl"}>3</h3>
        </div>
        <div>
          <h3 className={isSmall ? "relative object-fill w-full h-[200px] bg-[#364d79] mx-auto text-white text-center leading-[200px] rounded-2xl" : isMedioum ? "relative object-fill w-full h-[300px] bg-[#008f39] mx-auto text-white text-center leading-[300px] rounded-2xl" : isBig ? "relative object-fill w-full h-[400px] bg-[#572364] mx-auto text-white text-center leading-[400px] rounded-2xl" : "relative object-fill w-full h-[500px] bg-[#645823] mx-auto text-white text-center leading-[500px] rounded-2xl"}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}