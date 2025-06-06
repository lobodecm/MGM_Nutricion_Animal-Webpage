import Image from "next/image";

export default function Noticias() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p className="text-2xl font-bold">
          Noticias
        </p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Aquí encontrarás las últimas noticias y actualizaciones.
          </li>
          <li className="tracking-[-.01em]">
            Mantente informado sobre los eventos más recientes.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          © 2023 Tu Sitio Web. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}