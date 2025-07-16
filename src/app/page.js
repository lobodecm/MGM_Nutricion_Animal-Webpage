'use client';
import { useState, useRef, useEffect } from "react";
import Carrucelhome from "./components/Carrucelhome.js";

// URLs de imágenes para los desplegables con diferentes tamaños
const imagenesDesplegables = [
  {
    small: "/images/carrucel/1MNUTRICION-small.jpg",  // ~50KB para móviles
    medium: "/images/carrucel/1MNUTRICION-medium.jpg", // ~150KB para tablets
    large: "/images/carrucel/1MNUTRICION-large.jpg"    // ~300KB para escritorio
  },
  {
    small: "/images/Productos/PURECANC.png",
    medium: "/images/Productos/PURECANM.png",
    large: "/images/Productos/PURECANG.png"
  },
  {
    small: "/images/Productos/LABC.png",
    medium: "/images/Productos/LABM.png",
    large: "/images/Productos/LABG.png"
  },
  {
    small: "/images/Productos/PURECANC.png",
    medium: "/images/Productos/PURECANM.png",
    large: "/images/Productos/PURECANG.png"
  }
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

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    isXs: false,
    isSmOrMd: false,
    isLgOrXl: false
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isXs: width < 400,
        isSmOrMd: width >= 400 && width < 1200,
        isLgOrXl: width >= 1200
      });
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
}

export default function Home() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const btnRefs = useRef([]);
  const { isXs, isSmOrMd, isLgOrXl } = useScreenSize();

  const handleSeleccionar = (i) => {
    setSeleccionado(seleccionado === i ? null : i);
    setImgLoading(true);
  };

  // Función para obtener la imagen adecuada según el tamaño de pantalla
  const getImagenDesplegable = (index) => {
    if (isXs) return imagenesDesplegables[index].small;
    if (isSmOrMd) return imagenesDesplegables[index].medium;
    return imagenesDesplegables[index].large;
  };

  return (
    <>
      <Carrucelhome />
      <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D4763] text-center">
            CONOCE NUESTROS PRODUCTOS
          </h1>
          

          {/* SECCIÓN DE PRODUCTOS */}
          <div className="w-full">
            {/* Para pantallas extra pequeñas y grandes */}
            <div className={`w-full grid ${
              isXs ? "grid-cols-1" : 
              (isSmOrMd ? "hidden" : "grid-cols-4")
            } gap-6 justify-items-center m-auto`}>
              
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <button
                    ref={el => btnRefs.current[i] = el}
                    onClick={() => handleSeleccionar(i)}
                    className="w-[200px] h-[200px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[300px] xl:h-[200px] rounded-xl shadow-md flex flex-col items-center justify-between text-xl font-bold transition-transform hover:scale-105 bg-white border-2 border-gray-200 p-4 hover:border-[#0D4763] active:border-[#0D4763] focus:outline-none focus:ring-2 focus:ring-[#0D4763] focus:ring-opacity-50 cursor-pointer"
                  >
                    <div className="flex-2 flex items-center justify-center w-full">
                      <img
                        src={imagenes[i]}
                        alt={titulos[i]}
                        className="h-30 w-30 object-contain"
                      />
                    </div>
                    <span className="text-base font-semibold text-[#0D4763] mt-2">
                      {titulos[i]}
                    </span>
                  </button>
                  
                  {isXs && seleccionado === i && (
                    <div className="w-full flex justify-center mt-4">
                      <div className="w-[90vw] max-w-[90vw] rounded-xl overflow-hidden aspect-[16/9] shadow-xl">
                        {imgLoading && (
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[16/9] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0D4763]"></div>
                          </div>
                        )}
                        <img 
                          src={getImagenDesplegable(i)}
                          alt={titulos[i]}
                          className={`w-full h-full object-cover ${imgLoading ? 'hidden' : 'block'}`}
                          onLoad={() => setImgLoading(false)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Versión para pantallas medianas (2 filas de 2 columnas) */}
            {isSmOrMd && (
              <div className="w-full">
                {/* Fila 1: Productos 0 y 1 */}
                <div className="w-full grid grid-cols-2 gap-6 justify-items-center m-auto mb-6">
                  {[0, 1].map((i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                      <button
                        ref={el => btnRefs.current[i] = el}
                        onClick={() => handleSeleccionar(i)}
                        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[200px] rounded-xl shadow-md flex flex-col items-center justify-between text-xl font-bold transition-transform hover:scale-105 bg-white border-2 border-gray-200 p-4 hover:border-[#0D4763] active:border-[#0D4763] focus:outline-none focus:ring-2 focus:ring-[#0D4763] focus:ring-opacity-50 cursor-pointer"
                      >
                        <div className="flex-2 flex items-center justify-center w-full">
                          <img
                            src={imagenes[i]}
                            alt={titulos[i]}
                            className="h-30 w-30 object-contain"
                          />
                        </div>
                        <span className="text-base font-semibold text-[#0D4763] mt-2">
                          {titulos[i]}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* Desplegable para Fila 1 */}
                {(seleccionado === 0 || seleccionado === 1) && (
                  <div className="w-full flex justify-center mb-10">
                    <div className="w-[90vw] max-w-[90vw] rounded-xl overflow-hidden aspect-[16/9] shadow-xl">
                      {imgLoading && (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[16/9] flex items-center justify-center">
                          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0D4763]"></div>
                        </div>
                      )}
                      <img 
                        src={getImagenDesplegable(seleccionado)}
                        alt={titulos[seleccionado]}
                        className={`w-full h-full object-cover ${imgLoading ? 'hidden' : 'block'}`}
                        onLoad={() => setImgLoading(false)}
                      />
                    </div>
                  </div>
                )}

                {/* Fila 2: Productos 2 y 3 */}
                <div className="w-full grid grid-cols-2 gap-6 justify-items-center m-auto">
                  {[2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                      <button
                        ref={el => btnRefs.current[i] = el}
                        onClick={() => handleSeleccionar(i)}
                        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[200px] rounded-xl shadow-md flex flex-col items-center justify-between text-xl font-bold transition-transform hover:scale-105 bg-white border-2 border-gray-200 p-4 hover:border-[#0D4763] active:border-[#0D4763] focus:outline-none focus:ring-2 focus:ring-[#0D4763] focus:ring-opacity-50 cursor-pointer"
                      >
                        <div className="flex-2 flex items-center justify-center w-full">
                          <img
                            src={imagenes[i]}
                            alt={titulos[i]}
                            className="h-30 w-30 object-contain"
                          />
                        </div>
                        <span className="text-base font-semibold text-[#0D4763] mt-2">
                          {titulos[i]}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* Desplegable para Fila 2 */}
                {(seleccionado === 2 || seleccionado === 3) && (
                  <div className="w-full flex justify-center mt-6">
                    <div className="w-[90vw] max-w-[90vw] rounded-xl overflow-hidden aspect-[16/9] shadow-xl">
                      {imgLoading && (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[16/9] flex items-center justify-center">
                          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0D4763]"></div>
                        </div>
                      )}
                      <img 
                        src={getImagenDesplegable(seleccionado)}
                        alt={titulos[seleccionado]}
                        className={`w-full h-full object-cover ${imgLoading ? 'hidden' : 'block'}`}
                        onLoad={() => setImgLoading(false)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Para pantallas grandes */}
            {isLgOrXl && seleccionado !== null && (
              <div className="w-full flex justify-center mt-6">
                <div className="w-[70vw] max-w-[70vw] rounded-xl overflow-hidden aspect-[16/9] shadow-xl">
                  {imgLoading && (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[16/9] flex items-center justify-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0D4763]"></div>
                    </div>
                  )}
                  <img 
                    src={getImagenDesplegable(seleccionado)}
                    alt={titulos[seleccionado]}
                    className={`w-full h-full object-cover ${imgLoading ? 'hidden' : 'block'}`}
                    onLoad={() => setImgLoading(false)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="w-full max-w-[80vw] mx-auto aspect-[16/9] relative border-2 border-gray-200 rounded-lg overflow-hidden">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0D4763] mb-2"></div>
                  <span className="text-[#0D4763] font-bold">Cargando video...</span>
                </div>
              </div>
            )}
            <iframe
              style={{ width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/Mhj15W23IjA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              onLoad={() => setVideoLoaded(true)}
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}