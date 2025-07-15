'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contacto() {
  // Estados para manejar el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Función para manejar el scroll a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Validación y manejo del formulario con Formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      categoria: '',
      razon: '',
      telefono: '',
      cv: null
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Nombre completo es requerido'),
      email: Yup.string().email('Correo inválido').required('Correo es requerido'),
      categoria: Yup.string().required('Debes seleccionar una categoría'),
      razon: Yup.string().required('Por favor cuéntanos tu razón'),
      telefono: Yup.string().matches(/^[0-9]+$/, 'Número inválido'),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Aquí iría la lógica para enviar a la base de datos
        // y enviar el correo electrónico
        
        // Simulamos un envío exitoso después de 1.5 segundos
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Envío exitoso
        setSubmitStatus('success');
        
        // Aquí iría el código real para enviar el correo
        console.log('Datos del formulario:', values);
        console.log('Plantilla de correo generada');
        
        // Resetear formulario después de éxito
        formik.resetForm();
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-2 sm:py-2 md:py-8 xl:py-8 lg:py-8 w-full">
      {/* Grid 1: Bienvenida y botones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">
        <div className="text-center md:text-left bg-[#0D4763] text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold">
            Bienvenido a MGM Nutrición Animal
          </h1>
          <p className="mt-1 text-lg">
            Tu socio confiable en nutrición animal de calidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
          <button 
            onClick={() => scrollToSection('redes-sociales')}
            className="text-[#0D4763] bg-[#F4F6F8] py-2 px-1 md:px-4 rounded-xl text-xs md:text-base ft-bold transition duration-300 hover:bg-[#0D4763] hover:text-white hover:scale-105 cursor-pointer border-b-2 border-[#0D4763]"
          >
            COMO ENCONTRARNOS?
          </button>
          <button 
            onClick={() => scrollToSection('trabaja-con-nosotros')}
            className="text-[#0D4763] bg-[#F4F6F8] py-2 px-1 md:px-4 rounded-xl text-xs md:text-base transition duration-300 hover:bg-[#0D4763] hover:text-white hover:scale-105 cursor-pointer border-b-2 border-[#0D4763]"
          >
            TRABAJA CON NOSOTROS
          </button>
          <button 
            onClick={() => scrollToSection('opiniones')}
            className="text-[#0D4763] bg-[#F4F6F8] py-2 px-1 md:px-4 rounded-xl text-xs md:text-base transition duration-300 hover:bg-[#0D4763] hover:text-white hover:scale-105 cursor-pointer border-b-2 border-[#0D4763]"
          >
            ENVIANOS TUS OPINIONES
          </button>
        </div>
      </div>

      {/* Grid 2: Presencia */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0D4763]">
          CON PRESENCIA EN:
        </h2>
        
        <div className="w-full max-w-4xl mx-auto aspect-[2.35/1] rounded-xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.7382024757796!2d-102.15633210195409!3d21.839152278176726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429f47c7e82d96b%3A0x7241525b367f3de1!2sMGM%20NUTRICION%20ANIMAL%20SA%20DE%20CV!5e0!3m2!1ses!2smx!4v1752523016391!5m2!1ses!2smx" 
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <p id="redes-sociales" className="text-lg md:text-xl text-black text-center mt-10 max-w-3xl mx-auto">
          Si te interesa distribuir calidad para la nutrición animal, ponte en contacto con nosotros y crezcamos juntos.
        </p>
      </div>

      {/* Grid 3: Redes sociales */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E4E5E] mb-4 md:mb-0">
            COMO ENCONTRARNOS:
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
            {[
              { name: 'Facebook', url: 'https://facebook.com', color: 'bg-blue-500' },
              { name: 'Instagram', url: 'https://instagram.com', color: 'bg-pink-500' },
              { name: 'LinkedIn', url: 'https://linkedin.com', color: 'bg-blue-700' },
              { name: 'WhatsApp', url: 'https://wa.me/numero', color: 'bg-green-500' },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} rounded-full w-16 h-16 flex items-center justify-center text-white hover:opacity-90 transition duration-300 mx-auto`}
              >
                <span className="sr-only">{social.name}</span>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Grid 4: Ubicación */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="w-full aspect-[2.35/1] rounded-xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.7382024757796!2d-102.15633210195409!3d21.839152278176726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429f47c7e82d96b%3A0x7241525b367f3de1!2sMGM%20NUTRICION%20ANIMAL%20SA%20DE%20CV!5e0!3m2!1ses!2smx!4v1752523016391!5m2!1ses!2smx" 
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="text-center mt-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            MGM NUTRICIÓN ANIMAL
          </h3>
          <p className="text-lg md:text-xl mb-2">
            Teléfonos: (449)9711914 -- (449)9743973
          </p>
          <p id="trabaja-con-nosotros" className="text-md md:text-lg">
            Dirección: Carretera a San Luis Potosi KM 14.5 Colonia El Retoño C.P. 20337
          </p>
        </div>
      </div>

      {/* Grid 5: Trabaja con nosotros */}
      <div className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          TRABAJA CON NOSOTROS
        </h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-7/12 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">
              ¿Te gustaría unirte a nuestro equipo en MGM Nutrición Animal?
            </h3>
            <p className="mb-4">
              En MGM Nutrición Animal, estamos en búsqueda activa de <strong className="text-[#0D4763]">profesionales apasionados y talentosos</strong> que deseen contribuir a nuestra misión de ofrecer productos de nutrición animal de la más alta calidad. Valoramos a individuos con una <strong className="text-[#0D4763]">visión innovadora</strong>, que demuestren <strong className="text-[#0D4763]">disponibilidad</strong> para el aprendizaje continuo y un firme <strong className="text-[#0D4763]">deseo de desarrollo profesional</strong> en un entorno colaborativo y dinámico.
            </p>
            <p>
              Si buscas una <strong className="text-[#0D4763]">oportunidad para crecer</strong> y aplicar tus habilidades en una empresa líder en el sector, te invitamos cordialmente a <strong className="text-[#0D4763]">presentar tu currículum vitae (CV)</strong>. Nuestro equipo de selección revisará detalladamente cada perfil para identificar aquellos que mejor se alineen con nuestros valores y objetivos. Nos comprometemos a ponernos en contacto contigo en caso de que tu experiencia y aspiraciones profesionales coincidan con nuestras vacantes actuales o futuras.
            </p>
          </div>

          <div className="md:w-5/12 flex justify-center">
            <div className="animate-pulse hover:animate-spin transition duration-1000 rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full flex items-center justify-center">
                <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid 6: Opiniones */}
      <div id="opiniones" className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          CUENTANOS TU OPINION
        </h2>
        
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div>
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2 font-medium">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                {...formik.getFieldProps('nombre')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.nombre && formik.errors.nombre && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.nombre}</div>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="categoria" className="block mb-2 font-medium">
                ¿Qué categoría se adecúa más a tu situación?
              </label>
              <select
                id="categoria"
                name="categoria"
                {...formik.getFieldProps('categoria')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona una opción</option>
                <option value="Situacion con algun producto">Situación con algún producto</option>
                <option value="Cotizacion de producto">Cotización de producto</option>
                <option value="Solicitud de empleo">Solicitud de empleo</option>
                <option value="Sugerencias sobre el servicio">Sugerencias sobre el servicio</option>
              </select>
              {formik.touched.categoria && formik.errors.categoria && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.categoria}</div>
              )}
            </div>
          </div>
          
          {/* Columna derecha */}
          <div>
            <div className="mb-4">
              <label htmlFor="razon" className="block mb-2 font-medium">
                Cuéntanos la razón
              </label>
              <textarea
                id="razon"
                name="razon"
                rows="4"
                {...formik.getFieldProps('razon')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {formik.touched.razon && formik.errors.razon && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.razon}</div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="telefono" className="block mb-2 font-medium">
                  Número de teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  {...formik.getFieldProps('telefono')}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.telefono && formik.errors.telefono && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.telefono}</div>
                )}
              </div>
              
              <div>
                <label className="block mb-2 font-medium">
                  CV (PDF o Word)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => {
                      formik.setFieldValue('cv', event.currentTarget.files[0]);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="px-4 py-2 bg-gray-100 border rounded-lg text-center cursor-pointer hover:bg-gray-200 transition duration-300">
                    <span>Subir archivo</span>
                  </div>
                </div>
                {formik.values.cv && (
                  <div className="text-sm mt-2">
                    Archivo seleccionado: {formik.values.cv.name}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Botón de envío */}
          <div className="md:col-span-2 flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg text-white font-medium transition duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </div>
              ) : 'Enviar'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                Error al enviar el mensaje. Por favor intenta nuevamente.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}