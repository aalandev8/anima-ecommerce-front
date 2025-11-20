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

      <div className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1690272336574-78b0db790a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>

        <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-16 py-24">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8DCC8] leading-tight tracking-wide">
                APPTO
                <br />
                PARA TODO PÚBLICO
              </h1>
            </div>

            <div className="flex-1 bg-amber-900/20 rounded-xl p-10">
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-6 drop-shadow-lg">
                Todo comenzó cuando una integrante de nuestro equipo compartió
                su experiencia como persona celíaca: la dificultad de encontrar
                opciones seguras y confiables para comer fuera de casa.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg">
                <span className="font-bold">Así nació AppTo:</span> una
                plataforma donde no solo los celíacos, sino también diabéticos,
                veganos, vegetarianos y quienes siguen dietas kosher o halal
                pueden encontrar opciones confiables. Garantizamos calidad,
                seguridad alimentaria y, sobre todo, la tranquilidad de saber
                que tus alimentos favoritos están preparados pensando en ti.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#273109] mb-16">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#6B7B3C] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-2xl font-bold text-[#6B7B3C] mb-4">
                Calidad
              </h3>
              <p className="text-gray-600">
                Seleccionamos cuidadosamente cada restaurante asociado,
                garantizando ingredientes frescos, preparaciones rigurosas y el
                más alto estándar en cada plato.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#003858] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-2xl font-bold text-[#003858] mb-4">
                Seguridad
              </h3>
              <p className="text-gray-600">
                Implementamos protocolos estrictos de manipulación y preparación
                para prevenir la contaminación cruzada, protegiendo tu salud en
                todo momento.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#470101] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-2xl font-bold text-[#470101] mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FCF4E8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#6B7B3C] mb-8">
            A quién servimos
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Conectamos a personas con necesidades dietéticas específicas con
            restaurantes certificados que entienden la importancia de una
            preparación cuidadosa y responsable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Vegano",
              "Vegetariano",
              "Sin Gluten",
              "Diabético",
              "Kosher",
              "Halal",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#30361b] text-white rounded-lg p-6 text-center font-semibold shadow-md hover:shadow-lg hover:bg-[#5a6632] transition-all"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#6B7B3C]">
        
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
            className="inline-block bg-[#FCF4E8] hover:bg-[#e8dcc7] text-[#6B7B3C] font-bold py-3 px-6 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explorar Restaurantes
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
