'use client';
import { useState, useRef, useEffect } from "react";
import Carrucelquienessomos from "../components/Carrucelquienessomos.js";

export default function QuienesSomos() {
    const [seleccionado, setSeleccionado] = useState(null);
    const [topMsg, setTopMsg] = useState(null);
    const btnRefs = useRef([]);
    
    const handleSeleccionar = (i) => {
        setSeleccionado(seleccionado === i ? null : i);
        if (btnRefs.current[i]) {
        const rect = btnRefs.current[i].getBoundingClientRect();
        setTopMsg(rect.bottom + 20); // 20px debajo del botón
        }
    };
    
    return (
        <>
        <h1 className="grid text-2xl sm:text-3xl lg:mt-40 font-bold tracking-tight text-center mt-32 text-[#0D4763]">
            QUIENES SOMOS
        </h1>
        <Carrucelquienessomos />
        <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
            {/* Aquí puedes agregar más contenido específico de "Quienes Somos" */}
            </main>
        </div>
        </>
    );
    }