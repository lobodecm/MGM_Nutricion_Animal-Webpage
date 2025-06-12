'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Inicio', img: '/images/home.png' },
    { href: '/noticias', label: 'Noticias', img: '/images/noticias.png' },
    { href: '/quienessomos', label: 'Quiénes Somos', img: '/images/quienessomos.png' },
    { href: '/contacto', label: 'Contacto', img: '/images/contacto.png' },
    { href: '/usuario', label: 'Usuario', img: '/images/usuario.png' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F6F8] text-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Imagen (Logotipo o ícono) */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-15"
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
                    ? 'text-blue-400 bg-blue-50 '
                    : 'text-black bg-white hover:bg-blue-50 hover:text-blue-400 hover:border-blue-400'}
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
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-3xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center bg-white h-full pt-10">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${pathname === href
                ? 'underline text-blue-400'
                : 'text-black hover:underline'
              } py-3 text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
