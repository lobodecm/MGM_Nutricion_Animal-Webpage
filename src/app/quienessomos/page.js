'use client';
import { useState, useRef, useEffect } from "react";
import Carrucelquienessomos from "../components/Carrucelquienessomos.js";

export default function QuienesSomos() {
    const [activo, setActivo] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const valoresRef = useRef(null);
    
    const valores = [
        {
            img: "/images/quienessomos/valores/honestidad.png",
            titulo: "HONESTIDAD",
            texto: "Decir la verdad; actuar apegado a la manera propia de sentir y pensar, mostrándose ante los demás y ante uno mismo con honradez y rectitud.",
        },
        {
            img: "/images/quienessomos/valores/integridad.png",
            titulo: "INTEGRIDAD",
            texto: "Conjunto de valores que nos inducen a hacer lo correcto, es decir, a actuar con congruencia y firmeza.",
        },
        {
            img: "/images/quienessomos/valores/lealtad.png",
            titulo: "LEALTAD",
            texto: "Actitud de profundo compromiso que promueve la rendición de cuentas en nuestro quehacer cotidiano.",
        },
        {
            img: "/images/quienessomos/valores/respeto.png",
            titulo: "RESPETO",
            texto: "Entendimiento de las diferencias con un sentimiento de reciprocidad y un apego a las normas que nos rigen.",
        },
        {
            img: "/images/quienessomos/valores/pasion.png",
            titulo: "PASIÓN",
            texto: "Emoción intensa que se traduce en entusiasmo y deseo de hacer las cosas mejor día a día.",
        },
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCircleClick = (index) => {
        if (activo === index) {
            setActivo(null);
        } else {
            setActivo(index);
        }
    };

    return (
        <>
            <h1 className="text-2xl sm:text-3xl lg:mt-40 font-bold tracking-tight text-center mt-32 text-[#0D4763]">
                QUIENES SOMOS
            </h1>
            <Carrucelquienessomos />
            <div className="flex flex-col gap-10 w-full items-center font-[family-name:var(--font-geist-sans)] pb-20">
                {/* 1. Grid: Sección azul fuerte, mismo ancho que el carrusel */}
                <section className="w-full max-w-[90vw] mx-auto mt-8 mb-4 rounded-2xl bg-[#0D4763] text-white flex flex-col min-h-[200px] shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-bold p-8 text-center w-full">
                        POLÍTICA DE CALIDAD
                    </h1>
                    <p className="text-lg md:text-xl text-justify px-4 pb-8 w-full">
                        En MGM nos comprometemos a cubrir las necesidades de nuestros clientes a través de productos y servicios con altos estándares de calidad, reconociendo que el cumplimiento y la superación de sus expectativas constituyen una responsabilidad de todos los colaboradores de la empresa. Para lo anterior, establecemos los siguientes principios:
                    </p>
                </section>

                {/* 2. Grid: 4 secciones responsivas */}
                <section className="w-full max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Sección 1 */}
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300">
                        <img src="/images/quienessomos/politica/Compromiso.png" alt="Compromiso" className="w-15 h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#0D4763]">Compromiso con la Excelencia</h3>
                        <p className="text-black text-center">Implementar y mejorar continuamente el Sistema de Calidad para obtener productos y servicios de excelencia.</p>
                    </div>
                    {/* Sección 2 */}
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300">
                        <img src="/images/quienessomos/politica/Enfoque.png" alt="Alimento Terminado" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#0D4763]">Enfoque en el Cliente</h3>
                        <p className="text-black text-center">Mantener comunicación transparente con los clientes, medir su nivel de satisfacción y establecer relaciones de beneficio mutuo, que aseguren competitividad y rentabilidad al negocio.</p>
                    </div>
                    {/* Sección 3 */}
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300">
                        <img src="/images/quienessomos/politica/Cultura.png" alt="Laboratorio" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#0D4763]">Cultura y Sostenibilidad</h3>
                        <p className="text-black text-center">Promover una cultura organizacional que priorice los valores, la integración, la calidad de vida y la seguridad de nuestros colaboradores, así como el equilibrio y sustentabilidad de nuestro entorno.</p>
                    </div>
                    {/* Sección 4 */}
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300">
                        <img src="/images/quienessomos/politica/Politica.png" alt="Purecan" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#0D4763]">Aplicación de la Política</h3>
                        <p className="text-black text-center">Revisar, difundir y garantizar la aplicación de esta Política de Calidad en toda la organización.</p>
                    </div>
                </section>

                {/* 3. Grid: Misión y Visión */}
                <section className="w-full max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300 p-8">
                        <h3 className="text-2xl font-bold text-[#0D4763] mb-4">Misión</h3>
                        <p className="text-black text-center">
                            Contribuimos a alimentar saludablemente a México para mejorar su calidad de vida.
                        </p>
                    </div>
                    <div className="bg-[#F4F6F8] rounded-2xl flex flex-col items-center p-6 shadow-xl border border-[#e0e7ef] hover:shadow-2xl transition-shadow duration-300 p-8">
                        <h3 className="text-2xl font-bold text-[#0D4763] mb-4">Visión</h3>
                        <p className="text-black text-center">
                            Ser una empresa líder, con sólida presencia en el sector agropecuario, reconocida por la calidad, innovación y diversificación de sus productos y servicios, comprometida con el desarrollo de su capital humano y con el cuidado del medio ambiente, en beneficio de la sociedad.
                        </p>
                    </div>
                </section>

                {/* 4. Grid: Título grande */}
                <section className="w-full max-w-[90vw] mx-auto mt-8 mb-4 rounded-2xl bg-[#0D4763] text-white flex items-center justify-center min-h-[200px] shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold p-8 text-center w-full">
                        NUESTROS VALORES
                    </h3>
                </section>

                {/* 5. Grid: 5 valores circulares con animaciones */}
                <section className="w-full max-w-[90vw] mx-auto" ref={valoresRef}>
                    {/* Versión para pantallas grandes (lg y superiores) */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="grid grid-cols-5 gap-8 w-full">
                            {valores.map((valor, i) => (
                                <div 
                                    key={i} 
                                    className="flex flex-col items-center justify-center"
                                    onMouseEnter={() => setActivo(i)}
                                    onMouseLeave={() => setActivo(null)}
                                >
                                    <div 
                                        className={`relative w-48 h-48 rounded-full overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 ${
                                            activo === i ? 'rotate-y-180' : ''
                                        }`}
                                        onClick={() => handleCircleClick(i)}
                                    >
                                        {/* Frente del círculo - Imagen */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 ${
                                            activo === i ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                            <img 
                                                src={valor.img} 
                                                alt={valor.titulo} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        
                                        {/* Parte trasera del círculo - Texto */}
                                        <div className={`absolute inset-0 bg-[#0D4763] rounded-full flex flex-col items-center justify-center p-4 text-center transition-opacity duration-500 ${
                                            activo === i ? 'opacity-100 rotate-y-180' : 'opacity-0'
                                        }`}>
                                            <h3 className="text-xl font-bold text-white mb-2">{valor.titulo}</h3>
                                            <p className="text-white text-xs text-center">{valor.texto}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Versión para pantallas móviles y tablets */}
                    <div className="lg:hidden">
                        <div className="space-y-8 max-w-md mx-auto">
                            {valores.map((valor, i) => (
                                <div 
                                    key={i} 
                                    className={`relative h-32 transition-all duration-500 ${
                                        activo === i ? 'pl-32' : ''
                                    }`}
                                >
                                    {/* Círculo que se desplaza */}
                                    <div 
                                        className={`absolute top-0 w-32 h-32 rounded-full overflow-hidden shadow-lg z-10 cursor-pointer transition-all duration-500 ${
                                            activo === i ? '-left-5' : 'left-1/2 transform -translate-x-1/2'
                                        }`}
                                        onClick={() => handleCircleClick(i)}
                                    >
                                        <img 
                                            src={valor.img} 
                                            alt={valor.titulo} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Contenedor de información que se despliega */}
                                    <div 
                                        className={`absolute top-0 left-5 w-full h-32 bg-[#0D4763] rounded-r-3xl shadow-lg transition-all duration-500 ${
                                            activo === i ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        style={{
                                            clipPath: activo === i 
                                                ? 'inset(0 0 0 32px)' 
                                                : 'inset(0 100% 0 32px)'
                                        }}
                                    >
                                        <div className="absolute inset-0 pl-32 pr-4 flex flex-col justify-center">
                                            <h3 className="text-xl font-bold text-white">{valor.titulo}</h3>
                                            <p className="text-white text-sm mt-1">{valor.texto}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes rotate {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(180deg); }
                }
                
                .rotate-y-180 {
                    animation: rotate 0.7s forwards;
                }
                
                /* Animación para móviles */
                @keyframes slideIn {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                
                @keyframes expand {
                    from { clip-path: inset(0 100% 0 32px); }
                    to { clip-path: inset(0 0 0 32px); }
                }
            `}</style>
        </>
    );
}