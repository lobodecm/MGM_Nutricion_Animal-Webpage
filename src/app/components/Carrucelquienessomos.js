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

export default function Carrucelquienessomos () {
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
            ? "w-[80%] h-[25vw] mx-auto rounded-2xl"
          : isMedioum
            ? "w-[80%] h-[25vw] mx-auto rounded-2xl"
          : isBig
            ? "w-[80%] h-[25vw] mx-auto rounded-2xl"
            : "w-[80%] h-[25vw] mx-auto rounded-2xl"
        }
      >
        <div>
          <img
            src={isSmall ? "/images/carrucel/Equipo.jpg" : isMedioum ? "/images/carrucel/Equipo.jpg" : isBig ? "/images/carrucel/Equipo.jpg" : "/images/carrucel/Equipo.jpg"}
            alt="Carousel Image 1 responsive"
            className={isSmall ? "relative object-fill w-full h-[25vw] bg-[#364d79] mx-auto rounded-2xl" : isMedioum ? "relative object-fill w-full h-[25vw] bg-[#364d79] mx-auto rounded-2xl" : isBig ? "relative object-fill w-full h-[25vw] bg-[#364d79] mx-auto rounded-2xl" : "relative object-fill w-full h-[25vw] bg-[#364d79] mx-auto rounded-2xl"}
          />
        </div>
      </Carousel>
    </div>
  );
}