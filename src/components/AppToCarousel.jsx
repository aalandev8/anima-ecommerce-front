import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slides definidos fuera del componente para no recrearlos en cada render
const slides = [
  {
    title: "Comida Deliciosa Adaptada a Tus Necesidades",
    subtitle:
      "Descubre una experiencia culinaria personalizada con nuestras comidas a domicilio, diseñadas para satisfacer tus necesidades dietéticas específicas y deleitar tu paladar.",
    tags: ["Sin Gluten", "Vegano", "Sin Lactosa"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop",
  },
  {
    title: "Postres Sin Azúcar, Con Todo el Sabor",
    subtitle:
      "Endulza tu vida de forma saludable. Nuestros postres para diabéticos y opciones bajas en azúcar te permiten disfrutar sin preocupaciones.",
    tags: ["Diabéticos", "Bajo en Azúcar", "Delicioso"],
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=600&fit=crop",
  },
  {
    title: "Bowls Veganos Llenos de Vida",
    subtitle:
      "Nutrición completa basada en plantas. Cada bowl está diseñado para ofrecerte energía, sabor y todos los nutrientes que necesitas.",
    tags: ["100% Vegano", "Alto en Proteína", "Orgánico"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop",
  },
  {
    title: "Pizza Sin Gluten, Sin Compromisos",
    subtitle:
      "Para celíacos que no quieren renunciar al sabor. Masa crujiente, ingredientes frescos, cero gluten.",
    tags: ["Celíaco", "Sin TACC", "Certificado"],
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=600&fit=crop",
  },
  {
    title: "Smoothie Bowls Naturales",
    subtitle:
      "Energía pura desde el desayuno. Frutas frescas, superfoods y toppings que se adaptan a tu estilo de vida saludable.",
    tags: ["Sin Lácteos", "Antioxidantes", "Energizante"],
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1200&h=600&fit=crop",
  },
  {
    title: "Proteína para Deportistas",
    subtitle:
      "Comidas balanceadas diseñadas para tu rendimiento. Alto contenido proteico, bajo en grasas, sabor excepcional.",
    tags: ["Alto en Proteína", "Bajo en Grasa", "Fitness", "Halal", "Kosher"],
    image:
      "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=1200&h=600&fit=crop",
  },
];

const AppToCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-90"
              style={{ backgroundImage: `url(${slide.image})`, opacity: 0.85 }}
            />

            {/* Overlay beige translúcido */}
            <div className="absolute inset-0 bg-[rgba(245,235,220,0.45)]"></div>

            {/* Contenido del slide - Alineado con el navbar */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/25 text-gray-900 text-sm font-semibold rounded-full border border-white/40 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-gray-800/90 mb-8 leading-relaxed drop-shadow-sm">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <button className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                    Ordenar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full transition-all group"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full transition-all group"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicadores (puntos) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-gray-800"
                : "w-3 h-3 bg-gray-800/40 hover:bg-gray-800/70"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Logo - SIN círculo verde */}
      <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-30 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-2xl">AppTo</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-6 right-4 sm:right-6 lg:right-8 z-30 hidden md:flex items-center gap-8 text-white font-semibold">
        <a href="#inicio" className="hover:text-green-300 transition-colors">
          Inicio
        </a>
        <a
          href="#restaurantes"
          className="hover:text-green-300 transition-colors"
        >
          Restaurantes
        </a>
        <a href="#opciones" className="hover:text-green-300 transition-colors">
          Opciones Dietéticas
        </a>
        <a href="#nosotros" className="hover:text-green-300 transition-colors">
          Sobre Nosotros
        </a>
      </nav>
    </div>
  );
};

export default AppToCarousel;
