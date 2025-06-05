This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# mgm_webpage

## Descripción

Este proyecto es una aplicación web desarrollada con Next.js y React en el frontend, y Node.js con Express para el backend.  
Incluye funcionalidades como un sistema CRUD para gestionar datos, un carrusel de imágenes interactivo, un sistema de login seguro y diferentes apartados interactivos que mejoran la experiencia del usuario.  

El objetivo es construir una plataforma moderna, escalable y funcional que permita manejar información de nutrición animal de forma eficiente.

---

## Tecnologías usadas

- **Frontend:** Next.js, React, Tailwind CSS (o el CSS que prefieras)  
- **Backend:** Node.js, Express  
- **Base de datos:** MongoDB con Mongoose o SQL Server  
- **Autenticación:** JWT para sesiones seguras  
- **API REST:** Para comunicación entre frontend y backend  
- Librerías adicionales: Axios, React Hook Form, etc.

---

## Características

- CRUD completo para gestionar registros de nutrición animal u otros datos necesarios  
- Carrusel de imágenes responsive y optimizado para mostrar productos o información relevante  
- Login y registro con validación y seguridad  
- Apartados interactivos para mejorar la experiencia de usuario  
- Rutas protegidas para usuarios autenticados  
- API REST robusta y escalable

---

## Instalación

### Requisitos previos

- **Node.js:**  
  Descarga e instala Node.js desde [https://nodejs.org/](https://nodejs.org/). Se recomienda la versión LTS (actualmente v16 o superior).

- **Base de datos:**  
  - Para MongoDB:  
    - Instala MongoDB Community Edition siguiendo la guía oficial: [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)  
    - O usa MongoDB Atlas para una base de datos en la nube: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)  

- **Git:**  
  - Descarga e instala Git desde [https://git-scm.com/downloads](https://git-scm.com/downloads)  
  - Verifica la instalación con:

    ```bash
    git --version
    ```

---

### Clonar el repositorio

```bash
git clone https://github.com/lobodecm/mgm_webpage.git
cd mgm_webpage

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
