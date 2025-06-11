'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Para manejar la apertura y cierre del menú en móvil

  const navItems = [
    { href: '/', label: 'Inicio', img: '/images/home.png' },
    { href: '/noticias', label: 'Noticias', img: '/images/noticias.png' },
    { href: '/quienessomos', label: 'Quiénes Somos', img: '/images/quienessomos.png' },
    { href: '/contacto', label: 'Contacto', img: '/images/contacto.png' },
    { href: '/usuario', label: 'Usuario', img: '/images/usuario.png' },
  ];

  return (
    <nav className="bg-[#F4F6F8] text-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Imagen (Logotipo o ícono) */}
        <img
          src="/images/logo.png" // Reemplaza con el path de tu imagen
          alt="Logo"
          className="h-15" // Ajusta el tamaño de la imagen según sea necesario
        />

        {/* Menú Hamburguesa para pantallas pequeñas */}
        <button
          className="lg:hidden block text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú en pantallas grandes (computadora y tablet) */}
        <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-3`}>
          {navItems.map(({ href, label, img }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`group border-b-2 border-blue-400 w-[150px] h-[60px] rounded-[12px] flex items-center justify-center transition-all text-base
                    ${pathname === href
                    ? 'text-blue-400 bg-blue-50'
                    : 'text-black bg-white hover:bg-blue-50 hover:text-blue-400 hover:border-blue-400'}
                `}
                style={{ position: 'relative' }}
              >
              <div className={`
                flex flex-col items-center justify-center w-full h-full relative
                ${(pathname === href) ? '' : 'group-hover:justify-center'}
              `}>
              <img
                src={img}
                alt={label}
                className={`
                  w-8 h-8 transition-opacity mb-1
                  ${(pathname === href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}
              />
              <span
                className={`
                text-sm w-full transition-all duration-300 text-center
                ${(pathname === href) ? 'mt-1' : ''}
                ${(pathname === href) ? '' : 'group-hover:mt-1'}
                `}
                style={{ minHeight: '1.5rem' }}
              >
              {label}
            </span>
          </div>
        </Link>
      </li>))}
    </ul>
 </div>

      {/* Menú lateral para dispositivos móviles */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-3xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center bg-white h-full pt-10">
          {navItems.map(({ href, label, img }) => (
            <Link
              key={href}
              href={href}
              className={`${pathname === href
                ? 'underline text-blue-400'
                : 'text-black hover:underline'
                } py-3 text-lg`}
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic en el enlace
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
