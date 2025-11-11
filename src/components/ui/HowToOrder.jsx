export default function HowToOrder() {
  const steps = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Elegí",
      description: "Navegá y seleccioná tus platos favoritos",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Pedí",
      description: "Pagá de forma segura",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: "Disfrutá",
      description: "Entrega rápida a tu puerta",
    },
  ];

  return (
    <section className="bg-[#FCF4E8] pt-3 pb-12 shadow border-t border-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">
            Cómo Funciona
          </h2>
          <p className="text-sm text-neutral-dark">
            Tres simples pasos para obtener tu comida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FAF7F0] border-1 border-[#F0F0B6] rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-8 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                {step.icon}
              </div>
              <h3 className="text-md font-semibold text-primary mb-2 text-center">
                {index + 1}. {step.title}
              </h3>
              <p className="text-sm text-neutral-dark text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
