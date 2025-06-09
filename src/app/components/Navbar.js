'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/quienessomos', label: 'Quiénes Somos' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/usuario', label: 'Usuario' },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MGM Web</div>
        <ul className="flex space-x-8"> {/* Usé space-x-8 para separar los items */}
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? 'underline text-blue-400' // Si la ruta es activa
                    : 'text-white hover:underline'
                } transition-all text-lg`} // Añadí text-lg para aumentar el tamaño
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

