import { useEffect } from "react";
import { Navbar } from "../components/ui/Navbar";

const About = () => {
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
      <div className="relative min-h-screen w-full">
        {/* Imagen de fondo sin capa blanca */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1690272336574-78b0db790a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          {/* Degradado sutil para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>

        <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-16 py-24">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Título */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8DCC8] leading-tight tracking-wide">
                APPTO
                <br />
                PARA TODO PÚBLICO
              </h1>
            </div>

            {/* Columna derecha - Contenido con flechas */}
            <div className="flex gap-6 items-start">
              {/* Flechas decorativas */}
              <div className="flex flex-col gap-2 pt-1 flex-shrink-0">
                <svg
                  className="w-8 h-8 text-[#E8955B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <svg
                  className="w-8 h-8 text-[#E8955B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <svg
                  className="w-8 h-8 text-[#E8955B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <svg
                  className="w-8 h-8 text-[#E8955B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Texto descriptivo */}
              <div className="flex-1">
                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-6 drop-shadow-lg">
                  Todo comenzó cuando una integrante celíaca de nuestro equipo
                  compartió su experiencia diaria: la dificultad de encontrar
                  opciones seguras y confiables para comer fuera de casa.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg">
                  <span className="font-bold">Así nació AppTo:</span> una
                  plataforma donde no solo los celíacos, sino también
                  diabéticos, veganos, vegetarianos, y quienes siguen dietas
                  kosher o halal pueden encontrar opciones confiables.
                  Garantizamos calidad, seguridad alimentaria y, sobre todo, la
                  tranquilidad de saber que tus alimentos favoritos están
                  preparados pensando en ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Seleccionamos cuidadosamente cada restaurante asociado,
                garantizando ingredientes frescos, preparaciones rigurosas y el
                más alto estándar en cada plato.
              </p>
            </div>

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
                Implementamos protocolos estrictos de manipulación y preparación
                para prevenir la contaminación cruzada, protegiendo tu salud en
                todo momento.
              </p>
            </div>

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
                Creemos que todos merecen acceso a comida deliciosa y segura.
                Construimos puentes entre personas y restaurantes que entienden
                sus necesidades únicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#556030] mb-8">
            A quién servimos
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Conectamos a personas con necesidades dietéticas específicas con
            restaurantes certificados que entienden la importancia de una
            preparación cuidadosa y responsable.
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#556030]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu experiencia?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Descubre restaurantes que comprenden y respetan tus necesidades
            dietéticas
          </p>

          <a
            href="/"
            className="inline-block bg-[#8BA446] hover:bg-[#7a9338] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explorar Restaurantes
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
