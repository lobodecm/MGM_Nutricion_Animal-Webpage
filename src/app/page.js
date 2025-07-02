'use client';
import { useState } from "react";
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

export default function Home() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <>
      <h1 className="grid text-2xl sm:text-3xl lg:mt-40 font-bold tracking-tight text-center mt-32 text-[#0D4763]">
        CALIDAD EN PRODUCTO
      </h1>
      <Carrucel />
      <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center p-8 min-h-screen pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          {/* Título principal */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D4763] text-center">
            Conoce nuestros productos
          </h2>

          {/* Grid de 4 contenedores responsivos con título abajo */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setSeleccionado(i)}
                className="w-[200px] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-between text-xl font-bold transition-transform hover:scale-105 bg-white border-2 border-gray-200 p-4"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  {/* Puedes poner un ícono o imagen aquí si lo deseas */}
                </div>
                <span className="text-base font-semibold text-[#0D4763] mt-2">
                  {titulos[i]}
                </span>
              </button>
            ))}
          </div>

          {/* Grid desplegable según selección */}
          <div className="w-full flex justify-center mt-6 min-h-[100px]">
            {seleccionado !== null && (
              <div
                className={`w-full max-w-xl h-32 rounded-xl flex items-center justify-center text-lg font-semibold text-white transition-all duration-300 ${colores[seleccionado]}`}
              >
                Has seleccionado: {titulos[seleccionado]}
              </div>
            )}
          </div>

          {/* Grid centrado al 80% del ancho */}
          <div className="w-[80%] mx-auto grid place-items-center bg-gray-100 rounded-xl min-h-[200px]">
            <span className="text-lg text-gray-700 font-semibold p-8 text-center">
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