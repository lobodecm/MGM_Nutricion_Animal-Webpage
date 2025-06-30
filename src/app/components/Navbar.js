'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Limpieza por si el componente se desmonta con el menú abierto
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Inicio', img: '/images/home.png' },
    { href: '/noticias', label: 'Noticias', img: '/images/noticias.png' },
    { href: '/quienessomos', label: 'Quiénes Somos', img: '/images/quienessomos.png' },
    { href: '/contacto', label: 'Contacto', img: '/images/contacto.png' },
    { href: '/usuario', label: 'Usuario', img: '/images/usuario.png' },
  ];

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 bg-[#F4F6F8] text-black px-6 py-4 shadow-md">
      <div className="max-w-15xl mx-auto flex justify-between items-center w-full px-4 py-2">
        {/* Imagen (Logotipo o ícono) */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-15 transition-transform transform hover:scale-110 lg:h-20 cursor-pointer"
        />

        {/* whatsapp para pantallas pequeñas */}
        <div className="flex items-center lg:hidden">
          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/+524493981492" // Reemplaza por tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="block mr-8 transition-transform transform hover:scale-110 lg:h-20 cursor-pointer"
          >
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="h-12 w-12 rounded-full"
            />
          </a>
          {/* Botón hamburguesa */}
          <button
            className="block text-black focus:outline-none transition-transform transform hover:scale-110 lg:h-20 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>


        {/* Menú en pantallas grandes (computadora y tablet) */}
        <ul className={`lg:flex ${isMenuOpen ? 'hidden block' : 'hidden'} space-x-3`}>
          {navItems.map(({ href, label, img }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`group border-b-2 border-blue-400 w-[150px] h-[60px] rounded-[12px] flex items-center justify-center transition-all text-base
                  ${pathname === href
                    ? 'text-blue-400 bg-blue-50 transition-transform transform hover:scale-110 cursor-pointer'
                    : 'text-black bg-white hover:bg-blue-50 hover:text-blue-400 hover:border-blue-400 transition-transform transform hover:scale-110 cursor-pointer'}
                `}
                style={{ position: 'relative' }}
              >
                <div
                  className={`
                    flex flex-col items-center justify-center w-full h-full relative
                    ${(pathname === href) ? '' : 'group-hover:justify-center'}
                  `}
                >
                  <img
                    src={img}
                    alt={label}
                    className={`w-8 h-8 mb-1 transition-all duration-300 ${pathname === href ? 'spin-twice' : ''}`}
                  />
                  <span
                    className="text-sm w-full transition-all duration-300 text-center"
                    style={{ minHeight: '1.5rem' }}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú lateral para dispositivos móviles */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
        {/* Menú lateral 4/6 con color #F4F6F8 */}
        <div className="relative w-4/6 h-full bg-[#F4F6F8] grid grid-rows-[auto_1fr_auto]">
          {/* Botón de cerrar */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute -right-5 top-1/2 text-white text-3xl z-10 bg-[#FF0000] rounded-full px-3 py-1 shadow cursor-pointer"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
          {/* Logo centrado arriba */}
          <div className="flex justify-center items-center pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 row-start-1">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>
          {/* Lista de navegación centrada y expandible */}
          <div className="flex flex-col items-center justify-center h-full pt-2 gap-4 sm:gap-6 md:gap-8 row-start-2">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-3 text-lg w-[80%] text-center transition-colors bg-[#0D4763] hover:bg-[#0D4763] hover:text-blue-400 hover:border-blue-400 transition-transform transform hover:scale-110 cursor-pointer rounded-2xl
                  ${pathname === href
                    ? 'text-blue-400 text-xl font-bold'
                    : 'text-white hover:text-blue-400 hover:border-blue-400'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        {/* Fondo negro opaco 2/6 al lado derecho */}
        <div
          className="w-2/6 h-full bg-black/25 backdrop-blur-sm"
        ></div>
      </div>
    </nav>
  );
}
