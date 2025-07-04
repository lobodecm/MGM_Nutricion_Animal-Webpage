'use client';
import { useState, useRef } from "react";
import Carrucel from "./components/Carrucel.js";

const colores = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-pink-300"
];

const titulos = [
  "Premezclas",
  "Alimento Terminado",
  "Laboratorio",
  "Alimento Purecan"
];

const imagenes = [
  "/images/Productos/premezclas.png",
  "/images/Productos/alimento-terminado.png",
  "/images/Productos/laboratorio.png",
  "/images/Productos/purecan.png"
];

export default function Home() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [topMsg, setTopMsg] = useState(null);
  const btnRefs = useRef([]);

  const handleSeleccionar = (i) => {
    setSeleccionado(i);
    if (btnRefs.current[i]) {
      const rect = btnRefs.current[i].getBoundingClientRect();
      setTopMsg(rect.bottom + 20); // 20px debajo del botón
    }
  };

  return (
    <>
      <h1 className="grid text-2xl sm:text-3xl lg:mt-40 font-bold tracking-tight text-center mt-32 text-[#0D4763]">
        CALIDAD EN PRODUCTO
      </h1>
      <Carrucel />
      <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          {/* Título principal */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D4763] text-center">
            CONOCE NUESTROS PRODUCTOS
          </h1>

          {/* Grid de 4 contenedores responsivos con título abajo */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center m-auto">
            {[0, 1, 2, 3].map((i) => {
              // Detectar breakpoints
              // En xl: 4 columnas, en sm/md/lg: 2 columnas, en base: 1 columna
              // Para saber si es el final de la fila:
              // - 1 columna: todos son fin de fila
              // - 2 columnas: i % 2 === 1
              // - 4 columnas: i === 3

              // Para saber si el seleccionado está en la fila actual:
              // - 1 columna: i === seleccionado
              // - 2 columnas: Math.floor(i/2) === Math.floor(seleccionado/2)
              // - 4 columnas: i === 3 && seleccionado !== null

              // Renderizar el span solo en el final de la fila correspondiente
              return (
                <div key={i} className="flex flex-col items-center w-full">
                  <button
                    ref={el => btnRefs.current[i] = el}
                    onClick={() => setSeleccionado(seleccionado === i ? null : i)}
                    className="w-[150px] h-[200px] sm:w-[250px] sm:h-[150px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[300px] xl:h-[200px] rounded-xl shadow-md flex flex-col items-center justify-between text-xl font-bold transition-transform hover:scale-105 bg-white border-2 border-gray-200 p-4"
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <img
                        src={imagenes[i]}
                        alt={titulos[i]}
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <span className="text-base font-semibold text-[#0D4763] mt-2">
                      {titulos[i]}
                    </span>
                  </button>

                  {/* 1 columna: debajo de cada grid */}
                  <div className="block sm:hidden w-full">
                    {seleccionado === i && (
                      <div
                        className={`w-[90vw] max-w-[90vw] mt-5 mb-2 rounded-xl flex items-center justify-center text-lg font-semibold text-white transition-all duration-300 ${colores[seleccionado]} mx-auto`}
                        style={{ minHeight: "24rem" }}
                      >
                        <div className="rounded-xl px-8 py-4 bg-opacity-90 w-full text-center">
                          Has seleccionado: {titulos[seleccionado]}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2 columnas: debajo del segundo y cuarto grid */}
                  <div className="hidden sm:block xl:hidden w-full left-1/2 transform translate-x-1/10">
                    {((i === 0 && seleccionado !== null && seleccionado < 2) ||
                      (i === 2 && seleccionado !== null && seleccionado > 1)) && (
                      <div
                        className={`w-[90vw] max-w-[90vw] mt-5 mb-2 rounded-xl flex items-center justify-center text-lg font-semibold text-white transition-all duration-300 ${colores[seleccionado]} mx-auto`}
                        style={{ minHeight: "24rem" }}
                      >
                        <div className="rounded-xl px-8 py-4 bg-opacity-90 w-full text-center">
                          Has seleccionado: {titulos[seleccionado]}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4 columnas: solo debajo del último grid */}
                  <div className="hidden xl:block w-full left-1/2 transform translate-x-1/5">
                    {i === 0 && seleccionado !== null && (
                      <div
                        className={`w-[90vw] max-w-[90vw] mt-5 mb-2 rounded-xl flex items-center justify-center text-lg font-semibold text-white transition-all duration-300 ${colores[seleccionado]} mx-auto`}
                        style={{ minHeight: "24rem" }}
                      >
                        <div className="rounded-xl px-8 py-4 bg-opacity-90 w-full text-center">
                          Has seleccionado: {titulos[seleccionado]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid centrado al 80% del ancho */}
          <div className="w-[80%] h-[500px] mx-auto grid place-items-center bg-gray-100 rounded-xl">
            <span className="text-lg text-gray-700 font-semibold p-8 text-center">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/Mhj15W23IjA?si=y1Y3TjCEM_BMcH_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              Este es un grid centrado que abarca el 80% del ancho de la pantalla y su alto es proporcional al contenido.
            </span>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <p className="text-sm text-gray-500">
            © 2023 Tu Sitio Web. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}