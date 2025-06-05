import Image from "next/image";

export default function contacto() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p className="text-2xl font-bold">
          Contacto
        </p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Puedes contactarnos para más información.
          </li>
          <li className="tracking-[-.01em]">
            Responderemos a tus consultas lo antes posible.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          © 2023 Tu Sitio Web. Todos los derechos reservados.
        </p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende Next.js
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={20}
            height={20}
            className="dark:invert"
          />
        </a>
      </footer>
    </div>
  );
}