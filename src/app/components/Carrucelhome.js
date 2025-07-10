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

export default function Carrucelhome() {
  const isSmall = useIsSmallScreen();
  const isMedioum = useIsMedioumScreen();
  const isBig = useIsBigScreen();

  return (
    <div>
      <br />
      <Carousel
        autoplay
        autoplaySpeed={3000}
        pauseOnHover={false}
        dots={false}
        arrows={true}
        className={
          isSmall
            ? "w-full max-w-full mx-auto rounded-2xl"
          : isMedioum
            ? "w-[70%] mx-auto rounded-2xl"
            : isBig
            ? "w-[70%] mx-auto rounded-2xl"
            : "w-[70%] mx-auto rounded-2xl"
        }
      >
        <div>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#364d79]">
            <img
              src={isSmall ? "/images/carrucel/1CNUTRICION.png" : isMedioum ? "/images/carrucel/1MNUTRICION.png" : isBig ? "/images/carrucel/1GNUTRICION.png" : "/images/carrucel/1GNUTRICION.png"}
              alt="16 años de especializacion en Nutricion Animal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#364d79]">
            <img
              src={isSmall ? "/images/carrucel/2CMABO.png" : isMedioum ? "/images/carrucel/2MMABO.png" : isBig ? "/images/carrucel/2GMABO.png" : "/images/carrucel/2GMABO.png"}
              alt="Laboratorio Mabo, Estamos a tu servicio 449-196-40-53 ó 449-462-9780 ext 120"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#364d79]">
            <img
              src={isSmall ? "/images/carrucel/3CMGM.png" : isMedioum ? "/images/carrucel/3MMGM.png" : isBig ? "/images/carrucel/3GMGM.png" : "/images/carrucel/3GMGM.png"}
              alt="16 años de especializacion en Nutricion Animal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#364d79]">
            <img
              src={isSmall ? "/images/carrucel/4CPURECAN.png" : isMedioum ? "/images/carrucel/4MPURECAN.png" : isBig ? "/images/carrucel/4GPURECAN.png" : "/images/carrucel/4GPURECAN.png"}
              alt="Carousel Image 1 responsive"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}