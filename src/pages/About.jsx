{
  /* Hero Section con imagen de fondo */
}
<div className="relative min-h-screen w-full">
  {/* Imagen de fondo sin capa blanca */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://plus.unsplash.com/premium_photo-1701699257611-4704dd053710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
          APPTO PARA
          <br />
          TODO PÚBLICO
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
            Nuestro proyecto nace de una experiencia personal: una integrante
            celíaca de nuestro equipo nos abrió los ojos a los desafíos diarios
            que enfrentan millones de personas. Al buscar conectar la dignidad
            humana con un modelo de negocio inclusivo, nos dimos cuenta de que
            muchas personas encuentran barreras significativas para disfrutar de
            una comida fuera de casa.
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg">
            <span className="font-bold">Así nació AppTo:</span> una plataforma
            donde no solo los celíacos, sino también diabéticos, veganos,
            vegetarianos, y quienes siguen dietas kosher o halal pueden
            encontrar opciones confiables. Garantizamos calidad, seguridad
            alimentaria y, sobre todo, la tranquilidad de saber que tus
            alimentos favoritos están preparados pensando en ti.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>;
