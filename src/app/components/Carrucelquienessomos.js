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
        autoplaySpeed={10000}
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
              src={isSmall ? "/images/quienessomos/Equipo.jpg" : isMedioum ? "/images/quienessomos/Equipo.jpg" : isBig ? "/images/quienessomos/Equipo.jpg" : "/images/quienessomos/Equipo.jpg"}
              alt="Imagen que hace referencia al equipo de trabajo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}