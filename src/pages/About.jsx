import { Navbar } from "@/components/ui/Navbar";
import { useEffect } from "react";

const About = () => {
  // Cargar la fuente Questrial
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Questrial&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FCF4E8]"
      style={{ fontFamily: "'Questrial', sans-serif" }}
    >
      <Navbar />

      {/* Hero Section con imagen de fondo */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1690272335531-65699dc9ce67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          {/* Overlay con color hueso semi-transparente */}
          <div className="absolute inset-0 bg-[#FCF4E8]/75"></div>
        </div>

        {/* Contenido */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full text-center">
            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#556030] mb-8 leading-tight">
              AppTo para todo público
            </h1>

            {/* Texto descriptivo */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Este comercio nace desde una integrante celíaca de nuestro equipo.
              Al tener que relacionar la vida digna con un comercio que pueda
              poner en alto este concepto, pensamos en todas las complicaciones
              que tienen las personas que por diversas razones, se les dificulta
              el acceso a la alimentación fuera de casa. De ahí nace AppTo,
              donde priorizamos las necesidades no solo de los celíacos, sino
              también de otros sectores dietéticos como diabéticos, veganos,
              vegetarianos, y pertenecientes a la comunidad kosher y halal,
              asegurándoles calidad, seguridad y confianza en la preparación de
              sus alimentos favoritos.
            </p>

            {/* Decoración - Flechas hacia abajo */}
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col gap-2">
                <svg
                  className="w-8 h-8 text-[#E8955B] animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Valores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#556030] mb-16">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#8BA446] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#556030] mb-4">
                Calidad
              </h3>
              <p className="text-gray-600">
                Nos comprometemos con la excelencia en cada plato, garantizando
                ingredientes frescos y preparaciones cuidadosas.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#E8955B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#556030] mb-4">
                Seguridad
              </h3>
              <p className="text-gray-600">
                Protocolo estricto de manipulación y preparación para evitar
                contaminación cruzada y garantizar tu bienestar.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F4B324] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#556030] mb-4">
                Inclusión
              </h3>
              <p className="text-gray-600">
                Conectamos a todos sin importar sus necesidades dietéticas,
                creando un espacio donde todos pueden disfrutar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Categorías que servimos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#556030] mb-8">
            A quién servimos
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Nos especializamos en conectar personas con necesidades dietéticas
            específicas con restaurantes certificados y de confianza.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Vegano", color: "bg-green-100 text-green-700" },
              { name: "Vegetariano", color: "bg-lime-100 text-lime-700" },
              { name: "Sin Gluten", color: "bg-amber-100 text-amber-700" },
              { name: "Diabético", color: "bg-purple-100 text-purple-700" },
              { name: "Kosher", color: "bg-indigo-100 text-indigo-700" },
              { name: "Halal", color: "bg-rose-100 text-rose-700" },
            ].map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg p-6 text-center font-semibold shadow-md hover:shadow-lg transition-shadow`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#556030]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Descubre restaurantes que se adaptan a tus necesidades dietéticas
          </p>
          <a
            href="/"
            className="inline-block bg-[#8BA446] hover:bg-[#7a9338] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            Explorar Tiendas
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
