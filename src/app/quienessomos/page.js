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
            <div className="flex flex-col gap-10 w-full items-center font-[family-name:var(--font-geist-sans)]">
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
                        Nuestros Valores
                    </h3>
                </section>

                {/* 5. Grid: 5 valores circulares con imagen y texto oculto */}
                <section className="w-full max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
                    {/* Valor 1 */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="group w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] bg-blue-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105 relative"
                            tabIndex={0}
                        >
                            <img
                                src="/images/quienessomos/valores/honestidad.png"
                                alt="Honestidad"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-90 rounded-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-20">
                                <h2 className="text-white text-lg font-bold mb-2">HONESTIDAD</h2>
                                <span className="text-white text-center px-4">Decir la verdad; actuar apegado a la manera propia de sentir y pensar, mostrándose ante los demás y ante uno mismo con honradez y rectitud.</span>
                            </div>
                        </div>
                    </div>
                    {/* Valor 2 */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="group w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] bg-blue-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105 relative"
                            tabIndex={0}
                        >
                            <img
                                src="/images/quienessomos/valores/integridad.png"
                                alt="Integridad"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-90 rounded-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-20">
                                <h2 className="text-white text-lg font-bold mb-2">INTEGRIDAD</h2>
                                <span className="text-white text-center px-4">conjunto de valores que nos inducen a hacer lo correcto, es decir, a actuar con congruencia y firmeza.</span>
                            </div>
                        </div>
                    </div>
                    {/* Valor 3 */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="group w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] bg-blue-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105 relative"
                            tabIndex={0}
                        >
                            <img
                                src="/images/quienessomos/valores/lealtad.png"
                                alt="Lealtad"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-90 rounded-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-20">
                                <h2 className="text-white text-lg font-bold mb-2">LEALTAD</h2>
                                <span className="text-white text-center px-4">Actitud de profundo compromiso que promueve la rendición de cuentas en nuestro quehacer cotidiano.</span>
                            </div>
                        </div>
                    </div>
                    {/* Valor 4 */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="group w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] bg-blue-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105 relative"
                            tabIndex={0}
                        >
                            <img
                                src="/images/quienessomos/valores/respeto.png"
                                alt="Respeto"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-90 rounded-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-20">
                                <h2 className="text-white text-lg font-bold mb-2">RESPETO</h2>
                                <span className="text-white text-center px-4">Entendimiento de las diferencias con un sentimiento de reciprocidad y un apego a las normas que nos rigen.</span>
                            </div>
                        </div>
                    </div>
                    {/* Valor 5 */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="group w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] bg-blue-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105 relative"
                            tabIndex={0}
                        >
                            <img
                                src="/images/quienessomos/valores/Pasion.png"
                                alt="Pasión"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-90 rounded-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-20">
                                <h2 className="text-white text-lg font-bold mb-2">PASIÓN</h2>
                                <span className="text-white text-center px-4">Emoción intensa que se traduce en entusiasmo y deseo de hacer las cosas mejor día a día.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-[32px] row-start-2 items-center w-full bg-black px-4 sm:px-8 lg:px-16 xl:px-32">
                    {/* Aquí puedes agregar más contenido específico de "Quienes Somos" */}
                </main>
            </div>
        </>
    );
}